"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function VehiclePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0479] via-[#150d6b] to-[#1a0f8a]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40000]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c40000]" />
              OFM — Office of Foreign Missions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              เกี่ยวกับรถ
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/60 sm:text-xl">
              ระเบียบและขั้นตอนการดำเนินการเกี่ยวกับรถยนต์สำหรับเจ้าหน้าที่ทางการทูต
              ผ่าน Office of Foreign Missions
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ CONTENT ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-2xl"
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] sm:text-3xl">
              ประเภทการดำเนินการ
            </h2>
            <p className="mt-3 text-base leading-relaxed text-black/50">
              กรุณาเลือกประเภทการดำเนินการที่ตรงกับความต้องการของท่าน
            </p>
          </motion.div>

          {/* ──────────── Card 1: การขอมีป้ายทะเบียน ──────────── */}
          <div className="space-y-6">
            <motion.article
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#0c0479] to-[#3a2fd4]" />

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                  01
                </div>

                <h3 className="text-lg font-bold tracking-tight text-black/85 sm:text-xl">
                  การขอมีป้ายทะเบียนการทูต
                </h3>
                <p className="mt-1 text-sm font-medium text-[#0c0479]/60">
                  Diplomatic License Plate Registration
                </p>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                  <p>
                    เจ้าหน้าที่ทางการทูตที่ต้องการจดทะเบียนรถยนต์ในสหรัฐอเมริกาจะต้องดำเนินการผ่าน
                    Office of Foreign Missions (OFM) เท่านั้น
                    โดยไม่สามารถไปจดทะเบียนที่ DMV ของรัฐได้โดยตรง
                    รถยนต์จะได้รับป้ายทะเบียนการทูต (Diplomatic License Plate) ซึ่งเป็นป้ายทะเบียนเฉพาะสำหรับบุคลากรทางการทูตเท่านั้น
                  </p>

                  <p>
                    เมื่อดำเนินการจดทะเบียนแล้ว OFM
                    จะเป็นผู้ครอบครองใบกรรมสิทธิ์รถยนต์ (Title Certificate)
                    ที่มีชื่อของท่านอยู่ โดยท่านจะไม่ได้รับ Title Certificate มาถือไว้เอง
                  </p>

                  <p>
                    เมื่อ OFM ได้รับเอกสารครบถ้วนแล้ว
                    จะออกป้ายทะเบียนการทูตพร้อมสติกเกอร์ (Decal) ให้
                    โดยสติกเกอร์มีอายุ 1 ปี
                    และจะได้รับการต่ออายุโดยอัตโนมัติ (Auto-Renew)
                    ทั้งนี้ ฝ่ายพิธีการทูตจะเป็นผู้ไปรับป้ายทะเบียนและสติกเกอร์มาให้ท่าน
                  </p>
                </div>

                <div className="mt-6 border-t border-black/5 pt-5">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-[#0c0479] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]"
                  >
                    กรอกแบบฟอร์ม
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* ──────────── Card 2: การขายรถ ──────────── */}
            <motion.article
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c40000] to-[#e04040]" />

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                  02
                </div>

                <h3 className="text-lg font-bold tracking-tight text-black/85 sm:text-xl">
                  การขายรถ
                </h3>
                <p className="mt-1 text-sm font-medium text-[#c40000]/70">
                  Vehicle Sale / Transfer
                </p>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                  <p>
                    ท่านสามารถติดต่อฝ่ายพิธีการทูตให้ดำเนินการขายรถได้
                    โดยมีขั้นตอนแตกต่างกันตามประเภทของผู้ซื้อ ดังนี้
                  </p>

                  {/* Sub-section A: ขายให้นักการทูต */}
                  <div className="rounded-xl border border-black/5 bg-gray-50/80 p-5">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0c0479]/10 text-xs font-bold text-[#0c0479]">
                        A
                      </span>
                      <h4 className="text-sm font-bold text-black/75">
                        ขายให้ข้าราชการ / นักการทูต
                      </h4>
                    </div>
                    <p>
                      หากท่านต้องการขายรถให้กับข้าราชการหรือนักการทูต
                      ทั้งในสถานเอกอัครราชทูต ณ กรุงวอชิงตันเอง
                      หรือสถานทูต/กงสุลอื่น ท่านสามารถแจ้งชื่อและข้อมูลของผู้ซื้อให้กับฝ่ายพิธีการทูตเพื่อดำเนินการในส่วนต่อไปได้
                      การขายรถให้กับนักการทูตไม่ต้องมีกระบวนการขอคืนใบกรรมสิทธิ์รถยนต์
                      (Title Certificate) เนื่องจาก OFM
                      จะเป็นผู้ครอบครองไว้อยู่แล้ว
                    </p>
                  </div>

                  {/* Sub-section B: ขายให้ dealer / บุคคลทั่วไป */}
                  <div className="rounded-xl border border-black/5 bg-gray-50/80 p-5">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#c40000]/10 text-xs font-bold text-[#c40000]">
                        B
                      </span>
                      <h4 className="text-sm font-bold text-black/75">
                        ขายให้ Dealer / บุคคลทั่วไป
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p>
                        หากท่านต้องการขายรถให้กับ Dealer หรือบุคคลทั่วไป
                        ท่านจะต้องมั่นใจว่าบริษัทหรือบุคคลนั้นจะเป็นผู้ซื้อที่แน่นอน
                        เนื่องจากหากแจ้งเปลี่ยนผู้ซื้อภายหลังจะทำให้กระบวนการล่าช้าออกไปและมีค่าปรับ
                        $25
                      </p>
                      <p>
                        เมื่อท่านได้ข้อมูลผู้ซื้อแล้ว
                        ให้นำมาแจ้งยังฝ่ายพิธีการทูตเพื่อกรอกข้อมูลในระบบกับ OFM
                        จากนั้นท่านจะได้รับแบบฟอร์มการขอคืนใบกรรมสิทธิ์รถยนต์
                        (Title Certificate)
                        เมื่อท่านกรอกแบบฟอร์มเสร็จเรียบร้อยแล้วให้นำกลับมายังฝ่ายพิธีการทูต
                        พร้อมทั้งทำการถอดป้ายทะเบียนการทูตเพื่อให้ฝ่ายพิธีการทูตนำไปคืน
                        OFM
                      </p>

                      {/* Warning */}
                      <div className="flex items-start gap-3 rounded-lg border border-red-200/60 bg-red-50/60 px-4 py-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#c40000]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                        <p className="text-sm leading-relaxed text-red-800/80">
                          <span className="font-semibold">สำคัญ:</span>{" "}
                          หากท่านถอดป้ายทะเบียนการทูตออกแล้ว
                          จะไม่สามารถขับรถคันนั้นได้อีก
                        </p>
                      </div>

                      <p>
                        เมื่อท่านได้รับใบกรรมสิทธิ์รถยนต์ (Title Certificate)
                        ที่มีชื่อผู้ซื้อเรียบร้อยแล้ว ให้นำไปมอบให้ผู้ซื้อเพื่อดำเนินการซื้อขายต่อไป
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation note */}
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/80 px-5 py-4">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-amber-800/80">
                    <span className="font-semibold text-amber-900">คำแนะนำ:</span>{" "}
                    ควรเริ่มดำเนินการเรื่องขายรถก่อนกำหนดการเดินทางกลับประมาณ 2–3
                    สัปดาห์ เพื่อให้มีเวลาเพียงพอในการดำเนินการ
                  </p>
                </div>

                {/* Action */}
                <div className="mt-6 border-t border-black/5 pt-5">
                  <div className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/80 px-5 py-4">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed text-amber-800/80">
                      กรุณาติดต่อ{" "}
                      <span className="font-semibold text-amber-900">
                        ฝ่ายพิธีการทูต (OFM/VISA Desk)
                      </span>{" "}
                      เพื่อดำเนินการ
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  );
}