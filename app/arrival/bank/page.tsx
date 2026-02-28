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

const BANKS = [
  "Bank of America",
  "Chase (JP Morgan Chase)",
  "Wells Fargo",
  "PNC Bank",
  "Capital One",
  "TD Bank",
];

const DOCS = [
  {
    num: "01",
    title: "หนังสือเดินทาง (Passport) และวีซ่า",
    desc: "เอกสารแสดงตัวตนหลักสำหรับการยืนยันสัญชาติและสถานะการเข้าเมือง",
  },
  {
    num: "02",
    title: "เอกสารยืนยันสถานะ / การปฏิบัติหน้าที่",
    desc: "เช่น หนังสือรับรองจากสถานเอกอัครราชทูตฯ เพื่อยืนยันสถานะทางการทูต",
  },
  {
    num: "03",
    title: "หลักฐานที่อยู่ในสหรัฐฯ",
    desc: "เช่น สัญญาเช่า จดหมายยืนยันที่อยู่ หรือใบแจ้งหนี้บริการสาธารณูปโภค",
  },
  {
    num: "04",
    title: "หมายเลข SSN หรือเอกสารทดแทน",
    desc: "บางธนาคารอาจเปิดบัญชีได้แม้ยังไม่มี SSN โปรดสอบถามแต่ละธนาคารโดยตรง",
  },
];

const TIPS = [
  "หลีกเลี่ยงการส่งข้อมูลส่วนตัว/เลขบัญชีผ่านช่องทางที่ไม่ปลอดภัย",
  "เปิดการแจ้งเตือนธุรกรรม (transaction alerts) ในแอปธนาคาร",
  "ใช้รหัสผ่านที่คาดเดายาก และเปิดใช้งาน 2FA หากมี",
  "ระมัดระวังการหลอกลวงทางโทรศัพท์/อีเมลที่อ้างว่าเป็นธนาคาร",
];

