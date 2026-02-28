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

export default function HousingPage() {
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

        .img-zoom img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .img-zoom:hover img { transform: scale(1.06); }

        .card { background: white; border: 1px solid var(--border); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(12,4,121,0.1); }
      `}</style>

      {/* ───── HERO ───── */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/interior.jpg" alt="Interior background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-wide md:text-7xl">
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

      {/* ───── BODY ───── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28">

        {/* 01 · การหาที่พัก + apartment image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>01 · การหาที่พักในพื้นที่ DMV</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--navy)" }}>Finding a Home</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--red)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>
                สถานเอกอัครราชทูตฯ ตั้งอยู่ที่ 1024 Wisconsin Avenue, N.W., Washington, D.C. 20007
                ซึ่งอยู่ในพื้นที่ของย่านเมืองเก่าคือ Georgetown และมหาวิทยาลัย Georgetown
                จะค่อนข้างปลอดภัยแต่มีราคาค่าเช่าสูง มีทั้งที่เป็นบ้านลักษณะ Townhome หรือ Townhouse
                หรือในลักษณะเป็นห้องชุด ทั้งอพาร์ตเมนต์และคอนโดมิเนียม
                ซึ่งส่วนใหญ่จะไม่รวมเฟอร์นิเจอร์ ส่วนบ้านเดี่ยวจะอยู่ห่างไกลตัวเมืองออกไป
              </p>
              <p>
                ข้าราชการที่มีครอบครัวอาจพิจารณาเลือกเช่าบ้านพักในเขตมลรัฐเวอร์จิเนียและแมรีแลนด์
                ซึ่งเป็นมลรัฐที่ติดกับกรุงวอชิงตัน แถบนี้จะมีอัตราค่าเช่าต่ำกว่า
                โดยอาจได้เนื้อที่ทั้งในและนอกบ้านใหญ่กว่าในกรุงวอชิงตันอีกด้วย
                แต่จะต้องใช้เวลาในการเดินทางนานกว่า เพราะการจราจรในช่วงเร่งรีบตอนเช้าและตอนเย็นจะติดขัด
              </p>
              <p>
                อย่างไรก็ดี การหาบ้านพักนั้น สามารถใช้บริการนายหน้า (Realtor) อีกทางหนึ่ง
                นอกเหนือจากการสืบหาด้วยตนเอง โดยค่าจ้างส่วนนี้ จะไม่จัดเก็บจากผู้หาบ้านเช่า
                แต่จะเป็นภาระความรับผิดชอบของผู้ให้เช่า
              </p>
            </div>
          </div>

          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.12)" }}>
            <Image src="/apartment.jpg" alt="Apartment" fill className="object-cover" />
          </div>
        </motion.div>

        {/* 02 · ข้อแนะนำ + tips grid */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>02 · ข้อแนะนำสำหรับข้าราชการใหม่</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Good to Know</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💰", label: "กำหนดงบประมาณ", desc: "คำนึงถึงค่าเช่า + ค่าสาธารณูปโภค (ไฟ/น้ำ/แก๊ส/อินเทอร์เน็ต) + ที่จอดรถ + ประกันผู้เช่า (Renter's Insurance) หากอาคารกำหนด", color: "var(--navy)", bg: "var(--navy-pale)" },
              { icon: "📄", label: "เอกสารที่ควรเตรียม", desc: "หนังสือเดินทาง วีซ่า หนังสือรับรองการปฏิบัติหน้าที่/จดหมายรับรองจากสถานเอกอัครราชทูตฯ และหลักฐานการติดต่อที่พักชั่วคราว", color: "var(--red)", bg: "var(--red-pale)" },
              { icon: "🛋️", label: "เฟอร์นิเจอร์", desc: "ที่พักส่วนใหญ่มักไม่รวมเฟอร์นิเจอร์ ควรสอบถามให้ชัดเจน (furnished / unfurnished / partially furnished)", color: "var(--navy)", bg: "var(--navy-pale)" },
              { icon: "🚗", label: "การเดินทาง", desc: "หากเลือก VA/MD ควรทดลองเวลาเดินทางจริง (ช่วงเช้า-เย็น) และพิจารณาระยะเวลาในการเดินทางให้รอบคอบ", color: "var(--red)", bg: "var(--red-pale)" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: item.bg, border: `1px solid ${item.color}22` }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: item.color }}>{item.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: "#44445a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 03 · สัญญาเช่า + townhouse image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom order-2 md:order-1"
            style={{ boxShadow: "0 8px 40px rgba(196,0,0,0.12)" }}>
            <Image src="/townhouse.jpg" alt="Townhouse" fill className="object-cover" />
          </div>

          <div className="md:col-span-3 order-1 md:order-2">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--navy)" }}>03 · สัญญาเช่า</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--red)" }}>Lease & Deposit</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--navy)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>
                เมื่อข้าราชการหรือนายหน้าหาบ้านพักได้ตามความประสงค์แล้ว
                จะต้องยื่นเรื่องให้คณะกรรมการเช่าบ้านพักพิจารณาความเหมาะสม
                แล้วรายงานกระทรวงฯ เพื่อขออนุมัติการเช่าบ้าน
                หลังจากนั้น เอกอัครราชทูตฯ เป็นผู้ลงนามในสัญญาเช่า
              </p>
              <p>
                การทำสัญญาเช่า อาจจะทำเป็นปีต่อปี หรือทุก ๆ 2 ปี
                หรืออาจจะทำสัญญาเช่าจนครบวาระประจำการเลยก็ได้
                ในกรณีที่ทำสัญญาครั้งเดียวจนครบวาระประจำการนั้น
                ผู้ให้เช่าจะไม่สามารถขึ้นอัตราค่าเช่าบ้านตามค่าครองชีพได้
                และโดยทั่วไปผู้ให้เช่าจำเป็นต้องเสียอัตราค่าจ้างนายหน้าในอัตราร้อยละ 3.5 ของค่าเช่า
              </p>
              <p>
                สำหรับการเช่าบ้านพักของข้าราชการฯ ส่วนใหญ่จะต้องเสียค่ามัดจำบ้าน (Security Deposit)
                ให้กับเจ้าของบ้านในอัตราค่าเช่าล่วงหน้า 1 เดือน
                ซึ่งเงินจำนวนนี้ เจ้าของบ้านจะคืนให้เต็มจำนวนเมื่อครบสัญญา
                หากข้าราชการผู้นั้นอยู่จนครบสัญญาและไม่มีความเสียหายในบ้าน
              </p>
            </div>
          </div>
        </motion.div>

        {/* 04 · จุดที่ควรถาม */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>04 · ก่อนเซ็นสัญญา</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Before You Sign</h2>

          <div className="space-y-3">
            {[
              { num: "01", title: "ค่าเช่ารวมอะไรบ้าง", desc: "ค่าน้ำ / แก๊ส / ที่จอดรถ / ส่วนกลาง" },
              { num: "02", title: "นโยบายการซ่อมแซม", desc: "ใครรับผิดชอบ และระยะเวลาการดำเนินการ" },
              { num: "03", title: "เงื่อนไขการคืนเงินประกัน", desc: "รายการที่อาจถูกหักและขั้นตอนการคืนเงิน" },
              { num: "04", title: "กฎเรื่องสัตว์เลี้ยง (Pet Policy)", desc: "ค่าธรรมเนียมเพิ่มเติมและข้อจำกัดต่าง ๆ" },
              { num: "05", title: "การต่อสัญญา / การปรับค่าเช่า", desc: "การแจ้งล่วงหน้าและเงื่อนไขการยกเลิกสัญญา" },
            ].map((doc) => (
              <div key={doc.num} className="card grid md:grid-cols-12 gap-4 items-start p-5">
                <div className="md:col-span-1 text-xs font-mono font-bold" style={{ color: "var(--navy)" }}>{doc.num}</div>
                <div className="md:col-span-11">
                  <p className="text-base font-semibold mb-1" style={{ color: "#1a1a2e" }}>{doc.title}</p>
                  <p className="text-base leading-relaxed" style={{ color: "#777" }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom full image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden img-zoom"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.12)" }}>
            <Image src="/house.jpg" alt="House" fill className="object-cover" />
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