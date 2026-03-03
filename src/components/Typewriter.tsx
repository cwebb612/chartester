"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
}

export default function Typewriter({ phrases }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = charIndex + 1;
        setCharIndex(next);
        setDisplayText(currentPhrase.slice(0, next));

        if (next === currentPhrase.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2200);
        }
      } else {
        const next = charIndex - 1;
        setCharIndex(next);
        setDisplayText(currentPhrase.slice(0, next));

        if (next === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-0.5 h-[0.9em] bg-accent ml-0.5 align-text-bottom animate-blink" />
    </span>
  );
}
