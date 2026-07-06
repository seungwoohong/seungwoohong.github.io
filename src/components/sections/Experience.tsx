import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { emphasize } from "@/lib/emphasize";
import { experiences, projects } from "@/data/portfolio";

const projectTitleById = new Map(projects.map((p) => [p.id, p.title]));

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-muted">
        어디서 · 무슨 역할로 · 무엇을 이끌었는지의 흐름입니다. 프로젝트별 구체적인
        성과는 <span className="text-foreground">Projects</span> 섹션에서 이어집니다.
      </p>
      <Reveal className="space-y-4">
        {experiences.map((exp) => {
          const related = (exp.related ?? [])
            .map((id) => ({ id, title: projectTitleById.get(id) }))
            .filter((r): r is { id: string; title: string } => Boolean(r.title));
          return (
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
                  {exp.focus.map((a, i) => (
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

                {related.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                      관련 프로젝트
                    </span>
                    {related.map((r) => (
                      <a
                        key={r.id}
                        href={`#project-${r.id}`}
                        className="group/rel inline-flex items-center gap-1 rounded-full border border-[var(--accent)]/30 bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-[var(--accent)]/60"
                      >
                        {r.title}
                        <span className="text-subtle transition-transform group-hover/rel:translate-x-0.5">
                          ↓
                        </span>
                      </a>
                    ))}
                  </div>
                )}

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
          );
        })}
      </Reveal>
    </Section>
  );
}
