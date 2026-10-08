"use client";

import { useEffect, useState } from "react";
import { accent, body } from "../fonts";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function VideoHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`${body.className} fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled && !open ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "py-3" : "py-5 sm:py-6"}`}>
        <a href="#top" className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className={`${accent.className} text-2xl italic sm:text-[1.7rem]`}>Nini’s</span>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Cam</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative py-2 text-[15px] text-white/80 transition-colors hover:text-white">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#efe3d3] px-5 py-2.5 text-sm font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_#efe3d3] sm:inline-flex"
          >
            Start a project
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="video-menu"
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-sm md:hidden"
          >
            <span className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu: full-screen overlay */}
      <div
        id="video-menu"
        inert={!open}
        className={`fixed inset-0 -z-10 flex flex-col justify-center bg-black px-6 transition-all duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 70 + 100}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${accent.className} flex items-baseline gap-4 py-2 text-5xl italic text-white/90 hover:text-white`}
              >
                <span className={`${body.className} text-sm not-italic text-white/40`}>0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-12 inline-flex self-start rounded-full bg-[#efe3d3] px-6 py-3 font-medium text-black"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
