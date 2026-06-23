import { Section } from "@/components/Section";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { profile, socials } from "@/data/portfolio";

export function Contact() {
  const contactRows = [
    {
      label: "Phone",
      href: `tel:${profile.phone.replace(/-/g, "")}`,
      handle: profile.phone,
      external: false,
    },
    ...socials.map((s) => ({
      label: s.label,
      href: s.href,
      handle: s.handle,
      external: s.href.startsWith("http"),
    })),
  ];

  return (
    <Section id="contact" index="07" title="Contact">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-6">
          <RevealItem as="p" className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            함께 좋은 제품을 만들 동료와 기회를 찾고 있습니다.
          </RevealItem>
          <RevealItem as="p" className="text-sm leading-relaxed text-muted">
            새로운 도전, 협업, 또는 가벼운 커피챗 모두 환영합니다. 가장 빠른 연락은
            이메일이에요.
          </RevealItem>
          <RevealItem>
            <MagneticButton
              as="a"
              href={`mailto:${profile.email}`}
              className="glow-accent inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              이메일 보내기 →
            </MagneticButton>
          </RevealItem>
        </Reveal>

        <Reveal
          fade
          className="divide-y divide-border overflow-hidden rounded-2xl border border-border"
        >
          {contactRows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target={row.external ? "_blank" : undefined}
              rel={row.external ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 bg-card px-5 py-4 transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
            >
              <span className="text-sm font-medium">{row.label}</span>
              <span className="font-mono text-xs text-muted transition-colors group-hover:text-[var(--accent-contrast)]/70">
                {row.handle}
                {row.external && (
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                )}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
