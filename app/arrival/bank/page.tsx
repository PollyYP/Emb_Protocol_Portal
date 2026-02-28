"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BankPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[46vh] min-h-[340px] w-full md:h-[56vh] md:min-h-[440px]">
          <Image
            src="/bank.jpg"
            alt="Banking in the U.S."
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

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

      {/* CONTENT */}
      <section className="w-full py-12">
        <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
          {/* TOP: text + image (switch to lg for side-by-side) */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-extrabold text-[#e0261c] md:text-3xl">
                การเปิดบัญชีธนาคารสำหรับข้าราชการใหม่
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/80 md:text-base">
                <p>
                  เมื่อเดินทางมาถึงสหรัฐฯ การมีบัญชีธนาคารจะช่วยให้ท่านทำธุรกรรมได้สะดวกขึ้น เช่น
                  รับเงินเดือน ชำระค่าเช่าที่พัก ค่าสาธารณูปโภค และค่าใช้จ่ายประจำวันต่าง ๆ
                  รวมถึงการโอนเงินภายในประเทศ และการชำระผ่านแอปธนาคาร
                </p>

                <p>
                  ในพื้นที่กรุงวอชิงตัน ดี.ซี. และบริเวณใกล้เคียง (DMV)
                  มีธนาคารขนาดใหญ่หลายแห่งที่มีสาขาให้บริการอย่างแพร่หลาย
                  ท่านสามารถเลือกเปิดบัญชีกับธนาคารที่สะดวกต่อการเดินทาง
                  หรือมีเงื่อนไขที่เหมาะสมกับความต้องการของท่าน เช่น
                </p>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/80 md:text-base">
                  <li>Bank of America</li>
                  <li>Chase (JP Morgan Chase)</li>
                  <li>Wells Fargo</li>
                  <li>PNC Bank</li>
                  <li>Capital One</li>
                  <li>TD Bank</li>
                </ul>
                
                <p className="mt-3">
                  ทั้งนี้ โปรดพิจารณาเปรียบเทียบค่าธรรมเนียมรายเดือน
                  เงื่อนไขการยกเว้นค่าธรรมเนียม จำนวนสาขาและตู้ ATM
                  รวมถึงความสะดวกในการใช้งานแอปพลิเคชันของแต่ละธนาคารก่อนตัดสินใจ
                </p>
              </div>

              {/* Practical checklist */}
              <div className="mt-8 rounded border border-black/10 bg-white p-6">
                <h3 className="text-lg font-extrabold text-[#142a78] md:text-xl">
                  เอกสารที่ควรเตรียม (อาจแตกต่างตามธนาคาร)
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 md:text-base">
                  <li>หนังสือเดินทาง (Passport) และวีซ่า</li>
                  <li>เอกสารยืนยันสถานะ/การปฏิบัติหน้าที่ (เช่น หนังสือรับรองจากสถานเอกอัครราชทูตฯ)</li>
                  <li>หลักฐานที่อยู่ในสหรัฐฯ (เช่น สัญญาเช่า/จดหมายยืนยันที่อยู่/ใบแจ้งหนี้บริการ)</li>
                  <li>
                    หมายเลข SSN (หากมี) หรือเอกสารอื่นทดแทนตามที่ธนาคารกำหนด
                    (บางธนาคารอาจเปิดบัญชีได้แม้ยังไม่มี SSN)
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <Image
                  src="/creditcard.jpg"
                  alt="Card and payment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM: image + text */}
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 opacity-95">
                <Image
                  src="/cards.jpg"
                  alt="Bank branch"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-extrabold text-[#e0261c] md:text-3xl">
                บัญชีที่แนะนำ และข้อควรระวัง
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/80 md:text-base">
                <p>
                  โดยทั่วไปธนาคารจะมีบัญชีหลัก ๆ เช่น{" "}
                  <span className="font-semibold text-black">Checking</span>{" "}
                  (ใช้จ่ายประจำวัน/รับโอนเงิน/ชำระบิล) และ{" "}
                  <span className="font-semibold text-black">Savings</span>{" "}
                  (เก็บเงินออม) แนะนำให้เริ่มจาก Checking ก่อน
                  และเปิด Savings เพิ่มตามความเหมาะสม
                </p>

                <p>
                  <span className="font-semibold text-black">บัตรเดบิต (Debit Card)</span>{" "}
                  มักได้ทันทีหรือส่งทางไปรษณีย์ ส่วน{" "}
                  <span className="font-semibold text-black">บัตรเครดิต (Credit Card)</span>{" "}
                  อาจต้องพิจารณาประวัติเครดิต/หลักฐานรายได้ และเงื่อนไขของธนาคาร
                  หากยังไม่มีประวัติเครดิตในสหรัฐฯ อาจเริ่มจากการใช้งานเดบิต
                  หรือสอบถามเรื่องบัตรเครดิตแบบมีเงินค้ำประกัน (Secured Card) เพื่อสร้างเครดิต
                </p>

                <p>
                  โปรดตรวจสอบ{" "}
                  <span className="font-semibold text-black">
                    ค่าธรรมเนียมรายเดือน (monthly fee)
                  </span>{" "}
                  เงื่อนไขการยกเว้นค่าธรรมเนียม (เช่น มียอดเงินขั้นต่ำ/มีเงินเข้าออกตามกำหนด)
                  และค่าธรรมเนียมการกดเงิน ATM ต่างธนาคาร
                </p>
              </div>

              {/* Tips box */}
              <div className="mt-8 rounded border border-black/10 bg-white p-6">
                <h3 className="text-lg font-extrabold text-[#142a78] md:text-xl">
                  เคล็ดลับเพื่อความปลอดภัย
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 md:text-base">
                  <li>หลีกเลี่ยงการส่งข้อมูลส่วนตัว/เลขบัญชีผ่านช่องทางที่ไม่ปลอดภัย</li>
                  <li>เปิดการแจ้งเตือนธุรกรรม (transaction alerts) ในแอปธนาคาร</li>
                  <li>ใช้รหัสผ่านที่คาดเดายาก และเปิดใช้งาน 2FA หากมี</li>
                  <li>ระมัดระวังการหลอกลวงทางโทรศัพท์/อีเมลที่อ้างว่าเป็นธนาคาร</li>
                </ul>

                <div className="mt-6">
                  <a
                    href="https://www.consumerfinance.gov/consumer-tools/bank-accounts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#e0261c] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#e0261c]/90"
                  >
                    อ่านข้อมูลเพิ่มเติมเกี่ยวกับการเปิดบัญชี
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: bottom full-width image band */}
          <div className="mt-12">
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-black/5">
              <Image
                src="/banks.jpg"
                alt="Payments"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}