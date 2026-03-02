"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OfmSection() {
  const subtitle = "ทำความรู้จัก OFM";
  const subtitleLetters = Array.from(subtitle);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, amount: 0.5 });
  return (
    <section className="w-full">
      <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-center md:gap-10">

          {/* Image */}
          <div className="w-full md:w-1/2">
          <div ref={titleRef}>
          <motion.h2
            className="mt-4 text-xl font-extrabold uppercase tracking-tight text-[#c40000] md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            GET TO KNOW OFM
          </motion.h2>

          <motion.p
            className="text-sm font-semibold italic tracking-widest text-[#0c0479]/60 md:text-base lg:text-lg"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.025, delayChildren: 0.4 } },
            }}
          >
            {subtitleLetters.map((ch, idx) => (
              <motion.span
                key={`${ch}-${idx}`}
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
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src="/ofmLogo.png"
                alt="Office of Foreign Missions"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-extrabold text-[#1f3f9a] md:text-3xl">
              Office of Foreign Missions (OFM)
            </h3>

            <p className="mt-4 text-sm text-black/80 md:text-base">
              The Office of Foreign Missions (OFM) เป็นหน่วยงานภายใต้กระทรวงการต่างประเทศสหรัฐอเมริกา
              มีหน้าที่กำกับดูแลและประสานงานกิจการที่เกี่ยวข้องกับนักการทูต เจ้าหน้าที่สถานทูตฯ และสถานกงสุลฯ
              ในสหรัฐอเมริกา รวมไปถึงลูกจ้างท้องถิ่นทุกคนที่ทำงานกับสถานทูตฯ สถานกงสุลฯ
              เพื่อให้เป็นไปตามกฎหมายและระเบียบข้อบังคับที่เกี่ยวข้อง
            </p>

            <p className="mt-4 text-sm text-black/80 md:text-base">
              นักการทูต ข้าราชการและเจ้าหน้าที่ที่เดินทางมาปฏิบัติหน้าที่ใหม่
              จำเป็นต้องดำเนินการตามขั้นตอนที่กำหนด เช่น
              การแจ้งเข้ารับตำแหน่ง (Notification of Appointment หรือ NOA)
              การขึ้นทะเบียนยานพาหนะ (Vehicle Registration)
              การขอรับบัตรยกเว้นภาษี (Tax Exemption Card) และการดำเนินการด้านสถานะทางการทูตอื่น ๆ
              ผ่านระบบของ OFM ตามระเบียบของทางการสหรัฐฯ
            </p>
            <a
              href="https://www.state.gov/bureaus-offices/under-secretary-for-management/office-of-foreign-missions/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center bg-[#e0261c] rounded-lg px-4 py-2 text-sm font-extrabold text-white border border-white/30 hover:bg-[#1f3f9a] transition-colors"
            >
              อ่านเพิ่มเติมเกี่ยวกับ OFM
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}