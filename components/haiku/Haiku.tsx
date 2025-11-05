"use client";

import React from "react";

const LINES = [
  "Quiet screens, clear minds",
  "Focus distilled to essentials",
  "One tap, one intent",
  "Whitespace breathes between thoughts",
  "Motion bows to meaning"
];

export default function Haiku() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIdx((v) => (v + 1) % LINES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ display: "inline-block", transition: "opacity .5s ease" }}>
      {LINES[idx]}
    </span>
  );
}
