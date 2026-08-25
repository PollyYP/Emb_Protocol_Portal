"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

/* ─── Fade-in wrapper ─── */
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
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── I-94 Modal ─── */
function I94Modal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="i94-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="i94-panel"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#0c0479]/50 font-semibold">ตัวอย่างเอกสาร</p>
              <h3 className="text-base font-bold text-black/80">I-94 Arrival/Departure Record</h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black/40 hover:bg-black/10 hover:text-black/60 transition-colors"
              aria-label="ปิด"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image area */}
          <div className="p-5">
            <div className="rounded-xl overflow-hidden border border-black/8 bg-gray-50">
              {/* Replace src with your actual I-94 example image path e.g. /images/i94-example.png */}
              <img
                src="/i94.png"
                alt="ตัวอย่างเอกสาร I-94"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Callout: where to find expiry date */}
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/60 px-4 py-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p className="text-xs leading-relaxed text-amber-800/80">
                <span className="font-semibold">วันหมดอายุ</span> ดูได้ที่{" "}
                <span className="font-semibold">มุมล่างขวาของเอกสาร</span>{" "}
                ตรวจสอบให้แน่ใจว่าวันดังกล่าวยังไม่หมดอายุก่อนที่เจ้าหน้าที่พิธีฯ จะนำเอกสารไปส่ง
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function VisaPage() {
  const [showI94Modal, setShowI94Modal] = useState(false);

  return (
    <>
      {/* ══════════ I-94 MODAL ══════════ */}
      {showI94Modal && <I94Modal onClose={() => setShowI94Modal(false)} />}

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0c0479] via-[#150d6b] to-[#1a0f8a]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40000]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c40000]" />
              Visa Service
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white lg:text-5xl">
              การต่ออายุวีซ่า A-2
              <br />
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">
              Diplomatic / Official Visa Reissuance
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-white/60">
              การขอต่ออายุวีซ่า A-2 ผ่านฝ่ายพิธีการทูต <br/>
              สถานเอกอัครราชทูต ณ กรุงวอชิงตัน
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ KEY INFO ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-bold tracking-tight text-[#0c0479] lg:text-3xl">
                ภาพรวมการต่ออายุวีซ่า
              </h2>
              <p className="mt-4 text-sm lg:text-base leading-relaxed text-black/50">
                ขณะนี้ สถานเอกอัครราชทูต ณ กรุงวอชิงตัน มีข้อสังเกตว่า การขอต่ออายุวีซ่าประเภท A-2 
                ได้รับการขยายระยะเวลาจากเดิม 6 เดือน เป็น 5 ปี ตามหลักการต่างตอบแทน (Diplomatic Reciprocity) 
                อย่างไรก็ดี ฝ่ายสหรัฐฯ ยังมิได้มีหนังสือแจ้งอย่างเป็นทางการเกี่ยวกับการเปลี่ยนแปลงดังกล่าว
                ทั้งนี้ หากท่านยังคงถือวีซ่าประเภท A-2 ที่มีอายุ 6 เดือน และวีซ่าดังกล่าวใกล้หมดอายุ 
                แต่มีความจำเป็นต้องใช้หนังสือเดินทางในการเดินทางเข้า-ออกประเทศ 
                ท่านสามารถดำเนินการต่ออายุวีซ่าเพื่อให้วีซ่ามีสถานะเป็นปัจจุบันอยู่เสมอได้ โดยมีแนวทางการดำเนินการ ดังนี้
              </p>
              <p>
                1. การต่ออายุวีซ่าจะต้องดำเนินการผ่าน Diplomatic Liaison Division ณ กรุงวอชิงตัน
              </p>
              <p>
                2. สำหรับผู้ที่ปฏิบัติหน้าที่อยู่ในรัฐอื่น ขอให้ประสานงานผ่านสถานกงสุลใหญ่ในพื้นที่ก่อน 
                เพื่อให้สถานกงสุลใหญ่ประสานมายังสถานเอกอัครราชทูตฯ ในการดำเนินการต่อไป
              </p>
              <p>
                3. เมื่อสถานกงสุลใหญ่ประสานมายังสถานเอกอัครราชทูตฯ แล้ว ฝ่ายพิธีการทูตจะเป็นผู้ดำเนินการประสานไปยัง Diplomatic Visa Office ต่อไป
              </p>
            </div>
          </FadeIn>

          {/* Key facts */}
          <FadeIn className="mt-12" delay={0.1}>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">กฎ 60 วัน</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  ยื่นได้เมื่อวีซ่าเหลืออายุ<br />ไม่เกิน 60 วัน หรือ<br />หมดอายุแล้ว
                </p>
              </div>

              <div className="rounded-2xl border border-[#c40000]/8 bg-[#c40000]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#c40000]/10">
                  <svg className="h-6 w-6 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#c40000]">รูปถ่าย</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  รูปถ่ายต้องเป็นไปตาม<br />มาตรฐาน U.S. Visa<br />อย่างเคร่งครัด
                </p>
              </div>

              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">เอกสารหลัก</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  Application, สำเนา passport,<br />สำเนาวีซ่า และ I-94
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Frequently requested additional docs since Jan 2569 */}
          <FadeIn className="mt-6">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/40 shadow-sm">
              <div className="h-1 w-full bg-linear-to-r from-[#7c3aed] to-[#a855f7]" />
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-700/10">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-purple-900">
                    ประกาศ: เอกสารที่ถูกขอเพิ่มเติมบ่อยตั้งแต่มกราคม 2569
                  </h3>
                </div>
                <p className="text-xs lg:text-sm leading-relaxed text-black/60 mb-4">
                  ผู้ติดตามที่เป็นบุคคลในครอบครัวที่ไม่ใช่คู่สมรสหรือบุตรและถือหนังสือเดินทางธรรมดา (ปกสีแดงเลือดหมู) จะต้องแสดงเอกสารเพิ่มเติมอย่างใดอย่างหนึ่ง ดังนี้
                </p>
                <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-3 mb-4">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-xs lg:text-sm leading-relaxed text-red-800/80">
                    หนังสือรับรองจากสถานเอกอัครราชทูตฯ เพียงอย่างเดียว{" "}
                    <span className="font-bold">ไม่เพียงพออีกต่อไป</span>
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      num: "1",
                      title: "หลักฐานประกันสุขภาพ",
                      detail: "ที่ระบุเลข Policy และมีรัฐบาลไทยหรือสำนักงานของท่านเป็นผู้รับผิดชอบค่าใช้จ่าย",
                    },
                    {
                      num: "2",
                      title: "คำสั่งย้าย หรือคำสั่งแต่งตั้ง",
                      detail: "ที่มีชื่อผู้ติดตาม ระบุค่าใช้จ่ายในการเดินทาง และออกให้โดยรัฐบาลไทยหรือสำนักงานของท่าน",
                    },
                    {
                      num: "3",
                      title: "หลักฐานค่าใช้จ่ายที่รัฐบาลไทยเป็นผู้รับผิดชอบ",
                      detail: "ได้แก่ ค่าการศึกษา ค่าที่พัก หรือค่าใช้จ่ายในการโยกย้ายถิ่นฐาน สำหรับผู้ติดตามที่มีอายุเกิน 23 ปี",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3 rounded-xl border border-purple-100 bg-white/60 p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white">
                        {item.num}
                      </div>
                      <div>
                        <p className="font-semibold text-xs lg:text-sm text-purple-900">{item.title}</p>
                        <p className="mt-0.5 text-xs text-black/50">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ DETAILED CONTENT ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-6">

          <FadeIn>
            <div className="mx-auto max-w-4xl pt-12 pb-2">
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] lg:text-3xl">
                รายละเอียด
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-[#c40000]" />
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-8 pb-12">

            {/* Documents Required */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      01
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      เอกสารที่ต้องใช้
                    </h3>
                  </div>
                  <div className="mt-5 space-y-3 text-sm lg:text-base leading-relaxed text-black/55">
                    <p>
                      นอกจากหนังสือเดินทาง เอกสารที่ต้องจัดเตรียมสำหรับการยื่นขอต่ออายุวีซ่า ได้แก่
                    </p>
                    {[
                      { num: "1", label: "แบบฟอร์มคำร้อง", sub: "Application" },
                      { num: "2", label: "สำเนาหนังสือเดินทาง", sub: "Copy of Passport" },
                      { num: "3", label: "สำเนาวีซ่า", sub: "Copy of Visa" },
                      { num: "4", label: "I-94", sub: "ดูข้อควรระวังด้านล่าง" },
                      { num: "5", label: "ซองไปรษณีย์ที่ชำระค่าไปรษณียากรแล้ว", sub: "เพื่อให้ฝ่ายพิธีฯ นำส่งคืนหนังสือเดินทาง — แนะนำ UPS เพื่อความรวดเร็วในการจัดส่ง" },
                    ].map((item) => (
                      <div key={item.num} className="flex items-center gap-3 rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-4">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">
                          {item.num}
                        </div>
                        <div>
                          <p className="font-semibold text-[#0c0479]">{item.label}</p>
                          <p className="text-xs text-black/40">{item.sub}</p>
                        </div>
                      </div>
                    ))}

                    {/* 60-day rule */}
                    <div className="mt-2 rounded-xl border border-[#0c0479]/10 bg-gray-50 p-4 text-sm leading-relaxed text-black/55 space-y-2">
                      <p className="text-base font-semibold text-[#0c0479]">เงื่อนไขการยื่นคำขอต่ออายุ</p>
                      <p className="text-xs lg:text-sm">
                        หากวีซ่า<span className="font-semibold text-black/75">ยังไม่หมดอายุ</span> สามารถยื่นคำขอล่วงหน้าได้
                        แต่ต้องอยู่ในช่วง<span className="font-semibold text-black/75">ไม่เกิน 60 วันก่อนวันหมดอายุ</span>{" "}
                        <br/>เช่น หากวีซ่าจะหมดอายุภายใน 58 วัน ยื่นได้ทันที
                        แต่หากยังเหลืออีก 70 วัน ยังไม่สามารถยื่นได้ ต้องรอให้เข้าสู่ช่วง 60 วันก่อน
                      </p>
                      <p className="text-xs lg:text-sm">
                        อย่างไรก็ตาม หากวีซ่า<span className="font-semibold text-black/75">หมดอายุแล้ว</span>{" "}
                        สามารถยื่นคำขอต่ออายุได้ทันที
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* I-94 Detail */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#b45309] to-[#d97706]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-sm font-bold text-amber-700">
                      02
                    </div>
                    <h3 className="text-sm lg:text-lg font-bold tracking-tight text-black/85">
                      ข้อควรระวัง: I-94 หมดอายุ
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p className="text-sm lg:text-base">
                      หลังจากที่ท่านทำการขอประวัติการเข้า - ออกประเทศ (I-94 Record) ผ่านระบบออนไลน์
                      เอกสารดังกล่าวจะมีผลใช้ได้ภายในเดือนที่ท่านทำการขอข้อมูล
                      โดยสามารถสังเกต<span className="font-semibold text-black/75">วันหมดอายุ</span>ได้ที่<span className="font-semibold text-black/75"> มุมด้านล่างขวาของเอกสาร ซึ่งจะระบุวัน เดือน ปี กำกับไว้ </span>
                    </p>
                    <p className="text-sm lg:text-base">
                      ตัวอย่างเช่น หากเอกสารระบุวันหมดอายุที่ 01/31/2026
                      เอกสารฉบับดังกล่าวจะมีผลใช้ได้จนถึงวันที่ 31 มกราคม 2569
                      แม้ว่าท่านจะทำการตรวจสอบและสั่งพิมพ์เอกสารในช่วงใกล้สิ้นเดือน เช่น พิมพ์ออกมาในวันที่
                      28 มกราคม 2569 เอกสาร I-94 ฉบับนั้นก็จะยังคงระบุวันหมดอายุเป็นวันที่ 31 มกราคม 2569
                      ซึ่งอาจทำให้เอกสารหมดอายุก่อนถึงมือเจ้าหน้าที่ได้
                      กรุณาตรวจสอบให้แน่ใจว่า{" "}
                      <span className="font-semibold text-amber-700">
                        วันหมดอายุของ I-94 ยังอยู่ในช่วงระยะเวลา
                      </span>{" "}
                      ที่เจ้าหน้าที่พิธีฯ จะนำเอกสารไปส่ง
                    </p>

                    <div className="flex items-start gap-3 rounded-xl border border-blue-200/60 bg-blue-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-blue-800/80">
                        ดูตัวอย่าง I-94{" "}
                        <button
                          onClick={() => setShowI94Modal(true)}
                          className="font-semibold underline underline-offset-2 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          คลิกที่นี่
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Photo Requirements */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      03
                    </div>
                    <h3 className="text-base lg:text-lg font-bold tracking-tight text-black/85">
                      ข้อกำหนดเรื่องรูปถ่าย
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p className="text-sm lg:text-base">
                      รูปถ่ายที่ใช้ยื่นต่ออายุวีซ่าต้องเป็นไปตามมาตรฐานของกระทรวงการต่างประเทศสหรัฐฯ
                      อย่างเคร่งครัด
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: "📐", title: "ขนาด", detail: "2×2 นิ้ว (51×51 มม.) พื้นหลังสีขาวหรือขาวนวล" },
                        { icon: "🗓️", title: "ล่าสุด", detail: "ถ่ายไม่เกิน 6 เดือนก่อนยื่นเรื่อง" },
                        { icon: "👤", title: "ใบหน้า", detail: "ถ่ายตรง เปิดตาทั้งสองข้าง มองตรงเข้ากล้อง ใบหน้าอยู่ในกรอบ 50–70%" },
                        { icon: "😐", title: "สีหน้า", detail: "แสดงสีหน้าเป็นกลาง หรือยิ้มเล็กน้อยพร้อมปิดปาก" },
                        { icon: "🕶️", title: "แว่นตา", detail: "ห้ามสวมแว่นตาทุกชนิด (บังคับตั้งแต่ปี 2559)" },
                        { icon: "🎩", title: "หมวก / สิ่งปกคลุมศีรษะ", detail: "ห้ามสวม ยกเว้นด้วยเหตุผลทางศาสนา" },
                        { icon: "👂", title: "หู", detail: "ควรเห็นหูทั้งสองข้างให้ชัดเจน" },
                        { icon: "📏", title: "ความสูงศีรษะ", detail: "คางถึงยอดศีรษะ 1–1⅜ นิ้ว (25–35 มม.)" },
                        { icon: "🎨", title: "สี", detail: "ต้องเป็นรูปถ่ายสีเท่านั้น ห้ามขาวดำหรือมีฟิลเตอร์" },
                        { icon: "👔", title: "เครื่องแบบ", detail: "ห้ามสวมเครื่องแบบทหาร ตำรวจ หรือหน่วยงานรัฐ" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 border border-black/5"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-black/75">{item.title}</p>
                            <p className="text-sm text-black/45 mt-0.5 leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-black/5 bg-gray-50 px-5 py-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      <p className="text-xs text-black/40">
                        อ้างอิงจาก{" "}
                        <a
                          href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0c0479] underline underline-offset-2 hover:text-[#c40000] transition-colors"
                        >
                          U.S. Department of State – Photo Requirements
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
          
          {/* Visa Status Tracker */}
            <FadeIn>
              <div className="mx-auto max-w-4xl mb-10 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0a7c4e] to-[#10b981]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700">
                      04
                    </div>
                    <h3 className="text-base lg:text-lg font-bold tracking-tight text-black/85">
                      ติดตามสถานะการอนุมัติวีซ่า
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/55">
                    <p className="text-sm lg:text-base">
                      ท่านสามารถติดตามสถานะการอนุมัติวีซ่าได้ที่{" "}
                      <a
                        href="https://ceac.state.gov/ceacstattracker/status.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0c0479] underline underline-offset-2 hover:text-[#c40000] transition-colors font-medium"
                      >
                        ceac.state.gov
                      </a>
                    </p>

                    {/* Screenshot */}
                    <div className="rounded-xl overflow-hidden border border-black/8 bg-gray-50">
                      <Image
                        src="/visa_check.png"
                        alt="ตัวอย่างหน้าเว็บติดตามสถานะวีซ่า"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Field instructions */}
                    <div className="space-y-3 mt-2">
                      {[
                        {
                          num: "1",
                          label: "Visa Application Type",
                          detail: (
                            <>
                              ให้เลือก{" "}
                              <span className="font-semibold text-black/75">
                                NONIMMIGRANT VISA (NIV)
                              </span>
                            </>
                          ),
                        },
                        {
                          num: "2",
                          label: "Select Location",
                          detail: (
                            <>
                              ให้เลือก{" "}
                              <span className="font-semibold text-black/75">Washington, DC</span>
                            </>
                          ),
                        },
                        {
                          num: "3",
                          label: "Applicant ID or Case Number",
                          detail: (
                            <>
                              มีสองรูปแบบที่ใช้ได้
                              <ul className="mt-2 space-y-1.5 pl-1">
                                <li className="flex gap-2">
                                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 mt-1.5" />
                                  <span>
                                    <span className="font-semibold text-black/70">Applicant ID</span>{" "}
                                    คือหมายเลข Confirmation No. ที่ได้รับตอนกรอกคำร้องออนไลน์ มักขึ้นต้นด้วย{" "}
                                    <span className="font-semibold text-black/70">AA…</span>{" "}
                                    จำนวน 10 หลัก
                                  </span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 mt-1.5" />
                                  <span>
                                    <span className="font-semibold text-black/70">Case Number</span>{" "}
                                    คือหมายเลข Control Number ที่มุมขวาบนของหน้าวีซ่า จำนวน{" "}
                                    <span className="font-semibold text-black/70">14 หลัก</span>
                                  </span>
                                </li>
                              </ul>
                            </>
                          ),
                        },
                      ].map((item) => (
                        <div
                          key={item.num}
                          className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                            {item.num}
                          </div>
                          <div className="text-sm leading-relaxed text-black/55">
                            <span className="font-semibold text-black/75">{item.label}:</span>{" "}
                            {item.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Case number sample image */}
                    <div className="rounded-xl overflow-hidden border border-black/8 bg-gray-50">
                      <Image
                        src="/case_example.png"
                        alt="ตัวอย่างตำแหน่ง Control Number บนหน้าวีซ่า"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Status explanation */}
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 px-5 py-4 space-y-3">
                      <p className="font-semibold text-sm text-emerald-800">ความหมายของสถานะต่าง ๆ</p>
                      <div className="space-y-2">
                        {[
                          {
                            status: "Application Received",
                            color: "bg-blue-500",
                            textColor: "text-blue-700",
                            borderColor: "border-blue-200",
                            bgColor: "bg-blue-50/60",
                            detail: "Diplomatic Visa Office ได้รับเอกสารของท่านแล้ว อยู่ระหว่างการพิจารณา",
                          },
                          {
                            status: "Approved",
                            color: "bg-emerald-500",
                            textColor: "text-emerald-700",
                            borderColor: "border-emerald-200",
                            bgColor: "bg-emerald-50/60",
                            detail: "คำร้องได้รับการอนุมัติแล้ว อยู่ระหว่างการจัดทำวีซ่า",
                          },
                          {
                            status: "Issued",
                            color: "bg-[#0c0479]",
                            textColor: "text-[#0c0479]",
                            borderColor: "border-[#0c0479]/20",
                            bgColor: "bg-[#0c0479]/5",
                            detail: "วีซ่าออกให้แล้ว สามารถไปรับหนังสือเดินทางได้ที่ Diplomatic Visa Office",
                          },
                        ].map((s) => (
                          <div
                            key={s.status}
                            className={`flex items-start gap-3 rounded-lg border ${s.borderColor} ${s.bgColor} px-4 py-3`}
                          >
                            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${s.color}`} />
                            <div>
                              <span className={`font-bold text-sm ${s.textColor}`}>{s.status}</span>
                              <p className="text-xs text-black/50 mt-0.5 leading-relaxed">{s.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pickup hours callout */}
                    <div className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/60 px-4 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm leading-relaxed text-amber-800/80 space-y-1">
                        <p className="font-semibold">เวลารับหนังสือเดินทาง</p>
                        <p>
                          Diplomatic Visa Office อนุญาตให้รับหนังสือเดินทางคืนได้เฉพาะ{" "}
                          <span className="font-semibold">วันจันทร์ พุธ และศุกร์ เวลา 10:00 – 11:00 น.</span>{" "}
                          เท่านั้น เมื่อฝ่ายพิธีฯ รับเอกสารแล้ว จะจัดส่งคืนท่านตามบริษัทไปรษณีย์ที่ท่านส่งซองแนบมา
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          {/* Bottom contact */}
          <FadeIn className="pb-12">
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6">

                {/* Inquiry row */}
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                    <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm lg:text-base font-bold text-black/80">หากมีข้อสงสัย</h3>
                    <p className="mt-1 text-sm text-black/45">ติดต่อฝ่ายพิธีฯ ได้ทางอีเมลหรือโทรศัพท์</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="mailto:protocol@thaiembdc.org"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]"
                    >
                      ส่งอีเมล
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                    <a
                      href="tel:+12022984798"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#0c0479]/20 bg-[#0c0479]/5 px-5 py-2.5 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479]/10 active:scale-[0.97]"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      (202) 298-4798
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-black/6" />

                {/* Mailing address row */}
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c40000]/8">
                    <svg className="h-6 w-6 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zm0 3h.008v.008H5.25V9zm0 3h.008v.008H5.25V12z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-sm lg:text-base font-bold text-black/80">ส่งเอกสารมาที่</h3>
                    <address className="mt-1.5 not-italic text-sm leading-relaxed text-black/45">
                      <span className="font-semibold text-black/60">Protocol Section (OFM/Visa)</span><br />
                      Royal Thai Embassy<br />
                      1024 Wisconsin Ave. N.W.<br />
                      Washington, DC 20007
                    </address>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}