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
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stepsOverview = [
  { number: "01", title: "สอบข้อเขียนออนไลน์" },
  { number: "02", title: "นำส่งเอกสารทางอีเมล" },
  { number: "03", title: "ตรวจสายตา" },
  { number: "04", title: "นำส่งแบบฟอร์มตรวจสายตา" },
  { number: "05", title: "รับใบขับขี่ทางไปรษณีย์" },
];

export default function DriverLicensePage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">การขอใบขับขี่</h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">Diplomatic Driver's License</p>
            <p className="text-base leading-relaxed text-white/60">การขอใบขับขี่ทางการทูต</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ OVERVIEW ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] sm:text-3xl">ภาพรวมขั้นตอน</h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                ใบขับขี่ของนักการทูตที่มาประจำการในสหรัฐฯ จะออกโดย OFM เท่านั้น
                และท่านสามารถดำเนินการ <br/> หลังจากได้ทำการรายงานตัว <Link href="/person-management" className="text-[#0c0479]">(NOA)</Link> และมีหมายเลขประจำตัวเรียบร้อยแล้ว
              </p>
            </div>
          </FadeIn>
          <FadeIn className="mt-12" delay={0.1}>
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-5">
              {stepsOverview.map((s, i) => (
                <div key={s.number} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c0479]/8 text-lg font-bold text-[#0c0479]">{s.number}</div>
                  <p className="mt-3 text-xs font-medium leading-snug text-black/50 sm:text-sm">{s.title}</p>
                  {i < stepsOverview.length - 1 && (
                    <div className="absolute top-7 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-[#0c0479]/10 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ DETAILED STEPS ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-8">

            {/* ── TIP BANNER ── */}
            <FadeIn>
              <a
                href="https://www.dmv.virginia.gov/licenses-ids/exams/practice-exam"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-amber-200/70 bg-amber-50/80 px-6 py-5 transition-colors hover:bg-amber-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-amber-800">
                    <span className="mr-2 inline-block rounded-full bg-amber-400/25 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-700">Tip</span>
                    ท่านสามารถทดลองทำข้อสอบก่อนได้
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-amber-700/70">
                    ฝึกทำข้อสอบก่อนสอบจริงได้ที่ Virginia DMV Practice Exam — คลิกที่นี่
                  </p>
                </div>
                <svg className="mt-1 h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </FadeIn>

            {/* ── Step 1 ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">01</div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">สอบข้อเขียนออนไลน์</h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>ท่านสามารถทำข้อสอบออนไลน์ได้ โดยจะต้องลงทะเบียนก่อนสอบล่วงหน้าอย่างน้อย 1 วัน ผ่านเว็บไซต์ Proctor360</p>
                    <a href="https://proctor360.com/organization/ofm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-[#0c0479]/10 bg-[#0c0479]/[0.03] px-5 py-4 transition-colors hover:bg-[#0c0479]/[0.06]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/10">
                        <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0c0479]">DMV Language Selection | Proctor360</p>
                        <p className="mt-0.5 text-xs text-black/40">proctor360.com/organization/ofm</p>
                      </div>
                      <svg className="ml-auto h-4 w-4 shrink-0 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <p>ข้อสอบจะอิงจากคู่มือกฎจราจรของรัฐเวอร์จิเนีย ท่านสามารถศึกษาล่วงหน้าได้จากเว็บไซต์ Virginia DMV</p>
                    <a href="https://www.dmv.virginia.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-[#0c0479]/10 bg-[#0c0479]/[0.03] px-5 py-4 transition-colors hover:bg-[#0c0479]/[0.06]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/10">
                        <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0c0479]">Virginia Department of Motor Vehicles</p>
                        <p className="mt-0.5 text-xs text-black/40">dmv.virginia.gov</p>
                      </div>
                      <svg className="ml-auto h-4 w-4 shrink-0 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 2 ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">02</div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">นำส่งไฟล์เอกสารทางอีเมลมายังฝ่ายพิธีฯ</h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>เมื่อทำการสอบเสร็จแล้ว กรุณานำส่งไฟล์เอกสารต่อไปนี้ทางอีเมลมายังฝ่ายพิธีฯ เพื่อให้ดำเนินการในระบบต่อไป</p>
                    <div className="space-y-3 rounded-xl border border-black/5 bg-gray-50/80 p-5">
                      {[
                        { n: "1", title: "ผลคะแนนการสอบข้อเขียน", sub: "ผลสอบจาก Proctor360" },
                        { n: "2", title: "ใบขับขี่ไทย", sub: "หากท่านมีใบขับขี่ไทยจะทำให้ไม่ต้องสอบขับรถที่สหรัฐฯ" },
                        { n: "3", title: "ใบแปลใบขับขี่ไทยเป็นภาษาอังกฤษ", sub: "ดาวน์โหลดแบบฟอร์มด้านล่างและกรอกข้อมูลให้ครบถ้วน" },
                      ].map((item, i) => (
                        <div key={i}>
                          {i > 0 && <div className="h-px bg-black/5 mb-3" />}
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/10 text-[10px] font-bold text-[#0c0479]">{item.n}</span>
                            <div>
                              <p className="font-semibold text-black/70">{item.title}</p>
                              <p className="mt-0.5 text-sm text-black/45">{item.sub}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                    href="/dl-tl.pdf"
                    download
                     className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-[#0c0479]/15 bg-[#0c0479]/5 px-5 py-3 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479]/10 active:scale-[0.97]"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                        ดาวน์โหลดแบบฟอร์มแปลใบขับขี่
                    </a>
                    <div className="flex items-start gap-3 rounded-xl border border-[#0c0479]/10 bg-[#0c0479]/[0.03] px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-black/60">ส่งเอกสารทั้งหมดมาที่</p>
                        <a href="mailto:protocol@thaiembdc.org" className="text-sm font-semibold text-[#0c0479] underline decoration-[#0c0479]/30 underline-offset-2 transition-colors hover:decoration-[#0c0479]">protocol@thaiembdc.org</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 3 ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">03</div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">รับใบตรวจสายตาจากฝ่ายพิธีฯ และไปตรวจสายตา</h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>หลังจากฝ่ายพิธีฯดำเนินการในระบบแล้ว ท่านจะได้รับแบบฟอร์มตรวจสายตาที่มีข้อมูลของท่านอยู่เรียบร้อยแล้ว ให้ท่านนำแบบฟอร์มนี้ไปตรวจสายตา</p>
                    <div className="rounded-xl border border-blue-200/60 bg-blue-50/60 px-5 py-4">
                      <div className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-blue-900">สถานที่แนะนำ</p>
                          <p className="mt-1 text-sm leading-relaxed text-blue-800/70">Arlington Metro at Virginia Square</p>
                          <a
                            href="https://maps.apple.com/?q=3434+North+Washington+Blvd+Arlington+VA+22201"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-0.5 block text-xs text-blue-700/50 underline decoration-blue-400/40 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-500"
                          >
                            3434 North Washington Blvd. Suite RET01, Arlington, VA 22201
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>หรือท่านสามารถเข้ารับการตรวจสายตาได้ที่ร้านขายแว่นตาเอกชนทั่วไปที่มีจักษุแพทย์ประจำร้าน</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 4 ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">04</div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">นำส่งแบบฟอร์มตรวจสายตากลับมายังฝ่ายพิธีฯ</h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>เมื่อจักษุแพทย์กรอกแบบฟอร์มเรียบร้อยแล้ว ท่านสามารถนำส่งไฟล์กลับมาทางอีเมลเพื่อให้ฝ่ายพิธีฯ ดำเนินการในขั้นตอนต่อไป</p>
                    <a href="mailto:protocol@thaiembdc.org" className="inline-flex items-center gap-2.5 rounded-lg border border-[#0c0479]/15 bg-[#0c0479]/5 px-5 py-3 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479]/10 active:scale-[0.97]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      ส่งอีเมลมายัง protocol@thaiembdc.org
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Step 5 ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">05</div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">รับใบขับขี่ทางไปรษณีย์</h3>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-black/55">เมื่อคำร้องได้รับการอนุมัติในระบบ OFM แล้ว ใบขับขี่จะถูกส่งทางไปรษณีย์ตามที่อยู่ที่ท่านได้ให้ไว้</p>
                  <div className="mt-4 inline-flex items-center gap-2.5 rounded-lg border border-[#0c0479]/10 bg-[#0c0479]/5 px-4 py-2.5">
                    <svg className="h-4 w-4 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-semibold text-[#0c0479]">ระยะเวลาดำเนินการ 5 - 14 วัน</p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Bottom contact */}
          <FadeIn className="mt-12">
            <div className="mx-auto max-w-3xl rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black/80">หากมีข้อสงสัยเพิ่มเติม</h3>
                  <p className="mt-1 text-sm text-black/45">กรุณาติดต่อ จนท.พิธี ของ สอท. ได้ทางอีเมล</p>
                </div>
                <a href="mailto:protocol@thaiembdc.org" className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]">
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