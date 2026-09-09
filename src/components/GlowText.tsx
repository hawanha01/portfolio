"use client";

import { Fragment, useEffect, useRef } from "react";

export function GlowText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => el.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.4, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className="glow-text">
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="glow-word" style={{ "--w": index } as React.CSSProperties}>
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
