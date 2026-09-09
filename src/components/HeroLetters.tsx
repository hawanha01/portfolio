export function HeroLetters({ text, startIndex = 0 }: { text: string; startIndex?: number }) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span key={index} className="hero-letter" style={{ "--i": startIndex + index } as React.CSSProperties}>
          {char === " " ? " " : char}
        </span>
      ))}
    </>
  );
}
