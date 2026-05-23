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
  PageContainer,
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
import heroIcon from "@/icon.png";

export default function DesignSystemPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <Hero
        color="purple"
        invert
        title={<>Our Design System</>}
        summary={<>Shared primitives for Code for Canada that help us consistently <strong>communicate who we are across the web.</strong></>}
        cta={
            <Button withLink>
              <a href="https://github.com/code-for-canada/ui">View on GitHub</a>
            </Button>
        }
      />

      {/* Logo */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Logo</Heading>
          <Prose className="mb-8">
            <p className="lead">
              Our logo and wordmark are geometric — node circles connected by clean lines — emphasizing &ldquo;connecting the dots&rdquo; and moving from point A to B. It&rsquo;s the most recognizable expression of the brand, so treat it with care.
            </p>
            <ul>
              <li><strong>Default to the full logo at its normal size.</strong> Reserve the mark (icon only) for exceptions — tight spaces like a compact nav, favicon, or avatar, or where the brand is already established on the page.</li>
              <li><strong>Inverted.</strong> Use the white logo on dark backgrounds, brand-colour fills, or busy photography — never the red logo on a low-contrast surface.</li>
              <li><strong>Don&rsquo;t</strong> recolour, stretch, skew, rotate, or add effects.</li>
            </ul>
          </Prose>
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
        </PageContainer>
      </section>

      <Separator />

      {/* Typography */}
      <section className="py-16 bg-muted">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-4">Typography</Heading>
          <Prose>
            <p className="lead pb-8">
              Combining a clear typography hierarchy with plain language helps us communicate with our brand voice: <strong>approachable, straightforward, and empathetic</strong>.
            </p>
          </Prose>
          <div className="bg-white rounded-3xl p-8 space-y-8">
            <div className="space-y-2">
              <Body className="text-muted-foreground font-mono">Eyebrow</Body>
              <Body className="text-muted-foreground font-mono italic">Use eyebrows sparingly — only alongside longer editorial headlines to improve scanning, not on every section. Limit to 1&ndash;4 words, place above a Heading or Title, optionally with a circle icon.</Body>
              <div className="flex flex-wrap gap-6 items-center">
                <Eyebrow>Default</Eyebrow>
                <Eyebrow icon={<MessageCircle size={18} />}>With icon</Eyebrow>
              </div>
            </div>
            <div className="space-y-2">
              <Body className="text-muted-foreground font-mono">Title</Body>
              <Body className="text-muted-foreground font-mono italic">The single page or hero title — use once per page. Emphasize the key word(s) to trigger the animated brand gradient; its colour follows the surrounding colour scheme.</Body>
              <Title as="p">Title text</Title>
            </div>
            <div className="space-y-2">
              <Body className="text-muted-foreground font-mono">Subtitle</Body>
              <Body className="text-muted-foreground font-mono italic">A supporting line that sits directly under a Title to expand on it in a sentence or two.</Body>
              <Body size="lead">Secondary information. <strong>Emphasized content.</strong></Body>
            </div>
            <div className="space-y-3">
              <Body className="text-muted-foreground font-mono">Heading</Body>
              <Body className="text-muted-foreground font-mono italic">Section and sub-section headings. Choose the heading level for a correct document outline and the size for visual weight — they&rsquo;re independent. The xl size can also headline the top of a page and use bold for emphasis; keep bold sparing so it stays meaningful. Colour follows the surrounding scheme.</Body>
              <Heading as="h3" size="xl">Heading xl</Heading>
              <Heading as="h3" size="lg">Heading lg</Heading>
              <Heading as="h3" size="md">Heading md</Heading>
              <Heading as="h3" size="sm">Heading sm</Heading>
            </div>
            <div className="space-y-3">
              <Body className="text-muted-foreground font-mono">Body</Body>
              <Body className="text-muted-foreground font-mono italic">Paragraph and supporting text. Use lead for an introductory paragraph, default for general content, and sm or xs for captions and fine print.</Body>
              <Body size="lead">Lead body text emphasizes key point of a section <strong>with some emphasis.</strong></Body>
              <Body>Regular body text used for paragraphs and general content.</Body>
              <Body size="sm">Small body text for captions and supporting content.</Body>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Colors */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-2">Colors</Heading>
          <Prose className="mb-8">
            <p className="lead">Use level 600+ for text and interactive elements, and below 600 for backgrounds. Alternatively, for the inverted theme use 200 or lighter for text and 700 or darker for background. WCAG 2.2 compliant when used as documented.</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: "Red", shades: [
                { n: "100", bg: "bg-c4c-red-100", text: "text-c4c-red-900", hex: "#FFF6F5" },
                { n: "200", bg: "bg-c4c-red-200", text: "text-c4c-red-900", hex: "#FBE9EE" },
                { n: "400", bg: "bg-c4c-red-400", text: "text-c4c-red-900", hex: "#FFA2B7" },
                { n: "600", bg: "bg-c4c-red-600", text: "text-white", hex: "#DE242B" },
                { n: "800", bg: "bg-c4c-red-800", text: "text-white", hex: "#900958" },
                { n: "900", bg: "bg-c4c-red-900", text: "text-white", hex: "#69124C" },
              ]},
              { name: "Purple", shades: [
                { n: "100", bg: "bg-c4c-purple-100", text: "text-c4c-purple-900", hex: "#FAF8FE" },
                { n: "200", bg: "bg-c4c-purple-200", text: "text-c4c-purple-900", hex: "#D6CAEA" },
                { n: "400", bg: "bg-c4c-purple-400", text: "text-c4c-purple-900", hex: "#D1B2FF" },
                { n: "700", bg: "bg-c4c-purple-700", text: "text-white", hex: "#6B3FB0" },
                { n: "800", bg: "bg-c4c-purple-800", text: "text-white", hex: "#4B2683" },
                { n: "900", bg: "bg-c4c-purple-900", text: "text-white", hex: "#39165B" },
              ]},
              { name: "Blue", shades: [
                { n: "100", bg: "bg-c4c-blue-100", text: "text-c4c-blue-900", hex: "#F5F7FF" },
                { n: "200", bg: "bg-c4c-blue-200", text: "text-c4c-blue-900", hex: "#D6DEFF" },
                { n: "400", bg: "bg-c4c-blue-400", text: "text-c4c-blue-900", hex: "#95A3F9" },
                { n: "600", bg: "bg-c4c-blue-600", text: "text-white", hex: "#5A55EC" },
                { n: "800", bg: "bg-c4c-blue-800", text: "text-white", hex: "#2B3482" },
                { n: "900", bg: "bg-c4c-blue-900", text: "text-white", hex: "#121C4E" },
              ]},
              { name: "Neutral", shades: [
                { n: "50", bg: "bg-c4c-neutral-50", text: "text-c4c-neutral-900", hex: "#FCFCFD" },
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
                      <Body className={`font-mono ${text}`}>{hex}</Body>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Scheme containers */}
      <section className="py-16 bg-muted">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-2">Color Schemes</Heading>
          <Prose className="mb-8">
            <p className="lead">Each scheme sets a complete colour context — background, text, headings, and links — for everything inside it. Wrap a container in a scheme and its content inherits the palette automatically, so you rarely set colours by hand. Pick the scheme that matches the tone of the content:</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="scheme-blue rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Blue</h3>
                <p>Steady, practical, service-oriented content.</p>
                <p><a href="#">A link in scheme context</a></p>
              </Prose>
            </div>
            <div className="scheme-purple rounded-3xl p-8">
              <Eyebrow color="purple" icon={<Search size={16} />}>Research</Eyebrow>
              <Prose size="lg" className="mt-4 max-w-none">
                <h3>Purple</h3>
                <p>Reflective, strategic, or insight-driven content.</p>
              </Prose>
            </div>
            <div className="scheme-red rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Red</h3>
                <p>Strong brand presence or editorial highlights.</p>
              </Prose>
            </div>
            <div className="scheme-blue-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Blue Inverted</h3>
                <p>Dark mode for blue theme content.</p>
                <p><a href="#">Link on dark blue</a></p>
              </Prose>
            </div>
            <div className="scheme-purple-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Purple Inverted</h3>
                <p>Dark mode for purple theme content.</p>
              </Prose>
            </div>
            <div className="scheme-red-inverted rounded-3xl p-8">
              <Prose size="lg" className="max-w-none">
                <h3>Red Inverted</h3>
                <p>Dark mode for red theme content.</p>
              </Prose>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Buttons */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Buttons</Heading>
          <Prose className="mb-8">
            <p className="lead">Use buttons for actions and links for navigation. Lead with a single primary (default) button per view; use outline for secondary actions and ghost for low-emphasis or repeated ones. On dark or coloured backgrounds, switch to the white and white-outline variants.</p>
          </Prose>
          <div className="space-y-6">
            <div>
              <Body size="sm" className="text-muted-foreground mb-3">Default</Body>
              <div className="space-x-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button><Heart  /> With Icon</Button>
                <Button withLink><a href="#">Button with a Link</a></Button>
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
              <Body className="text-muted-foreground italic mb-3">Use the default animated underline inline in text, plain for a quieter underline, and inverse on dark backgrounds. External links open in a new tab automatically.</Body>
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
        </PageContainer>
      </section>

      {/* Icon Circle */}
      <section className="py-16 bg-muted">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Icon Circle</Heading>
          <Prose className="mb-8">
            <p className="lead">A filled brand-colour circle that holds a single icon. Use it to add a colour accent to card headers, feature lists, or eyebrows — keep to simple line icons and match the colour to the surrounding scheme.</p>
          </Prose>
          <div className="flex flex-wrap gap-6 items-center">
            <IconCircle><Code className="size-5" /></IconCircle>
            <IconCircle color="purple"><Users className="size-5" /></IconCircle>
            <IconCircle color="blue"><Heart className="size-5" /></IconCircle>
            <IconCircle size="sm"><Code className="size-4" /></IconCircle>
            <IconCircle size="lg"><Code className="size-6" /></IconCircle>
          </div>
        </PageContainer>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Cards</Heading>
          <Prose className="mb-8">
            <p className="lead">Cards group a single idea — a service, feature, or link — onto one surface. Compose a header (icon, heading, short description), optional content, and a footer for a single action or link. Use them in evenly sized grids and keep the copy short so they stay scannable.</p>
          </Prose>
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
        </PageContainer>
      </section>

      {/* Forms */}
      <section className="py-16 bg-muted">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Form Fields</Heading>
          <Prose className="mb-8">
            <p className="lead">Pair a Label with an Input and connect them (the label&rsquo;s htmlFor matches the input&rsquo;s id) so the form stays accessible. Keep helper text short and place it directly under the field. For richer forms — descriptions, validation errors, or horizontal layouts — compose the Field primitives.</p>
          </Prose>
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
                  <Body className="text-muted-foreground">We&apos;ll never share your email.</Body>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="How can we help?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </PageContainer>
      </section>

      {/* Accordion */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-3">Accordion</Heading>
          <Prose className="mb-8">
            <p className="lead">Accordions reveal secondary content on demand — ideal for FAQs and dense reference material. Use a single open panel for FAQs, keep each trigger to a short scannable question, and never hide essential information behind one.</p>
          </Prose>
          <Accordion type="single" collapsible className="max-w-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Code for Canada?</AccordionTrigger>
              <AccordionContent>
                Code for Canada is a national nonprofit that connects technologists with government to build better public services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>When should I use an accordion?</AccordionTrigger>
              <AccordionContent>
                For FAQs and secondary details people can scan and open on demand. Keep the essentials visible — don&rsquo;t bury key information inside one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I adapt components to my page?</AccordionTrigger>
              <AccordionContent>
                Yes — components accept a className and offer brand-safe variants, so you can adjust spacing, colour scheme, and emphasis without leaving the system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageContainer>
      </section>

       {/* Loading Indicator */}
      <section className="py-16 bg-white">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-2">Loading Indicator</Heading>
          <Prose className="mb-8">
            <p className="lead">The animated brand mark for blank screens and loading states. Pass a label to say what&rsquo;s loading; it announces politely and falls back to a static logo when reduced motion is preferred.</p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-muted">
              <LoadingIndicator />
            </div>
            <div className="rounded-3xl bg-muted">
              <LoadingIndicator label="Loading projects…" />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Prose */}
      <section className="py-16 bg-muted">
        <PageContainer>
          <Heading as="h2" size="xl" className="mb-8">Prose</Heading>
          <Prose className="bg-white rounded-3xl p-8">
            <h2>Rich Text Content</h2>
            <p className="lead">Wrap rich text — from a CMS, markdown, or an editor — in Prose to give it consistent brand typography: heading hierarchy, links, lists, and blockquotes, all styled to match.</p>
            <ul>
              <li>Use it for CMS or markdown content where you don&rsquo;t control the markup.</li>
              <li>Scale it to the context, and let it inherit the surrounding colour scheme.</li>
              <li>For standalone headings or paragraphs in a layout, use the typography components instead.</li>
            </ul>
            <blockquote>
              <p>One wrapper, consistent brand voice across all rich text throughout the app.</p>
            </blockquote>
          </Prose>
        </PageContainer>
      </section>


      {/* Footer */}
      <section className="bg-c4c-neutral-900 py-16 text-white">
        <PageContainer className="text-center">
          <Logo variant="mark" inverted size="lg" className="mx-auto mb-6" />
          <Heading as="h2" size="lg" className="text-white mb-4">
            @code-for-canada/ui
          </Heading>
          <Body className="text-white/60">
            Made with ❤️ and 🤖.
          </Body>
        </PageContainer>
      </section>

    </div>
  );
}
