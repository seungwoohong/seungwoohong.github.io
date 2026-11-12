import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { writing, community } from "@/data/portfolio";

export function BeyondCode() {
  return (
    <Section id="beyond" index="05" title="Beyond Code">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <RevealItem className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Technical Writing
          </RevealItem>
          <ul className="space-y-3">
            {writing.map((w) => {
              const inner = (
                <>
                  <p className="flex items-center gap-1.5 text-[15px] font-medium text-foreground">
                    {w.title}
                    {w.url && (
                      <span className="text-[var(--accent)] transition-transform group-hover/post:translate-x-0.5">
                        ↗
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {w.note}
                  </p>
                </>
              );
              return (
                <RevealItem key={w.title}>
                  {w.url ? (
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/post block rounded-xl border border-border bg-card p-4 transition-colors hover:border-[var(--accent)]/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="rounded-xl border border-border bg-card p-4">
                      {inner}
                    </div>
                  )}
                </RevealItem>
              );
            })}
          </ul>
        </Reveal>

        <Reveal>
          <RevealItem className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Community & Mentoring
          </RevealItem>
          <ul className="space-y-3">
            {community.map((c, i) => (
              <RevealItem
                key={i}
                as="li"
                className="flex gap-3 text-[15px] leading-relaxed text-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                />
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/act inline-flex items-start gap-1 font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                  >
                    <span>{c.text}</span>
                    <span
                      aria-hidden
                      className="no-underline transition-transform group-hover/act:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                ) : c.links ? (
                  <div className="flex flex-col gap-1.5">
                    <span>{c.text}</span>
                    <span className="flex flex-wrap gap-x-3 gap-y-1">
                      {c.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/act inline-flex items-start gap-0.5 text-sm font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                        >
                          <span>{l.label}</span>
                          <span
                            aria-hidden
                            className="no-underline transition-transform group-hover/act:translate-x-0.5"
                          >
                            ↗
                          </span>
                        </a>
                      ))}
                    </span>
                  </div>
                ) : (
                  <span>{c.text}</span>
                )}
              </RevealItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
