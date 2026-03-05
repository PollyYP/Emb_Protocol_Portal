"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function VehicleSalePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#0c0479] via-[#150d6b] to-[#1a0f8a]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40000]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-44 lg:py-52">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mx-auto max-w-2xl text-center"
          >

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              การขายรถ
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Vehicle Sale / Transfer
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm sm:px-8 sm:py-5">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-400" />
              <p className="text-sm font-semibold text-white/80 sm:text-base">
                Coming Soon
              </p>
            </div>

            <p className="mt-6 text-sm text-white/40">
              หน้านี้อยู่ระหว่างจัดทำเนื้อหา กรุณากลับมาอีกครั้งในภายหลัง
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.97]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              กลับหน้าแรก
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>
    </>
  );
}