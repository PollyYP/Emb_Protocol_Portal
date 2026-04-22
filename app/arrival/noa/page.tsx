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

const steps = [
  {
    no: "01",
    title: "เตรียมเอกสารและข้อมูลการทำงานให้พร้อม",
    body: "รวบรวมเอกสารที่จำเป็นให้ครบถ้วน ได้แก่ หนังสือเดินทาง วีซ่า และ Signature Card ที่กรอกข้อมูลเรียบร้อยแล้ว พร้อมทั้งประวัติการทำงานย้อนหลัง 5 ปี ชื่อสำนักงาน ชื่อตำแหน่ง และวัน เดือน ปีที่ปฏิบัติงาน",
  },
  {
    no: "02",
    title: "กรอกแบบฟอร์ม NOA",
    body: "กรอกข้อมูลในแบบฟอร์ม Notification of Appointment ออนไลน์ผ่านลิงก์ที่ให้ไว้ด้านล่าง โดยใช้ข้อมูลตรงตามหนังสือเดินทาง",
  },
  {
    no: "03",
    title: "ส่งให้ฝ่ายพิธีฯ",
    body: "หลังกรอกแบบฟอร์มแล้ว ฝ่ายพิธีการทูตจะได้รับข้อมูลและดำเนินการยื่น NOA ต่อ OFM ในลำดับต่อไป",
  },
  {
    no: "04",
    title: "รับบัตรประจำตัวทางการทูต",
    body: "เมื่อ OFM อนุมัติแล้ว ฝ่ายพิธีฯ จะแจ้งให้ท่านทราบเพื่อให้ท่านรอรับบัตรประจำตัวทางการทูต (Diplomatic ID Card) ทางไปรษณีย์",
  },
];

const documents: { name: string; note: string; required: boolean; download?: boolean }[] = [
  {
    name: "หนังสือเดินทาง (Passport)",
    note: "ส่งไฟล์หน้าแรกที่มีข้อมูลของท่านมาทางอีเมลฝ่ายพิธีฯ",
    required: true,
  },
  {
    name: "วีซ่าประเภท A หรือ G",
    note: "วีซ่าต้องไม่หมดอายุ และส่งไฟล์มาทางอีเมลฝ่ายพิธีฯ",
    required: true,
  },
  {
    name: "ข้อมูลการทำงานย้อนหลัง 5 ปี",
    note: "ประวัติการทำงานย้อนหลัง 5 ปี ชื่อสำนักงาน ชื่อตำแหน่ง และวัน เดือน ปีที่ปฏิบัติงาน",
    required: true,
  },
];

