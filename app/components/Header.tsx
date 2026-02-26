"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subtitle = "ฝ่ายพิธีการทางการทูต OFM/VISA DESK";

export default function Header() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState("4rem");

  // Fit title text to container width
  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const title = titleRef.current;
      if (!container || !title) return;

      const containerWidth = container.clientWidth;
      let low = 10;
      let high = 300;
      title.style.fontSize = high + "px";

      while (high - low > 0.5) {
        const mid = (low + high) / 2;
        title.style.fontSize = mid + "px";
        if (title.scrollWidth <= containerWidth) {
          low = mid;
        } else {
          high = mid;
        }
      }
      title.style.fontSize = low + "px";
      setFontSize(low + "px");
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const letters = Array.from(subtitle);

  const letterContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 2 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  };

  return (
    <header className="w-full">
      {/* Top black bar */}
      <div className="w-full bg-black py-2">
        <p className="text-center text-xs text-white md:text-sm">
          สถานเอกอัครราชทูต ณ กรุงวอชิงตัน
        </p>
      </div>

      {/* Main header */}
      <div className="w-full bg-white">
        <div className="mx-auto w-full px-3 py-3 md:py-5">

          {/* Row 1: Embassy label (left) + desktop nav or mobile hamburger (right) */}
          <div className="flex items-center justify-between">
            {/* Embassy sub-label — always visible on left */}
            <p className="text-xs font-semibold text-[#0c0479] md:text-sm">
              Royal Thai Embassy, Washington, D.C.
            </p>

            {/* Desktop nav */}
            <nav className="hidden gap-10 text-sm text-black/80 md:flex">
              <Link href="/newcomer" className="hover:text-black transition-colors">
                ข้าราชการมาใหม่
              </Link>
              <Link href="/vehicle" className="hover:text-black transition-colors">
                เกี่ยวกับรถ
              </Link>
              <Link href="/departure" className="hover:text-black transition-colors">
                ข้าราชการที่กำลังจะกลับ
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black/70 hover:bg-black/5 md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-3 rounded-lg border border-black/10 bg-white">
                  <Link
                    href="/newcomer"
                    className="block px-4 py-3 text-sm text-black/80 hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    ข้าราชการมาใหม่
                  </Link>
                  <Link
                    href="/vehicle"
                    className="block px-4 py-3 text-sm text-black/80 hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    เกี่ยวกับรถ
                  </Link>
                  <Link
                    href="/departure"
                    className="block px-4 py-3 text-sm text-black/80 hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    ข้าราชการที่กำลังจะกลับ
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Big title — fills full container width */}
          <div className="" ref={containerRef}>
            <h1
              ref={titleRef}
              className="font-extrabold text-[#c40000] leading-none tracking-[0.04em] whitespace-nowrap block"
              style={{ fontSize }}
            >
              RTE PROTOCOL SECTION
            </h1>

            {/* Subtitle: right-aligned directly under the title */}
            <motion.div
              className="flex justify-end -mt-1"
              variants={letterContainer}
              initial="hidden"
              animate="show"
            >
              <p className="text-[11px] font-semibold text-[#0c0479] md:text-sm lg:text-base">
                {letters.map((ch, i) => (
                  <motion.span key={`${ch}-${i}`} variants={letter} className="inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}