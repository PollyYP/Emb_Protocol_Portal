"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ArrivalPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <main className="w-full bg-white">

      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image src="/washingtondc.jpg" alt="Royal Thai Embassy" fill className="object-cover" style={{ objectPosition: "center 30%" }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content pinned to bottom-center */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="mb-4 text-[8px] lg:text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              Royal Thai Embassy · Washington, D.C.
            </p>
            <h1 className="text-2xl font-extrabold leading-tight text-white lg:text-6xl">
              ยินดีต้อนรับ<br />
              <span className="text-white">ข้าราชการมาประจำการใหม่</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base mx-auto"
            >
              คู่มือฉบับนี้จัดทำขึ้นเพื่อช่วยให้ท่านและครอบครัวเริ่มต้นชีวิตในกรุงวอชิงตัน
              ได้อย่างราบรื่น <br/> ฝ่ายพิธีการทางการทูต OFM/Visa Desk พร้อมช่วยเหลือทุกขั้นตอนในการดำเนินการกับ OFM <br/>
              เพื่อให้ท่านได้รับบัตรประจำตัวทางการทูตและสิทธิ์ต่าง ๆ อย่างครบถ้วน
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
          <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* WELCOME MESSAGE */}
      <section id="welcome" className="w-full bg-[#0c0479] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div ref={titleRef} className="flex flex-col items-center text-center">
            <motion.p
              className="text-[10px] lg:text-xs font-semibold uppercase tracking-[0.25em] text-white/30"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Protocol Section · OFM/VISA Desk
            </motion.p>
            <motion.h2
              className="mt-3 text-xl font-extrabold text-white md:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ฝ่ายพิธีการทูตยินดีให้บริการ
            </motion.h2>
            <motion.p
              className="mt-5 max-w-3xl text-sm leading-relaxed text-white/55 md:text-base"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              ฝ่ายพิธีการทูต (Protocol Section) ของสถานเอกอัครราชทูตฯ มีหน้าที่ดูแลและประสานงาน
              ด้านพิธีการทูตทั้งหมด โดยที่ OFM/Visa Desk มีหน้าที่ดำเนินการเรื่องระเบียบทางการทูตกับ Office of Foreign Missions (OFM)
              ของกระทรวงการต่างประเทศสหรัฐฯ เพื่อให้เป็นไปตามกฎหมายและระเบียบข้อบังคับที่เกี่ยวข้อง และเพื่อรักษาสิทธิ์ของข้าราชการไทยทุกท่าน
            </motion.p>
            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                protocol@thaiembdc.org
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 (202) 298-4798
              </div>
            </motion.div>

            {/* Arrival Guide CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-14 flex flex-col items-center gap-5"
            >
              <motion.h2
                className="text-xl font-extrabold uppercase text-white md:text-3xl"
                initial={{ opacity: 0, y: 16 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              >
                Arrival Guide
              </motion.h2>
              <a
                href="/arrival/housing"
                className="rounded-lg bg-[#c40000] px-12 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#a80000]"
              >
                เริ่มต้นที่นี่
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}