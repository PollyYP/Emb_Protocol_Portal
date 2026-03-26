"use client";

import Link from "next/link";
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

const changeTypes = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "การเปลี่ยนที่อยู่",
    urgency: "สำคัญมาก",
    urgencyColor: "red",
    body: "เมื่อย้ายที่พักใหม่ ต้องแจ้ง OFM ทันที เนื่องจากที่อยู่ในระบบต้องตรงกับที่อยู่จริงเสมอ โดยเฉพาะหากท่านมีรถทะเบียนทางการทูต ใบขับขี่ หรือบัตร Tax Exemption ที่ผูกกับที่อยู่เดิม",
    note: "OFM อนุโลมให้ใช้ที่อยู่สถานเอกอัครราชทูตฯ ชั่วคราวในช่วงแรก แต่ต้องอัปเดตทันทีเมื่อได้ที่อยู่แน่นอน",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "การเปลี่ยนตำแหน่ง / หน้าที่",
    urgency: "ต้องแจ้ง",
    urgencyColor: "blue",
    body: "หากมีการเปลี่ยนแปลงตำแหน่งหน้าที่หรือระดับชั้นทางการทูต เช่น การปรับตำแหน่ง หรือการเพิ่มบทบาทหน้าที่ใหม่ ต้องแจ้ง OFM เพื่ออัปเดตข้อมูลในระบบและบัตรประจำตัวทางการทูต",
    note: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "การเปลี่ยนข้อมูลส่วนตัว",
    urgency: "ต้องแจ้ง",
    urgencyColor: "blue",
    body: "ครอบคลุมถึงการเปลี่ยนชื่อ-นามสกุล (เช่น หลังสมรส) การต่ออายุหนังสือเดินทาง หรือการเปลี่ยนแปลงข้อมูลส่วนตัวอื่น ๆ ที่ปรากฏในบัตรประจำตัวทางการทูต",
    note: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "การเปลี่ยนสถานภาพสมรส / ผู้ติดตาม",
    urgency: "ต้องแจ้ง",
    urgencyColor: "blue",
    body: "การสมรส การหย่าร้าง การมีบุตร หรือการที่ผู้ติดตามเดินทางออกจากสหรัฐฯ ล้วนต้องแจ้ง OFM เพื่ออัปเดตสถานะ และส่งผลต่อสิทธิ์ทางการทูตของผู้ที่เกี่ยวข้องด้วย",
    note: "บุตรที่เกิดในสหรัฐฯ ต้องแจ้งเพิ่มในระบบ OFM โดยเร็ว",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "การเปลี่ยนแปลงข้อมูลรถยนต์",
    urgency: "ต้องแจ้ง",
    urgencyColor: "blue",
    body: "การซื้อรถคันใหม่ การขาย การเปลี่ยนประกัน หรือข้อมูลรถยนต์ที่เปลี่ยนแปลงต้องแจ้ง OFM ให้ทันสมัยอยู่เสมอ เนื่องจากทะเบียนรถทางการทูตผูกกับข้อมูลในระบบ OFM โดยตรง",
    note: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "การเปลี่ยนสถานะ",
    urgency: "สำคัญมาก",
    urgencyColor: "red",
    body: "หากสถานะวีซ่าที่ท่านยื่นขอเปลี่ยนแปลงได้รับอนุมัติ กรุณาแจ้งให้ฝ่ายพิธีฯ ทราบโดยเร็ว เพื่อดำเนินการอัปเดตข้อมูลในระบบของ OFM ต่อไป",
    note: null,
  },
];

const warnings = [
  {
    title: "ไม่มีกำหนดเวลา แต่ต้องรีบแจ้ง",
    body: "แม้ OFM จะไม่กำหนดระยะเวลาเฉพาะเจาะจงสำหรับ NOC แต่ข้อมูลในระบบต้องเป็นปัจจุบันอยู่เสมอ การปล่อยให้ข้อมูลล้าสมัยอาจก่อให้เกิดปัญหาในขั้นตอนอื่น ๆ เช่น การต่อทะเบียนรถ หรือการใช้สิทธิ์ Tax Exemption",
  },
  {
    title: "ผู้ติดตามทุกคนต้องอัปเดตด้วย",
    body: "การเปลี่ยนแปลงที่กระทบผู้ติดตาม เช่น การย้ายที่อยู่ หรือการเปลี่ยนสถานภาพ ต้องแจ้งครอบคลุมทุกคนในครอบครัวที่ขึ้นทะเบียนกับ OFM ไว้ ไม่ใช่เฉพาะข้าราชการ",
  },
  {
    title: "ฝ่ายพิธีฯ เป็นผู้ดำเนินการให้",
    body: "ท่านเพียงแจ้งให้ฝ่ายพิธีฯ (OFM/VISA Desk) ทราบพร้อมเอกสารประกอบที่เกี่ยวข้อง ฝ่ายพิธีฯ จะดำเนินการยื่นคำร้องออนไลน์ให้ท่าน",
  },
];

