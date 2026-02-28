"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const DOCS = [
  {
    num: "01",
    title: "Purchase Order / Buyer's Order",
    desc: "เอกสารสรุปรายละเอียดการซื้อรถ เช่น ราคาซื้อ รุ่นรถ หมายเลขตัวถัง (VIN) และเงื่อนไขการชำระเงิน",
    tag: "ซื้อ",
  },
  {
    num: "02",
    title: "Odometer Statement",
    desc: "เอกสารแสดงระยะทางไมล์ของรถ ณ วันที่โอนกรรมสิทธิ์ เพื่อยืนยันสภาพและการใช้งาน",
    tag: "ซื้อ",
  },
  {
    num: "03",
    title: "Insurance Declaration Page",
    desc: "หน้าสรุปกรมธรรม์ประกันภัยรถยนต์ แสดงผู้เอาประกัน ระยะเวลาคุ้มครอง และวงเงินคุ้มครอง",
    tag: "ซื้อ / เช่าซื้อ",
  },
  {
    num: "04",
    title: "Lease Agreement",
    desc: "สัญญาเช่าระหว่างผู้เช่าและบริษัทผู้ให้เช่า ระบุระยะเวลา ค่างวด และเงื่อนไขการใช้รถ",
    tag: "เช่าซื้อ",
  },
];

