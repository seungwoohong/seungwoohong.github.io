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
                <span>{c}</span>
              </RevealItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
