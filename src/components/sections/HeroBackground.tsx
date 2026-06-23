"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 25, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 120, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotX} ${spotY}, color-mix(in srgb, var(--accent) 16%, transparent), transparent 55%)`;

  const p1x = useTransform(sx, [0, 1], [34, -34]);
  const p1y = useTransform(sy, [0, 1], [26, -26]);
  const p2x = useTransform(sx, [0, 1], [-44, 44]);
  const p2y = useTransform(sy, [0, 1], [-28, 28]);
  const p3x = useTransform(sx, [0, 1], [22, -22]);
  const p3y = useTransform(sy, [0, 1], [-18, 18]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ x: p1x, y: p1y }}
        className="absolute -left-[10%] top-[8%]"
      >
        <div className="h-[42vh] w-[42vh] animate-blob rounded-full bg-[var(--accent)] opacity-30 blur-[90px]" />
      </motion.div>
      <motion.div
        style={{ x: p2x, y: p2y }}
        className="absolute right-[2%] top-[28%]"
      >
        <div className="h-[38vh] w-[38vh] animate-blob rounded-full bg-[var(--grad-to)] opacity-25 blur-[90px] [animation-delay:-6s]" />
      </motion.div>
      <motion.div
        style={{ x: p3x, y: p3y }}
        className="absolute bottom-[6%] left-[32%]"
      >
        <div className="h-[30vh] w-[30vh] animate-blob rounded-full bg-[var(--grad-via)] opacity-20 blur-[90px] [animation-delay:-12s]" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
    </div>
  );
}
