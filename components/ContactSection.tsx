"use client";

import { useState, type FormEvent } from "react";
import { accent, body, display } from "./fonts";
import SiteFooter from "./SiteFooter";

// Placeholders — replace with real details.
const contact = {
  email: "Olatunjiinioluwa2308@gmail.com",
  whatsapp: "2348037316709", // international format, digits only
  whatsappDisplay: "+234 803 731 6709",
  location: "Nigeria · Working remotely",
};

const socials = [
  { label: "Instagram", handle: "@I_N_I.OLUWA", href: "https://www.instagram.com/i_n_i.oluwa?mdxt=MWFjY25qcGg1YWNiaw%3D%3D&utm_source=qr" },
  { label: "TikTok", handle: "@inis_cam", href: "https://www.tiktok.com/@inis_cam" },
  // { label: "LinkedIn", handle: "Inioluwa", href: "https://www.linkedin.com/in/inioluwa" },
  // { label: "Facebook", handle: "Inioluwa", href: "https://www.facebook.com/inioluwa" },
];

const services = ["Social media strategy", "Content creation", "Community management", "Full account management"];

const inputClass =
  "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-6 text-base text-white placeholder-transparent outline-none transition-colors focus:border-[#efe3d3] sm:text-lg";
const labelClass =
  "pointer-events-none absolute left-0 top-6 text-base text-white/45 transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.15em] peer-focus:text-[#efe3d3] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.15em] sm:text-lg";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (service: string) =>
    setSelected((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const lines = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      data.get("brand") ? `Brand: ${data.get("brand")}` : "",
      selected.length ? `Interested in: ${selected.join(", ")}` : "",
      "",
      String(data.get("message") ?? ""),
    ].filter((line, i) => line !== "" || i === 4);

    const subject = encodeURIComponent(`New project enquiry from ${name}`);
    const bodyText = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyText}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className={`${body.className} relative w-full scroll-mt-24 overflow-hidden bg-black pt-24 text-white sm:pt-32`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#8c2a35]/20 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/50">
          <span className={`${display.className} font-semibold text-[#efe3d3]`}>03</span>
          <span className="h-px w-12 bg-white/20" />
          Contact
        </div>

        <h2
          className={`${display.className} mt-8 max-w-5xl text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl`}
        >
          Let’s make your brand{" "}
          <span className={`${accent.className} font-normal italic tracking-normal text-[#efe3d3]`}>
            impossible
          </span>{" "}
          to scroll past<span className="text-[#c46a6f]">.</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Direct contact */}
          <div className="flex flex-col gap-10">
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Taking on new clients
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Email me</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className={`${display.className} break-all text-2xl font-semibold tracking-tight underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-[#efe3d3] sm:text-3xl`}
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-black p-6 transition-colors hover:bg-white/3"
              >
                <span className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-white/50">
                  WhatsApp
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#efe3d3]" />
                </span>
                <span className="text-lg text-white/90">{contact.whatsappDisplay}</span>
              </a>
              <div className="flex flex-col gap-2 bg-black p-6">
                <span className="text-sm uppercase tracking-[0.2em] text-white/50">Based in</span>
                <span className="text-lg text-white/90">{contact.location}</span>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Find me online</p>
              <ul className="mt-3 border-t border-white/10">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors hover:text-[#efe3d3]"
                    >
                      <span className={`${display.className} text-xl font-semibold tracking-tight sm:text-2xl`}>
                        {social.label}
                      </span>
                      <span className="flex items-center gap-3 text-sm text-white/50 group-hover:text-[#efe3d3]/80">
                        {social.handle}
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-white/10 bg-linear-to-b from-white/5 to-white/1 p-6 backdrop-blur-sm sm:p-10">
            <h3 className={`${display.className} text-2xl font-semibold tracking-tight sm:text-3xl`}>
              Tell me about your brand
            </h3>
            <p className="mt-2 text-white/55">I usually reply within 24 hours.</p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="relative">
                  <input id="name" name="name" required placeholder="Name" autoComplete="name" className={inputClass} />
                  <label htmlFor="name" className={labelClass}>Your name *</label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
                  <label htmlFor="email" className={labelClass}>Email address *</label>
                </div>
              </div>

              <div className="relative">
                <input id="brand" name="brand" placeholder="Brand" autoComplete="organization" className={inputClass} />
                <label htmlFor="brand" className={labelClass}>Brand or business</label>
              </div>

              <fieldset>
                <legend className="text-sm text-white/45">What do you need help with?</legend>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {services.map((service) => {
                    const active = selected.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleService(service)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                          active
                            ? "border-[#efe3d3] bg-[#efe3d3] text-black"
                            : "border-white/15 text-white/75 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Message"
                  className={`${inputClass} resize-none`}
                />
                <label htmlFor="message" className={labelClass}>Tell me a little about the project *</label>
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-between gap-3 self-stretch rounded-full bg-[#efe3d3] py-2 pl-7 pr-2 font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_#efe3d3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:self-start"
              >
                Send message
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#efe3d3] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowIcon />
                </span>
              </button>

              <p aria-live="polite" className="min-h-5 text-sm text-white/55">
                {sent && "Your email app should open with the message ready — just hit send."}
              </p>
            </form>
          </div>
        </div>
      </div>

      <SiteFooter name="Inioluwa" />
    </section>
  );
}
