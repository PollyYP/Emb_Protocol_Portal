"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/* ─── Fade-in wrapper (same as other pages) ─── */
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

const DOCS = [
  {
    num: "01",
    title: "Purchase Order / Buyer's Order",
    desc: "เอกสารสรุปรายละเอียดการซื้อรถ เช่น ราคาซื้อ รุ่นรถ หมายเลขตัวถัง (VIN) และเงื่อนไขการชำระเงิน",
  },
  {
    num: "02",
    title: "Odometer Statement",
    desc: "เอกสารแสดงระยะทางไมล์ของรถ ณ วันที่โอนกรรมสิทธิ์ เพื่อยืนยันสภาพและการใช้งาน",
  },
  {
    num: "03",
    title: "Insurance Declaration Page",
    desc: "หน้าสรุปกรมธรรม์ประกันภัยรถยนต์ แสดงผู้เอาประกัน ระยะเวลาคุ้มครอง และวงเงินคุ้มครอง",
  },
  {
    num: "04",
    title: "Lease Agreement",
    desc: "สัญญาเช่าระหว่างผู้เช่าและบริษัทผู้ให้เช่า ระบุระยะเวลา ค่างวด และเงื่อนไขการใช้รถ",
  },
];

export default function CarPage() {
  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/car.jpg" alt="Personal Vehicle" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
              รถยนต์ส่วนบุคคล
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              Purchase · Lease · Documents
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1 — การซื้อรถยนต์
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Buy
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              การซื้อรถยนต์
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  ท่านสามารถซื้อรถยนต์ได้ทั้งจากตัวแทนจำหน่าย (Dealer) หรือจากบุคคลทั่วไป (รถมือสอง)
                  ทั้งนี้ การจดทะเบียนรถของเจ้าหน้าที่ทางการทูตจะต้องดำเนินการผ่าน{" "}
                  <strong className="text-[#0c0479]">OFM</strong> เท่านั้น
                  ไม่สามารถจดทะเบียนผ่านหน่วยงานรัฐของแต่ละมลรัฐโดยตรง
                </p>
                <p>
                  ก่อนตัดสินใจซื้อ ควรพิจารณาปัจจัยต่าง ๆ เช่น งบประมาณ ค่าใช้จ่ายด้านประกันภัย
                  ค่าบำรุงรักษา ความประหยัดน้ำมัน และความเหมาะสมกับลักษณะการใช้งาน
                </p>
                <p>
                  หากซื้อรถจาก Dealer จะมีเอกสารประกอบ เช่น Purchase Order / Buyer's Order
                  และเอกสารโอนกรรมสิทธิ์ ซึ่งจำเป็นสำหรับขั้นตอนการดำเนินการกับ OFM
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image src="/bmw.jpg" alt="BMW" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>

          {/* Image mosaic — dealer + blueaudi + ford */}
          <FadeIn className="mt-12">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/dealer.jpg" alt="Car dealer" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/blueaudi.jpg" alt="Blue Audi" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg md:col-span-1 md:aspect-[3/4]">
                <Image src="/ferrari.jpg" alt="Ford" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — การเช่าซื้อ
          ══════════════════════════════════════ */}
      <section className="w-full pb-10 md:py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Lease
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              การเช่าซื้อ
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image src="/tire.jpg" alt="Audi" fill className="object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  การเช่าซื้อรถยนต์ (Leasing) เป็นอีกทางเลือกหนึ่ง โดยท่านจะทำสัญญาเช่าระยะยาวกับบริษัทผู้ให้บริการ
                  ระยะเวลาโดยทั่วไป <strong className="text-[#0c0479]">24–36 เดือน</strong>
                </p>
                <p>
                  ข้อดีของการ Lease คือ ค่างวดรายเดือนอาจต่ำกว่าการซื้อ
                  และสามารถเปลี่ยนรถใหม่เมื่อครบสัญญา อย่างไรก็ตาม ควรตรวจสอบเงื่อนไขสำคัญ เช่น
                  ระยะทางสูงสุดต่อปี (mileage limit) และค่าปรับกรณีคืนรถก่อนกำหนด
                </p>
                <p>
                  ก่อนลงนามในสัญญา ควรอ่านรายละเอียดเกี่ยวกับค่าธรรมเนียมแฝง
                  ค่าประกันภัยที่กำหนดขั้นต่ำ และเงื่อนไขการสิ้นสุดสัญญาอย่างรอบคอบ
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL-WIDTH IMAGE BREAK — tire
          ══════════════════════════════════════ */}
      <section className="w-full">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image src="/audi.jpg" alt="Tire close-up" fill className="object-cover" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — ข้อควรรู้ก่อนขับ
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Before You Drive
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              ข้อควรรู้
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Prerequisites */}
          <FadeIn className="mt-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl border border-[#0c0479]/[0.08] bg-[#0c0479]/[0.03] p-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">1</span>
                <div>
                  <p className="text-sm font-semibold text-[#0c0479]">ใบขับขี่ทางการทูต</p>
                  <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">
                    ต้องมีใบขับขี่ที่ถูกต้องตามระเบียบ (Diplomatic Driver License)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-[#c40000]/[0.08] bg-[#c40000]/[0.03] p-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c40000] text-xs font-bold text-white">2</span>
                <div>
                  <p className="text-sm font-semibold text-[#c40000]">ประกันภัยรถยนต์</p>
                  <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">
                    ต้องมีประกันที่มีผลบังคับใช้แล้ว (Car Insurance)
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* OFM note */}
          <FadeIn className="mt-10">
            <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-6 md:p-8">
              <p className="text-sm leading-relaxed text-black/70 md:text-base">
                กรณีตัวแทนจำหน่าย (Dealer) ไม่มีความคุ้นเคยกับการซื้อขายรถกับนักการทูต
                หรือไม่ทราบระเบียบของ OFM ท่านจะต้องแจ้งให้ตัวแทนจำหน่ายทราบว่า
              </p>
              <div className="mt-4 rounded-lg bg-[#0c0479] px-6 py-4 text-sm font-medium leading-relaxed text-white md:text-base">
                เอกสารตัวจริง (Original Documents) จะต้องจัดส่งไปยัง{" "}
                <span className="font-bold text-[#ffc8c8]">OFM โดยตรง</span>
                {" "}— ไม่ใช่ DMV หรือ MVA
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — เอกสาร
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Required Documents
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              เอกสารที่ต้องเตรียม
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <FadeIn className="mt-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {[
                "หนังสือเดินทาง & วีซ่า",
                "บัตรประจำตัวนักการทูต",
                "ประกันภัยรถยนต์",
                "ใบขับขี่ทางการทูต",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-xl border border-black/[0.06] bg-white p-5 text-center"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${
                      i % 2 === 0 ? "bg-[#0c0479]" : "bg-[#c40000]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-snug text-black/70">{doc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Documents dealer sends to OFM */}
          <FadeIn className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Documents for OFM
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-[#0c0479] md:text-4xl">
              เอกสารที่ต้องจัดส่งไปยัง OFM
            </h3>
            <div className="mt-3 h-px w-12 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-6 space-y-3">
            {DOCS.map((doc, idx) => (
              <FadeIn key={doc.num} delay={idx * 0.08}>
                <div className="flex gap-5 rounded-xl border border-black/[0.06] bg-white p-5 md:p-6">
                  <span className="text-sm font-mono font-bold text-[#0c0479]">{doc.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-black/80 md:text-base">{doc.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">{doc.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Summary pills */}
          <FadeIn className="mt-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#0c0479] px-5 py-2.5 text-sm font-medium text-white">
                ซื้อรถ → ส่งเอกสารข้อ 1–3
              </span>
              <span className="rounded-full bg-[#c40000] px-5 py-2.5 text-sm font-medium text-white">
                เช่าซื้อ → ส่งเอกสารทุกข้อ (1–4)
              </span>
            </div>
          </FadeIn>

          {/* Important callout */}
          <FadeIn className="mt-10">
            <div className="rounded-xl bg-[#0c0479] p-7 md:p-10">
              <span className="inline-block rounded-full bg-[#c40000] px-3 py-1 text-xs font-semibold text-white">
                ข้อสำคัญ
              </span>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                การได้รับอนุมัติการจดทะเบียนรถล่าช้า อาจเกิดจากกรณีที่ตัวแทนจำหน่ายไม่ได้จัดส่งเอกสารตัวจริงไปยัง OFM
                ดังนั้น ขอความกรุณาติดตามกับตัวแทนจำหน่ายโดยตรง เพื่อยืนยันว่าเอกสารได้ถูกจัดส่งเรียบร้อยแล้ว
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                จากนั้น โปรดนำส่งไฟล์เอกสารทั้งหมดมายังฝ่ายพิธีฯ
                เพื่อดำเนินการในขั้นตอนขอมีป้ายทะเบียนทางการทูตต่อไป
              </p>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn className="mt-10 flex justify-center">
            <Link
              href="/license"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0a0360]"
            >
              การขอใบขับขี่ทางการทูต อ่านรายละเอียด →
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}