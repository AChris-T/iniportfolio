import Image from "next/image";
import Link from "next/link";
import { accent, body, display } from "./fonts";

// Placeholder numbers and copy — replace with real ones.
const stats = [
  { value: "3+", label: "Years experience" },
/*   { value: "50+", label: "Brands managed" },
 */  { value: "100K+", label: "Organic reach" },
];

const skills = [
  "Content Strategy",
  "Instagram Growth",
  "TikTok Creation",
  "Brand Storytelling",
  "Community Management",
  "Paid Social",
  "Analytics & Reporting",
];

const badgeText = "SOCIAL MEDIA • CONTENT • STRATEGY • ";

function RotatingBadge() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black/80 backdrop-blur-md sm:h-28 sm:w-28">
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full motion-safe:animate-spin-slow"
      >
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-white/80 text-[8.5px] font-medium tracking-[0.15em]">
          <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">
            {badgeText}
          </textPath>
        </text>
      </svg>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efe3d3] text-black sm:h-12 sm:w-12">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className={`${body.className} relative w-full overflow-hidden bg-black text-white`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#8c2a35]/35 blur-[120px] sm:h-[36rem] sm:w-[36rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#5b6470]/20 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur-sm motion-safe:animate-fade-up sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <p
            className="mt-8 flex items-center justify-center gap-3 text-base font-medium text-white/70 motion-safe:animate-fade-up sm:text-lg lg:justify-start"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-8 bg-[#efe3d3]" />
            Hi, I’m Inioluwa
          </p>

          <h1
            className={`${display.className} mt-4 text-[3.25rem] font-bold leading-[0.92] tracking-[-0.04em] motion-safe:animate-fade-up sm:text-7xl lg:text-[5.25rem] xl:text-[6.5rem]`}
            style={{ animationDelay: "200ms" }}
          >
            Social{" "}
            <span className={`${accent.className} bg-linear-to-r from-[#f6ecdf] via-[#e3c9b5] to-[#c46a6f] bg-clip-text pr-2 font-normal italic tracking-normal text-transparent`}>
              Media
            </span>
            <br />
            Manager
            <span className="text-[#efe3d3]">.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-white/60 motion-safe:animate-fade-up sm:text-lg lg:mx-0"
            style={{ animationDelay: "300ms" }}
          >
            I help brands build loud, loyal communities through scroll-stopping content, sharp
            strategy and numbers that actually move.
          </p>

          <div
            className="mt-10 flex flex-col items-center gap-4 motion-safe:animate-fade-up sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-[#efe3d3] py-2 pl-7 pr-2 font-medium text-black shadow-[0_0_40px_-10px_#efe3d3] transition-all duration-300 hover:shadow-[0_0_60px_-6px_#efe3d3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              View Portfolio
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#efe3d3] transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 font-medium text-white/90 transition-colors duration-300 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              Let’s talk
            </Link>
          </div>

          <dl
            className="mt-14 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 motion-safe:animate-fade-up lg:max-w-lg"
            style={{ animationDelay: "500ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse px-2 first:pl-0 last:pr-0 sm:px-4">
                <dt className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</dt>
                <dd className={`${display.className} text-3xl font-bold tracking-tight sm:text-4xl`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          className="relative order-1 mx-auto w-full max-w-[17rem] motion-safe:animate-fade-up sm:max-w-sm lg:order-2 lg:max-w-md"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative aspect-3/4">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] border border-[#efe3d3]/30 sm:translate-x-6 sm:translate-y-6"
            />
            <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-[#4a5058] ring-1 ring-white/10">
              <Image
                src="/nini-portrait.jpg"
                alt="Portrait of Inioluwa"
                fill
                preload
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 272px"
                className="object-cover object-[50%_12%]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_45%,rgba(0,0,0,0.6))]" />
              <div className="absolute inset-0 bg-[#8c2a35]/10 mix-blend-soft-light" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute -left-8 top-[18%] sm:-left-14">
              <RotatingBadge />
            </div>

            {/* Floating card: engagement */}
            <div className="absolute -right-4 bottom-[14%] w-40 rounded-2xl border border-white/10 bg-black/70 p-3.5 shadow-2xl shadow-black/50 backdrop-blur-xl motion-safe:animate-float sm:-right-12 sm:w-48 sm:p-4">
              <p className="text-[0.65rem] uppercase tracking-widest text-white/50 sm:text-xs">
                Engagement
              </p>
              <p className="mt-1 flex items-baseline gap-1.5 text-xl font-semibold sm:text-2xl">
                +248%
                <span className="text-xs font-medium text-emerald-400">↑</span>
              </p>
              <div className="mt-3 flex h-8 items-end gap-1" aria-hidden="true">
                {[35, 50, 40, 65, 55, 80, 100].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-linear-to-t from-[#8c2a35]/60 to-[#efe3d3]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating card: followers */}
            <div className="absolute -top-4 right-0 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 py-2 pl-2 pr-4 shadow-2xl shadow-black/50 backdrop-blur-xl motion-safe:animate-float-delayed sm:-right-8 sm:top-6">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] ring-2 ring-black">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="h-4 w-4">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-black">
                  <svg viewBox="0 0 24 24" fill="black" className="h-3.5 w-3.5">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </span>
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">2K+</span>
                <span className="block text-[0.65rem] text-white/50">followers grown</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills marquee */}
      <div className="group relative overflow-hidden border-y border-white/10 bg-white/2 py-5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className={`${accent.className} flex items-center whitespace-nowrap text-2xl italic text-white/70 sm:text-3xl`}
                >
                  <span className="px-6 sm:px-8">{skill}</span>
                  <span className="text-[#efe3d3]">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
