"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const line: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealText({
  lines,
  as: Tag = "h1",
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  return (
    <Tag className={className}>
      <motion.span
        className="block"
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delayChildren: delay }}
      >
        {lines.map((text, i) => (
          <span
            key={i}
            className="block overflow-hidden"
            style={{ paddingBottom: "0.05em" }}
          >
            <motion.span
              variants={line}
              className={`block ${lineClassName ?? ""}`}
            >
              {text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
