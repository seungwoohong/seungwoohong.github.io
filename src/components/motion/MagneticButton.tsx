"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

const MOTION_TAGS = {
  a: motion.a,
  button: motion.button,
  div: motion.div,
} as const;

type MagneticTag = keyof typeof MOTION_TAGS;

export function MagneticButton({
  children,
  className,
  as = "a",
  strength = 0.35,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: MagneticTag;
  strength?: number;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
