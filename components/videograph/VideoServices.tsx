import { accent, body, display } from "../fonts";

// Placeholder copy — replace with real services and deliverables.
const services = [
  {
    title: "Reels & TikTok Edits",
    description: "Fast, vertical edits with punchy hooks, trending audio and captions, built for the platforms your audience lives on.",
    deliverables: ["9:16 edits", "Animated captions", "Monthly content batches"],
  },
  {
    title: "Brand & Ad Edits",
    description: "Turning raw product and campaign footage into polished spots that make people want to buy.",
    deliverables: ["15–60s ad cuts", "Cut-downs per platform", "Colour graded"],
  },
  {
    title: "Event Highlight Reels",
    description: "Hours of church services, conferences and celebrations cut into a story people actually want to rewatch.",
    deliverables: ["Highlight reel", "Full-length edit", "Social teasers"],
  },
  {
    title: "YouTube & Long-form",
    description: "Talking-head videos, vlogs and interviews paced to keep viewers watching, with clean cuts and B-roll.",
    deliverables: ["Long-form edit", "Subtitles", "Shorts cut-downs"],
  },
];

const process = [
  { title: "Brief", description: "A quick chat about the story, the audience, the style you like and where the video will live." },
  { title: "Footage", description: "You send the raw clips, music and brand assets through Google Drive, Dropbox or WeTransfer." },
  { title: "Rough cut", description: "A first edit for feedback on story, pacing and music before the polish." },
  { title: "Final cut", description: "Colour, sound, captions and graphics finished, exported in every format you need." },
];

function Label({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
      <span className={`${display.className} font-semibold text-[#efe3d3]`}>{index}</span>
      <span className="h-px w-12 bg-white/20" />
      {children}
    </div>
  );
}

export default function VideoServices() {
  return (
    <div className={`${body.className} relative w-full overflow-hidden bg-black text-white`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#8c2a35]/20 blur-[140px]"
      />

      {/* Services */}
      <section id="services" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Label index="02">Services</Label>
        <h2
          className={`${display.className} mt-8 max-w-4xl text-[2.5rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl`}
        >
          What I{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>edit</span>
          <span className="text-[#c46a6f]">.</span>
        </h2>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:mt-20 md:grid-cols-2">
          {services.map((service, i) => (
            <li key={service.title} className="group relative flex flex-col bg-black p-7 transition-colors duration-500 hover:bg-[#0d0a0b] sm:p-10">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-white/40">Track 0{i + 1}</span>
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Rendering
                </span>
              </div>
              <h3 className={`${display.className} mt-10 text-3xl font-bold tracking-tight sm:text-4xl`}>{service.title}</h3>
              <p className="mt-4 max-w-md grow text-base leading-relaxed text-white/60 sm:text-lg">{service.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section id="process" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <Label index="03">Process</Label>
        <h2
          className={`${display.className} mt-8 max-w-4xl text-[2.5rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl`}
        >
          From idea to{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>final cut</span>
          <span className="text-[#c46a6f]">.</span>
        </h2>

        <ol className="relative mt-14 grid gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Timeline track */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-linear-to-r from-[#efe3d3]/50 via-white/15 to-transparent lg:block" />
          {process.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                className={`${display.className} relative flex h-10 w-10 items-center justify-center rounded-full border border-[#efe3d3]/40 bg-black text-sm font-semibold text-[#efe3d3]`}
              >
                {i + 1}
              </span>
              <h3 className={`${display.className} mt-6 text-2xl font-bold tracking-tight`}>{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
