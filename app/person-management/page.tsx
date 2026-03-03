"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Section data ─── */
const sections = [
  {
    id: "domestic-worker",
    title: "Domestic Worker Pre-Notification",
    titleTh: "การแจ้งล่วงหน้าสำหรับผู้ติดตาม (Domestic Worker)",
    description:
      "ก่อนที่ผู้ติดตามจะเดินทางมาถึงสหรัฐอเมริกา ข้าราชการที่เป็นนายจ้างจะต้องดำเนินการแจ้งล่วงหน้า (Pre-Notification) ต่อ Office of Foreign Missions (OFM) กระทรวงการต่างประเทศสหรัฐฯ โดยต้องยื่นเอกสารที่เกี่ยวข้อง เช่น สัญญาจ้างงาน หลักฐานค่าตอบแทน และข้อมูลส่วนตัวของผู้ติดตาม เพื่อให้ OFM พิจารณาอนุมัติก่อนที่ผู้ติดตามจะสามารถยื่นขอวีซ่าประเภท A-3 ได้ ขั้นตอนนี้มีวัตถุประสงค์เพื่อคุ้มครองสิทธิของผู้ติดตามและให้แน่ใจว่านายจ้างปฏิบัติตามกฎหมายแรงงานของสหรัฐฯ",
    hasForm: true,
    formHref: "#", // ← ใส่ลิงก์แบบฟอร์มที่นี่
    accent: "red",
  },
  {
    id: "appointment",
    title: "Notification of Appointment",
    titleTh: "การแจ้งเข้ารับตำแหน่ง",
    description:
      "เมื่อข้าราชการหรือเจ้าหน้าที่ทางการทูต/กงสุลได้รับการแต่งตั้งให้มาประจำการ ณ สถานเอกอัครราชทูต สถานกงสุลใหญ่ หรือคณะผู้แทนถาวรในสหรัฐอเมริกา จะต้องดำเนินการแจ้ง Notification of Appointment ต่อ OFM ภายใน 30 วันนับจากวันที่เดินทางมาถึง โปรดกรอกข้อมูลผ่านแบบฟอร์มด้านล่างเพื่อส่งให้ฝ่ายพิธีฯ ดำเนินการในลำดับต่อไป",
    hasForm: true,
    formHref: "https://www.cognitoforms.com/RoyalThaiEmbassy1/NotificationOfAppointmentEnglishOnly",
    accent: "blue",
  },
  {
    id: "change",
    title: "Notification of Change",
    titleTh: "การแจ้งเปลี่ยนแปลงข้อมูล",
    description:
      "หากมีการเปลี่ยนแปลงข้อมูลส่วนตัวหรือข้อมูลทางการทูต เช่น การเปลี่ยนตำแหน่ง การเปลี่ยนที่อยู่ ข้อมูลส่วนตัว การเปลี่ยนสถานภาพสมรส หรือการเปลี่ยนแปลงอื่น ๆ ที่เกี่ยวข้อง เจ้าหน้าที่จะต้องแจ้ง Notification of Change ต่อ OFM โดยท่านสามารถแจ้งฝ่ายพิธีฯ เพื่อดำเนินการ ทั้งนี้เพื่อให้ข้อมูลในระบบของ OFM เป็นปัจจุบันและถูกต้อง รวมถึงการปรับปรุงบัตรประจำตัวทางการทูตตามความจำเป็น",
    hasForm: false,
    formHref: "",
    accent: "blue",
  },
  {
    id: "termination",
    title: "Notification of Termination",
    titleTh: "การแจ้งพ้นจากตำแหน่ง",
    description:
      "เมื่อเจ้าหน้าที่ทางการทูตหรือกงสุลสิ้นสุดวาระการประจำการและจะเดินทางออกจากสหรัฐอเมริกา ฝ่ายพิธีฯ มีหน้าที่ดำเนินการแจ้ง Notification of Termination ต่อ OFM โดยท่านต้องคืนบัตรประจำตัวทางการทูต (Diplomatic ID) ใบขับขี่ ใบ Sale Tax Card ของตนเองและผู้ติดตามทุกคน หรือทะเบียนรถทางการทูต (หากมี) ของตนเองและผู้ติดตามทุกคน",
    hasForm: false,
    formHref: "",
    accent: "red",
  },
];

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function PersonManagementPage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0c0479] via-[#150d6b] to-[#1a0f8a]">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40000]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const}}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c40000]" />
              OFM — Office of Foreign Missions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Person Management
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/60 sm:text-xl">
              การจัดการบุคลากรทางการทูต แจ้งเข้ารับตำแหน่ง เปลี่ยนแปลงข้อมูล
              และพ้นจากตำแหน่งต่อ Office of Foreign Missions
            </p>
          </motion.div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
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
              ประเภทการแจ้งดำเนินการ
            </h2>
            <p className="mt-3 text-base leading-relaxed text-black/50">
              กรุณาเลือกประเภทการแจ้งที่ตรงกับความต้องการของท่าน
              สำหรับรายการที่มีแบบฟอร์มออนไลน์ <br/>
              <span className="font-bold text-[#c40000]">โปรดกรอกแบบฟอร์ม</span>เพื่อให้ฝ่ายพิธีการทูต (OFM/VISA Desk) ดำเนินการต่อไป
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/50">
                ทั้งนี้สำหรับการแจ้งที่ไม่มีแบบฟอร์มออนไลน์
                กรุณาติดต่อฝ่ายพิธีฯ โดยตรงเพื่อดำเนินการ
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((s, i) => (
              <motion.article
                key={s.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                {/* Top accent bar */}
                <div
                  className={`h-1 w-full ${
                    s.accent === "red"
                      ? "bg-linear-to-r from-[#c40000] to-[#e04040]"
                      : "bg-linear-to-r from-[#0c0479] to-[#3a2fd4]"
                  }`}
                />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  {/* Number badge */}
                  <div
                    className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                      s.accent === "red"
                        ? "bg-[#c40000]/8 text-[#c40000]"
                        : "bg-[#0c0479]/8 text-[#0c0479]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Titles */}
                  <h3 className="text-lg font-bold tracking-tight text-black/85 sm:text-xl">
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      s.accent === "red" ? "text-[#c40000]/70" : "text-[#0c0479]/60"
                    }`}
                  >
                    {s.titleTh}
                  </p>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-black/55">
                    {s.description}
                  </p>

                  {/* Action area */}
                  <div className="mt-6 border-t border-black/5 pt-5">
                    {s.hasForm ? (
                      <Link
                        href={s.formHref}
                        className={`inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] ${
                          s.accent === "red"
                            ? "bg-[#c40000] hover:bg-[#a80000] shadow-sm shadow-[#c40000]/20"
                            : "bg-[#0c0479] hover:bg-[#09035e] shadow-sm shadow-[#0c0479]/20"
                        }`}
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
                    ) : (
                      <div className="flex items-start gap-3 rounded-xl bg-amber-50/80 border border-amber-200/60 px-5 py-4">
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
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}