export default function NOAPage() {
  return (
    <main className="w-full bg-white">

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-[#0c0479]">
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#c40000]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/4 blur-3xl" />
        {/* Red left border accent */}
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
              <span className="text-[#c40000]"> Appointment</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              การแจ้งรายงานตัวต่อ Office of Foreign Missions (OFM)
              เป็นขั้นตอนแรกที่ข้าราชการและลูกจ้างท้องถิ่นทุกคน <br/> ต้องดำเนินการภายใน 30 วัน
              นับจากวันที่เดินทางมาถึงสหรัฐอเมริกาหรือวันที่เข้ารับตำแหน่ง
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.cognitoforms.com/RoyalThaiEmbassy1/NotificationOfAppointmentEnglishOnly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#c40000] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#c40000]/30 transition-all hover:bg-[#a80000] hover:shadow-xl active:scale-[0.97]"
              >
                กรอกแบบฟอร์ม NOA
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/signature-card.pdf"
                download
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                ดาวน์โหลด Signature Card
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ══════════ WHAT IS NOA ══════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
                เกี่ยวกับ NOA
              </p>
              <h2 className="mt-2 text-lg font-extrabold text-[#0c0479] md:text-3xl">
                Notification of Appointment คืออะไร
              </h2>
              <div className="mt-4 h-px w-12 bg-[#c40000]" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black/60">
                <p>
                  Notification of Appointment (NOA) คือการแจ้งอย่างเป็นทางการต่อ Office of Foreign Missions (OFM)
                  ซึ่งเป็นหน่วยงานของกระทรวงการต่างประเทศสหรัฐฯ ว่าข้าราชการได้เข้ารับตำแหน่ง หรือลูกจ้างท้องถิ่นได้เข้าทำงาน
                  ณ สถานเอกอัครราชทูตหรือสถานกงสุลใหญ่แห่งใดแห่งหนึ่งในสหรัฐอเมริกาแล้ว
                </p>
                <p>
                  สำหรับข้าราชการ การดำเนินการ NOA เป็นพื้นฐานสำคัญสำหรับขั้นตอนอื่น ๆ ที่ตามมา
                  เช่น การออกบัตรประจำตัวทางการทูต การขึ้นทะเบียนยานพาหนะ
                  การขอบัตร Tax Exemption และการดำเนินการด้านสถานะทางการทูตทั้งหมด
                  หากไม่ดำเนินการ NOA ท่านจะไม่ได้รับหมายเลขประจำตัวนักการทูตทำให้ไม่สามารถดำเนินการในเรื่องอื่น ๆ ได้
                </p>
                <p>
                  ฝ่ายพิธีการทูตของสถานเอกอัครราชทูต ณ กรุงวอชิงตัน จะเป็นผู้ดำเนินการยื่น NOA ต่อ OFM ผ่านระบบออนไลน์
                  โดยท่านเพียงกรอกแบบฟอร์มและเตรียมเอกสารที่กำหนดให้ครบถ้วน
                </p>
              </div>
            </FadeIn>

            {/* Info box */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/10">
                    <svg className="h-5 w-5 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-[#0c0479]">ต้องดำเนินการภายใน 30 วัน</p>
                    <p className="mt-1 text-sm text-black/50">นับจากวันที่เดินทางมาถึงสหรัฐอเมริกา</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "ยื่นโดย", value: "ฝ่ายพิธีการทูต สถานเอกอัครราชทูตฯ" },
                    { label: "ยื่นต่อ", value: "Office of Foreign Missions (OFM), U.S. Department of State" },
                    { label: "ระยะเวลาดำเนินการ", value: "ประมาณ 2 - 4 สัปดาห์" },
                    { label: "ผลลัพธ์", value: "บัตรประจำตัวทางการทูต (Diplomatic ID Card)" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5 border-b border-black/6 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-black/35">{item.label}</span>
                      <span className="text-sm font-medium text-black/70">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ DOCUMENTS ══════════ */}
      <section className="w-full bg-[#fafafa] py-8 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              เอกสารประกอบ
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-3xl">
              สิ่งที่ต้องเตรียม
            </h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
            {documents.map((doc, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-black/6 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      doc.required ? "bg-[#c40000]/10 text-[#c40000]" : "bg-black/6 text-black/40"
                    }`}>
                      {doc.required ? "✓" : "○"}
                    </div>
                    <div>
                      <p className="font-semibold text-black/80 text-base">{doc.name}</p>
                      <p className="mt-0.5 text-sm text-black/45">{doc.note}</p>
                    </div>
                  </div>
                  {doc.download && (
                    <a
                      href="/signature-card.pdf"
                      download
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#0c0479]/20 px-4 py-2.5 text-xs font-bold text-[#0c0479] transition-colors hover:bg-[#0c0479] hover:text-white"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      ดาวน์โหลด Signature Card
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Signature card callout */}
          <FadeIn className="mt-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#0c0479]/10 bg-[#0c0479]/4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/10">
                  <svg className="h-5 w-5 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="text-base">
                  <p className="font-extrabold text-[#0c0479]">Signature Card</p>
                  <p className="mt-1 text-black/55">
                    ดาวน์โหลดและกรอกให้ครบถ้วน
                  </p>
                  <p className="mt-1 text-[#c40000]">- ยกเว้นช่อง 1. Principal's PID และ 2. Applicant's PID</p>
                  <p className="mt-1">- <span className="font-bold text-black">ลงนามในช่อง A. ด้วยหมึกสีดำ </span> แล้วส่งไฟล์มาทางอีเมลฝ่ายพิธีฯ</p>
                </div>
              </div>
              <a
                href="/signature-card.pdf"
                download
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-[#0c0479] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#09035e] active:scale-[0.97]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                ดาวน์โหลด PDF
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ STEPS ══════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              ขั้นตอนการดำเนินการ
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-3xl">
              วิธีดำเนินการ NOA
            </h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 shadow-sm">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute right-0 top-10 hidden h-px w-4 translate-x-full bg-black/10 lg:block" />
                  )}
                  <span className="text-4xl font-extrabold text-[#0c0479]/10">{step.no}</span>
                  <h3 className="mt-3 font-extrabold text-[#0c0479]">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-black/55">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="w-full bg-[#0c0479] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">พร้อมดำเนินการ</p>
                <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">กรอกแบบฟอร์ม NOA ได้เลย</h2>
                <p className="mt-2 text-sm text-white/50">อย่าลืมดาวน์โหลดและส่ง Signature Card มาทางอีเมล</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
                <a
                  href="/signature-card.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/15"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Signature Card
                </a>
                <a
                  href="https://www.cognitoforms.com/RoyalThaiEmbassy1/NotificationOfAppointmentEnglishOnly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c40000] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#a80000]"
                >
                  กรอกแบบฟอร์ม NOA
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}