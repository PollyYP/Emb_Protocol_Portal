"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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

const COMPARE = [
  {
    aspect: "ค่าใช้จ่ายรายเดือน",
    buy: { text: "ไม่มีค่างวด", pro: false },
    lease: { text: "มีค่างวด", pro: true },
  },
  {
    aspect: "กรรมสิทธิ์",
    buy: { text: "เป็นเจ้าของรถ", pro: true },
    lease: { text: "ไม่ได้เป็นเจ้าของรถ", pro: false },
  },
  {
    aspect: "เมื่อกลับประจำการ",
    buy: { text: "ต้องจำหน่ายรถเอง", pro: false },
    lease: { text: "คืนรถตามสัญญาได้ทันที", pro: true },
  },
  {
    aspect: "การคืนรถก่อนกำหนด",
    buy: { text: "ขายได้เมื่อพร้อม", pro: true },
    lease: { text: "ต้องจ่ายที่เหลือให้ครบตามสัญญา", pro: false },
  },
  {
    aspect: "ค่าบำรุงรักษา",
    buy: { text: "รับผิดชอบเองทั้งหมด", pro: false },
    lease: { text: "มักรวมในสัญญาบางส่วน", pro: true },
  },
  {
    aspect: "ระยะทางการใช้งาน",
    buy: { text: "ไม่มีข้อจำกัด", pro: true },
    lease: { text: "จำกัดไมล์ต่อปี (mileage limit)", pro: false },
  },
  {
    aspect: "ความยืดหยุ่น",
    buy: { text: "ดัดแปลงรถได้ตามต้องการ", pro: true },
    lease: { text: "ต้องคืนในสภาพตามกำหนด", pro: false },
  },
];

