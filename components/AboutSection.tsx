import Image from "next/image";
import Link from "next/link";
import { accent, body, display } from "./fonts";

const services = [
  {
    title: "Content Strategy",
    description: "Monthly plans, content pillars and calendars built around what your audience actually stops for.",
  },
  {
    title: "Content Creation",
    description: "Reels, TikToks, carousels and captions — shot, edited and written to feel native to each platform.",
  },
  {
    title: "Community Management",
    description: "Replies, DMs and conversations handled in your voice, so followers turn into regulars.",
  },
  {
    title: "Analytics & Growth",
    description: "Clear monthly reports, honest numbers and the next moves that will push them higher.",
  },
];

const tools = ["Instagram", "TikTok", "X", "LinkedIn", "Meta Business Suite", "Canva", "CapCut", "Notion"];

const facts = [
  { label: "Based in", value: "Oyo State, Nigeria" },
  { label: "Focus", value: "Lifestyle, beauty & fashion brands" },
  { label: "Working", value: "Remote, worldwide" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${body.className} relative w-full scroll-mt-24 overflow-hidden bg-black py-24 text-white sm:py-32`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#8c2a35]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
          <span className={`${display.className} font-semibold text-[#efe3d3]`}>01</span>
          <span className="h-px w-12 bg-white/20" />
          About me
        </div>

        {/* Statement */}
        <h2
          className={`${display.className} mt-8 max-w-5xl text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl`}
        >
          I turn brands into{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>
            conversations
          </span>{" "}
          people actually want to join<span className="text-[#c46a6f]">.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="group relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-[2rem] bg-neutral-900 ring-1 ring-white/10 lg:mx-0 lg:max-w-none">
              <Image
                src="/about-portrait.jpg"
                alt="Black and white portrait of Inioluwa seated on a cream armchair"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 100vw"
                className="object-cover object-[55%_30%] transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[#8c2a35]/10 mix-blend-soft-light" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className={`${accent.className} text-4xl italic sm:text-5xl`}>Inioluwa</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">
                  Social Media Manager
                </p>
              </div>
            </div>

            <dl className="mx-auto mt-8 max-w-sm divide-y divide-white/10 border-y border-white/10 lg:mx-0 lg:max-w-none">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4 py-4 text-sm sm:text-base">
                  <dt className="text-white/50">{fact.label}</dt>
                  <dd className="text-right text-white/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Text column */}
          <div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/70 sm:text-xl">
              <p>
                <span className="font-medium text-white">Hi, I’m Inioluwa</span> — a social media manager
                who believes the best content doesn’t feel like marketing. It feels like a friend
                telling you about something they love.
              </p>
              <p>
                For the past five years I’ve helped lifestyle, beauty and fashion brands find their
                voice online, grow communities that actually show up, and turn likes into loyal
                customers. I mix creative instinct with data, so every post has a reason to exist.
              </p>
            </div>

            {/* Services */}
            <h3 className="mt-16 text-sm uppercase tracking-[0.25em] text-white/50">What I do</h3>
            <ul className="mt-6 border-t border-white/10">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  className="group relative grid grid-cols-[auto_1fr] gap-x-6 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/3 sm:gap-x-10 sm:px-4"
                >
                  <span className={`${display.className} pt-1 text-sm font-semibold text-[#c46a6f]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={`${display.className} flex items-center justify-between gap-4 text-2xl font-semibold tracking-tight sm:text-3xl`}
                    >
                      {service.title}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        className="h-6 w-6 shrink-0 text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#efe3d3]"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    <p className="mt-2 max-w-lg text-base text-white/55">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <h3 className="mt-16 text-sm uppercase tracking-[0.25em] text-white/50">Platforms & tools</h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-white/80 transition-colors duration-300 hover:border-[#efe3d3]/40 hover:text-white"
                >
                  {tool}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-16 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-linear-to-br from-[#8c2a35]/25 via-white/2 to-transparent p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <p className={`${display.className} text-2xl font-semibold leading-tight tracking-tight sm:text-3xl`}>
                Got a brand that deserves{" "}
                <span className={`${accent.className} font-normal italic text-[#efe3d3]`}>more</span>?
              </p>
              <Link
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#efe3d3] py-2 pl-6 pr-2 font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_#efe3d3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:self-auto"
              >
                Let’s work together
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#efe3d3] transition-transform duration-300 group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
