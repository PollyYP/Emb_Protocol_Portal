"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Fade-in wrapper ─── */
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

export default function DomesticWorkerPage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0c0479] via-[#150d6b] to-[#1a0f8a]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40000]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c40000]" />
              Domestic Worker Program
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white lg:text-5xl">
              DOMESTIC WORKER (A-3)
            </h1>
            <p className="pt-4 text-sm lg:text-base leading-relaxed text-white/60">
              ข้อกำหนดของกระทรวงการต่างประเทศสหรัฐอเมริกา <br />
              สำหรับการจ้างงานลูกจ้าง (A-3) ที่ติดตามมากับนักการทูต (A-1)
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ══════════ KEY INFO ══════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-bold tracking-tight text-[#0c0479] lg:text-3xl">
                ภาพรวมโครงการ
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                Domestic Worker Program เป็นโครงการที่กระทรวงการต่างประเทศสหรัฐอเมริกา
                อนุญาตให้นักการทูตสามารถนำลูกจ้างติดตามมาด้วยได้ นอกเหนือไปจากผู้ติดตามที่เป็นสมาชิกในครอบครัว
                โดยมุ่งเน้นให้มีการปฏิบัติต่อลูกจ้างอย่างเป็นธรรม โปร่งใส
                และเป็นไปตามกฎหมายแรงงานของสหรัฐอเมริกา
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ DETAILED CONTENT ══════════ */}
      <section className="bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-4xl pt-10 pb-2">
              <h2 className="text-2xl font-bold tracking-tight text-[#0c0479] lg:text-3xl">
                รายละเอียดข้อกำหนด
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-[#c40000]" />
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl space-y-8 pb-12">

            {/* Section 01 – Who can sponsor */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0369a1] to-[#38bdf8]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-bold text-sky-700">
                      01
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      นักการทูตที่ได้รับเอกสิทธิ์
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-black/55">
                    <p>
                      นักการทูตที่มีสิทธิ์นำผู้ติดตามที่เป็นลูกจ้างมาด้วยได้ มีหลักเกณฑ์โดยสรุป ดังนี้
                    </p>
                    <div className="overflow-hidden rounded-xl border border-black/8">
                      <table className="w-full text-base">
                        <thead>
                          <tr className="bg-sky-50/80">
                            <th className="px-4 py-3 text-left font-semibold text-sky-900">ตำแหน่ง</th>
                            <th className="px-4 py-3 text-center font-semibold text-sky-900">จำนวนสูงสุด</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                          <tr>
                            <td className="px-4 py-3 text-black/60">
                              หัวหน้าคณะผู้แทน <br/>
                              เอกอัครราชทูต <br/>
                              (Chief of Mission)
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">2</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black/60">
                              รองหัวหน้าคณะผู้แทน <br/>
                              อัครราชทูต <br/>
                              (Deputy Chief of Mission)
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">2</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-black/60">
                              ผู้ช่วยทูต <br/> 
                              (ระดับหัวหน้าสำนักงาน)
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">1</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-black/5 bg-gray-50 px-5 py-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-sm text-black/40">
                        จำนวนที่ระบุสำหรับเอกอัครราชทูต กต. สหรัฐฯ อาจพิจารณาข้อยกเว้นเป็นรายกรณีตามหลักต่างตอบแทน (Reciprocity)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 02 – Key Requirements */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#0c0479] to-[#3a2fd4]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c0479]/8 text-sm font-bold text-[#0c0479]">
                      02
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ข้อกำหนดสำคัญ (Key Requirements)
                    </h3>
                  </div>
                  <div className="mt-5 space-y-3 text-sm lg:text-base leading-relaxed text-black/55">
                    <p>
                      นักการทูตที่เป็นผู้ว่าจ้างต้องปฏิบัติตามข้อกำหนดของโครงการอย่างเคร่งครัด อาทิ
                    </p>
                    {[
                      {
                        num: "1",
                        label: "การอนุญาตให้ลูกจ้างไปสัมภาษณ์แบบ in-person",
                        sub: "อำนวยความสะดวกให้ลูกจ้างไปสัมภาษณ์ (In-Person Registration) กับ Domestic Worker Team สังกัด Office of Foreign Mission (OFM) ทุกครั้งที่ถูกเรียกตัว ซึ่งจะถูกเรียกประมาณปีละหนึ่งครั้ง",
                      },
                      {
                        num: "2",
                        label: "เปิดบัญชีธนาคาร",
                        sub: "ช่วยเหลือลูกจ้างในการเปิดบัญชีธนาคารในสหรัฐอเมริกา ในนามของลูกจ้างเอง",
                      },
                      {
                        num: "3",
                        label: "การจ่ายค่าจ้าง",
                        sub: "จ่ายค่าจ้างผ่านเช็คหรือการโอนเงินเข้าบัญชีธนาคารของลูกจ้างเท่านั้น โดยจะต้องจ่ายทุกสองอาทิตย์ และค่าจ้างจะต้องเท่ากับหรือมากกว่าค่าแรงขั้นต่ำของกรุงวอชิงตัน",
                      },
                      {
                        num: "4",
                        label: "สลิปเงินเดือน",
                        sub: "จัดทำสลิปเงินเดือน ระบุค่าจ้างต่อชั่วโมง ค่าล่วงเวลา ชั่วโมงการทำงาน หากมีการหักเงินเดือนที่เป็นตามกฎหมาย เช่น การหักภาษี หรือเงินเก็บเกษียณ จะต้องระบุไว้ในสลิปเงินเดือนด้วย โดยห้ามหักค่าใช้จ่ายอื่นที่ไม่เกี่ยวกับสวัสดิการโดยเด็ดขาด",
                      },
                      {
                        num: "5",
                        label: "บันทึกเวลาและเอกสาร",
                        sub: "จัดทำและเก็บรักษาบันทึกเวลาการทำงานและการจ่ายค่าจ้าง และจะต้องเก็บเอกสารไว้อย่างน้อย 3 ปี",
                      },
                      {
                        num: "6",
                        label: "สัญญาจ้าง",
                        sub: "จัดทำสัญญาจ้างเป็นภาษาไทยและอังกฤษ หรือหากลูกจ้างไม่เข้าใจภาษาอังกฤษหรือภาษาไทย จะต้องมีฉบับแปลในภาษาที่ลูกจ้างเข้าใจด้วย (ในกรณีที่ลูกจ้างไม่ใช่แรงงานไทย)",
                      },
                      {
                        num: "7",
                        label: "ต่ออายุสถานะ A-3 / G-5",
                        sub: "ดำเนินการขอต่ออายุสถานะให้ทันก่อนหมดอายุ",
                      },
                      {
                        num: "8",
                        label: "ชั่วโมงการจ้างงานขั้นต่ำ",
                        sub: "จัดให้มีการจ้างงานอย่างน้อย 35 ชั่วโมงต่อสัปดาห์ หากทำงานเงิน 40 ชั่วโมงต่อสัปดาห์จะต้องจ่ายค่าล่วงเวลาตามอัตรากฎหมายแรงงานสหรัฐฯ",
                      },
                    ].map((item) => (
                      <div key={item.num} className="flex items-center gap-3 rounded-xl border border-[#0c0479]/8 bg-[#0c0479]/3 p-4">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c0479] text-xs font-bold text-white">
                          {item.num}
                        </div>
                        <div>
                          <p className="font-semibold text-[#0c0479]">{item.label}</p>
                          <p className="text-sm text-[#c40000]/60">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 03 – Important Restrictions */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#c40000] to-[#e04040]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c40000]/8 text-sm font-bold text-[#c40000]">
                      03
                    </div>
                    <h3 className="text-base lg:text-lg font-bold tracking-tight text-black/85">
                      ข้อจำกัดที่สำคัญ (Important Restrictions)
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/55">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        {
                          icon: "👤",
                          title: "ทำเฉพาะงานที่ได้ระบุไว้ในสัญญาเท่านั้น",
                          detail: "ลูกจ้างไม่สามารถทำงานที่นอกเหนือจากที่ระบุไว้ในสัญญาได้ เจ้าหน้าที่จะทำการสัมภาษณ์ลูกจ้างในประเด็นนี้เพื่อให้มั่นใจว่าลูกจ้างจะได้รับการปฏิบัติอย่างเป็นธรรม",
                        },
                        {
                          icon: "👨‍👩‍👧",
                          title: "ห้ามมีความสัมพันธ์เครือญาติ",
                          detail: "นายจ้างและลูกจ้างจะต้องไม่มีความสัมพันธ์ทางเครือญาติ ยกเว้นกรณีที่ได้รับการพิจารณาเป็นกรณีพิเศษ",
                        },
                        {
                          icon: "🏥",
                          title: "ค่าใช้จ่ายด้านการรักษาพยาบาล",
                          detail: "นายจ้างหรือหน่วยงานต้นสังกัดต้องรับผิดชอบค่าใช้จ่ายทางการแพทย์ของพนักงานในระหว่างพำนักในสหรัฐอเมริกา",
                        },
                        {
                          icon: "🚫",
                          title: "ห้ามหักค่าจ้าง",
                          detail: "ห้ามมีการหักค่าจ้างนอกเหนือจากที่กฎหมายกำหนด",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 border border-black/5"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-black/75">{item.title}</p>
                            <p className="text-sm text-black/45 mt-0.5 leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 04 – A-3 Application Steps */}
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-1 w-full bg-linear-to-r from-[#059669] to-[#34d399]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700">
                      04
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-black/85">
                      ขั้นตอนการขอมีผู้ติดตาม A-3
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        num: "1",
                        title: "ยื่นแบบฟอร์ม Pre-Notification",
                        detail: (
                          <>
                            <p>
                              นักการทูตที่เป็นนายจ้างกรอกข้อมูลของผู้ติดตามส่งมาให้ฝ่ายพิธีฯ
                              เพื่อดำเนินการยื่นแบบฟอร์ม Domestic Worker Pre-Notification ต่อ OFM โปรดกรอกข้อมูลโดยใช้ {" "}
                              <span>
                                <a
                                  href="https://www.cognitoforms.com/RoyalThaiEmbassy1/_pre-noa-applicant-info"
                                  className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                                >
                                  แบบฟอร์ม
                                </a>
                              </span> {" "} นี้
                            </p>
                          </>
                        ),
                      },
                      {
                        num: "2",
                        title: "ใช้ใบอนุมัติประกอบการขอวีซ่า",
                        detail: "เมื่อ OFM อนุมัติแล้วให้นายจ้างนำใบอนุมัติไปใช้ประกอบการขอวีซ่าให้ผู้ติดตาม",
                      },
                    ].map((item) => (
                      <div key={item.num} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                          {item.num}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-emerald-900">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-black/55">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* หลักปฏิบัติ note */}
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200/70 bg-amber-50/60 px-4 py-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-0.5">หลักปฏิบัติ</p>
                      <p className="text-xs lg:text-sm leading-relaxed text-amber-900/80">
                        นักการทูตที่เป็นนายจ้างจะต้องมีวีซ่าก่อน เนื่องจากจะต้องใช้ข้อมูลวีซ่ากรอกแบบฟอร์ม
                        Domestic Worker Pre-Notification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom contact */}
          <FadeIn className="pb-12">
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0479]/8">
                  <svg className="h-6 w-6 text-[#0c0479]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm lg:text-base font-bold text-black/80">หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม</h3>
                  <p className="mt-1 text-sm text-black/45">
                    ติดต่อฝ่ายพิธีฯ ได้โดยตรง
                  </p>
                </div>
                <a
                  href="mailto:protocol@thaiembdc.org"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0c0479] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0c0479]/20 transition-all hover:bg-[#09035e] active:scale-[0.97]"
                >
                  ส่งอีเมล
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}