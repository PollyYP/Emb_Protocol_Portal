"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function TerminationNotPage() {
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
              OFM · Person Management
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              การรายงาน<br />ข้าราชการกลับประจำการ
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">
              Notification of Termination
            </p>
            <p className="text-base leading-relaxed text-white/60">
              การแจ้ง OFM เมื่อข้าราชการกลับประจำการ
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
                ทำไมต้องแจ้งรายงานข้าราชการกลับประจำการ
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                เมื่อข้าราชการสิ้นสุดการปฏิบัติภาระกิจและเดินทางออกจากสหรัฐอเมริกา
                ฝ่ายพิธีฯ จะต้องแจ้ง OFM ทันที เพื่อให้ข้อมูลเป็นปัจจุบัน
              </p>
            </div>
          </FadeIn>

          {/* Key facts */}
          <FadeIn className="mt-12" delay={0.1}>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">ต้องแจ้งทันที</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  แจ้ง OFM ทันทีที่<br />ข้าราชการเดินทางกลับ
                </p>
              </div>

              <div className="rounded-2xl border border-[#c40000]/8 bg-[#c40000]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#c40000]/10">
                  <svg className="h-6 w-6 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#c40000]">ส่งผลต่อการกลับมา</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  หากไม่แจ้ง จะทำให้<br />การดำเนินการ NOA ใหม่<br />ในอนาคตล่าช้า
                </p>
              </div>

              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">คืนบัตรทุกใบ</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  ต้องคืนบัตรทุกใบของ<br />ท่านและครอบครัว<br />ก่อนเดินทางกลับ
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Critical warning */}
          <FadeIn>
            <div className="mx-auto max-w-4xl mt-6">
              <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-4 lg:px-5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-sm leading-relaxed text-red-800/80">
                  <span className="font-semibold text-red-900">โปรดทราบ:</span>{" "}
                  หากไม่แจ้งการกลับประจำการ จะเกิดปัญหาเมื่อท่านต้องกลับมาประจำการอีกครั้ง
                  ทำให้การดำเนินการ NOA ใหม่ล่าช้า
                </p>
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
                รายละเอียด
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-[#c40000]" />
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-8 pb-12">

            {/* Why it matters */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      01
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ความสำคัญของการรายงานการกลับประจำการ
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      เมื่อข้าราชการกลับประจำการและเดินทางออกจากสหรัฐอเมริกา
                      ฝ่ายพิธีฯ มีหน้าที่แจ้ง OFM เพื่อ{" "}
                      <span className="font-semibold text-[#0c0479]">ให้ข้อมูลนักการทูตไทยในระบบ OFM เป็นปัจจุบัน</span>{" "}
                        ซึ่งเป็นสิ่งสำคัญมากในการบริหารจัดการข้อมูลองค์กรต่างประเทศของกระทรวงการต่างประเทศสหรัฐฯ
                    </p>
                    <p>
                      หากไม่มีการแจ้ง ข้อมูลของท่านจะยังคงอยู่ในฐานะนักการทูตที่ยังประจำการ
                      ซึ่งจะสร้างความขัดแย้งในระบบและทำให้การดำเนินการ NOA ล่าช้า
                      หากท่านต้องกลับมาประจำการอีกครั้งในอนาคต
                    </p>
                    <div className="flex items-start gap-3 rounded-xl border border-blue-200/60 bg-blue-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-blue-800/80">
                        ฝ่ายพิธีฯ จะเป็นผู้ดำเนินการแจ้ง OFM ให้ท่าน
                        ท่านเพียงแจ้งให้ฝ่ายพิธีฯ ทราบกำหนดการเดินทางกลับ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* What to do */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      02
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      สิ่งที่ต้องดำเนินการ
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">

                    {/* Step 1 */}
                    <div className="flex items-start gap-3 rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-[#0c0479]">แจ้งฝ่ายพิธีฯ ล่วงหน้า</p>
                        <p className="mt-0.5 text-sm text-black/45">แจ้งกำหนดการการเดินทางกลับของท่านมายังอีเมลฝ่ายพิธีฯ</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">
                          2
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-[#0c0479]">คืนบัตรทุกใบ</p>
                          <p className="mt-0.5 text-sm text-black/45 mb-3">
                            จะต้องคืนบัตรของท่านและสมาชิกในครอบครัวทุกคน ได้แก่
                          </p>
                          <div className="space-y-2">
                            {[
                              { label: "บัตรประจำตัวนักการทูต", sub: "Diplomatic ID" },
                              { label: "ใบขับขี่", sub: "Diplomatic Driver's License" },
                              { label: "บัตร Tax Exemption", sub: "(หากมี)" },
                            ].map((item) => (
                              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-[#0c0479]/10 bg-white px-3 py-2.5">
                                <svg className="h-4 w-4 shrink-0 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                  <p className="text-sm font-semibold text-black/70">{item.label}</p>
                                  <p className="text-xs text-black/35">{item.sub}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tax exemption warning */}
                    <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-5 py-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-red-800/80">
                        <span className="font-semibold">หมายเหตุสำคัญ:</span>{" "}
                        หากไม่คืนบัตร Tax Exemption จะทำให้หัวหน้าสำนักงานท่านต่อไปที่มาประจำการไม่ได้รับบัตรนี้ และจะไม่สามารถใช้สิทธิ์ยกเว้นภาษีได้จนกว่า OFM จะได้รับคืน
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Bottom contact */}
          <FadeIn className="pb-12">
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black/80">แจ้งกำหนดการเดินทางกลับ</h3>
                  <p className="mt-1 text-sm text-black/45">
                    กรุณาติดต่อฝ่ายพิธีฯ 
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