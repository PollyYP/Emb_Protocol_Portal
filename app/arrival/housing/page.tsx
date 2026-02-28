"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HousingPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[52vh] min-h-[380px] w-full md:h-[62vh] md:min-h-[520px]">
          <Image
            src="/interior.jpg"
            alt="Interior background"
            fill
            priority
            className="object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Title + subtitle overlay (center) */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-wide md:text-7xl">
              ที่พักอาศัย
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }} // 1800ms
              className="mt-4 text-sm tracking-[0.35em] md:text-base"
            >
              DC, Maryland, Virginia area (DMV)
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="w-full py-12">
        <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
          {/* TOP HALF: text left / apartment right */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-center text-2xl font-extrabold text-[#e0261c] md:text-3xl">
                การหาที่พักในพื้นที่ DMV
              </h2>

              {/* ---- EXACT text from your document (5.1) ---- */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/80 md:text-base">
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

              {/* Practical added guidance */}
              <div className="mt-8 rounded border border-black/10 bg-white p-5">
                <h3 className="text-lg font-extrabold text-[#142a78] md:text-xl">
                  ข้อแนะนำเพิ่มเติมสำหรับข้าราชการใหม่
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 md:text-base">
                  <li>
                    <span className="font-semibold text-black">กำหนดงบประมาณ:</span>{" "}
                    คำนึงถึงค่าเช่า + ค่าสาธารณูปโภค (ไฟ/น้ำ/แก๊ส/อินเทอร์เน็ต) + ที่จอดรถ +
                    ประกันผู้เช่า (Renter’s Insurance) หากอาคารกำหนด
                  </li>
                  <li>
                    <span className="font-semibold text-black">เอกสารที่ควรเตรียม:</span>{" "}
                    หนังสือเดินทาง วีซ่า หนังสือรับรองการปฏิบัติหน้าที่/จดหมายรับรองจากสถานเอกอัครราชทูตฯ
                    และหลักฐานการติดต่อที่พักชั่วคราวหรือที่อยู่ติดต่อในสหรัฐฯ
                  </li>
                  <li>
                    <span className="font-semibold text-black">เฟอร์นิเจอร์:</span>{" "}
                    ที่พักส่วนใหญ่มักไม่รวมเฟอร์นิเจอร์ ควรสอบถามให้ชัดเจน
                    (furnished / unfurnished / partially furnished)
                  </li>
                  <li>
                    <span className="font-semibold text-black">การเดินทาง:</span>{" "}
                    หากเลือก VA/MD ควรทดลองเวลาเดินทางจริง (ช่วงเช้า-เย็น) และพิจารณาระยะเวลาในการเดินทางช่วงเช้า-เย็น
                  </li>
                  <li>
                    <span className="font-semibold text-black">เงื่อนไขสัญญา:</span>{" "}
                    ตรวจสอบระยะเวลาสัญญา การต่อสัญญา การยกเลิกก่อนกำหนด การเพิ่มค่าเช่า และความรับผิดชอบค่าซ่อมบำรุง
                  </li>
                </ul>
              </div>
            </div>

            {/* Image: apartment */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <Image
                  src="/apartment.jpg"
                  alt="Apartment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM HALF: townhouse left / text right */}
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Image: townhouse */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <Image
                  src="/townhouse.jpg"
                  alt="Townhouse"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text: contract + deposit (exact text + added help) */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-center text-xl font-extrabold text-[#e0261c] lg:text-3xl">
                สัญญาเช่า ค่านายหน้า และเงินประกัน
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/80 lg:text-base">
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

              {/* Added guidance */}
              <div className="mt-8 rounded border border-black/10 bg-white p-5">
                <h3 className="text-lg font-extrabold text-[#142a78] md:text-xl">
                  จุดที่ควรถามให้ชัดก่อนเซ็นสัญญา
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 md:text-base">
                  <li>ค่าเช่ารวมอะไรบ้าง (ค่าน้ำ/แก๊ส/ที่จอดรถ/ส่วนกลาง)</li>
                  <li>นโยบายการซ่อมแซม ใครรับผิดชอบ และระยะเวลาการดำเนินการ</li>
                  <li>เงื่อนไขการคืนเงินประกัน และรายการที่อาจถูกหัก</li>
                  <li>กฎเรื่องสัตว์เลี้ยง (pet policy) และค่าธรรมเนียมเพิ่มเติม</li>
                  <li>การต่อสัญญา/การปรับค่าเช่า และการแจ้งล่วงหน้า</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM FULL IMAGE: house */}
          <div className="mt-12">
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-black/5">
              <Image
                src="/house.jpg"
                alt="House"
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