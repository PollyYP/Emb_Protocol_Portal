"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TIPS = [
  {
    label: "SSN ใช้ทำอะไรได้บ้าง",
    desc: "มักใช้สำหรับการทำธุรกรรมด้านการเงินบางประเภท การสมัครบริการบางอย่าง หรือกระบวนการที่ต้องยืนยันตัวตนในสหรัฐฯ ทั้งนี้ ความจำเป็นอาจแตกต่างตามสถานะและประเภทวีซ่า",
  },
  {
    label: "เอกสารประกอบ",
    desc: "โดยทั่วไปควรเตรียมหนังสือเดินทาง วีซ่า เอกสารสถานะ/เอกสารยืนยันสิทธิ และแบบฟอร์ม SS-5 ที่กรอกข้อมูลครบถ้วน แนะนำตรวจสอบกับ SSA ก่อนเดินทางไปยื่น",
  },
  {
    label: "ระยะเวลาดำเนินการ",
    desc: "โดยประมาณ 1 เดือน (อาจเร็ว/ช้าตามกรณี) เมื่อได้รับแล้วควรเก็บรักษาอย่างปลอดภัย และหลีกเลี่ยงการส่งเลข SSN ทางช่องทางที่ไม่ปลอดภัย",
  },
  {
    label: "หากยังไม่มี SSN",
    desc: "บางบริการอาจใช้เอกสารอื่นทดแทนได้ชั่วคราว หรือมีขั้นตอนทางเลือก หากติดขัด สามารถปรึกษาฝ่ายพิธีฯ เพื่อช่วยแนะนำแนวทางได้",
  },
];

export default function SSNPage() {
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
      `}</style>

      {/* ───── HERO ───── */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/ssn.jpg" alt="Social Security Number" fill className="object-cover" priority />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute left-0 top-0 h-full w-[5px]" style={{ background: "var(--red)" }} />

        <div className="absolute inset-0 flex flex-col justify-end px-10 md:px-24 pb-20">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xs uppercase tracking-[0.3em] text-white/55 mb-5">
            Embassy Guide · Identity & Benefits
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="playfair text-white text-5xl md:text-7xl font-normal leading-[1.1] max-w-3xl">
            การขอมีเลข
            <span className="italic" style={{ color: "#ffc8c8" }}> SSN</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="flex gap-3 mt-7">
            {["SS-5 Form", "SSA Office", "Processing"].map((l) => (
              <span key={l} className="text-xs border border-white/30 text-white/65 px-4 py-1.5 rounded-full"
                style={{ backdropFilter: "blur(6px)" }}>
                {l}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── BODY ───── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28">

        {/* 01 · ข้อมูลสำคัญ + agreement image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>01 · ข้อมูลสำคัญ</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--navy)" }}>How to Apply</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--red)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>
                กระทรวงการต่างประเทศสหรัฐฯ อนุญาตให้{" "}
                <strong style={{ color: "var(--navy)" }}>หัวหน้าครอบครัวเท่านั้น (principal)</strong>{" "}
                ที่สามารถยื่นขอ Social Security Number ได้
                โดยกรอกแบบฟอร์ม SS-5 และยื่นแบบฟอร์มดังกล่าวด้วยตนเอง
              </p>
              <p>
                สามารถยื่นได้ทันทีเมื่อเดินทางมาถึงสหรัฐฯ
                โดยไม่จำเป็นต้องรอบัตรประจำตัวนักการทูตจากกระทรวงการต่างประเทศสหรัฐฯ
                ใช้เวลาดำเนินการประมาณ <strong style={{ color: "var(--red)" }}>1 เดือน</strong>
              </p>
            </div>

            {/* SSA address card */}
            <div className="mt-8 rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "var(--navy-pale)", border: "1px solid rgba(12,4,121,0.12)" }}>
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>
                  SSA Office ใกล้สถานเอกอัครราชทูตฯ
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#44445a" }}>
                  2100 M Street, N.W., Washington, DC 20037
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.18)" }}>
            <Image src="/agreement.jpg" alt="Document and paperwork" fill className="object-cover" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(12,4,121,0.65)", backdropFilter: "blur(8px)" }}>
              Form SS-5
            </span>
          </div>
        </motion.div>

        {/* 02 · ข้อควรทราบเพิ่มเติม */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>02 · ข้อควรทราบเพิ่มเติม</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Good to Know</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {TIPS.map((tip, i) => (
              <div key={i} className="rounded-2xl p-6 flex gap-4 items-start"
                style={{
                  background: i % 2 === 0 ? "var(--navy-pale)" : "var(--red-pale)",
                  border: `1px solid ${i % 2 === 0 ? "var(--navy)" : "var(--red)"}22`,
                }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: i % 2 === 0 ? "var(--navy)" : "var(--red)" }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1"
                    style={{ color: i % 2 === 0 ? "var(--navy)" : "var(--red)" }}>
                    {tip.label}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#44445a" }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 03 · CTA callout */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="rounded-2xl p-7"
            style={{ background: "linear-gradient(135deg, #0c0479 0%, #1a12a8 70%, #2d1fc7 100%)" }}>
            <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
              style={{ background: "var(--red)", color: "white" }}>ลิงก์ที่เกี่ยวข้อง</span>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
              สามารถอ่านข้อมูลเพิ่มเติมและดาวน์โหลดแบบฟอร์ม SS-5
              ได้จากเว็บไซต์ทางการของ Social Security Administration (SSA)
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.ssa.gov/number-card" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: "white", color: "var(--navy)" }}>
                <span>อ่านเพิ่มเติม (SSA)</span>
                <span>→</span>
              </a>
              <a href="https://www.ssa.gov/forms/ss-5.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                <span>ดาวน์โหลดแบบฟอร์ม SS-5</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="py-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--mid)" }}>
          Royal Thai Embassy · Washington D.C.
        </p>
      </div>
    </main>
  );
}