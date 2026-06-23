import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { emphasize } from "@/lib/emphasize";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <Reveal className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.title}>
            <TiltCard className="group h-full" max={4}>
              <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 group-hover:border-[var(--accent)]/60 sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {p.featured && (
                      <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent-contrast)]">
                        FEATURED
                      </span>
                    )}
                    <span className="font-mono text-xs text-subtle">{p.role}</span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-subtle">
                    {p.year}
                  </span>
                </div>

                <div className="relative space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {p.summary}
                  </p>
                </div>

                <ul className="relative flex-1 space-y-2">
                  {p.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[15px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      <span>{emphasize(h)}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.links && p.links.length > 0 && (
                  <div className="relative flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-[var(--accent)]"
                      >
                        {l.label}
                        <span className="transition-transform group-hover/link:translate-x-0.5">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
