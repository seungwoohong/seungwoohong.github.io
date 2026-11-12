"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { navItems, profile } from "@/data/portfolio";

export function Header() {
  const ids = navItems.map((n) => n.id);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.nameEn.split(" ")[0]}
          <span className="text-subtle">.</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/70 px-2 py-1 backdrop-blur-md md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-[var(--accent-contrast)]"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton
            as="a"
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            strength={0.25}
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-block"
          >
            Resume ↓
          </MagneticButton>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
