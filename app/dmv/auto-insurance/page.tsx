"use client";

import Link from "next/link";
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

const COVERAGE = [
  {
    label: "Property Damage",
    thai: "ความเสียหายต่อทรัพย์สิน",
    amount: "$100,000",
    color: "blue",
  },
  {
    label: "Bodily Injury",
    thai: "การบาดเจ็บทางร่างกาย",
    amount: "$300,000",
    color: "red",
  },
  {
    label: "Personal Injury Protection",
    thai: "ความคุ้มครองส่วนบุคคล",
    amount: "$100,000",
    color: "blue",
  },
];

const PROVIDERS = [
  {
    name: "GEICO",
    note: "เป็นที่นิยมในหมู่นักการทูตหลายสถานทูตในสหรัฐฯ มีบริการออนไลน์ที่สะดวก",
    url: "https://www.geico.com",
  },
  {
    name: "State Farm",
    note: "เครือข่ายตัวแทนทั่วประเทศ บริการหลังการขายดี",
    url: "https://www.statefarm.com",
  },
  {
    name: "Progressive",
    note: "สามารถเปรียบเทียบราคาออนไลน์ได้ง่าย มีส่วนลดหลายประเภท",
    url: "https://www.progressive.com",
  },
  {
    name: "Allstate",
    note: "มีแผนความคุ้มครองหลากหลาย มีตัวแทนในพื้นที่ DMV จำนวนมาก",
    url: "https://www.allstate.com",
  },
  {
    name: "Nationwide",
    note: "มีแผนประกันครอบคลุมหลายประเภท ให้บริการทั่วประเทศ มีส่วนลดสำหรับผู้ขับขี่ดี",
    url: "https://www.nationwide.com",
  },
  {
    name: "Liberty Mutual",
    note: "มีตัวเลือกปรับแต่งความคุ้มครองได้หลากหลาย",
    url: "https://www.libertymutual.com",
  },
];

