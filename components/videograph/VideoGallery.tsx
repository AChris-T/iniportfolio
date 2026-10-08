"use client";

import { useEffect, useRef, useState } from "react";
import { accent, body, display } from "../fonts";

type Video = {
  title: string;
  client: string;
  category: "Reels" | "TikTok" | "Campaigns" | "Events";
  duration: string;
  // Put files in public/videos and set e.g. src: "/videos/launch.mp4", poster: "/videos/launch.jpg".
  src?: string;
  poster?: string;
};

// Placeholder entries — replace with real videos.
const showreel: Video = {
  title: "Showreel 2025",
  client: "Selected work",
  category: "Campaigns",
  duration: "1:30",
};

const videos: Video[] = [
  { title: "Sneaker Drop Teaser", client: "Own brand", category: "Reels", duration: "0:30" },
  { title: "Loafers Styling Guide", client: "Own brand", category: "TikTok", duration: "0:45" },
  { title: "Sunday Service Highlights", client: "Everlasting Hills Church", category: "Events", duration: "1:10" },
  { title: "Fashion Brand Launch", client: "Fashion brand", category: "Campaigns", duration: "0:58" },
  { title: "Camp Life Recap", client: "NYSC Orientation Camp", category: "Events", duration: "0:50" },
  { title: "Perfume Unboxing", client: "Online perfume store", category: "Reels", duration: "0:25" },
  { title: "Behind the Scenes", client: "Own brand", category: "TikTok", duration: "0:35" },
  { title: "Influencer Collab", client: "Fashion brand", category: "Campaigns", duration: "0:40" },
];

const filters = ["All", "Reels", "TikTok", "Campaigns", "Events"] as const;

const placeholderTints = [
  "from-[#8c2a35]/70 via-[#2a1215] to-black",
  "from-[#4a5058] via-[#1c1f23] to-black",
  "from-[#efe3d3]/30 via-[#2b2620] to-black",
  "from-[#c46a6f]/50 via-[#24161a] to-black",
];

function PlayIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.2-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

function VideoCard({
  video,
  tint,
  aspect,
  onOpen,
}: {
  video: Video;
  tint: string;
  aspect: string;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => ref.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.pause();
        ref.current.currentTime = 0;
      }}
      className={`group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br text-left ${tint} ${aspect} transition-all duration-500 hover:-translate-y-1 hover:border-[#efe3d3]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black`}
    >
      {video.src ? (
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span
            className={`${accent.className} select-none text-[5rem] italic leading-none text-white/[0.06] transition-transform duration-700 group-hover:scale-110`}
          >
            {video.category}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-black/20" />

      <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-xs">
        <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80 backdrop-blur-md">
          {video.category}
        </span>
        <span className="rounded-full bg-black/40 px-2.5 py-1 text-white/70 backdrop-blur-md">{video.duration}</span>
      </div>

      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-80 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:bg-[#efe3d3] group-hover:text-black group-hover:opacity-100">
        <PlayIcon className="ml-0.5 h-5 w-5" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className={`${display.className} text-lg font-semibold leading-tight tracking-tight sm:text-xl`}>
          {video.title}
        </p>
        <p className="mt-1 text-sm text-white/55">{video.client}</p>
      </div>
    </button>
  );
}

export default function VideoGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Video | null>(null);

  const shown = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="work"
      className={`${body.className} relative w-full scroll-mt-24 overflow-hidden bg-black pb-8 pt-24 text-white sm:pt-32`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#8c2a35]/25 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
          <span className={`${display.className} font-semibold text-[#efe3d3]`}>01</span>
          <span className="h-px w-12 bg-white/20" />
          Selected work
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className={`${display.className} max-w-4xl text-[2.75rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl`}
          >
            Stories in{" "}
            <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>
              motion
            </span>
            <span className="text-[#c46a6f]">.</span>
          </h2>
          <p className="max-w-sm text-base font-light leading-relaxed text-white/60 sm:text-lg">
            Short-form videos, ad edits and event highlights — edited to stop
            the scroll.
          </p>
        </div>

        {/* Showreel */}
        <div className="mt-14 sm:mt-20">
          <VideoCard
            video={showreel}
            tint="from-[#8c2a35]/60 via-[#1a1a1d] to-black"
            aspect="aspect-[4/5] sm:aspect-video"
            onOpen={() => setActive(showreel)}
          />
        </div>

        {/* Filters */}
        <div className="mt-20 flex flex-col gap-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm uppercase tracking-[0.25em] text-white/50">
            All work <span className="text-white/30">({shown.length})</span>
          </h2>
          <div role="tablist" aria-label="Filter videos" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  filter === f
                    ? "border-[#efe3d3] bg-[#efe3d3] text-black"
                    : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((video) => (
            <li key={video.title}>
              <VideoCard
                video={video}
                tint={placeholderTints[videos.indexOf(video) % placeholderTints.length]}
                aspect="aspect-9/16"
                onOpen={() => setActive(video)}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Player */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md motion-safe:animate-fade-up"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 sm:right-8 sm:top-8"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            {active.src ? (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full rounded-2xl bg-black"
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-[#8c2a35]/30 via-[#141416] to-black text-center">
                <p className={`${accent.className} text-4xl italic text-[#efe3d3] sm:text-5xl`}>Coming soon</p>
                <p className="mt-3 text-white/55">This video hasn’t been uploaded yet.</p>
              </div>
            )}
            <div className="mt-4 flex items-baseline justify-between gap-4 text-white">
              <p className={`${display.className} text-xl font-semibold`}>{active.title}</p>
              <p className="text-sm text-white/55">{active.client}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
