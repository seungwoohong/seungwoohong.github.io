import type { ReactNode } from "react";

export function emphasize(text: string): ReactNode {
  return text.split(/(\{[^}]+\})/).map((part, i) =>
    part.startsWith("{") && part.endsWith("}") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(1, -1)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
