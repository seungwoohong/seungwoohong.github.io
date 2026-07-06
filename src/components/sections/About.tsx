import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { emphasize } from "@/lib/emphasize";
import { about } from "@/data/portfolio";

function renderLead(text: string) {
  return text.split(/(\{[^}]+\})/).map((part, i) =>
    part.startsWith("{") && part.endsWith("}") ? (
      <span key={i} className="text-gradient">
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="max-w-3xl border-l-2 border-[var(--accent)] pl-6">
        <RevealItem
          as="p"
          className="text-pretty text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl"
        >
          {renderLead(about.lead)}
        </RevealItem>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <RevealItem
              key={i}
              as="p"
              className="text-base leading-relaxed text-muted sm:text-[17px]"
            >
              {emphasize(p)}
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="isolate grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-border bg-border">
          {about.highlights.map((h) => (
            <RevealItem
              key={h.label}
              className="flex flex-col gap-1.5 bg-card p-5 transition-colors hover:bg-[color-mix(in_srgb,var(--accent)_5%,var(--card))]"
            >
              <span className="text-gradient text-[1.7rem] font-semibold leading-none tracking-tight">
                {h.value}
              </span>
              <span className="text-[13px] leading-snug text-muted">{h.label}</span>
            </RevealItem>
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-16 border-t border-border pt-10">
        <RevealItem className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          Core Competencies
        </RevealItem>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {about.competencies.map((c, i) => (
            <RevealItem
              key={i}
              as="li"
              className="flex gap-3 text-[15px] leading-relaxed text-muted"
            >
              <span
                aria-hidden
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
              />
              {c}
            </RevealItem>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