export default function CarPage() {
  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#F8F8FC", color: "#0f0f1a" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&display=swap');

        :root {
          --navy: #0c0479;
          --navy-light: #1a12a8;
          --navy-pale: #eeeeff;
          --red: #c40000;
          --red-pale: #fff0f0;
          --cream: #F8F8FC;
          --mid: #6b6b8a;
          --border: #ddddf0;
        }
        .playfair { font-family: 'Playfair Display', Georgia, serif; }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(12,4,121,0.85) 0%,
            rgba(12,4,121,0.5) 50%,
            rgba(196,0,0,0.3) 100%
          );
        }

        .img-zoom img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .img-zoom:hover img { transform: scale(1.06); }

        .card { background: white; border: 1px solid var(--border); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(12,4,121,0.1); }

        .tag-buy   { background: var(--navy-pale); color: var(--navy); }
        .tag-lease { background: var(--red-pale);  color: var(--red);  }
        .tag-both  { background: #f0f0f0; color: #666; }
      `}</style>

      {/* ───── HERO ───── */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/car.jpg" alt="Personal Vehicle" fill className="object-cover" priority />
        <div className="hero-overlay absolute inset-0" />
        {/* red left-edge accent */}
        <div className="absolute left-0 top-0 h-full w-[5px]" style={{ background: "var(--red)" }} />

        <div className="absolute inset-0 flex flex-col justify-end px-10 md:px-24 pb-20">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xs uppercase tracking-[0.3em] text-white/55 mb-5">
            Embassy Guide · Personal Vehicle
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="playfair text-white text-5xl md:text-7xl font-normal leading-[1.1] max-w-3xl">
            รถยนต์
            <span className="italic" style={{ color: "#ffc8c8" }}> ส่วนบุคคล</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="flex gap-3 mt-7">
            {["Purchase", "Lease", "Documents"].map((l) => (
              <span key={l} className="text-xs border border-white/30 text-white/65 px-4 py-1.5 rounded-full" style={{ backdropFilter: "blur(6px)" }}>
                {l}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── BODY ───── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28">

        {/* 01 · Buy + BMW */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>01 · การซื้อรถยนต์</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--navy)" }}>Buy</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--red)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>ท่านสามารถซื้อรถยนต์ได้ทั้งจากตัวแทนจำหน่าย (Dealer) หรือจากบุคคลทั่วไป (รถมือสอง) ทั้งนี้ การจดทะเบียนรถของเจ้าหน้าที่ทางการทูตจะต้องดำเนินการผ่าน <strong style={{ color: "var(--navy)" }}>OFM</strong> เท่านั้น ไม่สามารถจดทะเบียนผ่านหน่วยงานรัฐของแต่ละมลรัฐโดยตรง</p>
              <p>ก่อนตัดสินใจซื้อ ควรพิจารณาปัจจัยต่าง ๆ เช่น งบประมาณ ค่าใช้จ่ายด้านประกันภัย ค่าบำรุงรักษา ความประหยัดน้ำมัน และความเหมาะสมกับลักษณะการใช้งาน</p>
              <p>หากซื้อรถจาก Dealer จะมีเอกสารประกอบ เช่น Purchase Order / Buyer's Order และเอกสารโอนกรรมสิทธิ์ ซึ่งจำเป็นสำหรับขั้นตอนการดำเนินการกับ OFM</p>
            </div>
          </div>

          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.18)" }}>
            <Image src="/bmw.jpg" alt="BMW" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,4,121,0.6) 0%, transparent 55%)" }} />
            <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(12,4,121,0.65)", backdropFilter: "blur(8px)" }}>BMW</span>
          </div>
        </motion.div>

        {/* 02 · Lease + Audi */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom order-2 md:order-1"
            style={{ boxShadow: "0 8px 40px rgba(196,0,0,0.18)" }}>
            <Image src="/audi.jpg" alt="Audi" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(196,0,0,0.6) 0%, transparent 55%)" }} />
            <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(196,0,0,0.65)", backdropFilter: "blur(8px)" }}>Audi</span>
          </div>

          <div className="md:col-span-3 order-1 md:order-2">
            <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--navy)" }}>02 · การเช่าซื้อ</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--red)" }}>Lease</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--navy)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>การเช่าซื้อรถยนต์ (Leasing) เป็นอีกทางเลือกหนึ่ง โดยท่านจะทำสัญญาเช่าระยะยาวกับบริษัทผู้ให้บริการ ระยะเวลาโดยทั่วไป <strong style={{ color: "var(--navy)" }}>24–36 เดือน</strong></p>
              <p>ข้อดีของการ Lease คือ ค่างวดรายเดือนอาจต่ำกว่าการซื้อ และสามารถเปลี่ยนรถใหม่เมื่อครบสัญญา อย่างไรก็ตาม ควรตรวจสอบเงื่อนไขสำคัญ เช่น ระยะทางสูงสุดต่อปี (mileage limit) และค่าปรับกรณีคืนรถก่อนกำหนด</p>
              <p>ก่อนลงนามในสัญญา ควรอ่านรายละเอียดเกี่ยวกับค่าธรรมเนียมแฝง ค่าประกันภัยที่กำหนดขั้นต่ำ และเงื่อนไขการสิ้นสุดสัญญาอย่างรอบคอบ</p>
            </div>
          </div>
        </motion.div>

        {/* 03 · Documents */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>03 · เอกสารที่เกี่ยวข้อง</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Required Documents</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {["หนังสือเดินทาง & วีซ่า", "เอกสารสถานะทางการทูต", "Purchase / Lease Agreement", "หลักฐานประกันภัย", "ใบขับขี่ทางการทูต"].map((doc, i) => (
              <div key={i} className="card p-5 text-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-3"
                  style={{ background: i % 2 === 0 ? "var(--navy)" : "var(--red)" }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-snug" style={{ color: "#333" }}>{doc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 04 · Before You Drive */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>04 · ข้อควรรู้</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Before You Drive</h2>

          {/* prereqs */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🪪", label: "ใบขับขี่ทางการทูต", desc: "ต้องมีใบขับขี่ที่ถูกต้องตามระเบียบ (Diplomatic Driver License)", c: "var(--navy)", bg: "var(--navy-pale)" },
              { icon: "🛡️", label: "ประกันภัยรถยนต์", desc: "ต้องมีประกันที่มีผลบังคับใช้แล้ว (Car Insurance)", c: "var(--red)", bg: "var(--red-pale)" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: item.bg, border: `1px solid ${item.c}22` }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: item.c }}>{item.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--mid)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* OFM note */}
          <div className="card p-7 mb-8">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#44445a" }}>
              กรณีตัวแทนจำหน่าย (Dealer) ไม่มีความคุ้นเคยกับการซื้อขายรถกับนักการทูต
              หรือไม่ทราบระเบียบของ OFM ท่านจะต้องแจ้งให้ตัวแทนจำหน่ายทราบว่า
            </p>
            <div className="rounded-xl px-6 py-4 text-sm font-medium leading-relaxed"
              style={{ background: "var(--navy)", color: "white", fontSize: "1rem", lineHeight: "1.7" }}>
              เอกสารตัวจริง (Original Documents) จะต้องจัดส่งไปยัง{" "}
              <span style={{ color: "#ffc8c8", fontWeight: 700 }}>OFM โดยตรง</span>
              {" "}— ไม่ใช่ DMV หรือ MVA
            </div>
          </div>

          {/* OFM doc list */}
          <p className="text-sm lg:text-base uppercase tracking-widest mb-4" style={{ color: "var(--mid)" }}>เอกสารที่ต้องจัดส่งไปยัง OFM</p>
          <div className="space-y-3">
            {DOCS.map((doc) => (
              <div key={doc.num} className="card grid md:grid-cols-12 gap-4 items-start p-5">
                <div className="md:col-span-1 text-sm font-mono font-bold" style={{ color: "var(--navy)" }}>{doc.num}</div>
                <div className="md:col-span-9">
                  <p className="text-base font-semibold mb-1" style={{ color: "#1a1a2e" }}>{doc.title}</p>
                  <p className="text-base leading-relaxed" style={{ color: "#777" }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* summary pills */}
          <div className="flex flex-wrap gap-3 mt-7">
            <span className="text-sm lg:text-base text-white px-5 py-2.5 rounded-full font-medium" style={{ background: "var(--navy)" }}>
              ซื้อรถ → ส่งเอกสารข้อ 1–3
            </span>
            <span className="text-sm lg:text-base text-white px-5 py-2.5 rounded-full font-medium" style={{ background: "var(--red)" }}>
              เช่าซื้อ → ส่งเอกสารทุกข้อ (1–4)
            </span>
          </div>

          {/* important callout */}
          <div className="mt-8 rounded-2xl p-7"
            style={{ background: "linear-gradient(135deg, #0c0479 0%, #1a12a8 70%, #2d1fc7 100%)" }}>
            <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
              style={{ background: "var(--red)", color: "white" }}>ข้อสำคัญ</span>
            <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
              การได้รับอนุมัติการจดทะเบียนรถล่าช้า อาจเกิดจากกรณีที่ตัวแทนจำหน่ายไม่ได้จัดส่งเอกสารตัวจริงไปยัง OFM
              ดังนั้น ขอความกรุณาติดตามกับตัวแทนจำหน่ายโดยตรง เพื่อยืนยันว่าเอกสารได้ถูกจัดส่งเรียบร้อยแล้ว
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              จากนั้น โปรดนำส่งไฟล์เอกสารทั้งหมดมายังฝ่ายพิธีฯ
              เพื่อดำเนินการในขั้นตอนขอมีป้ายทะเบียนทางการทูตต่อไป
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex justify-center pt-4">
          <Link href="/license"
            className="group inline-flex items-center gap-4 px-10 py-5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 60%, var(--red) 150%)", boxShadow: "0 8px 32px rgba(12,4,121,0.3)" }}>
            <span>สำหรับการขอใบขับขี่ทางการทูต  อ่านรายละเอียด</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--mid)" }}>
          Protocol Section ·  Royal Thai Embassy · Washington D.C.
        </p>
      </div>
    </main>
  );
}