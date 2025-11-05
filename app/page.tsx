"use client";

import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Haiku from "@/components/haiku/Haiku";

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  const color = typeof window !== "undefined"
    ? getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()
    : undefined;
  return (
    <div className="swatch">
      <div className="color" style={{ background: `var(${cssVar})` }} />
      <div className="meta"><span>{name}</span><code>{color || cssVar}</code></div>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <header className="container header">
        <div className="brand">
          <div className="logo" aria-hidden />
          <span>Toduu</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="container">
        <section className="hero">
          <h1 className="h1">Digital Haiku</h1>
          <p className="haiku"><Haiku /></p>
          <div className="actions">
            <a href="#design" className="btn btn-primary">Explore Design System</a>
            <a href="#philosophy" className="btn btn-ghost">Read Philosophy</a>
          </div>
        </section>

        <section id="philosophy" className="section">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Philosophy</div>
              <h2 className="h2">Zen-like simplicity, quality, and focus</h2>
              <p className="lead">Toduu reduces friction to reveal intention. Every element earns its place: quiet color, generous whitespace, and legible type. Inter for clarity; Lora for soul.</p>
              <ul>
                <li>Clarity over ornament</li>
                <li>Calm defaults, delightful moments</li>
                <li>Accessible contrast and motion</li>
                <li>Consistency from tokens to components</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Principles</div>
              <h2 className="h2">Digital Haiku</h2>
              <p className="lead">Short lines. Deep meaning. Interfaces that breathe and get out of your way.</p>
              <div className="badge" style={{ marginTop: 16 }}>
                <span className="dot" /> Minimal Motion
              </div>
              <div className="badge" style={{ marginTop: 12 }}>
                <span className="dot" /> Meaningful Contrast
              </div>
              <div className="badge" style={{ marginTop: 12 }}>
                <span className="dot" /> Tactile Surfaces
              </div>
            </div>
          </div>
        </section>

        <section id="design" className="section">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Typography</div>
              <h2 className="h2">Voice and Tone</h2>
              <div className="typestack">
                <div>
                  <div className="subtle">Display ? Lora</div>
                  <div className="sample-h1">Whisper of focus</div>
                  <div className="sample-h2" style={{ marginTop: 8 }}>Quiet conviction</div>
                </div>
                <div>
                  <div className="subtle">UI ? Inter</div>
                  <p className="sample-p">Readable, unobtrusive, contemporary. Sizes scale with context.</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Color</div>
              <h2 className="h2">Calm palette</h2>
              <div className="palette" style={{ marginTop: 12 }}>
                <Swatch name="Primary" cssVar="--color-primary" />
                <Swatch name="Accent" cssVar="--color-accent" />
                <Swatch name="Surface" cssVar="--color-surface" />
                <Swatch name="Elevated" cssVar="--color-elevated" />
                <Swatch name="Text" cssVar="--color-text" />
                <Swatch name="Muted" cssVar="--color-text-muted" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Components</div>
              <h2 className="h2">Buttons</h2>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-ghost">Ghost</button>
              </div>
            </div>
            <div className="card" style={{ gridColumn: "span 6" }}>
              <div className="kicker">Inputs</div>
              <h2 className="h2">Form Elements</h2>
              <div className="components">
                <input className="input" placeholder="Capture intention?" />
                <div style={{ display: "grid", gap: 8 }}>
                  <label className="subtle">Task</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input className="input" placeholder="Write the first line" />
                    <button className="btn btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          Made with calm by Toduu ? Digital Haiku
        </footer>
      </main>
    </div>
  );
}
