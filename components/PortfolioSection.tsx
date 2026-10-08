import { accent, body, display } from "./fonts";

const highlights = [
  { value: "40%", label: "Boost in brand visibility" },
  { value: "30%", label: "Follower growth in 3 months" },
  { value: "25%", label: "Lift in engagement" },
  { value: "15%", label: "Increase in online sales" },
];

const experience = [
  {
    role: "Founder & Social Media Marketer",
    org: "Entrepreneur",
    period: "Aug 2020 — Present",
    current: true,
    points: [
      "Developed and executed social media strategies across Instagram and TikTok, boosting brand visibility by 40% and engagement by 25% within two years.",
      "Created compelling short-form video content and campaigns for sneakers, loafers and unisex wear, increasing online sales by 15%.",
      "Analysed campaign performance using platform analytics, optimising content to improve conversion rates by 10%.",
      "Built a customer database and implemented email marketing campaigns to nurture leads and drive repeat purchases.",
    ],
  },
  {
    role: "Head of Social Media Management Team",
    org: "Everlasting Hills Church, Nigeria",
    period: "Apr 2025 — Present",
    current: true,
    points: [
      "Leading a 4-member team responsible for managing the church’s social media presence.",
      "Planned and executed content strategies, increasing audience engagement and visibility.",
      "Coordinated content creation, scheduling and event promotions across digital platforms.",
      "Monitored performance metrics and implemented improvements to enhance online outreach.",
    ],
  },
  {
    role: "Social Media Manager",
    org: "NYSC Oyocopa Orientation Camp",
    period: "Sep — Oct 2025",
    current: false,
    points: [
      "Produced engaging digital content for social media platforms to promote NYSC activities and initiatives.",
      "Built the content calendar and created short videos and captions that increased camp engagement and awareness among participants.",
      "Collaborated with the NYSC media team to ensure consistent branding and messaging.",
    ],
  },
];

const projects = [
  {
    metric: "+30%",
    metricLabel: "followers in 3 months",
    title: "Social Media Campaign for a Fashion Brand",
    description:
      "Launched a multi-platform campaign on Instagram and TikTok with influencer collaborations.",
    tags: ["Instagram", "TikTok", "Influencers"],
  },
  {
    metric: "+10%",
    metricLabel: "in sales",
    title: "E-commerce Store Optimisation",
    description:
      "Designed product listings and promotional strategies for an online perfume store, improving user experience and sales.",
    tags: ["E-commerce", "Listings", "Promotion"],
  },
  {
    metric: "90%",
    metricLabel: "success rate in 3 months",
    title: "Social Media Management Leadership",
    description:
      "Led a team of 5 on the Everlasting Hills Church social media team through effective coordination and data-driven decisions.",
    tags: ["Leadership", "Strategy", "Analytics"],
  },
];

// Wraps figures like "40%" in a highlight.
function withHighlights(text: string) {
  return text.split(/(\d+%)/).map((part, i) =>
    /^\d+%$/.test(part) ? (
      <span key={i} className="font-medium text-[#efe3d3]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm uppercase tracking-[0.25em] text-white/50">{children}</h3>;
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className={`${body.className} relative w-full scroll-mt-24 overflow-hidden bg-black py-24 text-white sm:py-32`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-[#8c2a35]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
          <span className={`${display.className} font-semibold text-[#efe3d3]`}>02</span>
          <span className="h-px w-12 bg-white/20" />
          Portfolio
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className={`${display.className} max-w-3xl text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl`}
          >
            Work that{" "}
            <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>
              moves
            </span>{" "}
            the numbers<span className="text-[#c46a6f]">.</span>
          </h2>
          <p className="max-w-sm text-base font-light leading-relaxed text-white/60 sm:text-lg">
            Since 2020 — building brands, leading teams and turning content into measurable growth.
          </p>
        </div>

        {/* Highlights */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col-reverse bg-black p-6 sm:p-8">
              <dt className="mt-2 text-sm text-white/50 sm:text-base">{item.label}</dt>
              <dd className={`${display.className} text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`}>
                <span className="align-top text-2xl text-[#c46a6f] sm:text-3xl">+</span>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Experience */}
        <div className="mt-24 sm:mt-32">
          <SectionHeading>Experience</SectionHeading>
          <ol className="mt-6 border-t border-white/10">
            {experience.map((job) => (
              <li
                key={job.role}
                className="grid gap-6 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[14rem_1fr] lg:gap-12"
              >
                <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-start">
                  <p className="text-sm uppercase tracking-[0.15em] text-white/60">{job.period}</p>
                  {job.current && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h4 className={`${display.className} text-2xl font-semibold tracking-tight sm:text-3xl`}>
                    {job.role}
                  </h4>
                  <p className={`${accent.className} mt-1 text-xl italic text-[#efe3d3]/80 sm:text-2xl`}>
                    {job.org}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-4 text-base leading-relaxed text-white/65 sm:text-lg">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#c46a6f]" aria-hidden="true" />
                        <span>{withHighlights(point)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Projects */}
        <div className="mt-24 sm:mt-32">
          <SectionHeading>Selected projects</SectionHeading>
          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <li
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-b from-white/4 to-transparent p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#efe3d3]/30 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8c2a35]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#8c2a35]/40"
                />

                <div className="relative flex items-start justify-between">
                  <span className={`${display.className} text-sm font-semibold text-white/40`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-6 w-6 text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#efe3d3]"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <p className={`${display.className} relative mt-10 text-6xl font-bold tracking-tight text-[#efe3d3] sm:text-7xl`}>
                  {project.metric}
                </p>
                <p className="relative mt-1 text-sm text-white/50">{project.metricLabel}</p>

                <h4 className={`${display.className} relative mt-8 text-xl font-semibold leading-snug tracking-tight sm:text-2xl`}>
                  {project.title}
                </h4>
                <p className="relative mt-3 grow text-base leading-relaxed text-white/60">
                  {project.description}
                </p>

                <ul className="relative mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
