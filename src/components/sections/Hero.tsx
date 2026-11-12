"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { profile, socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden py-24"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-md"
        >
          {profile.available && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
          )}
          {profile.available
            ? "협업 제안 받는 중"
            : `${profile.yearsOfExperience}년차 Software Engineer · Frontend · ${profile.location}`}
        </motion.div>

        <RevealText
          as="h1"
          lines={[profile.name]}
          delay={0.15}
          className="text-[clamp(2.6rem,8vw,5rem)] font-bold leading-[1] tracking-tight text-foreground"
        />
        <RevealText
          as="div"
          lines={[profile.role]}
          delay={0.3}
          className="mt-3 text-[clamp(1.4rem,3.6vw,2.4rem)] font-semibold leading-[1.15] tracking-tight"
          lineClassName="text-gradient"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.58 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            as="a"
            href="#projects"
            className="glow-accent rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition-[background,box-shadow] hover:bg-[var(--accent-strong)]"
          >
            프로젝트 보기 →
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            strength={0.3}
            className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            연락하기
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-subtle"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
