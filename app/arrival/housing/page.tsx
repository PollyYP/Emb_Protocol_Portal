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
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
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
              transition={{ duration: 1.8, ease: "easeOut" as const }}
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
      <Link
        href="/arrival/ssn"
        className="fixed right-6 bottom-8 z-40 hidden md:flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[11px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg transition-all hover:bg-[#0c0479] hover:text-white hover:shadow-xl"
      >
        <div className="flex flex-col items-center">
          <p>ไปที่</p>
          <p>Step 2</p>
        </div>
      </Link>

      <Link
        href="/arrival/ssn"
        className="fixed right-4 bottom-5 z-40 flex md:hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[10px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg"
      >
        <div className="flex flex-col items-center">
          <p>ไปที่</p>
          <p>Step 2</p>
        </div>
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
                  ข้าราชการที่มีครอบครัวอาจพิจารณาเลือกเช่าบ้านพักในเขตมลรัฐเวอร์จิเนียหรือแมรีแลนด์ ซึ่งเป็นมลรัฐที่ติดกับกรุงวอชิงตัน แถบนี้จะมีอัตราค่าเช่าต่ำกว่า
                  โดยอาจได้เนื้อที่ทั้งในและนอกบ้านใหญ่กว่าในกรุงวอชิงตันอีกด้วย
                  แต่จะต้องใช้เวลาในการเดินทางนานกว่า เพราะการจราจรในช่วงเร่งรีบตอนเช้าและตอนเย็นจะติดขัด
                </p>
                <p>
                  อย่างไรก็ดี การหาบ้านพักนั้น สามารถใช้บริการนายหน้า (Realtor) อีกทางหนึ่ง
                  นอกเหนือจากการสืบหาด้วยตนเอง โดยค่าจ้างส่วนนี้ จะไม่จัดเก็บจากผู้หาบ้านเช่า
                  แต่จะเป็นภาระความรับผิดชอบของผู้ให้เช่า นอกจากนี้ ยังสามารถสืบค้นที่พักด้วยตนเองผ่านแอปพลิเคชันและเว็บไซต์ที่ให้บริการฟรี ดังต่อไปนี้
                </p>

                {/* Realtor apps */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    { name: "Zillow", desc: "ค้นหาบ้านเช่า/ซื้อ พร้อมข้อมูลราคาตลาด", href: "https://www.zillow.com", color: "#006AFF" },
                    { name: "Redfin", desc: "ข้อมูลแบบ Real-time พร้อม Virtual Tour", href: "https://www.redfin.com", color: "#CC1A1A" },
                    { name: "Apartments.com", desc: "เน้นบ้านเช่าและอพาร์ตเมนต์โดยเฉพาะ", href: "https://www.apartments.com", color: "#E8581A" },
                    { name: "Trulia", desc: "แผนที่ละแวกบ้าน ความปลอดภัย และรีวิว", href: "https://www.trulia.com", color: "#5C6BC0" },
                  ].map((app) => (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 rounded-lg border border-black/8 bg-white p-3 transition-shadow hover:shadow-md"
                    >
                      <span className="text-sm font-extrabold" style={{ color: app.color }}>
                        {app.name}
                      </span>
                      <span className="text-xs leading-snug text-black/50">
                        {app.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Main image */}
            <FadeIn delay={0.15}>
              <div className="relative min-h-[500px] h-full w-full overflow-hidden rounded-lg">
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
          <Image src="/living2.jpg" alt="Living space" fill className="object-cover" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — สัญญาเช่า
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Lease &amp; Deposit
            </p>
            <h2 className="mt-2 text-[21px] font-extrabold text-[#0c0479] md:text-4xl">
              สัญญาเช่า ค่านายหน้า และเงินประกัน
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="flex flex-col gap-8">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image src="/townhouse.jpg" alt="Townhouse" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image src="/townhouse2.jpg" alt="Townhouse" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  เมื่อข้าราชการหรือนายหน้าหาบ้านพักได้ตามความประสงค์ของข้าราชการแล้ว
                  จะต้องยื่นเรื่องให้คณะกรรมการเช่าบ้านพักพิจารณาความเหมาะสม
                  แล้วรายงานกระทรวงฯ เพื่อขออนุมัติการเช่าบ้าน
                  หลังจากนั้น เอกอัครราชทูตฯ เป็นผู้ลงนามในสัญญาเช่า
                  ทั้งนี้ หากมีข้อสงสัยเกี่ยวกับอัตราค่าเช่าที่กระทรวงฯ อนุมัติ สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่ฝ่ายคลังของสถานเอกอัครราชทูตฯ
                </p>
                <p>
                  การทำสัญญาเช่าอาจเป็นแบบรายปี ทุก 2 ปี หรือจนครบวาระประจำการ
                  ขึ้นอยู่กับข้อตกลงระหว่างผู้เช่าและผู้ให้เช่า โดยทั่วไปผู้ให้เช่าอาจปรับอัตราค่าเช่าได้เมื่อครบรอบสัญญา
                  ซึ่งในทางปฏิบัติพบว่าค่าเช่ามักปรับขึ้นทุกปีตามภาวะตลาดและค่าครองชีพ
                  ดังนั้น ควรพิจารณาเงื่อนไขการปรับค่าเช่าในสัญญาให้รอบคอบก่อนลงนาม
                </p>

                {/* Rent control info */}
                <div className="rounded-xl border border-black/8 bg-[#fafafa] p-5 space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                  <p className="font-semibold text-black/80">
                    ผู้ให้เช่าสามารถปรับขึ้นค่าเช่าได้ตามกฎหมายของแต่ละพื้นที่ ดังนี้
                  </p>

                  {/* DC */}
                  <div>
                    <p className="font-extrabold text-[#0c0479]">1. Washington, DC</p>
                    <p className="mt-2">
                      กรุงวอชิงตันมีกฎหมายควบคุมค่าเช่าภายใต้ Rental Housing Act
                      โดย Rental Housing Commission (RHC) จะประกาศอัตราการเปลี่ยนแปลงดัชนีราคาผู้บริโภค (CPI-W) ทุกปี
                      เพื่อใช้กำหนดมาตรฐานเพดานการขึ้นค่าเช่าสำหรับที่พักที่อยู่ภายใต้การควบคุม
                    </p>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-black/40">
                      ปีควบคุมค่าเช่า 2026 (1 พ.ค. 2569 – 30 เม.ย. 2570)
                    </p>

                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="rounded-lg border border-black/6 bg-white p-3">
                        <p className="text-xs font-bold text-[#0c0479]">ผู้เช่าทั่วไป</p>
                        <p className="mt-1 text-2xl font-extrabold text-[#c40000]">4.1%</p>
                        <p className="mt-1 text-xs text-black/50">CPI-W + 2% <br/> สำหรับยูนิตที่ไม่มีผู้สูงอายุหรือผู้พิการ</p>
                      </div>
                      <div className="rounded-lg border border-black/6 bg-white p-3">
                        <p className="text-xs font-bold text-[#0c0479]">ผู้สูงอายุ / ผู้พิการ</p>
                        <p className="mt-1 text-2xl font-extrabold text-[#c40000]">2.1%</p>
                        <p className="mt-5 text-xs text-black/50">ต้องลงทะเบียนผู้สูงอายุหรือผู้พิการก่อน</p>
                      </div>
                    </div>

                    <p className="mt-2">
                      อย่างไรก็ตาม ไม่ใช่ทุกอพาร์ตเมนต์จะอยู่ภายใต้การควบคุมค่าเช่า
                      อาคารที่ได้รับการยกเว้น ได้แก่ อาคารที่สร้างหลังปี ค.ศ. 1975
                      อาคารที่มีน้อยกว่า 5 ยูนิต และอาคารหรูบางแห่ง
                      ซึ่งผู้ให้เช่าสามารถปรับราคาตามตลาดได้เมื่อสัญญาหมดอายุ
                      โดยต้องแจ้งเป็นลายลักษณ์อักษรล่วงหน้า
                      <div className="mt-2">
                        <a
                          href="https://dhcd.dc.gov/rentcontrol"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0c0479] hover:text-[#e0261c]"
                        >
                          อ่านเพิ่มเติม →
                        </a>
                      </div>
                    </p>
                  </div>

                  {/* Virginia */}
                  <div>
                    <p className="font-extrabold text-[#0c0479]">2. Arlington, Virginia</p>
                    <p className="mt-2">
                      มลรัฐเวอร์จิเนียไม่มีกฎหมายควบคุมค่าเช่า ผู้ให้เช่าสามารถขึ้นค่าเช่าได้ในจำนวนเท่าใดก็ได้เมื่อสัญญาสิ้นสุดลง
                      โดยไม่มีเพดานที่กฎหมายกำหนด ข้อบังคับที่มีอยู่เพียงประการเดียวคือ
                      ผู้ให้เช่าไม่สามารถขึ้นค่าเช่าในระหว่างที่ยังไม่หมดสัญญา เว้นแต่จะถูกระบุเอาไว้ในสัญญา ดังนั้น โปรดอ่านสัญญาให้ละเอียดถี่ถ้วน
                      ทั้งนี้ การขึ้นค่าเช่าจะต้องแจ้งล่วงหน้าก่อน โดยทั่วไปประมาณ 30 วัน
                      <div className="mt-2">
                        <a
                          href="https://www.arlingtonva.us/Government/Programs/Housing/Housing-Assistance/Tenant-Landlord-Rights-Responsibilities"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0c0479] hover:text-[#e0261c]"
                        >
                          อ่านเพิ่มเติม →
                        </a>
                      </div>
                    </p>
                  </div>

                  {/* Maryland */}
                  <div>
                    <p className="font-extrabold text-[#0c0479]">3. Montgomery County, Maryland</p>
                    <p className="mt-0.5 text-sm text-black/40">(Bethesda, Rockville, Silver Spring, Gaithersburg)</p>
                    <p className="mt-2">
                      Montgomery County กำหนดเพดานการขึ้นค่าเช่าตามกฎหมาย Rent Stabilization
                      โดย DHCA จะประกาศอัตราสูงสุดทุกปีตาม CPI-U (Consumer Price Index for All Urban Consumers)
                    </p>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-black/40">
                      อัตราที่บังคับใช้ปัจจุบัน (ถึง 30 มิ.ย. 2569)
                    </p>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="rounded-lg border border-black/6 bg-white p-3">
                        <p className="text-xs font-bold text-[#0c0479]">CPI-U ปัจจุบัน</p>
                        <p className="mt-1 text-2xl font-extrabold text-[#c40000]">2.7%</p>
                      </div>
                      <div className="rounded-lg border border-black/6 bg-white p-3">
                        <p className="text-xs font-bold text-[#0c0479]">เพดานขึ้นค่าเช่าสูงสุด</p>
                        <p className="mt-1 text-2xl font-extrabold text-[#c40000]">5.7%</p>
                        <p className="mt-1 text-xs text-black/50">CPI-U + 3% หรือ 6% แล้วแต่จำนวนใดต่ำกว่า</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-black/70">
                      <p className="font-semibold text-black/80">ข้อบังคับสำคัญที่ควรทราบ</p>
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/50" />
                        <p>ขึ้นค่าเช่าได้ไม่เกิน 1 ครั้งต่อ 12 เดือน และต้องเป็นช่วงต่อสัญญาหรือเซ็นสัญญาใหม่เท่านั้น</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/50" />
                        <p>สัญญาหลายปี ค่าเช่าต้องคงที่ตลอดอายุสัญญา ห้ามขึ้นระหว่างสัญญาโดยเด็ดขาด</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/50" />
                        <p>ผู้ให้เช่าต้องแจ้งเป็นลายลักษณ์อักษรล่วงหน้า <span className="font-semibold">90 วัน</span> ก่อนขึ้นค่าเช่า ไม่ว่าจะเป็นยูนิตภายใต้กฎหมายหรือไม่ก็ตาม</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]/50" />
                        <p>หากผู้ให้เช่าขึ้นค่าเช่าน้อยกว่าเพดานที่อนุญาต ส่วนต่างที่เหลือจะถูก "สะสม" (Banked Rent) ไว้ใช้ในอนาคต แต่การขึ้นค่าเช่าทั้งหมดรวมกันต้องไม่เกิน 10% ของค่าเช่าปัจจุบัน</p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-black/40">
                      * อาคารที่ได้รับการยกเว้น เช่น อาคารสร้างใหม่ และโครงการ MPDU บางแห่ง อาจมีเงื่อนไขแตกต่างกัน
                    </p>
                    <div className="mt-4">
                        <a
                          href="https://www.montgomerycountymd.gov/DHCA/Tenants/increases-and-limits.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0c0479] hover:text-[#e0261c]"
                        >
                          อ่านเพิ่มเติม →
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                  <Image src="/living1.jpg" alt="Living space" fill className="object-cover" />
                </div>
                <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                  <Image src="/living2.jpg" alt="Cozy couch" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-black/6 bg-[#fafafa] p-6 md:p-8">
                <h3 className="text-lg font-extrabold text-[#0c0479] md:text-xl">
                  จุดที่ควรถามให้ชัดก่อนเซ็นสัญญา
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/70 md:text-base">
                  {[
                    "ค่าเช่ารวมอะไรบ้าง (ค่าน้ำ/แก๊ส/ที่จอดรถ/ส่วนกลาง)",
                    "ค่ามัดจำบ้าน (ค่า Security)",
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
          <Image src="/house.jpg" alt="House" fill className="object-cover" />
        </div>
      </section>
      {/* ══════════ BACK NAV ══════════ */}
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
              <Link
                href="/arrival"
                className="inline-flex items-center gap-2 text-sm font-medium text-black/40 transition-colors hover:text-[#0c0479]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                กลับหน้าคู่มือข้าราชการใหม่
              </Link>
            </div>
    </main>
  );
}