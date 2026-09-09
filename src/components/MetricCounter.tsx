"use client";

import { useEffect, useRef, useState } from "react";

export function MetricCounter({ value, label, compact = false }: { value: string; label: string; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.45 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`metric-item ${visible ? "metric-visible" : ""} ${compact ? "metric-compact" : ""}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
