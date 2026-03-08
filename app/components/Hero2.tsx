"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  const text = "PROTOCOL SECTION · OFM/VISA DESK";
  const letters = Array.from(text);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="absolute top-0 left-0 right-0 z-10">
        <motion.p
          className="text-right text-xs lg:text-sm font-semibold uppercase italic tracking-[0.15em] text-[#c40000] p-2 bg-[#f3f3f3]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
          }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 4 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <Image
        src="/emb_front3.jpg"
        alt="Royal Thai Embassy"
        fill
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content pinned to bottom-center */}
      <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            Royal Thai Embassy · Washington, D.C.
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white">
            PROTOCOL SECTION
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base mx-auto"
          >
            หากท่านมีข้อสงสัยเกี่ยวกับระเบียบ OFM <br />
            หรือต้องการขยายระยะเวลาการตรวจลงตราของสหรัฐฯ <br />
            OFM/VISA DESK ยินดีให้บริการทุกท่านค่ะ
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      >
        <svg
          className="h-6 w-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}