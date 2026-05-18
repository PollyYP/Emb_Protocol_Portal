"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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

export default function RegistrationPage() {
  const [showDipNote, setShowDipNote] = useState(false);

  return (
    <>
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
              ALL ABOUT VEHICLE
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              การขึ้นทะเบียนรถยนต์ <br /> และการขอป้ายทะเบียน
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">Vehicle Registration</p>
            <p className="text-base leading-relaxed text-white/60">การขึ้นทะเบียนรถและขอมีป้ายทะเบียนทูต</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ KEY INFO ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-6">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] sm:text-3xl">
                สิ่งที่ควรทราบ
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                การจดทะเบียนรถยนต์ของเจ้าหน้าที่ทางการทูตในสหรัฐฯ
                จะต้องดำเนินการผ่าน Office of Foreign Missions{" "}
                <span className="text-[#0c0479]">(OFM)</span> เท่านั้น
              </p>
              <p className="text-sm leading-relaxed text-amber-800/80">
                ไม่สามารถจดทะเบียนที่ DMV/MVA ของรัฐได้
              </p>
            </div>
          </FadeIn>

          {/* 140-day processing warning */}
          <FadeIn className="mt-6">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-red-200/60 bg-red-50/50 shadow-sm">
              <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-center gap-3">
                  <svg className="animate-bounce h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-base font-bold text-[#c40000]">คำเตือน</p>
                </div>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-red-800/80">
                  ตามหนังสือ กต. สหรัฐฯ ลงวันที่ 31 มีนาคม 2569
                  แจ้งการเปลี่ยนแปลงระยะเวลาการอนุมัติจดทะเบียนรถยนต์ราชการและรถยนต์ส่วนบุคคลของนักการทูต
                  จากเดิมประมาณ <span className="font-semibold">7 วันทำการ</span> เป็น{" "}
                  <span className="font-bold text-[#c40000] underline">140 วัน</span>{" "}
                  นับจากวันที่ OFM ได้รับคำร้องและเอกสารตัวจริงครบถ้วน
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Key facts */}
          <FadeIn className="mt-12" delay={0.1}>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">ป้ายทะเบียนทูต</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  ป้ายทะเบียนเฉพาะสำหรับ<br />บุคลากรทางการทูตเท่านั้น <br />(ป้ายทะเบียนพื้นสีฟ้า ตัวอักษรสีดำ)
                </p>
              </div>

              <div className="rounded-2xl border border-[#c40000]/8 bg-[#c40000]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#c40000]/10">
                  <svg className="h-6 w-6 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#c40000]">OFM ถือ Title</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  ใบกรรมสิทธิ์รถยนต์ <br />(Title Certificate)<br />OFM จะเป็นผู้ครอบครองไว้
                </p>
              </div>

              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">Decal ต่ออายุโดย OFM</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  สติกเกอร์มีอายุ 1 ปี<br />OFM จะเป็นผู้ดำเนินการต่ออายุ เมื่อถึงเดือนที่หมดอายุ ฝ่ายพิธีฯ จะไปรับสติกเกอร์อันใหม่มาให้
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Warning */}
          <FadeIn>
            <div className="mx-auto max-w-4xl mt-6">
              <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-4 lg:px-5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-base leading-relaxed text-red-800/80">
                  <span className="font-semibold text-red-900">โปรดทราบ:</span>{" "}
                  หากมีรถส่วนบุคคลหรือรถสำนักงานที่ไม่ได้แจ้งการต่อประกัน
                  หรือไม่ได้จ่ายค่าปรับเมื่อได้รับใบสั่ง OFM
                  จะไม่ออกสติกเกอร์ (Decal)
                  ใหม่ให้หากมีรถที่ต้องต่ออายุสติกเกอร์ในเดือนนั้น
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ══════════ LICENSE PLATE MOUNTING RULES ══════════ */}
          <FadeIn>
            <div className="mx-auto max-w-4xl mt-6">
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg font-bold tracking-tight text-[#0c0479]">
                    การติดป้ายทะเบียนทูต
                  </h3>
                  <p className="mt-1 text-sm text-black/40">Diplomatic Plate Mounting Requirements</p>

                  {/* ✅ Green check — correct rule */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-200/60 bg-emerald-50/60 px-5 py-4">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm leading-relaxed text-emerald-900/80">
                      <p>
                        ท่านจะได้รับป้ายทะเบียนจำนวน <span className="font-semibold">2 แผ่น</span> — กรุณานำป้ายที่มีสติกเกอร์
                        (Decal) ติดไว้ที่<span className="font-semibold underline">ด้านหลัง</span>ของรถ
                        และป้ายที่ไม่มีสติกเกอร์ติดไว้ที่ <span className="font-semibold">ด้านหน้า</span>
                      </p>
                      <p className="mt-2">
                        เนื่องจากป้ายทะเบียนทูตออกโดย Department of State
                        ซึ่ง<span className="font-semibold">กำหนดให้ต้องติดป้ายทั้งด้านหน้าและด้านหลังอย่างชัดเจน</span>
                      </p>
                      <button
                        onClick={() => setShowDipNote(!showDipNote)}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-emerald-300/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100/80"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        Diplomatic Note 89-346
                        <svg className={`h-3 w-3 transition-transform ${showDipNote ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Expandable PDF embed */}
                      {showDipNote && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 overflow-hidden rounded-lg border border-emerald-200/60"
                        >
                          <iframe
                            src="/vehicle-rule.pdf"
                            className="h-[420px] w-full"
                            title="Diplomatic Note 89-346 — Vehicle Rule"
                          />
                          <div className="flex items-center justify-between border-t border-emerald-200/60 bg-emerald-50/40 px-4 py-2">
                            <p className="text-xs text-emerald-700/60">Diplomatic Note 89-346</p>
                            <a
                              href="/vehicle-rule.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline"
                            >
                              เปิดในแท็บใหม่
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* ❌ Red X — common misconception */}
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-5 py-4">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm leading-relaxed text-red-800/80">
                      <p>
                        กฎที่อนุโลมให้ติดป้ายทะเบียนเฉพาะด้านหลังเพียงแผ่นเดียวนั้น
                        เป็น<span className="font-semibold">กฎหมายท้องถิ่นของสหรัฐฯ ที่ใช้กับป้ายทะเบียนบุคคลธรรมดา</span>ซึ่งออกโดย
                        DMV เท่านั้น ทั้งนี้ หากเป็นป้ายทะเบียนรัฐแมริแลนด์ที่ออกตามกฎหมายของ MVA
                        ก็ยังคงกำหนดให้ต้องติดทั้งด้านหน้าและด้านหลังเช่นกัน
                      </p>
                    </div>
                  </div>

                  {/* Bottom rule summary */}
                  <div className="mt-4 rounded-xl border border-[#0c0479]/10 bg-[#0c0479]/3 px-5 py-4">
                    <p className="text-sm font-semibold leading-relaxed text-[#0c0479]">
                      หลักปฏิบัติ:{" "}
                      <span className="font-normal text-black/55">
                        <span className="text-[#0c0479]">นักการทูตจะต้องปฏิบัติตามระเบียบที่ Department of State กำหนดไว้เป็นลำดับแรกเสมอ </span>
                        หากมีข้อกำหนดเฉพาะที่แตกต่างจากกฎหมายท้องถิ่น ให้ยึดระเบียบของ Department of State เป็นหลัก
                        ก่อนที่จะอ้างอิงกฎหมายท้องถิ่นร่วม
                      </span>
                    </p>
                  </div>

                  {/* Diplomatic plate image */}
                  <div className="mt-6 overflow-hidden rounded-xl border border-black/5">
                    <Image
                      src="/diplomatOfmPlate.png"
                      alt="ตัวอย่างป้ายทะเบียนทูต — Diplomatic License Plate"
                      width={1200}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ DETAILED CONTENT ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section title */}
          <FadeIn>
            <div className="mx-auto max-w-4xl pt-12 pb-2">
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] sm:text-3xl">
                ขั้นตอนการจดทะเบียน
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-[#c40000]" />
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-8 pb-12">
            {/* ── Step 1: Prepare documents ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      01
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      เตรียมเอกสาร
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>กรุณาเตรียมเอกสารต่อไปนี้ก่อนกรอกแบบฟอร์ม โดยท่านจะต้องอัปโหลดเอกสารเหล่านี้ในแบบฟอร์มด้านล่าง</p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        { label: "Purchase Order / Buyer's Order", note: "ซื้อและเช่าซื้อ" },
                        { label: "Odometer Statement", note: "ซื้อและเช่าซื้อ" },
                        { label: "Insurance Declaration Page", note: "ซื้อและเช่าซื้อ" },
                        { label: "Lease Agreement", note: "เช่าซื้อเท่านั้น", highlight: true },
                      ].map((doc) => (
                        <div
                          key={doc.label}
                          className={`flex items-start gap-3 rounded-xl border p-4 ${
                            doc.highlight
                              ? "border-amber-200/60 bg-amber-50/60"
                              : "border-[#0c0479]/8 bg-[#0c0479]/3"
                          }`}
                        >
                          <svg className={`mt-0.5 h-5 w-5 shrink-0 ${doc.highlight ? "text-amber-500" : "text-[#0c0479]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <div>
                            <p className={`text-sm font-semibold ${doc.highlight ? "text-amber-900" : "text-[#0c0479]"}`}>
                              {doc.label}
                            </p>
                            <p className={`mt-0.5 text-xs ${doc.highlight ? "text-amber-700/70" : "text-black/40"}`}>
                              {doc.note}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/80 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-amber-800/80">
                        <span className="font-semibold text-amber-900">หมายเหตุ:</span>{" "}
                        หากซื้อรถ ใช้เพียง 3 เอกสารแรก — หากเช่าซื้อ (Lease) ต้องใช้ครบทั้ง 4 เอกสาร
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 2: Fill in the form ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      02
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      กรอกแบบฟอร์ม
                    </h3>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-black/55">
                    กรอกแบบฟอร์มด้านล่างพร้อมอัปโหลดเอกสารที่เตรียมไว้ในขั้นตอนที่ 1
                    ฝ่ายพิธีฯ จะดำเนินการในระบบ OFM ต่อไป
                  </p>

                  <div className="mt-5">
                    <Link
                      href="https://www.cognitoforms.com/royalthaiembassy1/vehicleregistration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-lg bg-[#0c0479] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]"
                    >
                      กรอกแบบฟอร์ม
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Dealer reminder */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/80 px-4 py-4 lg:px-5">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className="text-sm leading-relaxed text-amber-800/80">
                      <p>
                        <span className="font-semibold text-amber-900">Reminder:</span>{" "}
                        หากท่านซื้อหรือเช่าซื้อรถจาก Dealer
                        กรุณาแจ้งให้ Dealer ส่งเอกสารตัวจริงไปยัง OFM โดยตรง
                        เพื่อให้กระบวนการจดทะเบียนเป็นไปอย่างราบรื่นและรวดเร็ว
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 3: After submission ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      03
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      หลังจากกรอกแบบฟอร์มแล้ว
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      หากคำร้องของท่านได้รับการอนุมัติ
                      ท่านจะได้รับอีเมลจาก OFM ให้ชำระค่าธรรมเนียมในการขึ้นทะเบียนรถยนต์เป็นจำนวน{" "}
                      <span className="font-semibold text-[#0c0479]">$10</span>
                    </p>
                    <p>
                      หลังจากชำระเงินแล้ว กรุณานำส่งหลักฐานการชำระเงินมายังฝ่ายพิธีฯ
                      เพื่อให้ฝ่ายพิธีฯ ไปรับป้ายทะเบียนทูต (Diplomatic Plates) และสติกเกอร์ (Decal) ที่ OFM ในวันพุธถัดไป
                    </p>
                    <div className="flex items-start gap-3 rounded-xl border border-blue-200/60 bg-blue-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-blue-800/80">
                        <span className="font-semibold text-blue-900">หมายเหตุ:</span>{" "}
                        OFM เปิดให้ไปรับป้ายทะเบียนได้เฉพาะ<span className="font-semibold"> วันพุธ </span>เท่านั้น
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── ใบกรรมสิทธิ์รถยนต์ ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      04
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ใบกรรมสิทธิ์รถยนต์ (Title Certificate)
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      เมื่อดำเนินการจดทะเบียนแล้ว OFM จะเป็นผู้ครอบครองใบกรรมสิทธิ์รถยนต์
                      (Title Certificate) ที่มีชื่อของท่านอยู่
                    </p>

                    <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-red-800/80">
                        <span className="font-semibold">สำคัญ:</span>{" "}
                        ท่านจะไม่ได้รับ Title Certificate มาถือไว้เอง OFM จะเป็นผู้ครอบครองไว้ตลอดระยะเวลาที่ท่านใช้รถยนต์คันดังกล่าว
                        <br />
                        <br />
                        ท่านสามารถขอคืน Title ได้ หากต้องการขายรถให้กับบุคคลหรือบริษัทที่ไม่ใช่นักการทูต
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── ป้ายทะเบียนและสติกเกอร์ ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      05
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ป้ายทะเบียนและสติกเกอร์ (Decal)
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      เมื่อ OFM ได้รับเอกสารครบถ้วนแล้ว
                      จะออกป้ายทะเบียนการทูตพร้อมสติกเกอร์ (Decal) ให้
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-5">
                        <div className="flex items-center gap-2.5">
                          <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <p className="text-sm font-semibold text-[#0c0479]">อายุ 1 ปี</p>
                        </div>
                        <p className="mt-2 text-sm text-black/45">สติกเกอร์มีอายุการใช้งาน 1 ปี</p>
                      </div>
                      <div className="rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-5">
                        <div className="flex items-center gap-2.5">
                          <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
                          </svg>
                          <p className="text-sm font-semibold text-[#0c0479]">ต่ออายุอัตโนมัติ</p>
                        </div>
                        <p className="mt-2 text-sm text-black/45">Auto-Renew โดยไม่ต้องดำเนินการเอง</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-blue-200/60 bg-blue-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-blue-800/80">
                        ฝ่ายพิธีการทูตจะเป็นผู้ไปรับป้ายทะเบียนและสติกเกอร์จาก OFM มาให้ท่าน
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Related pages */}
          <FadeIn className="mt-4">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/30">
                หน้าที่เกี่ยวข้อง
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href="/dmv/driver-license"
                  className="flex items-center gap-3 rounded-xl border border-[#0c0479]/10 bg-white p-5 transition-colors hover:bg-[#0c0479]/3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/8">
                    <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0c0479]">การขอใบขับขี่</p>
                    <p className="mt-0.5 text-xs text-black/40">Diplomatic Driver&apos;s License</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link
                  href="/arrival/vehicle-purchase"
                  className="flex items-center gap-3 rounded-xl border border-[#c40000]/10 bg-white p-5 transition-colors hover:bg-[#c40000]/3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c40000]/8">
                    <svg className="h-5 w-5 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#c40000]">การซื้อ / เช่าซื้อรถ</p>
                    <p className="mt-0.5 text-xs text-black/40">Vehicle Purchase &amp; Lease</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Bottom contact */}
          <FadeIn className="mt-8 pb-12">
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black/80">หากมีข้อสงสัยเพิ่มเติม</h3>
                  <p className="mt-1 text-sm text-black/45">
                    กรุณาติดต่อฝ่ายพิธีฯ ได้ทางอีเมล
                  </p>
                </div>
                <a
                  href="mailto:protocol@thaiembdc.org"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]"
                >
                  ส่งอีเมล
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}