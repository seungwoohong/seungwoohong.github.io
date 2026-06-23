import type { ReactNode } from "react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export function Section({
  id,
  index,
  title,
  children,
  className,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:py-28 ${className ?? ""}`}
    >
      <Reveal className="mb-12 flex items-end justify-between gap-4 border-b border-border pb-5">
        <RevealItem>
          <a href={`#${id}`} className="group flex items-baseline gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">
              {index}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
              <span
                aria-hidden
                className="ml-2 font-normal text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                #
              </span>
            </h2>
          </a>
        </RevealItem>
      </Reveal>
      {children}
    </section>
  );
}
