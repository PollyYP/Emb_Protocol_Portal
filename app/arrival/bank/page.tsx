"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/* ─── Fade-in wrapper (same as housing page) ─── */
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

const BANKS = [
  "Bank of America",
  "Chase",
  "Wells Fargo",
  "PNC Bank",
  "Capital One",
];

const DOCS = [
  {
    num: "01",
    title: "หนังสือเดินทาง (Passport) และวีซ่า",
    desc: "เอกสารแสดงตัวตนหลักสำหรับการยืนยันสถานะการเข้าเมือง",
  },
  {
    num: "02",
    title: "เอกสารยืนยันสถานะ / การปฏิบัติหน้าที่",
    desc: "เช่น หนังสือรับรองการทำงานจากสถานเอกอัครราชทูตฯ",
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
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════
          HERO — original design
          ══════════════════════════════════════ */}
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
              transition={{ duration: 1.8, ease: "easeOut" as const }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              Banking &amp; Payments in the U.S.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STICKY NEXT-STEP LINK
          ══════════════════════════════════════ */}
      {/* Desktop — fixed circle on the right */}
      <Link
        href="/arrival/vehicle-purchase"
        className="fixed right-6 bottom-8 z-40 hidden md:flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[11px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg transition-all hover:bg-[#0c0479] hover:text-white hover:shadow-xl"
      >
        <div className="flex flex-col items-center">
          <p>ไปที่</p>
          <p>Step 4</p>
        </div>
      </Link>

      {/* Mobile — fixed circle on the right */}
      <Link
        href="/arrival/vehicle-purchase"
        className="fixed right-4 bottom-5 z-40 flex md:hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[#0c0479] bg-white text-[10px] font-bold uppercase tracking-wider text-[#0c0479] shadow-lg"
      >
        <div className="flex flex-col items-center">
          <p>ไปที่</p>
          <p>Step 4</p>
        </div>
      </Link>

      {/* ══════════════════════════════════════
          SECTION 1 — การเปิดบัญชี
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          {/* Section heading */}
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Open an Account
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              การเปิดบัญชี
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Text + image */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  เมื่อเดินทางมาถึงสหรัฐฯ การมีบัญชีธนาคารจะช่วยให้ท่านทำธุรกรรมการเงินได้สะดวกขึ้น เช่น
                  รับเงินเดือน ชำระค่าเช่าที่พัก ค่าสาธารณูปโภค และค่าใช้จ่ายประจำวันต่าง ๆ
                  รวมถึงการโอนเงินภายในประเทศ และการชำระค่าใช้จ่ายผ่านแอปธนาคาร
                </p>
                <p>
                  สถานเอกอัครราชทูตฯ มีบัญชีธนาคารอยู่กับ <span className="text-[#0c0479]">Bank of America สาขา Georgetown</span> หากข้าราชการประจำการใหม่ยังไม่เคยอาศัยในสหรัฐฯ มาก่อน และยังไม่มีเครดิตบูโร
                  สามารถติดต่อขอเปิดบัญชีที่ธนาคารดังกล่าวได้ โดยสถานเอกอัครราชทูตฯ จะทำหนังสือรับรองให้
                </p>
                 <p>
                  ทั้งนี้ ในพื้นที่กรุงวอชิงตัน และบริเวณใกล้เคียง (DMV)
                  มีธนาคารขนาดใหญ่หลายแห่งที่มีสาขาให้บริการอย่างแพร่หลาย
                  หากท่านเคยมาเรียนหรือเคยอาศัยในสหรัฐฯ มาก่อน มีประวัติการเงินและมีเครดิตบูโรแล้ว
                  ท่านสามารถเลือกเปิดบัญชีกับธนาคารที่สะดวกต่อการเดินทาง
                  หรือมีเงื่อนไขที่เหมาะสมกับความต้องการได้
                </p>

                {/* Bank pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {BANKS.map((bank, i) => (
                    <span
                      key={i}
                      className={`rounded-full px-4 py-2 text-xs font-medium ${
                        i % 2 === 0
                          ? "bg-[#0c0479]/[0.06] text-[#0c0479]"
                          : "bg-[#c40000]/[0.06] text-[#c40000]"
                      }`}
                    >
                      {bank}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image src="/creditcard.jpg" alt="Card and payment" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — บัญชีที่แนะนำ
          ══════════════════════════════════════ */}
      <section className="w-full md:py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Account Types
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              บัญชีที่แนะนำ
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Image left + text right */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image src="/cards.jpg" alt="Bank cards" fill className="object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-sm leading-relaxed text-black/70 md:text-base">
                <p>
                  โดยทั่วไปธนาคารจะมีบัญชีหลัก ๆ เช่น{" "}
                  <span className="text-[#0c0479]">Checking</span>{" "}
                  (ใช้จ่ายประจำวัน / รับโอนเงิน / ชำระบิล) และ{" "}
                  <span className="text-[#0c0479]">Savings</span>{" "}
                  (เก็บเงินออม) แนะนำให้เริ่มจาก Checking ก่อน
                  และเปิด Savings เพิ่มตามความเหมาะสม
                </p>
                <p>
                  <span className="text-[#0c0479]">บัตรเดบิต (Debit Card)</span>{" "}
                  มักได้ทันทีหรือส่งทางไปรษณีย์ ส่วน{" "}
                  <span className="text-[#0c0479]">บัตรเครดิต (Credit Card)</span>{" "}
                  อาจต้องพิจารณาประวัติเครดิต/หลักฐานรายได้ และเงื่อนไขของธนาคาร
                </p>
                <p>
                  หากยังไม่มีประวัติเครดิตในสหรัฐฯ อาจเริ่มจากการใช้งานเดบิต
                  หรือสอบถามเรื่องบัตรเครดิตแบบมีเงินค้ำประกัน{" "}
                  <span className="text-[#c40000]">(Secured Card)</span>{" "}
                  เพื่อสร้างเครดิต
                </p>
                <p>
                  หากท่านเลือกเปิดบัญชีที่ธนาคาร Bank of America สาขา Georgetown ท่านสามารถสอบถามเรื่องการขอสมัครบัตรเครดิตกับเจ้าหน้าที่ได้ หากได้รับการอนุมัติ
                  ทางธนาคารจะส่งบัตรเครดิตให้ภายใน 1 เดือน นับจากวันที่ยื่นสมัคร โดยวงเงินขึ้นอยู่กับเงินเดือนและ credit score ของแต่ละบุคคล โดยวงเงินเครดิตที่ได้รับ
                  ในชั้นแรกเป็นเพียงวงเงินเครดิตขั้นต้นเท่านั้น ท่านสามารถขอปรับเพิ่มวงเงินขึ้นได้ในอนาคต
                </p>
                <p>
                  โปรดตรวจสอบ{" "}
                  <span className="text-[#0c0479]">ค่าธรรมเนียมรายเดือน (monthly fee)</span>{" "}
                  เงื่อนไขการยกเว้นค่าธรรมเนียม และค่าธรรมเนียมการกดเงิน ATM ต่างธนาคาร
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — เอกสารที่ควรเตรียม
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Required Documents
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              เอกสารที่ควรเตรียม
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          <FadeIn className="mt-4">
            <p className="text-sm text-black/50 md:text-base">
              เอกสารที่ต้องใช้อาจแตกต่างกันไปตามแต่ละธนาคาร โปรดสอบถามล่วงหน้าก่อนเดินทางไปเปิดบัญชี
            </p>
          </FadeIn>

          <div className="mt-8 space-y-3">
            {DOCS.map((doc, idx) => (
              <FadeIn key={doc.num} delay={idx * 0.08}>
                <div className="flex gap-5 rounded-xl border border-black/6 bg-[#fafafa] p-5 md:p-6">
                  <span className="text-sm font-mono font-bold text-[#0c0479]">{doc.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-black/80 md:text-base">{doc.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/50 md:text-base">{doc.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL-WIDTH IMAGE BREAK
          ══════════════════════════════════════ */}
      <section className="w-full">
        <div className="relative aspect-21/9 w-full overflow-hidden">
          <Image src="/money1.jpg" alt="Banking" fill className="object-cover" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — เคล็ดลับความปลอดภัย
          ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">

          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c40000]/60">
              Stay Secure
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0c0479] md:text-4xl">
              เคล็ดลับความปลอดภัย
            </h2>
            <div className="mt-4 h-px w-16 bg-[#c40000]" />
          </FadeIn>

          {/* Tips grid */}
          <FadeIn className="mt-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {TIPS.map((tip, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-xl border p-6 ${
                    i % 2 === 0
                      ? "border-[#0c0479]/[0.08] bg-[#0c0479]/[0.03]"
                      : "border-[#c40000]/[0.08] bg-[#c40000]/[0.03]"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                      i % 2 === 0 ? "bg-[#0c0479]" : "bg-[#c40000]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-black/70 md:text-base">{tip}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Important callout */}
          <FadeIn className="mt-12">
            <div className="rounded-xl bg-[#0c0479] p-7 md:p-10">
              <span className="inline-block rounded-full bg-[#c40000] px-3 py-1 text-xs font-semibold text-white">
                หมายเหตุ
              </span>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                ธนาคารแต่ละแห่งอาจมีขั้นตอนและเงื่อนไขที่แตกต่างกัน
                บางธนาคารอาจต้องนัดหมายล่วงหน้าสำหรับการเปิดบัญชีในฐานะลูกค้าต่างชาติ
                แนะนำให้ติดต่อสอบถามสาขาที่ต้องการเปิดบัญชีโดยตรงก่อนเดินทาง
              </p>
              <a
                href="https://www.consumerfinance.gov/consumer-tools/bank-accounts/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0c0479] transition-colors hover:bg-white/90"
              >
                อ่านข้อมูลเพิ่มเติมเกี่ยวกับการเปิดบัญชี →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* ══════════ BACK NAV ══════════ */}
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <Link
          href="/arrival"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/40 transition-colors hover:text-[#0c0479]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          กลับหน้าข้าราชการประจำการใหม่
        </Link>
      </div>
    </main>
  );
}