const Check = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const Cross = () => (
  <svg className="h-4 w-4 shrink-0 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function VehiclePurchasePage() {
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
              การซื้อ / เช่าซื้อรถ
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" as const }}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Buy</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">การซื้อรถยนต์</h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  ท่านสามารถซื้อรถยนต์ได้ทั้งจากตัวแทนจำหน่าย (Dealer) หรือจากบุคคลทั่วไป (รถมือสอง)
                  ทั้งนี้ การจดทะเบียนรถของนักการทูตจะต้องดำเนินการผ่าน{" "}
                  <strong className="text-[#0c0479]">OFM</strong> เท่านั้น
                  ไม่สามารถจดทะเบียนผ่านหน่วยงานรัฐของแต่ละมลรัฐโดยตรง
                </p>
                <p>
                  ก่อนตัดสินใจ ขอให้ท่านพิจารณาปัจจัยที่เกี่ยวข้องอย่างรอบคอบ ไม่ว่าจะเป็นงบประมาณ ค่าเบี้ยประกันภัย ค่าบำรุงรักษา
                  อัตราการสิ้นเปลืองเชื้อเพลิง และความเหมาะสมกับรูปแบบการใช้งาน นอกจากนี้ หากท่านเลือกซื้อรถยนต์
                  ควรคำนึงถึงความเป็นไปได้ในการจำหน่ายรถยนต์ให้แล้วเสร็จก่อนกลับประจำการ และหากท่านเลือกเช่าซื้อ
                  ควรทราบว่าหากมีความจำเป็นต้องคืนรถก่อนครบกำหนดสัญญา ท่านยังคงมีภาระผูกพันที่จะต้องจ่ายทั้งหมดตามข้อตกลงที่ได้ทำไว้กับผู้ให้เช่าซื้อ
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                <Image src="/bmw.jpg" alt="BMW" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>

          {/* Image mosaic */}
          <FadeIn className="mt-12">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/bmw2.jpg" alt="Car dealer" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/dealer.jpg" alt="Blue Audi" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg md:col-span-1 md:aspect-[3/4]">
                <Image src="/ferrari.jpg" alt="Ferrari" fill className="object-cover" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Lease</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">การเช่าซื้อ</h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
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
          COMPARISON TABLE
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Compare</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">ซื้อสด vs เช่าซื้อ</h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <FadeIn className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr>
                  <th className="w-1/3 rounded-tl-xl bg-[#fafafa] px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest text-black/30" />
                  <th className="w-1/3 bg-[#0c0479] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-widest text-white">
                    ซื้อรถ
                  </th>
                  <th className="w-1/3 rounded-tr-xl bg-[#c40000] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-widest text-white">
                    เช่าซื้อ
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                    <td className="px-6 py-4 text-sm font-semibold text-black/60">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center gap-2 ${row.buy.pro ? "text-[#0c0479]" : "text-black/35"}`}>
                        {row.buy.pro ? <Check /> : <Cross />}
                        {row.buy.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center gap-2 ${row.lease.pro ? "text-[#c40000]" : "text-black/35"}`}>
                        {row.lease.pro ? <Check /> : <Cross />}
                        {row.lease.text}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL-WIDTH IMAGE BREAK
          ══════════════════════════════════════ */}
      <section className="w-full">
        <div className="relative aspect-21/9 w-full overflow-hidden">
          <Image src="/audi.jpg" alt="Tire close-up" fill className="object-cover" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — ข้อควรรู้ก่อนขับ
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Before You Drive</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">ข้อควรรู้</h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <FadeIn className="mt-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">1</span>
                <div>
                  <p className="text-sm font-semibold text-[#0c0479]">ใบขับขี่ทางการทูต</p>
                  <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">
                    ต้องมีใบขับขี่ที่ถูกต้องตามระเบียบ (Diplomatic Driver License)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-[#c40000]/8 bg-[#c40000]/3 p-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c40000] text-xs font-bold text-white">2</span>
                <div>
                  <p className="text-sm font-semibold text-[#c40000]">ประกันภัยรถยนต์</p>
                  <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">
                    ต้องมีประกันรถยนต์ (Car Insurance) ก่อนขับขี่
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="mt-10">
            <div className="rounded-xl border border-black/6 bg-[#fafafa] p-6 md:p-8">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Required Documents</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">เอกสารที่ต้องเตรียม</h2>
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
                <div key={i} className="flex flex-col items-center rounded-xl border border-black/6 bg-white p-5 text-center">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${i % 2 === 0 ? "bg-[#0c0479]" : "bg-[#c40000]"}`}>
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-snug text-black/70">{doc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">Documents for OFM</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#0c0479] md:text-4xl">เอกสารที่ต้องจัดส่งไปยัง OFM</h3>
            <div className="mt-3 h-px w-12 bg-[#c40000]" />
            <div className="mt-4">
              <p>หากท่านซื้อหรือเช่าซื้อรถจาก Dealer จะมีเอกสารประกอบ ซึ่งจำเป็นสำหรับขั้นตอนการดำเนินการกับ OFM ดังต่อไปนี้</p>
            </div>
          </FadeIn>

          <div className="mt-6 space-y-3">
            {DOCS.map((doc, idx) => (
              <FadeIn key={doc.num} delay={idx * 0.08}>
                <div className="flex gap-5 rounded-xl border border-black/6 bg-white p-5 md:p-6">
                  <span className="text-sm font-mono font-bold text-[#0c0479]">{doc.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-black/80 md:text-base">{doc.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">{doc.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#0c0479] px-5 py-2.5 text-sm font-medium text-white">ซื้อรถ → ส่งเอกสารข้อ 1–3</span>
              <span className="rounded-full bg-[#c40000] px-5 py-2.5 text-sm font-medium text-white">เช่าซื้อ → ส่งเอกสารทุกข้อ (1–4)</span>
            </div>
          </FadeIn>

          <FadeIn className="mt-10">
            <div className="rounded-xl bg-[#0c0479] p-7 md:p-10">
              <span className="inline-block rounded-full bg-[#c40000] px-3 py-1 text-xs font-semibold text-white">ข้อสำคัญ</span>
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

          <FadeIn className="mt-10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link href="/dmv/driver-license" className="flex items-center gap-3 rounded-xl border border-[#0c0479]/10 bg-white p-5 transition-colors hover:bg-[#0c0479]/3">
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
              <Link href="/dmv/registration" className="flex items-center gap-3 rounded-xl border border-[#c40000]/10 bg-white p-5 transition-colors hover:bg-[#c40000]/3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c40000]/8">
                  <svg className="h-5 w-5 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#c40000]">การขึ้นทะเบียนรถ</p>
                  <p className="mt-0.5 text-xs text-black/40">Diplomatic Plate Registration</p>
                </div>
                <svg className="ml-auto h-4 w-4 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ BACK NAV ══════════ */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Link href="/arrival" className="inline-flex items-center gap-2 text-sm font-medium text-black/40 transition-colors hover:text-[#0c0479]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          กลับหน้าคู่มือข้าราชการใหม่
        </Link>
      </div>
    </main>
  );
}