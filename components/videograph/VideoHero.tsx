"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { accent, body, display } from "../fonts";

const FPS = 24;
const LOOP_SECONDS = 14; // playhead sweeps the timeline once per loop
const LOOP_FRAMES = FPS * LOOP_SECONDS;

// Frame counter that drives both the timecode and the playhead, looping forever.
function usePlayback() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const id = setInterval(
      () => setFrame(Math.floor(((performance.now() - start) / 1000) * FPS) % LOOP_FRAMES),
      1000 / FPS,
    );
    return () => clearInterval(id);
  }, []);

  return frame;
}

function formatTimecode(frame: number) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const seconds = Math.floor(frame / FPS);
  return `00:${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}:${pad(frame % FPS)}`;
}

// Clip layout per track, as [start %, width %, label].
const tracks: { name: string; kind: "video" | "audio"; clips: [number, number, string][] }[] = [
  { name: "V2", kind: "video", clips: [[8, 14, "Title"], [46, 10, "Logo"], [78, 16, "Captions"]] },
  { name: "V1", kind: "video", clips: [[0, 22, "Intro"], [22, 18, "B-roll"], [40, 26, "Interview"], [66, 14, "Product"], [80, 20, "Outro"]] },
  { name: "A1", kind: "audio", clips: [[0, 66, "Voice"], [66, 34, "Voice"]] },
  { name: "A2", kind: "audio", clips: [[0, 100, "Music"]] },
];

const clipStyles = {
  video: ["bg-[#efe3d3]/80 text-black", "bg-[#c46a6f]/80 text-white", "bg-[#4a5058] text-white"],
  audio: ["bg-[#8c2a35]/70 text-white", "bg-[#2f4a3a]/80 text-white"],
};

// Deterministic pseudo-waveform so server and client render the same bars.
const waveform = Array.from({ length: 60 }, (_, i) => 25 + Math.round(Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6)) * 70));

function Timeline({ frame }: { frame: number }) {
  const progress = (frame / LOOP_FRAMES) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
        <span className="flex items-center gap-2 text-white/80">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-[#efe3d3]" aria-hidden="true">
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.2-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z" />
          </svg>
          <span className="tabular-nums text-[#efe3d3]">{formatTimecode(frame)}</span>
        </span>
        <span className="hidden truncate sm:block">Showreel_v3_FINAL.prproj</span>
        <span>4K · {FPS} fps</span>
      </div>

      {/* Tracks */}
      <div className="relative mt-3 flex flex-col gap-1.5">
        {tracks.map((track, t) => (
          <div key={track.name} className={`flex items-center gap-2 ${t === 0 ? "hidden sm:flex" : ""}`}>
            <span className="w-6 shrink-0 text-[10px] font-semibold text-white/40">{track.name}</span>
            <div className="relative h-6 flex-1 rounded-md bg-white/4 sm:h-7">
              {track.clips.map(([start, width, label], i) => (
                <div
                  key={`${label}-${start}`}
                  className={`absolute inset-y-0.5 overflow-hidden rounded-[5px] border border-black/40 px-1.5 text-[9px] font-medium leading-5 sm:text-[10px] sm:leading-6 ${
                    clipStyles[track.kind][i % clipStyles[track.kind].length]
                  }`}
                  style={{ left: `${start}%`, width: `calc(${width}% - 2px)` }}
                >
                  {track.kind === "audio" && (
                    <div className="absolute inset-0 flex items-center gap-px px-1 opacity-50" aria-hidden="true">
                      {waveform.map((h, w) => (
                        <span key={w} className="flex-1 rounded-full bg-white" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  )}
                  <span className="relative truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Playhead */}
        <div className="pointer-events-none absolute inset-y-0 left-8 right-0" aria-hidden="true">
          <div className="absolute -top-2 bottom-0 w-px bg-red-500" style={{ left: `${progress}%` }}>
            <span className="absolute -left-1 -top-1 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoHero() {
  const frame = usePlayback();

  return (
    <section
      id="top"
      className={`${body.className} relative flex min-h-svh w-full flex-col overflow-hidden bg-black text-white`}
    >
      {/* Program monitor background — swap the image for a <video> showreel when ready */}
      <div className="absolute inset-0 animate-kenburns">
        <Image src="/about-portrait.jpg" alt="" fill preload sizes="100vw" className="object-cover object-[50%_30%] opacity-40" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.85)_75%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black" />

      {/* Film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Title-safe guide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[6%] bottom-[30%] top-[14%] rounded-sm border border-dashed border-white/15"
      />

      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-32 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70 motion-safe:animate-fade-up sm:text-sm">
          Video Editor & Visual Storyteller
        </p>
        <h1
          className={`${display.className} mt-5 text-[4.5rem] font-bold leading-[0.85] tracking-[-0.05em] motion-safe:animate-fade-up sm:text-[8rem] lg:text-[10rem]`}
          style={{ animationDelay: "120ms" }}
        >
          Nini’s{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>Cam</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-white/65 motion-safe:animate-fade-up sm:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          Edits that hook in the first second and hold attention to the very last frame.
        </p>
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 motion-safe:animate-fade-up sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-[#efe3d3] py-2 pl-2 pr-6 font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_50px_-6px_#efe3d3]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#efe3d3] transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.2-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
            Watch showreel
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-4 font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Start a project
          </a>
        </div>
      </div>

      {/* Editing timeline */}
      <div aria-hidden="true" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
        <Timeline frame={frame} />
      </div>
    </section>
  );
}
