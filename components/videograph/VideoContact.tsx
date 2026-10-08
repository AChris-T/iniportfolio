"use client";

import { useState, type FormEvent } from "react";
import { accent, body, display } from "../fonts";
import SiteFooter from "../SiteFooter";

const contact = {
  email: "Olatunjiinioluwa2308@gmail.com",
  whatsapp: "2348037316709",
  whatsappDisplay: "+234 803 731 6709",
};

// Placeholders — replace with real profiles.
const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

const projectTypes = ["Reels & TikTok", "Brand / ad edit", "Event highlights", "YouTube / long-form", "Something else"];

const inputClass =
  "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-6 text-base text-white placeholder-transparent outline-none transition-colors focus:border-[#efe3d3] sm:text-lg [color-scheme:dark]";
const labelClass =
  "pointer-events-none absolute left-0 top-6 text-base text-white/45 transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.15em] peer-focus:text-[#efe3d3] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.15em] sm:text-lg";

export default function VideoContact() {
  const [type, setType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const lines = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Project type: ${type}`,
      data.get("deadline") ? `Deadline: ${data.get("deadline")}` : "",
      data.get("footage") ? `Footage: ${data.get("footage")}` : "",
      "",
      String(data.get("message") ?? ""),
    ].filter((line, i) => line !== "" || i === 5);

    const subject = encodeURIComponent(`Edit request: ${type} — ${name}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  return (
    <section id="contact" className={`${body.className} relative w-full scroll-mt-24 overflow-hidden bg-black pt-24 text-white sm:pt-32`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#8c2a35]/20 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
          <span className={`${display.className} font-semibold text-[#efe3d3]`}>04</span>
          <span className="h-px w-12 bg-white/20" />
          Start a project
        </div>
        <h2
          className={`${display.className} mt-8 max-w-5xl text-[2.5rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl`}
        >
          Let’s make something{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>cinematic</span>
          <span className="text-[#c46a6f]">.</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Direct */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className={`${display.className} mt-3 block break-all text-xl font-semibold tracking-tight underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-[#efe3d3] sm:text-2xl`}
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">WhatsApp</p>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-3 block text-xl font-semibold tracking-tight underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-[#efe3d3] sm:text-2xl`}
              >
                {contact.whatsappDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Follow the work</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-[#efe3d3]/50 hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7 rounded-[2rem] border border-white/10 bg-linear-to-b from-white/5 to-white/1 p-6 sm:p-10"
          >
            <fieldset>
              <legend className="text-sm text-white/45">What are we editing?</legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={type === t}
                    onClick={() => setType(t)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      type === t ? "border-[#efe3d3] bg-[#efe3d3] text-black" : "border-white/15 text-white/75 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-7 sm:grid-cols-2">
              <div className="relative">
                <input id="v-name" name="name" required placeholder="Name" autoComplete="name" className={inputClass} />
                <label htmlFor="v-name" className={labelClass}>Your name *</label>
              </div>
              <div className="relative">
                <input id="v-email" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
                <label htmlFor="v-email" className={labelClass}>Email address *</label>
              </div>
              <div className="relative">
                <input id="v-deadline" name="deadline" type="date" placeholder="Deadline" className={`${inputClass} pt-7`} />
                <label htmlFor="v-deadline" className="pointer-events-none absolute left-0 top-0 text-xs tracking-[0.15em] text-white/45">
                  Deadline
                </label>
              </div>
              <div className="relative">
                <input id="v-footage" name="footage" type="url" placeholder="Footage link" className={inputClass} />
                <label htmlFor="v-footage" className={labelClass}>Footage link (Drive, Dropbox…)</label>
              </div>
            </div>

            <div className="relative">
              <textarea id="v-message" name="message" required rows={4} placeholder="Message" className={`${inputClass} resize-none`} />
              <label htmlFor="v-message" className={labelClass}>Tell me about the video *</label>
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-between gap-3 self-stretch rounded-full bg-[#efe3d3] py-2 pl-7 pr-2 font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_#efe3d3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:self-start"
            >
              Send project request
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#efe3d3] transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <p aria-live="polite" className="min-h-5 text-sm text-white/55">
              {sent && "Your email app should open with the project details ready — just hit send."}
            </p>
          </form>
        </div>
      </div>

      <SiteFooter name="Nini’s Cam" />
    </section>
  );
}
