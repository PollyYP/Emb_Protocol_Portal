"use client";

import Image from "next/image";
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
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SsnPage() {
  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/ssn.jpg" alt="Social Security" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
              ขอมีเลข SSN
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              Social Security Number
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STICKY NEXT-STEP LINK
          ══════════════════════════════════════ */}
      <Link
        href="/arrival/bank"
        className="fixed right-6 bottom-8 z-40 hidden md:flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[11px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg transition-all hover:bg-[#0c0479] hover:text-white hover:shadow-xl"
      >
        Step 3
      </Link>
      <Link
        href="/arrival/bank"
        className="fixed right-4 bottom-5 z-40 flex md:hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[10px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg"
      >
        Step 3
      </Link>

      {/* ══════════════════════════════════════
          SECTION 1 — SSN คืออะไร
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              What is SSN
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              SSN คืออะไร และใครสมัครได้บ้าง
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  <strong className="text-[#0c0479]">Social Security Number (SSN)</strong> หรือเลขโซเชียล 9 หลัก
                  แม้วัตถุประสงค์หลักของมันคือเรื่องภาษีและประกันสังคม
                  แต่ในความเป็นจริง SSN คือกุญแจที่ช่วยให้ชีวิตในสหรัฐฯ ง่ายขึ้นในหลายด้าน
                </p>
                <p>
                  ธนาคารหลายแห่งถามหา SSN ตอนเปิดบัญชี
                  แม้จะสามารถแจ้งว่ายังไม่มีได้ แต่บางธนาคารกำหนดให้ต้องมีเท่านั้น
                  นอกจากการเปิดบัญชีแล้ว SSN ยังช่วยให้สามารถสร้าง{" "}
                  <strong className="text-[#0c0479]">Credit Score</strong>{" "}
                  ซึ่งคะแนนนี้จำเป็นมากเวลาที่ต้องการซื้อรถ กู้บ้าน หรือเช่าบ้าน
                </p>
                <p>
                  สำหรับข้าราชการที่มาประจำการและต้องการที่อยู่อาศัย{" "}
                  <strong className="text-[#0c0479]">Landlord</strong> หรือเจ้าของบ้านส่วนใหญ่จะใช้ SSN
                  ในการเช็กประวัติ (Background Check) และตรวจสอบความน่าเชื่อถือทางการเงินก่อนเซ็นสัญญาเช่า
                  รวมถึงใช้ในการเปิดมิเตอร์น้ำ ไฟ และอินเทอร์เน็ตที่บ้านด้วย
                </p>
              </div>
            </FadeIn>

            {/* SSN uses — visual card */}
            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-6 md:p-8">
                <h3 className="text-lg font-extrabold text-[#0c0479] md:text-xl">
                  SSN ใช้ทำอะไรได้บ้าง
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/70 md:text-base">
                  {[
                    "เปิดบัญชีธนาคาร",
                    "สร้าง Credit Score สำหรับซื้อรถ / กู้บ้าน / เช่าบ้าน",
                    "Background Check โดย Landlord ก่อนเซ็นสัญญาเช่า",
                    "เปิดมิเตอร์น้ำ ไฟ และอินเทอร์เน็ตที่บ้าน",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Who can apply */}
          <FadeIn className="mt-12">
            <div className="rounded-xl border border-black/6 bg-[#fafafa] p-6 md:p-10">
              <h3 className="text-lg font-extrabold text-[#0c0479] md:text-xl">
                ใครสมัครได้บ้าง
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-4 text-sm leading-relaxed text-black/70 md:grid-cols-3 md:text-base">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">1</span>
                  <p>พลเมืองสหรัฐฯ (U.S. Citizen)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">2</span>
                  <p>ผู้ถือ Green Card (Permanent Resident)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">3</span>
                  <p>ผู้ถือ Visa ทำงานและนักเรียนบางประเภท</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — ขั้นตอนการสมัคร
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              How to Apply
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              ขั้นตอนการสมัคร
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Important note */}
          <FadeIn className="mt-10">
            <div className="rounded-xl bg-[#0c0479] p-6 md:p-8">
              <span className="inline-block rounded-full bg-[#c40000] px-3 py-1 text-xs font-semibold text-white">
                สำคัญ
              </span>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                เมื่อเดินทางมาถึงสหรัฐฯ แล้ว แนะนำให้รออย่างน้อย{" "}
                <strong className="text-white">10 วันทำการ</strong>{" "}
                เพื่อให้ข้อมูลในระบบ I-94 อัปเดตก่อนไปสมัคร
                สามารถสมัครได้โดยไม่จำเป็นต้องรอบัตรประจำตัวนักการทูต
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                กระทรวงการต่างประเทศสหรัฐฯ อนุญาตให้{" "}
                <strong className="text-[#ffc8c8]">หัวหน้าครอบครัวเท่านั้น (Principal)</strong>{" "}
                ที่สามารถยื่นขอ Social Security Number ได้
              </p>
            </div>
          </FadeIn>

          {/* Steps */}
          <div className="mt-12 space-y-4">
            {[
              {
                num: "01",
                title: "กรอกแบบฟอร์ม SS-5 ออนไลน์",
                desc: "กรอกแบบฟอร์ม SS-5 ล่วงหน้าผ่านเว็บไซต์ของ SSA จากนั้นจะได้รับรหัสยืนยัน (Confirmation Code) เพื่อนำไปใช้ที่สำนักงาน",
              },
              {
                num: "02",
                title: "เตรียมเอกสารตัวจริง",
                desc: "เตรียมเอกสารตัวจริงทั้งหมดให้พร้อม ห้ามใช้สำเนาเด็ดขาด (รายละเอียดเอกสารดูด้านล่าง)",
              },
              {
                num: "03",
                title: "ไปที่สำนักงาน SSA",
                desc: "นำรหัสยืนยันพร้อมเอกสารตัวจริงไปยื่นที่สำนักงาน Social Security Administration (SSA) สาขาใกล้สถานเอกอัครราชทูตฯ ที่ 2100 M Street, N.W., Washington, DC 20037",
              },
              {
                num: "04",
                title: "รอรับบัตร SSN Card ทางไปรษณีย์",
                desc: "หลังจากเจ้าหน้าที่ตรวจสอบเอกสารเรียบร้อย บัตร SSN Card จะถูกส่งมาให้ที่บ้านทางไปรษณีย์ภายใน 2–4 สัปดาห์",
              },
            ].map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 0.08}>
                <div className="flex gap-5 rounded-xl border border-black/[0.06] bg-white p-5 md:p-6">
                  <span className="text-sm font-mono font-bold text-[#0c0479]">{step.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-black/80 md:text-base">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — เอกสารที่ต้องเตรียม
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Required Documents
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              เอกสารที่ต้องเตรียม (Original Only)
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <FadeIn className="mt-4">
            <p className="text-sm text-black/50 md:text-base">
              เตรียมเอกสารตัวจริงไปให้พร้อม — ห้ามใช้สำเนาเด็ดขาด
            </p>
          </FadeIn>

          <div className="mt-8 space-y-3">
            {[
              {
                num: "01",
                title: "Passport เล่มจริงที่มี Visa",
                desc: "หนังสือเดินทางเล่มจริงพร้อมวีซ่าที่ยังไม่หมดอายุ",
              },
              {
                num: "02",
                title: "I-94 ใบประวัติการเข้าเมือง",
                desc: "สามารถพิมพ์ออกมาจากเว็บไซต์ของ CBP (U.S. Customs and Border Protection) ได้",
              },
              {
                num: "03",
                title: "Diplomatic Note",
                desc: "ใบรับรองการปฏิบัติหน้าที่ที่ออกโดยสถานเอกอัครราชทูตฯ",
              },
            ].map((doc, idx) => (
              <FadeIn key={doc.num} delay={idx * 0.08}>
                <div className="flex gap-5 rounded-xl border border-black/[0.06] bg-[#fafafa] p-5 md:p-6">
                  <span className="text-sm font-mono font-bold text-[#0c0479]">{doc.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-black/80 md:text-base">{doc.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">{doc.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Links */}
          <FadeIn className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://www.ssa.gov/number-card/request-number-first-time"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0c0479] bg-white px-6 py-3.5 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479] hover:text-white"
              >
                สมัครออนไลน์ →
              </a>
              <a
                href="https://www.ssa.gov/forms/ss-5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0c0479] bg-white px-6 py-3.5 text-sm font-semibold text-[#0c0479] transition-all hover:bg-[#0c0479] hover:text-white"
              >
                ดาวน์โหลดแบบฟอร์ม SS-5 →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}