"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Dropdown menu data ─── */
const arrivalMenu = [
  {
    group: "แจ้งความประสงค์",
    items: [
      { label: "Notification of Appointment", href: "/arrival/noa" },
      { label: "Notification of Change", href: "/arrival/noc" },
    ],
  },
  {
    group: "คู่มือการมาถึง",
    items: [
      { label: "การหาที่พัก", href: "/arrival/housing" },
      { label: "การขอมีเลข SSN", href: "/arrival/ssn" },
      { label: "การเปิดบัญชีธนาคาร", href: "/arrival/bank" },
      { label: "การซื้อ/เช่าซื้อรถ", href: "/arrival/vehicle-purchase" },
      { label: "การทำประกันรถยนต์", href: "/arrival/auto-insurance" },
      { label: "การขอมีใบขับขี่", href: "/arrival/driver-license" },
      { label: "การขึ้นทะเบียนรถ", href: "/arrival/registration" },
      { label: "การขอบัตร Tax Exemption", href: "/arrival/tax-exemption" },
    ],
  },
];

const terminationMenu = [
  {
    group: "แจ้งความประสงค์",
    items: [
      { label: "Notification of Termination", href: "/termination/not" },
    ],
  },
  {
    group: "คู่มือการกลับประจำการ",
    items: [
      { label: "การขายรถ/การคืนรถเช่าซื้อ", href: "/termination/vehicle-sale" },
    ],
  },
];

type MenuSection = { group: string; items: { label: string; href: string }[] };

function DesktopDropdown({
  label,
  menu,
  open,
  onOpen,
  onClose,
  onClick,
  active,
}: {
  label: string;
  menu: MenuSection[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClick: () => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        onClick={onClick}
        className={`relative inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm lg:text-base font-medium transition-colors ${
          open
            ? "bg-[#0c0479]/6 text-[#0c0479]"
            : active
            ? "text-[#0c0479]"
            : "text-black/70 hover:bg-black/4 hover:text-black"
        }`}
      >
        {label}
        {active && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#c40000]" />
        )}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className="absolute right-0 top-full mt-2 w-72 origin-top-right rounded-xl border border-black/6 bg-white p-2 shadow-xl shadow-black/8"
          >
            {menu.map((section) => (
              <div key={section.group} className="p-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-black/35">
                  {section.group}
                </p>
                <div className="space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-black/70 transition-colors hover:bg-[#0c0479]/5 hover:text-[#0c0479]"
                    >
                      <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/30 transition-colors group-hover:bg-[#c40000]" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  const arrivalPaths = ["/noa", "/noc", "/arrival"];
  const termPaths = ["/termination"];
  const isArrivalActive = arrivalPaths.some((p) => pathname.startsWith(p));
  const isTermActive = termPaths.some((p) => pathname.startsWith(p));
  const isHomeActive = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileArrivalOpen, setMobileArrivalOpen] = useState(false);
  const [mobileTermOpen, setMobileTermOpen] = useState(false);
  const [desktopArrivalOpen, setDesktopArrivalOpen] = useState(false);
  const [desktopTermOpen, setDesktopTermOpen] = useState(false);
  const arrivalTimeout = useRef<NodeJS.Timeout | null>(null);
  const termTimeout = useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const makeHoverHandlers = (
    timeout: React.MutableRefObject<NodeJS.Timeout | null>,
    setOpen: (v: boolean) => void
  ) => ({
    onOpen: () => {
      if (timeout.current) clearTimeout(timeout.current);
      setOpen(true);
    },
    onClose: () => {
      timeout.current = setTimeout(() => setOpen(false), 200);
    },
  });

  const arrivalHandlers = makeHoverHandlers(arrivalTimeout, setDesktopArrivalOpen);
  const termHandlers = makeHoverHandlers(termTimeout, setDesktopTermOpen);

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
        <div className="mx-auto flex h-16 max-w-8xl px-4 lg:px-10 items-center justify-between md:h-18">

          {/* Left — Logo / wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              width={40}
              height={40}
              src="/Emb_logo.png"
              alt="Royal Thai Embassy Crest"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="block lg:text-xl font-bold text-[#0c0479] leading-none">
                PROTOCOL PORTAL
              </span>
              <span className="block text-sm lg:text-base font-medium uppercase text-black/40 leading-none">
                สถานเอกอัครราชทูต ณ กรุงวอชิงตัน
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              className={`relative rounded-lg px-4 py-2 text-sm lg:text-base font-medium transition-colors ${
                isHomeActive ? "text-[#0c0479]" : "text-black/70 hover:bg-black/4 hover:text-black"
              }`}
            >
              หน้าแรก
              {isHomeActive && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#c40000]" />
              )}
            </Link>

            <DesktopDropdown
              label="ข้าราชการประจำการใหม่"
              menu={arrivalMenu}
              open={desktopArrivalOpen}
              active={isArrivalActive}
              onOpen={arrivalHandlers.onOpen}
              onClose={arrivalHandlers.onClose}
              onClick={() => setDesktopArrivalOpen((v) => !v)}
            />

            <DesktopDropdown
              label="ข้าราชการกลับประจำการ"
              menu={terminationMenu}
              open={desktopTermOpen}
              active={isTermActive}
              onOpen={termHandlers.onOpen}
              onClose={termHandlers.onClose}
              onClick={() => setDesktopTermOpen((v) => !v)}
            />
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-black/60 transition-colors hover:bg-black/4 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              if (mobileOpen) {
                setMobileArrivalOpen(false);
                setMobileTermOpen(false);
              }
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
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/4"
              >
                หน้าแรก
              </Link>

              {/* ข้าราชการประจำการใหม่ accordion */}
              {[
                { label: "ข้าราชการประจำการใหม่", menu: arrivalMenu, open: mobileArrivalOpen, setOpen: setMobileArrivalOpen },
                { label: "ข้าราชการกลับประจำการ", menu: terminationMenu, open: mobileTermOpen, setOpen: setMobileTermOpen },
              ].map(({ label, menu, open, setOpen }) => (
                <div key={label}>
                  <button
                    onClick={() => setOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-black/4"
                  >
                    {label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 pl-4">
                          {menu.map((section) => (
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
                                    setOpen(false);
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}