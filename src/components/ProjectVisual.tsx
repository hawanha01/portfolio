import Image from "next/image";

export function ProjectVisual({
  visual,
  name,
  hero = false,
  screenshot
}: {
  visual: string;
  name: string;
  hero?: boolean;
  screenshot?: string;
}) {
  if (screenshot) {
    return (
      <div className={`project-visual project-visual-${visual} project-visual-shot ${hero ? "project-visual-hero" : ""}`}>
        <Image
          className="project-visual-shot-img"
          src={screenshot}
          alt={`${name} product screenshot`}
          fill
          loading="lazy"
          sizes="(max-width: 900px) 100vw, (max-width: 1400px) 50vw, 640px"
        />
        <div className="project-visual-shot-scrim" />
        <div className="project-visual-glow" />
        <div className="project-visual-word">{name}</div>
      </div>
    );
  }

  return (
    <div className={`project-visual project-visual-${visual} ${hero ? "project-visual-hero" : ""}`} aria-label={`${name} abstract project visual`}>
      <div className="project-visual-grid" />
      <div className="project-visual-glow" />
      <div className="project-visual-word">{name}</div>
      {visual === "fightbook" && (
        <div className="visual-fightbook" aria-hidden="true"><span>FIGHT</span><i /><span>BOOK</span><b>26K+</b></div>
      )}
      {visual === "takafo" && (
        <div className="visual-flow" aria-hidden="true"><i>VIP</i><span /><i>24h</i><span /><i>Recruit</i><span /><i>Partner</i></div>
      )}
      {visual === "justworks" && (
        <div className="visual-speed" aria-hidden="true"><strong>10m</strong><span>→&#xFE0E;</span><strong>sec</strong><small>forecasting</small></div>
      )}
      {visual === "dfe" && (
        <div className="visual-dfe" aria-hidden="true"><i>NPQ</i><span>REST</span><i>ECF</i><small>sync + jobs</small></div>
      )}
      {visual === "spsg" && (
        <div className="visual-migration" aria-hidden="true"><strong>MySQL</strong><span>23K+</span><b>→&#xFE0E;</b><strong>Postgres</strong></div>
      )}
    </div>
  );
}