export default function NOCPage() {
  return (
    <main className="w-full bg-white">

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-[#0c0479]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#c40000]/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-white/4 blur-3xl" />
        <div className="absolute left-0 top-0 h-full w-1 bg-[#c40000]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c40000]" />
              OFM · Person Management
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
              Notification of
              <span className="text-[#c40000]"> Change</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">
              เมื่อข้อมูลส่วนตัวหรือข้อมูลทางการทูตมีการเปลี่ยนแปลง ท่านต้องแจ้งให้ฝ่ายพิธีการทางการทูต <br/>
              ดำเนินการยื่นขอเปลี่ยนแปลงข้อมูลกับ OFM ทันที เพื่อให้ข้อมูลของท่านในระบบ OFM ถูกต้อง <br/> และไม่กระทบสิทธิ์ทางการทูต
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ══════════ WHAT IS NOC ══════════ */}
      <section className="w-full py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">เกี่ยวกับ NOC</p>
              <h2 className="mt-2 text-xl font-extrabold text-[#0c0479] md:text-4xl">
                Notification of Change คืออะไร
              </h2>
              <div className="mt-4 h-px w-12 bg-[#c40000]" />
              <div className="mt-6 space-y-4 leading-relaxed text-black/60 text-base">
                <p>
                  Notification of Change (NOC) คือกระบวนการแจ้งการเปลี่ยนแปลงข้อมูลอย่างเป็นทางการต่อ OFM
                  เพื่อให้ข้อมูลในระบบของข้าราชการและผู้ติดตามเป็นปัจจุบันและถูกต้องอยู่เสมอ ข้อมูลที่ต้องแจ้งมีตั้งแต่ที่อยู่ในสหรัฐฯ
                  ตำแหน่งหน้าที่ สถานภาพสมรส ไปจนถึงข้อมูลรถยนต์และข้อมูลส่วนตัวอื่น ๆ ที่เกี่ยวข้องกับสถานะทางการทูต
                  ตลอดช่วงเวลาที่ประจำการอยู่ในสหรัฐฯ
                </p>
                <p>
                  ความถูกต้องของข้อมูลใน OFM มีผลโดยตรงต่อสิทธิ์ทางการทูตหลายด้าน
                  ไม่ว่าจะเป็นการใช้บัตร Tax Exemption การขับรถด้วยทะเบียนทางการทูต
                  หรือการได้รับสิทธิ์คุ้มครองทางกฎหมายในฐานะนักการทูต
                </p>
                <p>
                  ข้อมูลที่ไม่ตรงกับความเป็นจริงอาจทำให้เกิดปัญหาในการใช้สิทธิ์ต่าง ๆ
                  หรือในกรณีที่ต้องยืนยันตัวตนกับหน่วยงานของสหรัฐฯ
                  ดังนั้นควรแจ้งทันทีเมื่อมีการเปลี่ยนแปลง ไม่ว่าจะเล็กน้อยเพียงใด
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-3">
                {warnings.map((w, idx) => (
                  <div key={idx} className="rounded-xl border border-black/6 bg-[#fafafa] p-5">
                    <p className="font-extrabold text-[#0c0479] text-base">{w.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-black/55">{w.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ CHANGE TYPES ══════════ */}
      <section className="w-full bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">ประเภทการเปลี่ยนแปลง</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-3xl">กรณีที่ต้องแจ้ง NOC</h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
            <p className="mt-4 text-sm text-black/50 md:text-base">
              หากท่านพบว่าสถานการณ์ของท่านตรงกับรายการใดรายการหนึ่งด้านล่าง กรุณาติดต่อฝ่ายพิธีฯ โดยเร็ว
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {changeTypes.map((ct, idx) => (
              <FadeIn key={idx} delay={idx * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      ct.urgencyColor === "red" ? "bg-[#c40000]/8 text-[#c40000]" :
                      ct.urgencyColor === "amber" ? "bg-amber-50 text-amber-500" :
                      "bg-[#0c0479]/8 text-[#0c0479]"
                    }`}>
                      {ct.icon}
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      ct.urgencyColor === "red" ? "bg-[#c40000]/8 text-[#c40000]" :
                      ct.urgencyColor === "amber" ? "bg-amber-50 text-amber-600" :
                      "bg-[#0c0479]/8 text-[#0c0479]"
                    }`}>
                      {ct.urgency}
                    </span>
                  </div>
                  <h3 className="mt-4 font-extrabold text-black/80">{ct.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-black/55">{ct.body}</p>
                  {ct.note && (
                    <div className="mt-4 rounded-lg border border-amber-200/60 bg-amber-50/70 px-4 py-3 text-xs leading-relaxed text-amber-800/80">
                      💡 {ct.note}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW TO ══════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">วิธีดำเนินการ</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-3xl">ขั้นตอนการแจ้ง NOC</h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                no: "01",
                title: "แจ้งฝ่ายพิธีฯ",
                body: "ติดต่อฝ่ายพิธีฯ (OFM/VISA Desk) ทางอีเมลหรือด้วยตนเอง พร้อมแจ้งรายละเอียดการเปลี่ยนแปลงที่ต้องการอัปเดต",
              },
              {
                no: "02",
                title: "เตรียมเอกสารประกอบ",
                body: "เตรียมเอกสารที่เกี่ยวข้องกับการเปลี่ยนแปลงนั้น ๆ เช่น ทะเบียนบ้านใหม่ ทะเบียนสมรส สูติบัตร หรือหนังสือเดินทางใหม่ ตามแต่กรณี",
              },
              {
                no: "03",
                title: "ฝ่ายพิธีฯ ดำเนินการให้",
                body: "ฝ่ายพิธีฯ จะดำเนินการแบบออนไลน์ในระบบ OFM ให้ท่าน",
              },
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-7 shadow-sm">
                  <span className="text-5xl font-extrabold text-[#0c0479]/8">{step.no}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-[#0c0479]">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-black/55">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT CTA ══════════ */}
      <section className="w-full bg-[#0c0479] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">หากมีการเปลี่ยนแปลงข้อมูล</p>
                <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">ติดต่อฝ่ายพิธีฯ</h2>
                <p className="mt-2 text-sm text-white/50">OFM/VISA Desk พร้อมดำเนินการให้ท่าน</p>
              </div>
              <a
                href="mailto:protocol@thaiembdc.org"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-[#c40000] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#a80000] active:scale-[0.97]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                protocol@thaiembdc.org
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}