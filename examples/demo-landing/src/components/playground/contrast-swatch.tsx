"use client";

import { useEffect, useRef, useState } from "react";

function luminance(rgb: number[]) {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function parse(color: string) {
  return (color.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
}

/** A surface/foreground pair with its contrast, read from the rendered colours. */
export function ContrastSwatch({ name, surface, text }: { name: string; surface: string; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const style = getComputedStyle(ref.current);
    const l1 = luminance(parse(style.backgroundColor));
    const l2 = luminance(parse(style.color));
    const value = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    setRatio(value.toFixed(1));
  }, []);

  const pass = ratio !== null && Number(ratio) >= 4.5;

  return (
    <div ref={ref} className={`flex h-28 flex-col justify-between rounded-xl border p-4 ${surface} ${text}`}>
      <span className="text-sm font-medium">{name}</span>
      <span className="font-mono text-xs tabular-nums">
        {ratio === null ? " " : `${ratio}:1 ${pass ? "AA" : "below AA"}`}
      </span>
    </div>
  );
}
