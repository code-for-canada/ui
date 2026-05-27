"use client"

import * as React from "react"
import { Mic } from "lucide-react"

import { cn } from "../utils"

/** Multiline text input. Mirrors {@link Input}'s styling; styles `aria-invalid`. `withDictation` adds a Web Speech mic button (no-op on unsupported browsers). */
function Textarea({
  className,
  withDictation,
  ref: externalRef,
  ...props
}: React.ComponentProps<"textarea"> & {
  /** Show a microphone button that appends recognized speech. Hidden on browsers without the Web Speech API. */
  withDictation?: boolean
}) {
  const internalRef = React.useRef<HTMLTextAreaElement | null>(null)
  const { supported, listening, toggle } = useDictation(internalRef)
  const showMic = !!withDictation && supported

  const setRefs = React.useCallback(
    (node: HTMLTextAreaElement | null) => {
      internalRef.current = node
      if (typeof externalRef === "function") {
        externalRef(node)
      } else if (externalRef && typeof externalRef === "object") {
        ;(externalRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
      }
    },
    [externalRef]
  )

  const textareaEl = (
    <textarea
      data-slot="textarea"
      ref={setRefs}
      className={cn(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input min-h-28 w-full min-w-0 resize-y rounded-md border-2 bg-white px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-ring focus-visible:ring-offset-2",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        showMic && "pr-14",
        className
      )}
      {...props}
    />
  )

  if (!showMic) return textareaEl

  return (
    <div data-slot="textarea-wrapper" className="relative w-full">
      {textareaEl}
      <button
        type="button"
        onClick={toggle}
        disabled={props.disabled}
        aria-pressed={listening}
        aria-label={listening ? "Stop dictating" : "Dictate your answer"}
        className={cn(
          "absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          listening
            ? "border-primary bg-primary text-white animate-pulse motion-reduce:animate-none"
            : "border-input bg-white text-muted-foreground hover:bg-muted"
        )}
      >
        <Mic aria-hidden="true" className="size-5" />
      </button>
    </div>
  )
}

/**
 * Web Speech API wrapper. Detects support on mount (false during SSR), exposes a
 * toggle that streams finalized chunks into the textarea by setting `.value`
 * and dispatching an `input` event — which fires the consumer's `onChange` for
 * both controlled and uncontrolled usage.
 */
function useDictation(ref: React.RefObject<HTMLTextAreaElement | null>) {
  const [supported, setSupported] = React.useState(false)
  const [listening, setListening] = React.useState(false)
  const recognitionRef = React.useRef<SpeechRecognitionLike | null>(null)
  const wantListenRef = React.useRef(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const SR = getSpeechRecognitionCtor()
    if (SR) setSupported(true)
  }, [])

  // Cleanup on unmount: stop any in-flight recognition.
  React.useEffect(() => {
    return () => {
      wantListenRef.current = false
      try {
        recognitionRef.current?.stop()
      } catch {
        /* already stopped */
      }
      recognitionRef.current = null
    }
  }, [])

  const start = React.useCallback(() => {
    const node = ref.current
    if (!node) return
    const SR = getSpeechRecognitionCtor()
    if (!SR) return

    const rec: SpeechRecognitionLike = new SR()
    rec.continuous = true
    rec.interimResults = true
    rec.onresult = (event) => {
      let finalChunk = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) finalChunk += result[0].transcript
      }
      finalChunk = finalChunk.trim()
      if (!finalChunk) return
      const current = node.value
      const next = current
        ? `${current.replace(/\s+$/, "")} ${finalChunk}`
        : finalChunk
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
      )?.set
      setter?.call(node, next)
      node.dispatchEvent(new Event("input", { bubbles: true }))
    }
    rec.onend = () => {
      // Browser ends recognition on silence; restart if the user is still listening.
      if (wantListenRef.current) {
        try {
          rec.start()
        } catch {
          /* already started */
        }
      } else {
        setListening(false)
      }
    }
    rec.onerror = (event) => {
      if (event.error === "no-speech" || event.error === "aborted") return
      wantListenRef.current = false
      setListening(false)
    }

    try {
      rec.start()
      recognitionRef.current = rec
      wantListenRef.current = true
      setListening(true)
    } catch {
      /* start() can throw if already started; safe to ignore */
    }
  }, [ref])

  const stop = React.useCallback(() => {
    wantListenRef.current = false
    try {
      recognitionRef.current?.stop()
    } catch {
      /* already stopped */
    }
    setListening(false)
  }, [])

  const toggle = React.useCallback(() => {
    if (listening) stop()
    else start()
  }, [listening, start, stop])

  return { supported, listening, toggle }
}

// Minimal structural types — Web Speech API isn't in TS lib.dom without webkit prefix.
type SpeechRecognitionResultLike = {
  isFinal: boolean
  0: { transcript: string }
}
type SpeechRecognitionEventLike = {
  resultIndex: number
  results: ArrayLike<SpeechRecognitionResultLike>
}
type SpeechRecognitionLike = {
  continuous: boolean
  interimResults: boolean
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onend: (() => void) | null
  onerror: ((event: { error: string }) => void) | null
  start: () => void
  stop: () => void
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike

function getSpeechRecognitionCtor(): SpeechRecognitionCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor
    webkitSpeechRecognition?: SpeechRecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export { Textarea }
