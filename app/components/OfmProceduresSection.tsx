"use client";

import React, { useMemo, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

type Step = {
  title: string;
  detail: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Notification of Appointment",
    detail: (
      <>
        การรายงานตัวต่อกระทรวงการต่างประเทศสหรัฐฯ เป็นสิ่งแรกที่ต้องดำเนินการเมื่อเดินทางมาถึง กรุณากรอกข้อมูลตามแบบฟอร์มที่ฝ่ายพิธีฯ จัดเตรียมขึ้น พร้อมทั้งแนบแบบฟอร์ม Signature Card
        ที่มีลายเซ็นต์ของท่านและหัวหน้าสำนักงานเรียบร้อยแล้วกลับมาเพื่อให้ฝ่ายพิธีฯ ดำเนินการต่อไป <br/>{" "}
        <div className="mt-4">
          <Link
            href="/arrival/noa"
            className="text-[#0c0479] font-semibold hover:text-[#e0261c]"
          >
            อ่านเพิ่มเติม →
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "Notification of Change",
    detail: (
      <>
        ในช่วงแรก OFM อนุโลมให้ข้าราชการใหม่ใช้ที่อยู่สถานเอกอัครราชทูตฯ ไปก่อน เมื่อได้ที่อยู่แล้ว
        ต้องแจ้ง OFM ทันที หรือหากท่านต้องการเปลี่ยนแปลงข้อมูลส่วนตัวอื่นใด จะต้องแจ้งให้ OFM ทราบเช่นกัน
        ทั้งนี้ ท่านสามารถติดต่อฝ่ายพิธีฯ เพื่อให้ดำเนินการได้
        <div className="mt-4">
          <Link
            href="/arrival/noc"
            className="text-[#0c0479] font-semibold hover:text-[#e0261c]"
          >
            อ่านเพิ่มเติม →
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "การขอมีใบขับขี่",
    detail: (
      <>
        ใบขับขี่ของนักการทูตที่มาประจำการในสหรัฐฯ จะออกโดย OFM เท่านั้น
        และท่านสามารถดำเนินการได้หลังจากได้ทำการรายงานตัว (NOA) เรียบร้อยแล้ว
        <div className="mt-4">
          <Link
            href="/arrival/driver-license"
            className="text-[#0c0479] font-semibold hover:text-[#e0261c]"
          >
            อ่านเพิ่มเติม →
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "การทำประกันรถยนต์",
    detail: (
      <>
        การทำประกันรถยนต์เป็นข้อบังคับตามกฎหมายในทุกมลรัฐ ข้าราชการควรดำเนินการทำประกันให้เรียบร้อย
        ก่อนนำรถออกใช้งาน โดยมีรายละเอียดเกี่ยวกับประเภทความคุ้มครองและขั้นตอนการดำเนินการที่ควรทราบ
        <div className="mt-4">
          <Link
            href="/arrival/auto-insurance"
            className="text-[#0c0479] font-semibold hover:text-[#e0261c]"
          >
            อ่านเพิ่มเติม →
          </Link>
        </div>
      </>
    ),
  },
];

export default function OfmProceduresSection() {
  const subtitle = "ระเบียบปฏิบัติทีต้องดำเนินการกับ OFM";
  const subtitleLetters = Array.from(subtitle);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, amount: 0.5 });
  const rows = useMemo(() => steps, []);

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full">

        {/* Two-band title */}
        <div ref={titleRef}>
          {/* Red title band */}
          <motion.div
            className="w-full bg-[#c40000] py-3 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-xl font-extrabold uppercase italic tracking-widest text-white md:text-3xl">
              OFM Procedures
            </h2>
          </motion.div>

          {/* Navy subtitle band */}
          <motion.div
            className="w-full bg-[#0c0479] py-2 text-center"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.025, delayChildren: 0.4 } },
            }}
          >
            <p className="text-sm font-semibold text-white md:text-base lg:text-lg">
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
            </p>
          </motion.div>
        </div>

        {/* Rows */}
        <div className="mt-8 space-y-4">
          <p className="pl-4 lg:pl-10 text-sm font-semibold uppercase text-[#0c0479]/60 md:text-base">
            ระเบียบที่ทำบ่อย
          </p>
          {rows.map((s, idx) => (
            <StepRow
              key={idx}
              index={idx + 1}
              title={s.title}
              detail={s.detail}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function StepRow({
  index,
  title,
  detail,
}: {
  index: number;
  title: string;
  detail: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 overflow-hidden border border-black/10 md:grid-cols-[220px_1fr_1.2fr]">
        {/* 1) Number box */}
        <div className="bg-[#142a78] p-6 md:p-8">
          <CountInView value={index} />
        </div>

        {/* 2) Subtitle box */}
        <div className="bg-[#e0261c] p-6 md:p-8">
          <h3 className="text-2xl font-extrabold text-white md:text-3xl">
            {title}
          </h3>
        </div>

        {/* 3) Detail box */}
        <div className="bg-[#f3f3f3] p-6 text-sm leading-relaxed text-black/80 md:p-8 md:text-base">
          {detail}
        </div>
      </div>
    </div>
  );
}

function CountInView({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="text-white"
    >
      <div className="text-6xl font-extrabold leading-none md:text-7xl">
        {value}
      </div>
    </motion.div>
  );
}