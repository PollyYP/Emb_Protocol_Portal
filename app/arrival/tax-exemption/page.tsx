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

export default function TaxExemptionPage() {
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
              OFM PRIVILEGES
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              บัตรยกเว้นภาษี <br /> สำหรับนักการทูต
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">
              Diplomatic Tax Exemption Card
            </p>
            <p className="text-lg lg:text-base leading-relaxed text-white/60">
              บัตรที่ออกโดย Office of Foreign Missions (OFM) เพื่อใช้ยกเว้นภาษีในสหรัฐฯ
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
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] sm:text-3xl">
                สิ่งที่ควรทราบ
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                บัตรยกเว้นภาษี (Diplomatic Tax Exemption Card) ออกโดย{" "}
                <span className="text-[#0c0479]">Office of Foreign Missions (OFM)</span>{" "}
                เพื่อให้นักการทูตใช้ยกเว้นภาษี
              </p>
            </div>
          </FadeIn>

          {/* Key facts */}
          <FadeIn className="mt-12" delay={0.1}>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">เฉพาะหัวหน้าสำนักงาน</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  สิทธิ์ในการมีบัตรนี้<br />สงวนไว้เฉพาะหัวหน้าสำนักงาน<br />เท่านั้น
                </p>
              </div>

              <div className="rounded-2xl border border-[#c40000]/8 bg-[#c40000]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#c40000]/10">
                  <svg className="h-6 w-6 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#c40000]">ออกโดย OFM</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  บัตรออกโดย Office of<br />Foreign Missions<br />กระทรวงการต่างประเทศสหรัฐฯ
                </p>
              </div>

              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-semibold text-[#0c0479]">ใช้ได้ที่ร้านค้าทั่วไป</p>
                <p className="mt-1 text-sm leading-relaxed text-black/45">
                  แสดงบัตรที่แคชเชียร์<br />เพื่อขอยกเว้น Sales Tax<br />ณ จุดชำระเงิน
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Eligibility warning */}
          <FadeIn>
            <div className="mx-auto max-w-4xl mt-6">
              <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-4 lg:px-5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-base leading-relaxed text-red-800/80">
                  <span className="font-semibold text-red-900">โปรดทราบ:</span>{" "}

                 Tax Exemption Card ให้เฉพาะ <span className="font-semibold">หัวหน้าสำนักงาน</span> เท่านั้น
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
                บัตรยกเว้นภาษีคืออะไร
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-[#c40000]" />
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-8 pb-12">

            {/* What is it */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      01
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      Diplomatic Tax Exemption Card คืออะไร
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      Diplomatic Tax Exemption Card คือบัตรที่ออกโดย OFM ให้แก่หัวหน้าสำนักงานทางการทูต
                      เพื่อใช้เป็นหลักฐานในการขอยกเว้นภาษี (Sales Tax) ในการซื้อสินค้าและบริการในสหรัฐอเมริกา
                    </p>
                    <p>
                      บัตรนี้ออกตามหลักการต่างตอบแทน (Reciprocity) ระหว่างประเทศ
                      และสอดคล้องกับอนุสัญญากรุงเวียนนาว่าด้วยความสัมพันธ์ทางการทูต
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Eligibility */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      02
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ผู้มีสิทธิ์ขอมีบัตร
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      กำหนดให้เฉพาะ <span className="font-semibold text-[#0c0479]">หัวหน้าสำนักงาน</span> เท่านั้น
                      ที่จะได้รับบัตรยกเว้นภาษีนี้ ข้าราชการทั่วไปที่มาประจำการจะไม่ได้รับบัตรดังกล่าว
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* What is exempt */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      03
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      รายการที่ได้รับการยกเว้นภาษี
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>โดยทั่วไป บัตรนี้ใช้ยกเว้น Sales Tax สำหรับการซื้อสินค้าและบริการต่าง ๆ ได้แก่</p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        { label: "สินค้าอุปโภคบริโภค", sub: "เช่น เครื่องใช้ในบ้าน อิเล็กทรอนิกส์" },
                        { label: "ค่าโรงแรม / ที่พัก", sub: "Lodging Tax ในบางมลรัฐ" },
                        { label: "ยานพาหนะ", sub: "การซื้อรถยนต์" },
                        { label: "บริการต่าง ๆ", sub: "ขึ้นอยู่กับประเภทบัตรและมลรัฐ" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3 rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-4">
                          <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-[#0c0479]">{item.label}</p>
                            <p className="mt-0.5 text-xs text-black/40">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* How to use */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      04
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      วิธีการใช้บัตร
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <p>
                      เมื่อต้องการขอยกเว้นภาษี ให้แสดงบัตรแก่พนักงานแคชเชียร์
                      <span className="font-semibold text-[#0c0479]"> ก่อน</span>ชำระเงิน
                      พนักงานจะดำเนินการยกเว้น Sales Tax ให้
                    </p>
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