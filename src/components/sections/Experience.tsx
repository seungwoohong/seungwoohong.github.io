import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { emphasize } from "@/lib/emphasize";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <Reveal className="space-y-4">
        {experiences.map((exp) => (
          <RevealItem key={exp.company}>
            <article className="group grid gap-5 rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)]/40 hover:shadow-[0_8px_28px_-20px_color-mix(in_srgb,var(--accent)_22%,transparent)] sm:grid-cols-[180px_1fr] sm:p-8">
              <div className="space-y-1">
                <p className="font-mono text-xs text-subtle">{exp.period}</p>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.company}
                </h3>
                {exp.location && (
                  <p className="text-xs text-muted">{exp.location}</p>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-[15px] font-medium text-foreground">
                  {exp.role}
                </p>
                <p className="text-[15px] leading-relaxed text-muted">
                  {exp.summary}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      <span>{emphasize(a)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
