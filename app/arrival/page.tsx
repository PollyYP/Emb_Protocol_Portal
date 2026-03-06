"use client";

import Link from "next/link";
import Image from "next/image";
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

const ofmSteps = [
  {
    no: "01",
    title: "Notification of Appointment",
    titleTh: "แจ้งเข้ารับตำแหน่ง",
    desc: "ต้องดำเนินการภายใน 30 วันนับจากวันเดินทางมาถึง เพื่อรับบัตรประจำตัวทางการทูต",
    href: "/arrival/noa",
    urgent: true,
  },
  {
    no: "02",
    title: "Notification of Change",
    titleTh: "แจ้งเปลี่ยนแปลงข้อมูล",
    desc: "เมื่อมีการเปลี่ยนที่อยู่ ตำแหน่ง หรือข้อมูลส่วนตัวใด ๆ ต้องแจ้ง OFM ทันที",
    href: "/arrival/noc",
    urgent: false,
  },
];

const arrivalGuide = [
  {
    no: 1,
    title: "หาที่พัก",
    titleEn: "Housing",
    desc: "ข้อมูลย่านที่พัก DC / MD / VA อัตราค่าเช่า กฎหมายควบคุมค่าเช่า และแอปหาบ้าน",
    href: "/arrival/housing",
    image: "/house.jpg",
  },
  {
    no: 2,
    title: "ขอมีเลข SSN",
    titleEn: "Social Security Number",
    desc: "Social Security Number ที่จำเป็นต้องมีสำหรับการเปิดบัญชีธนาคารและการทำธุรกรรมต่าง ๆ",
    href: "/arrival/ssn",
    image: "/ssn.jpg",
  },
  {
    no: 3,
    title: "เปิดบัญชีธนาคาร",
    titleEn: "Bank Account",
    desc: "ขั้นตอนการเปิดบัญชีธนาคารในสหรัฐฯ เอกสารที่ต้องเตรียม และธนาคารที่แนะนำ",
    href: "/arrival/bank",
    image: "/bank.jpg",
  },
  {
    no: 4,
    title: "ซื้อ/เช่าซื้อรถ",
    titleEn: "Vehicle Purchase",
    desc: "ระเบียบทางการทูตเกี่ยวกับรถยนต์ การขอทะเบียนทางการทูต และขั้นตอนซื้อรถ",
    href: "/arrival/vehicle-purchase",
    image: "/car.jpg",
  },
  {
    no: 5,
    title: "ทำประกันรถยนต์",
    titleEn: "Auto Insurance",
    desc: "ข้อกำหนดการทำประกันรถยนต์ที่บังคับตามกฎหมาย ประเภทความคุ้มครอง และวิธีเลือกกรมธรรม์",
    href: "/arrival/auto-insurance",
    image: "/car.jpg",
  },
  {
    no: 6,
    title: "ขอใบขับขี่",
    titleEn: "Driver's License",
    desc: "ขั้นตอนการสอบและขอมีใบขับขี่ในมลรัฐที่ท่านพำนักอยู่ เอกสารที่ต้องเตรียม",
    href: "/arrival/driver-license",
    image: "/car.jpg",
  },
  {
    no: 7,
    title: "ขึ้นทะเบียนรถ",
    titleEn: "Vehicle Registration",
    desc: "การขึ้นทะเบียนรถทางการทูตกับ OFM และ DMV ขั้นตอน เอกสาร และระยะเวลา",
    href: "/arrival/registration",
    image: "/car.jpg",
  },
  {
    no: 8,
    title: "ขอบัตร Tax Exemption",
    titleEn: "Tax Exemption Card",
    desc: "สิทธิ์ยกเว้นภาษีสำหรับหัวหน้าสำนักงาน เงื่อนไข และวิธีการขอผ่านฝ่ายพิธีฯ",
    href: "/arrival/tax-exemption",
    image: "/washington.jpg",
  },
];

const quickTips = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "30 วันแรกสำคัญที่สุด",
    body: "ต้องยื่น NOA ต่อ OFM ภายใน 30 วัน หากไม่ดำเนินการจะไม่สามารถขอบัตรทางการทูตและดำเนินขั้นตอนอื่น ๆ ได้",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "เตรียมเอกสารไว้ล่วงหน้า",
    body: "หนังสือเดินทาง วีซ่า คำสั่งแต่งตั้ง และ Signature Card ควรเตรียมพร้อมก่อนเดินทาง เพื่อให้ดำเนินการได้ทันทีที่มาถึง",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "ที่อยู่ชั่วคราว",
    body: "หากยังไม่มีที่พัก OFM อนุโลมให้ใช้ที่อยู่สถานเอกอัครราชทูตฯ ชั่วคราว แต่ต้องอัปเดตทันทีเมื่อได้ที่อยู่จริง",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "ผู้ติดตามต้องขึ้นทะเบียนด้วย",
    body: "คู่สมรสและบุตรที่เดินทางมาด้วยต้องได้รับการขึ้นทะเบียนกับ OFM เช่นกัน เพื่อให้ได้รับสิทธิ์ทางการทูตครบถ้วน",
  },
];

