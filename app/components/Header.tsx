"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Dropdown menu data ─── */
const ofmMenu = [
  {
    group: "Person Management",
    items: [
      { label: "Notification of Appointment", href: "/person-management" },
      { label: "Notification of Change", href: "/person-management" },
      { label: "Notification of Terminate", href: "/person-management" },
    ],
  },
  {
    group: "เกี่ยวกับรถ",
    items: [
      { label: "ขอมีป้ายทะเบียนการทูต", href: "/dmv" },
      { label: "การขอใบขับขี่", href: "/dmv" },
      { label: "การซื้อ/เช่าซื้อรถ", href: "/dmv" },
      { label: "การขายรถ", href: "/dmv" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfmOpen, setMobileOfmOpen] = useState(false);
  const [desktopOfmOpen, setDesktopOfmOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopOfmOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopOfmOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopOfmOpen(false), 200);
  };

  const scrollToArrival = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById("arrival-guide");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/8" : ""
      }`}
    >
      {/* ── Accent stripe ── */}
      <div className="h-1 w-full bg-linear-to-r from-[#0c0479] via-[#1a0f8a] to-[#c40000]" />

      {/* ── Main bar ── */}
      <div className="w-full bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-8xl px-8 items-center justify-between md:h-18">
          {/* Left — Logo / wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              width={40}
              height={40}
              src="/Emb_logo.png"
              alt="Royal Thai Embassy Crest"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="block text-[21px] font-bold tracking-tight text-[#0c0479]">
                RTE PROTOCOL PORTAL
              </span>
              <span className="block text-[10px] font-medium tracking-widest uppercase text-black/40">
                Royal Thai Embassy, Washington, D.C.
              </span>
            </div>
          </Link>

          {/* Center / Right — Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {/* Home */}
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm lg:text-base font-medium text-black/70 transition-colors hover:bg-black/4 hover:text-black"
            >
              หน้าแรก
            </Link>
            {/* ข้าราชการมาใหม่ — scrolls to section */}
            <a
              href="#arrival-guide"
              onClick={scrollToArrival}
              className="rounded-lg px-4 py-2 text-sm lg:text-base font-medium text-black/70 transition-colors hover:bg-black/4 hover:text-black"
            >
              ข้าราชการมาใหม่
            </a>

            {/* ระเบียบ OFM — mega dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDesktopOfmOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm lg:text-base font-medium transition-colors ${
                  desktopOfmOpen
                    ? "bg-[#0c0479]/6 text-[#0c0479]"
                    : "text-black/70 hover:bg-black/4 hover:text-black"
                }`}
              >
                ระเบียบ OFM
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    desktopOfmOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {desktopOfmOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 w-130 origin-top-right rounded-xl border border-black/6 bg-white p-2 shadow-xl shadow-black/8"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {ofmMenu.map((section) => (
                        <div key={section.group} className="p-3">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-black/35">
                            {section.group}
                          </p>
                          <div className="space-y-0.5">
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setDesktopOfmOpen(false)}
                                className="group flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-black/70 transition-colors hover:bg-[#0c0479]/5 hover:text-[#0c0479]"
                              >
                                <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/30 transition-colors group-hover:bg-[#c40000]" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact button */}
            <a
              href="mailto:protocol@thaiembdc.org"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-[#c40000] px-5 py-2 text-sm lg:text-basefont-semibold text-white transition-all hover:bg-[#a80000] active:scale-[0.97]"
            >
              ติดต่อเรา
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-black/60 transition-colors hover:bg-black/4 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              if (mobileOpen) setMobileOfmOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M6 18L18 6" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-black/6 bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
              {/* Home link */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/4"
              >
                หน้าแรก
              </Link>
              {/* Arrival link */}
              <a
                href="#arrival-guide"
                onClick={scrollToArrival}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/4"
              >
                ข้าราชการมาใหม่
              </a>

              {/* OFM accordion */}
              <div>
                <button
                  onClick={() => setMobileOfmOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/4"
                >
                  ระเบียบ OFM
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileOfmOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileOfmOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pl-4">
                        {ofmMenu.map((section) => (
                          <div key={section.group} className="mt-2">
                            <p className="px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-black/35">
                              {section.group}
                            </p>
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileOfmOpen(false);
                                }}
                                className="flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm text-black/60 transition-colors hover:bg-black/4 hover:text-black"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#c40000]/40" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <a
                href="mailto:protocol@thaiembdc.org"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-[#c40000] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#a80000]"
              >
                ติดต่อเรา
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}