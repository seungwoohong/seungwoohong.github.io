import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row">
        <p className="font-mono text-xs text-subtle">
          © 2026 {profile.nameEn}
        </p>
        <p className="font-mono text-xs text-subtle">
          Built with Next.js · Tailwind · Framer Motion
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-muted transition-colors hover:text-foreground"
        >
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}
