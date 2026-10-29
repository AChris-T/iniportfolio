"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { accent, body } from "./fonts";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const iconClass = "h-[18px] w-[18px]";

const socialLinks = [
/* 
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
      </svg>
    ),
  }, */
  {
    label: "Instagram",
    href: "https://www.instagram.com/i_n_i.oluwa?mdxt=MWFjY25qcGg1YWNiaw%3D%3D&utm_source=qr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className={iconClass}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@inis_cam",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },

];

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#06050d]";

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Nini's Cam home"
      className={`group relative inline-flex shrink-0 items-center gap-2.5 px-4 py-2 text-white sm:gap-3 sm:px-5 xl:px-6 xl:py-2.5 ${focusRing}`}
    >
      {/* Viewfinder corners */}
      <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-white transition-all duration-300 group-hover:-left-1 group-hover:-top-1 xl:h-3 xl:w-3" />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-white transition-all duration-300 group-hover:-right-1 group-hover:-top-1 xl:h-3 xl:w-3" />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:-bottom-1 group-hover:-left-1 xl:h-3 xl:w-3" />
      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1 xl:h-3 xl:w-3" />

      {/* Recording indicator */}
      <span className="absolute right-2 top-1.5 flex h-1.5 w-1.5 xl:right-2.5 xl:top-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
      </span>

      {/* Lens mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 shrink-0 transition-transform duration-500 group-hover:rotate-90 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="14" strokeWidth={1.75} />
        <circle cx="16" cy="16" r="6" strokeWidth={1.75} />
        <path
          d="M16 2v8M28.1 9l-6.9 4M28.1 23l-6.9-4M16 30v-8M3.9 23l6.9-4M3.9 9l6.9 4"
          strokeWidth={1.25}
        />
      </svg>

      <span className="flex items-baseline gap-1.5 leading-none" aria-hidden="true">
        <span className={`${accent.className} text-[1.7rem] italic sm:text-[2rem] xl:text-[2.4rem]`}>
          Nini’s
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-xs xl:text-sm">
          Cam
        </span>
      </span>
    </Link>
  );
}

function SocialList({ className }: { className: string }) {
  return (
    <ul className={`flex items-center ${className}`}>
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:text-white ${focusRing}`}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <>
    <div
      aria-hidden="true"
      onClick={() => setOpen(false)}
      className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />
    <header
      className={`${body.className} sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 shadow-lg shadow-black/30 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 lg:px-8 2xl:px-6 ${
          scrolled ? "py-3 lg:py-4" : "py-4 sm:py-5 lg:py-7"
        }`}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-12 2xl:gap-24">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`group relative whitespace-nowrap py-2 text-[15px] text-white/90 aria-[current=page]:text-white transition-colors hover:text-white xl:text-lg 2xl:text-xl ${focusRing}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialList className="hidden gap-1 lg:flex xl:gap-4 2xl:gap-8" />

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className={`relative flex h-10 w-10 items-center justify-center lg:hidden ${focusRing}`}
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-50 grid bg-black shadow-2xl shadow-black/50 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="flex max-h-[calc(100dvh-4.5rem)] flex-col overflow-y-auto border-t border-white/10 px-4 pb-8 pt-2 sm:px-6"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li
                  key={link.label}
                  className={`border-b border-white/5 transition-all duration-300 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${i * 50 + 100}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-4 text-lg text-white/90 transition-colors hover:text-white sm:text-xl ${focusRing}`}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-4 w-4 text-white/40"
                      aria-hidden="true"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <SocialList className="mt-6 gap-3" />
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}
