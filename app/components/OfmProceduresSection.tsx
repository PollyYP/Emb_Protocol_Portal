"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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
        เป็นสิ่งแรกที่ต้องดำเนินการเมื่อเดินทางมาถึง กรุณากรอกข้อมูลตามแบบฟอร์มนี้{" "}
        <a
          href="PUT_LINK_TO_FORM_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-[#e0261c]"
        >
          (คลิกเพื่อเปิดแบบฟอร์ม)
        </a>
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
      </>
    ),
  },
  {
    title: "ระเบียบปฏิบัติเกี่ยวกับรถยนต์",
    detail: (
      <>
        ระเบียบปฏิบัติเกี่ยวกับรถยนต์ เช่น การซื้อ/เช่าซื้อ-ขาย และการขอมีป้ายทะเบียนทางการทูต
        <div className="mt-4">
          <Link
            href="/vehicle"
            className="inline-flex items-center justify-center bg-[#e0261c] px-4 py-2 text-sm font-extrabold text-white hover:bg-white/10 border border-white/30"
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "การขอบัตร Tax Exemption",
    detail: (
      <>
        เฉพาะหัวหน้าสำนักงานเท่านั้นที่จะได้รับบัตรยกเว้นภาษี (Tax Exemption) ทั้งนี้ ท่านสามารถติดต่อฝ่ายพิธีการฯ
        เพื่อให้ดำเนินการได้
      </>
    ),
  },
];

export default function OfmProceduresSection() {
  const rows = useMemo(() => steps, []);

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-[#e0261c] md:text-6xl">
          ระเบียบปฏิบัติที่ต้องดำเนินการกับ OFM
        </h2>

        {/* Rows */}
        <div className="mt-8 space-y-4">
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

/**
 * Big number that fades in + counts up when scrolled into view
 * (slower animation as you requested)
 */
function CountInView({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const durationMs = 1800; // slower
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.max(0, Math.round(eased * value)));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="text-white"
    >
      <div className="text-6xl font-extrabold leading-none md:text-7xl">
        {display}
      </div>
    </motion.div>
  );
}