"use client";

import Image from "next/image";
import { PointerEvent, useRef, useState } from "react";

type Service = { title: string; copy: string; image?: string };

export function ServiceRows({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || !wrapRef.current) return;
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    wrapRef.current.style.setProperty("--service-x", `${x}px`);
    wrapRef.current.style.setProperty("--service-y", `${y}px`);
  };

  return (
    <div className="service-wrap" ref={wrapRef} onPointerMove={move}>
      <div className={`service-preview service-preview-${active + 1}`} aria-hidden="true">
        {services[active].image && (
          <Image
            className="service-preview-img"
            src={services[active].image}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        )}
        <div className="service-preview-scrim" />
        <span>0{active + 1}</span>
        <strong>{services[active].title}</strong>
      </div>
      {services.map((service, index) => (
        <article
          key={service.title}
          className={`service-row ${active === index ? "active" : ""}`}
          onPointerEnter={() => setActive(index)}
          data-reveal
        >
          <span className="service-number">0{index + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.copy}</p>
          <span className="service-arrow">↗&#xFE0E;</span>
        </article>
      ))}
    </div>
  );
}
