import {
  Body,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Eyebrow,
  Heading,
  Hero,
  IconCircle,
  Input,
  Label,
  Link,
  LoadingIndicator,
  Logo,
  Prose,
  RoundedImage,
  Separator,
  Title,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@code-for-canada/ui";
import { ArrowRight, Code, Heart, Users, MessageCircle, Search } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <div className="relative">

      {/* Hero */}
      <Hero
        color="blue"
        title="The Code for Canada Design System"
        summary="Shared primitives for every C4C application — typography, color, forms, buttons, and brand elements in one package."
        cta={{ label: "View on GitHub", href: "https://github.com/code-for-canada/ui" }}
      />

      {/* Logo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Brand</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Logo</Heading>
          <div className="space-y-8">
            <div className="space-y-3">
              <Body size="sm" className="text-muted-foreground">Full logo</Body>
              <div className="flex flex-wrap items-center gap-8">
                <Logo size="sm" />
                <Logo size="default" />
                <Logo size="lg" />
              </div>
            </div>
            <div className="space-y-3">
              <Body size="sm" className="text-muted-foreground">Mark only</Body>
              <div className="flex flex-wrap items-center gap-8">
                <Logo variant="mark" size="sm" />
                <Logo variant="mark" size="default" />
                <Logo variant="mark" size="lg" />
              </div>
            </div>
            <div className="space-y-3">
              <Body size="sm" className="text-muted-foreground">Inverted (dark backgrounds)</Body>
              <div className="flex flex-wrap items-center gap-8 rounded-2xl bg-c4c-neutral-900 p-8">
                <Logo inverted />
                <Logo variant="mark" inverted />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Typography */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Primitives</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Typography</Heading>
          <div className="bg-white rounded-3xl p-8 space-y-8">
            <div className="space-y-2">
              <Body size="xs" className="text-muted-foreground font-mono">Eyebrow</Body>
              <div className="flex flex-wrap gap-6 items-center">
                <Eyebrow>Default</Eyebrow>
                <Eyebrow color="purple">Purple</Eyebrow>
                <Eyebrow color="blue">Blue</Eyebrow>
                <Eyebrow icon={<MessageCircle size={16} />}>With icon</Eyebrow>
              </div>
            </div>
            <div className="space-y-2">
              <Body size="xs" className="text-muted-foreground font-mono">Title</Body>
              <Title as="p">Title <strong>with emphasis.</strong></Title>
            </div>
            <div className="space-y-2">
              <Body size="xs" className="text-muted-foreground font-mono">Subtitle</Body>
              <Body size="lead">Secondary information. <strong>Emphasized content.</strong></Body>
            </div>
            <div className="space-y-3">
              <Body size="xs" className="text-muted-foreground font-mono">Heading (sizes)</Body>
              <Heading as="h3" size="xl">Heading xl</Heading>
              <Heading as="h3" size="lg">Heading lg</Heading>
              <Heading as="h3" size="md">Heading md</Heading>
              <Heading as="h3" size="sm">Heading sm</Heading>
            </div>
            <div className="space-y-3">
              <Body size="xs" className="text-muted-foreground font-mono">Heading (colors)</Body>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <Heading as="p" size="md">Default</Heading>
                <Heading as="p" size="md" color="purple">Purple</Heading>
                <Heading as="p" size="md" color="blue">Blue</Heading>
                <div className="rounded-xl bg-c4c-neutral-800 px-4 py-2"><Heading as="p" size="md" color="invert">Invert</Heading></div>
              </div>
            </div>
            <div className="space-y-3">
              <Body size="xs" className="text-muted-foreground font-mono">Body</Body>
              <Body size="lead">Lead body text. <strong>Important emphasis.</strong></Body>
              <Body>Regular body text used for paragraphs and general content.</Body>
              <Body size="sm">Small body text for captions and supporting content.</Body>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Tokens</Eyebrow>
          <Heading as="h2" size="xl" className="mb-2">Colors</Heading>
          <Prose className="mb-8">
            <p className="lead">Use level 600+ for text and interactive elements, and below 600 for backgrounds. Alternatively, for the inverted theme use 200 or lighter for text and 700 or darker for background. WCAG 2.2 compliant when used as documented.</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: "Red", shades: [
                { n: "100", bg: "bg-c4c-red-100", text: "text-c4c-red-900", hex: "#FFF6F5" },
                { n: "200", bg: "bg-c4c-red-200", text: "text-c4c-red-900", hex: "#FBE9EE" },
                { n: "600", bg: "bg-c4c-red-600", text: "text-white", hex: "#DE242B" },
                { n: "800", bg: "bg-c4c-red-800", text: "text-white", hex: "#900958" },
                { n: "900", bg: "bg-c4c-red-900", text: "text-white", hex: "#69124C" },
              ]},
              { name: "Purple", shades: [
                { n: "100", bg: "bg-c4c-purple-100", text: "text-c4c-purple-900", hex: "#FAF8FE" },
                { n: "200", bg: "bg-c4c-purple-200", text: "text-c4c-purple-900", hex: "#D6CAEA" },
                { n: "700", bg: "bg-c4c-purple-700", text: "text-white", hex: "#6B3FB0" },
                { n: "800", bg: "bg-c4c-purple-800", text: "text-white", hex: "#4B2683" },
                { n: "900", bg: "bg-c4c-purple-900", text: "text-white", hex: "#39165B" },
              ]},
              { name: "Blue", shades: [
                { n: "100", bg: "bg-c4c-blue-100", text: "text-c4c-blue-900", hex: "#F5F7FF" },
                { n: "200", bg: "bg-c4c-blue-200", text: "text-c4c-blue-900", hex: "#D6DEFF" },
                { n: "600", bg: "bg-c4c-blue-600", text: "text-white", hex: "#5A55EC" },
                { n: "800", bg: "bg-c4c-blue-800", text: "text-white", hex: "#2B3482" },
                { n: "900", bg: "bg-c4c-blue-900", text: "text-white", hex: "#121C4E" },
              ]},
              { name: "Neutral", shades: [
                { n: "100", bg: "bg-c4c-neutral-100", text: "text-c4c-neutral-900", hex: "#F4F4F6" },
                { n: "200", bg: "bg-c4c-neutral-200", text: "text-c4c-neutral-900", hex: "#DDDDE6" },
                { n: "600", bg: "bg-c4c-neutral-600", text: "text-white", hex: "#494865" },
                { n: "800", bg: "bg-c4c-neutral-800", text: "text-white", hex: "#2B2A41" },
                { n: "900", bg: "bg-c4c-neutral-900", text: "text-white", hex: "#1B1A28" },
              ]},
            ].map(({ name, shades }) => (
              <div key={name}>
                <Body className="mb-2 font-semibold">{name}</Body>
                <div className="overflow-hidden rounded-2xl">
                  {shades.map(({ n, bg, text, hex }) => (
                    <div key={n} className={`flex h-10 items-center justify-between px-3 ${bg}`}>
                      <Body size="sm" className={text}>{n}</Body>
                      <Body size="xs" className={`font-mono ${text}`}>{hex}</Body>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheme containers */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Tokens</Eyebrow>
          <Heading as="h2" size="xl" className="mb-2">Color Schemes</Heading>
          <Prose className="mb-8">
            <p className="lead">Add <code>scheme-blue</code>, <code>scheme-purple</code>, <code>scheme-red</code>, or their <code>-inverted</code> variants to any container. Inner prose and components inherit the palette automatically.</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="scheme-blue rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Blue</h3>
                <p>Steady, practical, <strong>service-oriented content.</strong></p>
                <p><a href="#">A link in scheme context</a></p>
              </Prose>
            </div>
            <div className="scheme-purple rounded-3xl p-8">
              <Eyebrow color="purple" icon={<Search size={16} />}>Research</Eyebrow>
              <Prose size="lg" className="mt-4 max-w-none">
                <h3>Purple</h3>
                <p>Reflective, strategic, or <strong>insight-driven content.</strong></p>
              </Prose>
            </div>
            <div className="scheme-red rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Red</h3>
                <p>Strong brand presence or <strong>editorial highlights.</strong></p>
              </Prose>
            </div>
            <div className="scheme-blue-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Blue Inverted</h3>
                <p>Dark mode for <strong>blue theme content.</strong></p>
                <p><a href="#">Link on dark blue</a></p>
              </Prose>
            </div>
            <div className="scheme-purple-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Purple Inverted</h3>
                <p>Dark mode for <strong>purple theme content.</strong></p>
              </Prose>
            </div>
            <div className="scheme-red-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Red Inverted</h3>
                <p>Dark mode for <strong>red theme content.</strong></p>
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Buttons</Heading>
          <div className="space-y-6">
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">Default</Body>
              <div className="space-x-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button><Heart className="size-4" /> With Icon</Button>
              </div>
            </div>
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">Outline</Body>
              <div className="space-x-3">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline">Default</Button>
                <Button variant="outline" size="lg">Large</Button>
                <Button variant="outline" disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">Ghost</Body>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="sm">Small</Button>
                <Button variant="ghost">Default</Button>
                <Button variant="ghost" size="lg">Large</Button>
              </div>
            </div>
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">White (for dark backgrounds)</Body>
              <div className="flex flex-wrap gap-3 rounded-2xl bg-secondary p-6">
                <Button variant="white">White Solid</Button>
                <Button variant="white-outline">White Outline</Button>
              </div>
            </div>
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">Link</Body>
              <div className="flex flex-wrap items-center gap-8">
                <Link href="#">Default Link</Link>
                <Link href="#" variant="plain">Plain Link</Link>
                <div className="rounded-lg bg-secondary px-6 py-3">
                  <div className="flex items-center gap-8">
                    <Link href="#" color="inverse">Inverse Link</Link>
                    <Link href="#" variant="plain" color="inverse">Plain Inverse</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Circle */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Icon Circle</Heading>
          <div className="flex flex-wrap gap-6 items-center">
            <IconCircle><Code className="size-5" /></IconCircle>
            <IconCircle color="purple"><Users className="size-5" /></IconCircle>
            <IconCircle color="blue"><Heart className="size-5" /></IconCircle>
            <IconCircle size="sm"><Code className="size-4" /></IconCircle>
            <IconCircle size="lg"><Code className="size-6" /></IconCircle>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Cards</Heading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <Code className="size-6" />, title: "Collaborative Development", body: "Work with your existing team to co-develop digital services." },
              { icon: <Users className="size-6" />, title: "Inclusive User Research", body: "Connect with diverse communities across Canada." },
              { icon: <Heart className="size-6" />, title: "Options Analysis", body: "Find the best option for modernizing digital products." },
            ].map(({ icon, title, body }) => (
              <Card key={title}>
                <CardHeader>
                  <IconCircle>{icon}</IconCircle>
                  <Heading as="h3" size="sm">{title}</Heading>
                  <Body className="text-muted-foreground">{body}</Body>
                </CardHeader>
                <CardFooter>
                  <Link href="#" className="inline-flex items-center gap-2">
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Form Fields</Heading>
          <Card className="max-w-md">
            <CardHeader>
              <Heading as="h3" size="sm">Contact Us</Heading>
              <Body className="text-muted-foreground">Get in touch with our team</Body>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                  <Body size="xs" className="text-muted-foreground">We&apos;ll never share your email.</Body>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="How can we help?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Accordion</Heading>
          <Accordion type="single" collapsible className="max-w-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Code for Canada?</AccordionTrigger>
              <AccordionContent>
                Code for Canada is a national nonprofit that connects technologists with government to build better public services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use this design system?</AccordionTrigger>
              <AccordionContent>
                Install <code>@code-for-canada/ui</code>, import the styles, and import components from the package.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What tech stack is required?</AccordionTrigger>
              <AccordionContent>
                Next.js (v14+) and Tailwind CSS v4. Components are shipped as source and transpiled by your Next.js app.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Prose */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-8">Prose</Heading>
          <Prose className="bg-white rounded-3xl p-8">
            <h2>Rich Text Content</h2>
            <p className="lead">The Prose component wraps CMS-driven rich text with brand-consistent typography styling.</p>
            <p>Wrap any rich text content — from a CMS, markdown, or otherwise — in <code>{'<Prose>'}</code> to get consistent heading hierarchy, link styles, lists, and blockquotes.</p>
            <ul>
              <li>Supports <code>size</code> prop: <code>sm</code>, <code>default</code>, <code>lg</code>, <code>xl</code></li>
              <li>Supports <code>invert</code> prop for dark backgrounds</li>
              <li>Inherits scheme colors automatically when inside a <code>.scheme-*</code> container</li>
            </ul>
            <blockquote>
              <p>One wrapper, consistent brand voice across all rich text throughout the app.</p>
            </blockquote>
          </Prose>
        </div>
      </section>

      {/* Loading Indicator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Eyebrow className="mb-4">Components</Eyebrow>
          <Heading as="h2" size="xl" className="mb-2">Loading Indicator</Heading>
          <Prose className="mb-8">
            <p className="lead">The animated brand mark for loading states. The gif and reduced-motion fallback are bundled with the package — no assets to copy. Honours <code>prefers-reduced-motion</code> by swapping to a static logo.</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-muted">
              <LoadingIndicator />
            </div>
            <div className="rounded-3xl bg-muted">
              <LoadingIndicator label="Loading projects…" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-c4c-neutral-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Logo variant="mark" inverted size="lg" className="mx-auto mb-6" />
          <Heading as="h2" size="lg" className="text-white mb-4">
            @code-for-canada/ui
          </Heading>
          <Body className="text-white/60">
            See the README for install instructions, Poppins setup, and multi-repo development.
          </Body>
        </div>
      </section>

    </div>
  );
}
