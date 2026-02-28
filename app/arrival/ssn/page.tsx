"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SSNPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[46vh] min-h-[340px] w-full md:h-[56vh] md:min-h-[440px]">
          <Image
            src="/ssn.jpg"
            alt="Social Security Number"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
              การขอมีเลข SSN
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              Social Security Number
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full py-12">
        <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
          {/* Intro */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#e0261c] md:text-3xl">
              ข้อมูลสำคัญเกี่ยวกับการยื่นขอ SSN
            </h2>

            {/* Exact text (from your picture) */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/80 md:text-base">
              <p className="font-semibold text-black">(ข้อความจากเอกสารแนวทางฯ)</p>

              <p>
                กระทรวงการต่างประเทศสหรัฐฯ อนุญาตให้หัวหน้าครอบครัวเท่านั้น (principal)
                ที่สามารถยื่นขอ social security number ได้ โดยกรอกแบบฟอร์ม SS-5
                และยื่นแบบฟอร์มดังกล่าวด้วยตนเองได้ทันทีเมื่อเดินทางมาถึงสหรัฐฯ
                โดยไม่จำเป็นต้องรอบัตรประจำตัวนักการทูตจากกระทรวงการต่างประเทศสหรัฐฯ
                ใช้เวลาดำเนินการประมาณ 1 เดือน
              </p>

              <p>
                หน่วยงาน Social Security Administration Office ที่ใกล้สถานเอกอัครราชทูตฯ ที่สุด คือ{" "}
                <span className="font-semibold text-black">
                  2100 M Street, N.W., Washington, DC 20037
                </span>
              </p>
            </div>

            {/* Extra guidance */}
            <div className="mt-10 rounded border border-black/10 bg-white p-6">
              <h3 className="text-lg font-extrabold text-[#142a78] md:text-xl">
                ข้อควรทราบเพิ่มเติม (แนะนำสำหรับข้าราชการใหม่)
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 md:text-base">
                <li>
                  <span className="font-semibold text-black">SSN ใช้ทำอะไรได้บ้าง:</span>{" "}
                  มักใช้สำหรับการทำธุรกรรมด้านการเงินบางประเภท การสมัครบริการบางอย่าง
                  หรือกระบวนการที่ต้องยืนยันตัวตนในสหรัฐฯ ทั้งนี้ ความจำเป็นอาจแตกต่างตามสถานะและประเภทวีซ่า
                </li>

                <li>
                  <span className="font-semibold text-black">เอกสารประกอบ:</span>{" "}
                  โดยทั่วไปควรเตรียมหนังสือเดินทาง วีซ่า เอกสารสถานะ/เอกสารยืนยันสิทธิ
                  และแบบฟอร์ม SS-5 ที่กรอกข้อมูลครบถ้วน (เอกสารที่ต้องใช้จริงอาจแตกต่างได้
                  แนะนำตรวจสอบกับ SSA ก่อนเดินทางไปยื่น)
                </li>

                <li>
                  <span className="font-semibold text-black">ระยะเวลาดำเนินการ:</span>{" "}
                  โดยประมาณ 1 เดือน (อาจเร็ว/ช้าตามกรณี) เมื่อได้รับแล้วควรเก็บรักษาอย่างปลอดภัย
                  และหลีกเลี่ยงการส่งเลข SSN ทางช่องทางที่ไม่ปลอดภัย
                </li>

                <li>
                  <span className="font-semibold text-black">หากยังไม่มี SSN:</span>{" "}
                  บางบริการอาจใช้เอกสารอื่นทดแทนได้ชั่วคราว หรือมีขั้นตอนทางเลือก
                  หากติดขัด สามารถปรึกษาฝ่ายพิธีฯ เพื่อช่วยแนะนำแนวทางได้
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://www.ssa.gov/number-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#e0261c] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#e0261c]/90"
                >
                  อ่านเพิ่มเติม (SSA)
                </a>

                <a
                  href="https://www.ssa.gov/forms/ss-5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-black/15 bg-white px-5 py-3 text-sm font-extrabold text-black hover:bg-black/[0.03]"
                >
                  ดาวน์โหลดแบบฟอร์ม SS-5
                </a>
              </div>
            </div>
          </div>

          {/* Optional image block under text (nice spacing) */}
          <div className="mt-10">
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-black/5 opacity-90">
              <Image
                src="/agreement.jpg"
                alt="Document and paperwork"
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