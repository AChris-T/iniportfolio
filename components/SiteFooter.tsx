"use client";

import { useRef, useSyncExternalStore, type PointerEvent } from "react";
import { display } from "./fonts";

// Read the year in the browser only; Cache Components forbids `new Date()` during prerender.
const noopSubscribe = () => () => {};
function CurrentYear() {
  return useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => null);
}

// Outlined name with a light that sweeps across it, plus a spotlight that follows the cursor.
function GlowingName({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const moveLight = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spot", "1");
  };

  const textClass = `${display.className} select-none whitespace-nowrap pt-10 text-center font-extrabold leading-[0.8] tracking-[-0.06em]`;
  // Scale with the word length so it always fits on one line (8 letters ≈ 19vw, capped at 13rem).
  const fontSize = `min(${152 / text.length}vw, ${104 / text.length}rem)`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerMove={moveLight}
      onPointerLeave={() => ref.current?.style.setProperty("--spot", "0")}
      style={{ fontSize }}
      className="relative [--spot:0]"
    >
      {/* Ambient glow behind the word */}
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 top-1/3 rounded-full bg-[#efe3d3]/10 blur-[80px] animate-glow" />

      {/* Base outline */}
      <p className={`${textClass} relative text-transparent [-webkit-text-stroke:1px_rgba(239,227,211,0.25)]`}>
        {text}
      </p>

      {/* Sweeping light */}
      <p
        className={`${textClass} pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(239,227,211,0.2)_42%,#fff8ef_50%,rgba(239,227,211,0.2)_58%,transparent_70%)] bg-size-[200%_100%] bg-repeat-x bg-clip-text text-transparent animate-shine [filter:drop-shadow(0_0_18px_rgba(239,227,211,0.45))]`}
      >
        {text}
      </p>

      {/* Cursor spotlight */}
      <p
        className={`${textClass} pointer-events-none absolute inset-0 bg-[radial-gradient(circle_220px_at_var(--x)_var(--y),#fff8ef,rgba(239,227,211,0.6)_35%,rgba(196,106,111,0.25)_60%,transparent_75%)] bg-clip-text text-transparent opacity-(--spot) transition-opacity duration-500 [filter:drop-shadow(0_0_24px_rgba(239,227,211,0.35))]`}
      >
        {text}
      </p>
    </div>
  );
}

export default function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="relative mt-24 border-t border-white/10 sm:mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlowingName text={name} />
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/45 sm:flex-row">
          <p>© <CurrentYear /> {name}. All rights reserved.</p>
          <a href="#" className="flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
