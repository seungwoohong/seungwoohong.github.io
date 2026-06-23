import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { education, certifications } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" index="06" title="Education & Certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <RevealItem className="mb-5 font-mono text-xs uppercase tracking-wider text-subtle">
            Education
          </RevealItem>
          <ul className="space-y-4">
            {education.map((e) => (
              <RevealItem key={e.school}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {e.school}
                    </h3>
                    <span className="font-mono text-xs text-subtle">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.degree}</p>
                </div>
              </RevealItem>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <RevealItem className="mb-5 font-mono text-xs uppercase tracking-wider text-subtle">
            Certifications
          </RevealItem>
          <ul className="isolate divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {certifications.map((c) => (
              <RevealItem key={c.name}>
                <div className="flex items-center justify-between gap-3 bg-card px-6 py-4">
                  <span className="text-sm font-medium text-foreground">
                    {c.name}
                  </span>
                  <span className="font-mono text-xs text-subtle">{c.date}</span>
                </div>
              </RevealItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
