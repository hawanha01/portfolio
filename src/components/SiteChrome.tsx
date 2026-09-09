"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"]
] as const;

export function SiteChrome() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#about");
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

    const sectionRatios = new Map<string, number>();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestId = "";
        let bestRatio = 0;
        sectionRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActiveHash(`#${bestId}`);
      },
      { threshold: [0, 0.18, 0.35, 0.55, 0.75, 1], rootMargin: "-18% 0px -55% 0px" }
    );
    navItems.forEach(([, hash]) => {
      const section = document.querySelector(hash);
      if (section) sectionObserver.observe(section);
    });

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;

    const renderCursor = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(renderCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        if (inside) {
          const x = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
          const y = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
          hero.style.setProperty("--pointer-x", `${x * 12}px`);
          hero.style.setProperty("--pointer-y", `${y * 8}px`);
        } else {
          hero.style.setProperty("--pointer-x", "0px");
          hero.style.setProperty("--pointer-y", "0px");
        }
      }
    };

    if (finePointer && !reduceMotion) {
      frame = window.requestAnimationFrame(renderCursor);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [pathname]);

  return (
    <>
      {pathname === "/" ? (
        <nav className="floating-nav" aria-label="Primary navigation">
          {navItems.map(([label, hash]) => (
            <a className={activeHash === hash ? "is-active" : ""} href={hash} key={hash}>{label}</a>
          ))}
          <a className="nav-resume-mobile" href="/Muhammad-Hamza-Resume.pdf" download>Resume ↓</a>
          <a className="nav-cta" href="mailto:dev.hamza.010@gmail.com">Get in touch ↗</a>
        </nav>
      ) : (
        <nav className="floating-nav floating-nav-case" aria-label="Project navigation">
          <a href="/#work">Work</a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
          <a className="nav-cta" href="/Muhammad-Hamza-Resume.pdf" download>Resume ↓</a>
        </nav>
      )}

      <div className="cursor-dot" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