export default function ArrivalPage() {
  const subtitleLetters = Array.from("ยินดีต้อนรับสู่วอชิงตัน ดี.ซี.");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <main className="w-full bg-white">

      {/* ══════════ HERO ══════════ */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image src="/washingtondc.jpg" alt="Royal Thai Embassy" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Animated content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              Royal Thai Embassy · Washington, D.C.
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              ยินดีต้อนรับ<br />
              <span className="text-white">ข้าราชการมาประจำการใหม่</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base mx-auto"
            >
              คู่มือฉบับนี้จัดทำขึ้นเพื่อช่วยให้ท่านและครอบครัวเริ่มต้นชีวิตในกรุงวอชิงตัน
              ได้อย่างราบรื่น ฝ่ายพิธีการทางการทูต OFM/Visa Desk พร้อมช่วยเหลือทุกขั้นตอนในการดำเนินการกับ OFM เพื่อให้ท่านได้รับบัตรประจำตัวทางการทูตและสิทธิ์ต่าง ๆ อย่างครบถ้วน
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <a
                href="/arrival/housing"
                className="rounded-lg bg-[#c40000] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#a80000]"
              >
                เริ่มต้นที่นี่
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        >
          <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ══════════ WELCOME MESSAGE ══════════ */}
      <section className="w-full bg-[#0c0479] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div ref={titleRef} className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30"
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Protocol Section · OFM/VISA Desk
              </motion.p>
              <motion.h2
                className="mt-3 text-2xl font-extrabold text-white md:text-4xl"
                initial={{ opacity: 0, y: 16 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                ฝ่ายพิธีการทูตยินดีให้บริการ
              </motion.h2>
              <motion.p
                className="mt-5 text-sm leading-relaxed text-white/55 md:text-base"
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                ฝ่ายพิธีการทูต (Protocol Section) ของสถานเอกอัครราชทูตฯ มีหน้าที่ดูแลและประสานงาน
                ด้านพิธีการทางการทูตทั้งหมด รวมถึงการดำเนินการกับ Office of Foreign Missions (OFM)
                ของกระทรวงการต่างประเทศสหรัฐฯ แทนข้าราชการทุกท่าน
              </motion.p>
              <motion.p
                className="mt-4 text-sm leading-relaxed text-white/55 md:text-base"
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                ท่านไม่จำเป็นต้องติดต่อ OFM โดยตรง ฝ่ายพิธีฯ จะเป็นตัวแทนดำเนินการทุกขั้นตอนให้
                เพียงเตรียมเอกสารและกรอกแบบฟอร์มที่กำหนด แล้วส่งให้ฝ่ายพิธีฯ จัดการต่อไป
              </motion.p>
              <motion.div
                className="mt-7 flex flex-wrap gap-4 text-sm"
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="h-4 w-4 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  protocol@thaiembdc.org
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="h-4 w-4 text-[#c40000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +1 (202) 298-4798
                </div>
              </motion.div>
            </div>

            {/* Quick tips */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {quickTips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={titleInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="rounded-xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c40000]/15 text-[#c40000]">
                    {tip.icon}
                  </div>
                  <p className="mt-3 font-extrabold text-white text-sm">{tip.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">{tip.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OFM FIRST STEPS ══════════ */}
      <section id="ofm" className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">ขั้นตอนแรกที่ต้องทำ</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              การแจ้งดำเนินการกับ OFM
            </h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/55 md:text-base">
              ก่อนดำเนินการด้านใด ๆ ในสหรัฐฯ ท่านต้องแจ้ง OFM ก่อนเป็นอันดับแรก
              บัตรประจำตัวทางการทูตที่ได้รับจาก OFM คือกุญแจสำคัญของทุกขั้นตอนที่ตามมา
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {ofmSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href={step.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-black/6 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/8 hover:-translate-y-0.5">
                    {step.urgent && (
                      <div className="absolute right-5 top-5 rounded-full bg-[#c40000]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c40000]">
                        ภายใน 30 วัน
                      </div>
                    )}
                    <div className="flex items-start gap-5">
                      <span className="text-5xl font-extrabold text-[#0c0479]/8 leading-none">{step.no}</span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-black/30">{step.title}</p>
                        <h3 className="mt-1 text-xl font-extrabold text-[#0c0479]">{step.titleTh}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/55">{step.desc}</p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c40000] transition-all group-hover:gap-2.5">
                          อ่านรายละเอียด
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#c40000] transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ARRIVAL GUIDE CARDS ══════════ */}
      <section id="guide" className="w-full bg-[#fafafa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">คู่มือการตั้งถิ่นฐาน</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              New Diplomat Arrival Guide
            </h2>
            <div className="mt-4 h-px w-12 bg-[#c40000]" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/55 md:text-base">
              หลังจากดำเนินการกับ OFM แล้ว ขั้นตอนด้านล่างนี้จะช่วยให้ท่านตั้งถิ่นฐานในสหรัฐฯ
              ได้อย่างครบถ้วน เรียงตามลำดับที่แนะนำ
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arrivalGuide.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.06}>
                <Link href={item.href} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/6 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-36 w-full overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-end gap-2">
                        <span className="text-4xl font-extrabold leading-none text-white/20">{item.no}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-black/30">{item.titleEn}</p>
                      <h3 className="mt-1 font-extrabold text-[#0c0479]">{item.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-black/50">{item.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#c40000] transition-all group-hover:gap-2.5">
                        อ่านเพิ่มเติม
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT STRIP ══════════ */}
      <section className="w-full border-t border-black/6 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-extrabold text-[#0c0479] md:text-lg">มีคำถาม? ติดต่อฝ่ายพิธีฯ ได้เลย</h3>
                <p className="mt-1 text-sm text-black/45">
                  ฝ่ายพิธีการทูต (Protocol Section / OFM–VISA Desk) ·
                  1024 Wisconsin Ave NW, Washington, D.C. 20007 · ตึกหลัง ชั้น 3
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:protocol@thaiembdc.org"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0c0479]/15 bg-[#0c0479]/4 px-5 py-2.5 text-sm font-semibold text-[#0c0479] transition-colors hover:bg-[#0c0479] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  อีเมล
                </a>
                <a
                  href="tel:+12022984798"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c40000]/15 bg-[#c40000]/4 px-5 py-2.5 text-sm font-semibold text-[#c40000] transition-colors hover:bg-[#c40000] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  โทรศัพท์
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}