export default function AutoInsurancePage() {
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
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs text-white/40 sm:text-sm">
              <Link href="/" className="transition-colors hover:text-white/70">
                หน้าแรก
              </Link>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white/60">เกี่ยวกับรถ</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ประกันรถยนต์
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-xl">
              Auto Insurance
            </p>
            <p className="text-base leading-relaxed text-white/60">ข้อกำหนดด้านประกันภัยรถยนต์</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ WHAT & WHY ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-bold tracking-tight text-[#0c0479] sm:text-2xl lg:text-3xl">
                ประกันรถยนต์สำคัญอย่างไร?
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/55 sm:text-[15px]">
                <p>
                  ประกันรถยนต์ (Auto Insurance) เป็นสิ่งจำเป็นตามกฎหมายในสหรัฐอเมริกา
                  ทุกคนที่ขับรถบนท้องถนนจะต้องมีประกันภัยรถยนต์ที่มีผลบังคับใช้
                  หากไม่มีประกันและเกิดอุบัติเหตุ ท่านอาจต้องรับผิดชอบค่าเสียหายทั้งหมดด้วยตนเอง
                  ซึ่งอาจมีมูลค่าสูงมาก
                </p>
                <p>
                  ประกันจะช่วยคุ้มครองท่านในกรณีที่เกิดอุบัติเหตุ
                  ไม่ว่าจะเป็นความเสียหายต่อทรัพย์สินของผู้อื่น
                  ค่ารักษาพยาบาลจากการบาดเจ็บ และความเสียหายต่อรถยนต์ของท่านเอง
                </p>
              </div>

              {/* Must-have before driving */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-4 lg:px-5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-sm leading-relaxed text-red-800/80">
                  <span className="font-semibold text-red-900">สำคัญ:</span>{" "}
                  ท่านต้องมีประกันภัยรถยนต์ที่มีผลบังคับใช้ก่อนขับรถทุกครั้ง
                  การขับรถโดยไม่มีประกันถือเป็นการผิดกฎหมายในสหรัฐฯ
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ MINIMUM COVERAGE ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-xl font-bold tracking-tight text-[#0c0479] lg:text-3xl">
                วงเงินคุ้มครองขั้นต่ำ
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/50 sm:text-[15px]">
                กระทรวงการต่างประเทศสหรัฐฯ
                กำหนดให้เจ้าหน้าที่ทางการทูตต้องมีประกันภัยรถยนต์ตามวงเงินขั้นต่ำ ดังนี้
              </p>
            </FadeIn>

            <FadeIn className="mt-8" delay={0.1}>
              <div className="space-y-3">
                {COVERAGE.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between gap-4 rounded-xl border p-4 sm:p-5 ${
                      item.color === "red"
                        ? "border-[#c40000]/8 bg-[#c40000]/[0.03]"
                        : "border-[#0c0479]/8 bg-[#0c0479]/[0.03]"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-sm font-semibold sm:text-base ${
                          item.color === "red" ? "text-[#c40000]" : "text-[#0c0479]"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs text-black/40 sm:text-sm">
                        {item.thai}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-bold sm:text-base ${
                        item.color === "red"
                          ? "bg-[#c40000]/10 text-[#c40000]"
                          : "bg-[#0c0479]/10 text-[#0c0479]"
                      }`}
                    >
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ RENEWAL & COMPLIANCE ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-8">

            {/* ── การต่ออายุประกัน ── */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-black/85 sm:text-lg">
                      การต่ออายุประกันภัย
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/55 sm:text-[15px]">
                    <p>
                      ท่านต้องจัดส่งไฟล์สำเนากรมธรรม์ประกันภัยให้ฝ่ายพิธีฯ
                      เพื่อใช้ประกอบการยื่นเรื่องกับ OFM เป็นระยะ
                    </p>

                    {/* $200 fee warning */}
                    <div className="flex items-start gap-3 rounded-xl border border-red-200/60 bg-red-50/60 px-4 py-4 lg:px-5">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-sm leading-relaxed text-red-800/80">
                        <span className="font-semibold text-red-900">ค่าปรับ $200:</span>{" "}
                        หากไม่มีการยื่นข้อมูลการต่ออายุประกันภายใน 15 วันนับจากวันที่กรมธรรม์สิ้นสุดความคุ้มครอง
                        จะมีค่าธรรมเนียมกรณีไม่ปฏิบัติตามข้อกำหนด (non-compliance fee)
                        จำนวน $200
                      </p>
                    </div>

                    <p>
                      หากท่านได้ดำเนินการต่ออายุเรียบร้อยแล้ว
                      กรุณานำส่งไฟล์
                      <span className="font-semibold text-black/70"> Certificate of Liability Insurance หรือ Declaration Page </span>
                      กลับมายังฝ่ายพิธีฯ เพื่อดำเนินการในระบบต่อไป
                    </p>
                    <a
                      href="mailto:protocol@thaiembdc.org"
                      className="inline-flex items-center gap-2.5 rounded-lg border border-[#0c0479]/15 bg-[#0c0479]/5 px-4 py-2.5 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479]/10 active:scale-[0.97] sm:px-5 sm:py-3"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      ส่งไฟล์มาที่ protocol@thaiembdc.org
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ POPULAR PROVIDERS ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-xl font-bold tracking-tight text-[#0c0479] sm:text-2xl lg:text-3xl">
                บริษัทประกันยอดนิยม
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/50 sm:text-[15px]">
                ท่านสามารถเลือกทำประกันกับบริษัทใดก็ได้
                ด้านล่างเป็นบริษัทที่เป็นที่นิยมในพื้นที่ DMV (DC, Maryland, Virginia area)
              </p>
            </FadeIn>

            <FadeIn className="mt-8" delay={0.1}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROVIDERS.map((p) => (
                    <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-4 transition-colors hover:bg-[#0c0479]/[0.02] sm:p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      {p.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#0c0479] sm:text-base">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-black/45 sm:text-sm">
                        {p.note}
                      </p>
                    </div>
                    <svg className="mt-1 h-4 w-4 shrink-0 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Disclaimer */}
            <FadeIn className="mt-6" delay={0.15}>
              <p className="text-sm leading-relaxed text-[#c40000]">
                <span className="underline">หมายเหตุ</span> <br/>รายชื่อข้างต้นเป็นเพียงตัวอย่างเพื่อการค้นหาเท่านั้น
                สถานเอกอัครราชทูตฯ ไม่ได้มีส่วนเกี่ยวข้องหรือรับรองบริษัทใดเป็นการเฉพาะ
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ RELATED PAGES + CONTACT ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl">

            {/* Related pages */}
            <FadeIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/30">
                หน้าที่เกี่ยวข้อง
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href="/dmv/registration"
                  className="flex items-center gap-3 rounded-xl border border-[#0c0479]/10 bg-white p-4 transition-colors hover:bg-[#0c0479]/[0.03] sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c0479]/8">
                    <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0c0479]">การขึ้นทะเบียนรถ</p>
                    <p className="mt-0.5 text-xs text-black/40">Vehicle Registration</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link
                  href="/arrival/vehicle-purchase"
                  className="flex items-center gap-3 rounded-xl border border-[#c40000]/10 bg-white p-4 transition-colors hover:bg-[#c40000]/[0.03] sm:p-5"
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
            </FadeIn>

            {/* Bottom contact */}
            <FadeIn className="mt-8">
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                    <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-black/80 sm:text-base">
                      หากมีข้อสงสัยเพิ่มเติม
                    </h3>
                    <p className="mt-1 text-xs text-black/45 sm:text-sm">
                      กรุณาติดต่อ จนท.พิธีฯ ได้ทางอีเมล
                    </p>
                  </div>
                    <a
                    href="mailto:protocol@thaiembdc.org"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97] sm:px-5"
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
        </div>
      </section>
    </>
  );
}