export default function BankPage() {
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
        <Image src="/bank.jpg" alt="Banking in the U.S." fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
              การเปิดบัญชีธนาคาร
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              Banking & Payments in the U.S.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── BODY ───── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28">

        {/* 01 · การเปิดบัญชี + creditcard image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>01 · การเปิดบัญชี</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--navy)" }}>Open an Account</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--red)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>
                เมื่อเดินทางมาถึงสหรัฐฯ การมีบัญชีธนาคารจะช่วยให้ท่านทำธุรกรรมได้สะดวกขึ้น เช่น
                รับเงินเดือน ชำระค่าเช่าที่พัก ค่าสาธารณูปโภค และค่าใช้จ่ายประจำวันต่าง ๆ
                รวมถึงการโอนเงินภายในประเทศ และการชำระผ่านแอปธนาคาร
              </p>
              <p>
                ในพื้นที่กรุงวอชิงตัน ดี.ซี. และบริเวณใกล้เคียง (DMV)
                มีธนาคารขนาดใหญ่หลายแห่งที่มีสาขาให้บริการอย่างแพร่หลาย
                ท่านสามารถเลือกเปิดบัญชีกับธนาคารที่สะดวกต่อการเดินทาง
                หรือมีเงื่อนไขที่เหมาะสมกับความต้องการ
              </p>
              <p>
                ทั้งนี้ โปรดพิจารณาเปรียบเทียบค่าธรรมเนียมรายเดือน
                เงื่อนไขการยกเว้นค่าธรรมเนียม จำนวนสาขาและตู้ ATM
                รวมถึงความสะดวกในการใช้งานแอปพลิเคชันของแต่ละธนาคารก่อนตัดสินใจ
              </p>
            </div>

            {/* Bank list pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {BANKS.map((bank, i) => (
                <span key={i} className="text-xs px-4 py-2 rounded-full font-medium"
                  style={{
                    background: i % 2 === 0 ? "var(--navy-pale)" : "var(--red-pale)",
                    color: i % 2 === 0 ? "var(--navy)" : "var(--red)",
                  }}>
                  {bank}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.18)" }}>
            <Image src="/creditcard.jpg" alt="Card and payment" fill className="object-cover" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(12,4,121,0.65)", backdropFilter: "blur(8px)" }}>
              Debit & Credit
            </span>
          </div>
        </motion.div>

        {/* 02 · บัญชีที่แนะนำ + cards image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden img-zoom order-2 md:order-1"
            style={{ boxShadow: "0 8px 40px rgba(196,0,0,0.18)" }}>
            <Image src="/cards.jpg" alt="Bank cards" fill className="object-cover" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(196,0,0,0.65)", backdropFilter: "blur(8px)" }}>
              Checking & Savings
            </span>
          </div>

          <div className="md:col-span-3 order-1 md:order-2">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--navy)" }}>02 · บัญชีที่แนะนำ</p>
            <h2 className="playfair text-5xl font-normal mb-1" style={{ color: "var(--red)" }}>Account Types</h2>
            <div className="mb-6" style={{ width: 40, height: 3, background: "var(--navy)", borderRadius: 2 }} />
            <div className="space-y-4 text-base leading-[1.9]" style={{ color: "#44445a" }}>
              <p>
                โดยทั่วไปธนาคารจะมีบัญชีหลัก ๆ เช่น{" "}
                <strong style={{ color: "var(--navy)" }}>Checking</strong>{" "}
                (ใช้จ่ายประจำวัน / รับโอนเงิน / ชำระบิล) และ{" "}
                <strong style={{ color: "var(--navy)" }}>Savings</strong>{" "}
                (เก็บเงินออม) แนะนำให้เริ่มจาก Checking ก่อน
                และเปิด Savings เพิ่มตามความเหมาะสม
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>บัตรเดบิต (Debit Card)</strong>{" "}
                มักได้ทันทีหรือส่งทางไปรษณีย์ ส่วน{" "}
                <strong style={{ color: "var(--navy)" }}>บัตรเครดิต (Credit Card)</strong>{" "}
                อาจต้องพิจารณาประวัติเครดิต/หลักฐานรายได้ และเงื่อนไขของธนาคาร
              </p>
              <p>
                หากยังไม่มีประวัติเครดิตในสหรัฐฯ อาจเริ่มจากการใช้งานเดบิต
                หรือสอบถามเรื่องบัตรเครดิตแบบมีเงินค้ำประกัน{" "}
                <strong style={{ color: "var(--red)" }}>(Secured Card)</strong>{" "}
                เพื่อสร้างเครดิต
              </p>
              <p>
                โปรดตรวจสอบ{" "}
                <strong style={{ color: "var(--navy)" }}>ค่าธรรมเนียมรายเดือน (monthly fee)</strong>{" "}
                เงื่อนไขการยกเว้นค่าธรรมเนียม และค่าธรรมเนียมการกดเงิน ATM ต่างธนาคาร
              </p>
            </div>
          </div>
        </motion.div>

        {/* 03 · เอกสารที่ควรเตรียม */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>03 · เอกสารที่ควรเตรียม</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Required Documents</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--mid)" }}>
            เอกสารที่ต้องใช้อาจแตกต่างกันไปตามแต่ละธนาคาร โปรดสอบถามล่วงหน้าก่อนเดินทางไปเปิดบัญชี
          </p>
          <div className="space-y-3">
            {DOCS.map((doc) => (
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

        {/* 04 · เคล็ดลับความปลอดภัย */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--red)" }}>04 · เคล็ดลับความปลอดภัย</p>
          <h2 className="playfair text-5xl font-normal mb-10" style={{ color: "var(--navy)" }}>Stay Secure</h2>

          {/* Tips grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
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
                <p className="text-base leading-relaxed" style={{ color: "#44445a" }}>{tip}</p>
              </div>
            ))}
          </div>

          {/* Bottom full-width image band */}
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden img-zoom mb-10"
            style={{ boxShadow: "0 8px 40px rgba(12,4,121,0.15)" }}>
            <Image src="/money1.jpg" alt="Banks" fill className="object-cover" />
          </div>

          {/* Important callout */}
          <div className="rounded-2xl p-7"
            style={{ background: "linear-gradient(135deg, #0c0479 0%, #1a12a8 70%, #2d1fc7 100%)" }}>
            <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
              style={{ background: "var(--red)", color: "white" }}>หมายเหตุ</span>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>
              ธนาคารแต่ละแห่งอาจมีขั้นตอนและเงื่อนไขที่แตกต่างกัน
              บางธนาคารอาจต้องนัดหมายล่วงหน้าสำหรับการเปิดบัญชีในฐานะลูกค้าต่างชาติ
              แนะนำให้ติดต่อสอบถามสาขาที่ต้องการเปิดบัญชีโดยตรงก่อนเดินทาง
            </p>
            <a
              href="https://www.consumerfinance.gov/consumer-tools/bank-accounts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{ background: "white", color: "var(--navy)" }}>
              <span>อ่านข้อมูลเพิ่มเติมเกี่ยวกับการเปิดบัญชี</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}