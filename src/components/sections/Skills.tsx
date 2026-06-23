import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { skills, marqueeSkills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <Reveal className="isolate grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {skills.map((group) => (
          <RevealItem key={group.category} className="bg-card p-6 sm:p-7">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-subtle">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </Reveal>

      <div className="marquee-paused relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 [--marquee-duration:32s]">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
