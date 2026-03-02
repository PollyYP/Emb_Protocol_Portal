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

export default function HousingPage() {
  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/interior.jpg" alt="Interior background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
              ที่พักอาศัย
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              DC, Maryland, Virginia area (DMV)
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STICKY NEXT-STEP LINK
          ══════════════════════════════════════ */}
      {/* Desktop — fixed circle on the right */}
      <Link
        href="/arrival/ssn"
        className="fixed right-6 bottom-8 z-40 hidden md:flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[11px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg transition-all hover:bg-[#0c0479] hover:text-white hover:shadow-xl"
      >
        Step 2
      </Link>

      {/* Mobile — fixed circle on the right */}
      <Link
        href="/arrival/ssn"
        className="fixed right-4 bottom-5 z-40 flex md:hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[10px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg"
      >
        Step 2
      </Link>

      {/* ══════════════════════════════════════
          SECTION 1 — การหาที่พัก + image grid
          ══════════════════════════════════════ */}
      <section className="w-full py-14 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          {/* Section heading */}
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Housing in DMV
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              การหาที่พักในพื้นที่ DMV
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Text + main image */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <FadeIn>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  สถานเอกอัครราชทูตฯ ตั้งอยู่ที่ 1024 Wisconsin Avenue, N.W.,
                  Washington, D.C. 20007 ซึ่งอยู่ในพื้นที่ของย่านเมืองเก่าคือ Georgetown
                  และมหาวิทยาลัย Georgetown จะค่อนข้างปลอดภัยแต่มีราคาค่าเช่าสูง
                  มีทั้งที่เป็นบ้านลักษณะ Townhome หรือ Townhouse หรือในลักษณะเป็นห้องชุด
                  ทั้งอพาร์ตเมนต์และคอนโดมิเนียม ซึ่งส่วนใหญ่จะไม่รวมเฟอร์นิเจอร์ ส่วนบ้านเดี่ยวจะอยู่ห่างไกลตัวเมืองออกไป
                </p>
                <p>
                  ข้าราชการที่มีครอบครัวอาจพิจารณาเลือกเช่าบ้านพักในเขตมลรัฐ
                  เวอร์จิเนียและแมรีแลนด์ ซึ่งเป็นมลรัฐที่ติดกับกรุงวอชิงตัน แถบนี้จะมีอัตราค่าเช่าต่ำกว่า
                  โดยอาจได้เนื้อที่ทั้งในและนอกบ้านใหญ่กว่าในกรุงวอชิงตันอีกด้วย
                  แต่จะต้องใช้เวลาในการเดินทางนานกว่า เพราะการจราจรในช่วงเร่งรีบตอนเช้าและตอนเย็นจะติดขัด
                </p>
                <p>
                  อย่างไรก็ดี การหาบ้านพักนั้น สามารถใช้บริการนายหน้า (Realtor) อีกทางหนึ่ง
                  นอกเหนือจากการสืบหาด้วยตนเอง โดยค่าจ้างส่วนนี้ จะไม่จัดเก็บจากผู้หาบ้านเช่า
                  แต่จะเป็นภาระความรับผิดชอบของผู้ให้เช่า
                </p>
              </div>
            </FadeIn>

            {/* Main image */}
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/apartment.jpg"
                  alt="Apartment"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Image mosaic — 3 column grid */}
          <FadeIn className="mt-12">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                <Image src="/living3.jpg" alt="Living room" fill className="object-cover" />
              </div>
              <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                <Image src="/bedroom.jpg" alt="Bedroom" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg md:col-span-1 md:aspect-3/4">
                <Image src="/fireplace1.jpg" alt="Fireplace" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>

          {/* Tips card */}
          <FadeIn className="mt-10">
            <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-6 md:p-10">
              <h3 className="text-[16.5px] font-extrabold text-[#0c0479] md:text-xl">
                ข้อแนะนำเพิ่มเติมสำหรับข้าราชการใหม่
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 text-sm leading-relaxed text-black/70 md:grid-cols-2 md:text-base">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">1</span>
                  <p><span className="font-semibold text-black/80">กำหนดงบประมาณ:</span> คำนึงถึงค่าเช่า + ค่าสาธารณูปโภค (ไฟ/น้ำ/แก๊ส/อินเทอร์เน็ต) + ที่จอดรถ + ประกันผู้เช่า (Renter's Insurance) หากอาคารกำหนด</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">2</span>
                  <p><span className="font-semibold text-black/80">เอกสารที่ควรเตรียม:</span> หนังสือเดินทาง วีซ่า หนังสือรับรองการปฏิบัติหน้าที่/จดหมายรับรองจากสถานเอกอัครราชทูตฯ และหลักฐานการติดต่อที่พักชั่วคราว</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">3</span>
                  <p><span className="font-semibold text-black/80">เฟอร์นิเจอร์:</span> ที่พักส่วนใหญ่มักไม่รวมเฟอร์นิเจอร์ ควรสอบถามให้ชัดเจน (furnished / unfurnished / partially furnished)</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">4</span>
                  <p><span className="font-semibold text-black/80">การเดินทาง:</span> หากเลือก VA/MD ควรทดลองเวลาเดินทางจริง (ช่วงเช้า-เย็น) และพิจารณาระยะเวลาในการเดินทาง</p>
                </div>
                <div className="flex gap-3 md:col-span-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c40000]/10 text-[10px] font-bold text-[#c40000]">5</span>
                  <p><span className="font-semibold text-black/80">เงื่อนไขสัญญา:</span> ตรวจสอบระยะเวลาสัญญา การต่อสัญญา การยกเลิกก่อนกำหนด การเพิ่มค่าเช่า และความรับผิดชอบค่าซ่อมบำรุง</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL-WIDTH IMAGE BREAK — living2
          ══════════════════════════════════════ */}
      <section className="w-full">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/living2.jpg"
            alt="Living space"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — สัญญาเช่า
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          {/* Section heading */}
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Lease &amp; Deposit
            </p>
            <h2 className="mt-2 text-[21px] font-extrabold text-[#0c0479] md:text-4xl">
              สัญญาเช่า ค่านายหน้า และเงินประกัน
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Image left + text right */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <FadeIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/townhouse.jpg"
                  alt="Townhouse"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  เมื่อข้าราชการหรือนายหน้าหาบ้านพักได้ตามความประสงค์ของข้าราชการแล้ว
                  จะต้องยื่นเรื่องให้คณะกรรมการเช่าบ้านพักพิจารณาความเหมาะสม
                  แล้วรายงานกระทรวงฯ เพื่อขออนุมัติการเช่าบ้าน
                  หลังจากนั้น เอกอัครราชทูตฯ เป็นผู้ลงนามในสัญญาเช่า
                </p>
                <p>
                  ทั้งนี้ การทำสัญญาเช่า อาจจะทำเป็นปีต่อปี หรือทุก ๆ 2 ปี
                  หรืออาจจะทำสัญญาเช่าจนครบวาระประจำการเลยก็ได้
                  ในกรณีที่ทำสัญญาครั้งเดียวจนครบวาระประจำการนั้น
                  จะมีข้อดีประการหนึ่ง คือ ผู้ให้เช่าจะไม่สามารถขึ้นอัตราค่าเช่าบ้านตามค่าครองชีพ
                  หรือการขึ้นราคาภาษีโรงเรือนที่เพิ่มขึ้นทุกปีได้
                  และโดยทั่วไปผู้ให้เช่าจำเป็นต้องเสียอัตราค่าจ้างนายหน้าดำเนินการ
                  ในอัตราร้อยละ 3.5 ของค่าเช่า
                </p>
                <p>
                  สำหรับการเช่าบ้านพักของข้าราชการฯ ส่วนใหญ่จะต้องเสียค่ามัดจำบ้าน (ค่า Security)
                  ให้กับเจ้าของบ้านในอัตราค่าเช่าล่วงหน้า 1 เดือน
                  ซึ่งเงินจำนวนนี้ เจ้าของบ้านจะคืนให้เมื่อครบสัญญาและจะคืนให้เต็มจำนวน
                  หากข้าราชการผู้นั้นอยู่จนครบสัญญาและไม่มีความเสียหายในบ้าน
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Two-image row + checklist */}
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Two stacked images */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                  <Image src="/living1.jpg" alt="Living space" fill className="object-cover" />
                </div>
                <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                  <Image src="/living2.jpg" alt="Cozy couch" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>

            {/* Checklist card */}
            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-black/6 bg-[#fafafa] p-6 md:p-8">
                <h3 className="text-lg font-extrabold text-[#0c0479] md:text-xl">
                  จุดที่ควรถามให้ชัดก่อนเซ็นสัญญา
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/70 md:text-base">
                  {[
                    "ค่าเช่ารวมอะไรบ้าง (ค่าน้ำ/แก๊ส/ที่จอดรถ/ส่วนกลาง)",
                    "นโยบายการซ่อมแซม ใครรับผิดชอบ และระยะเวลาการดำเนินการ",
                    "เงื่อนไขการคืนเงินประกัน และรายการที่อาจถูกหัก",
                    "กฎเรื่องสัตว์เลี้ยง (pet policy) และค่าธรรมเนียมเพิ่มเติม",
                    "การต่อสัญญา/การปรับค่าเช่า และการแจ้งล่วงหน้า",
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
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM — full-width house image
          ══════════════════════════════════════ */}
      <section className="w-full pb-14 md:pb-0">
        <div className="relative aspect-16/7 w-full overflow-hidden">
          <Image
            src="/house.jpg"
            alt="House"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}