"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const SECTION_LINE = (
  <div className="w-full h-px bg-gradient-to-r from-[#c40000]/60 via-[#c40000]/20 to-transparent my-8" />
);

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-[#c40000] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
      {children}
    </span>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c40000]/40 bg-[#fff8f8] text-xs lg:text-sm lg:text-base font-bold text-[#c40000]">
      {n}
    </span>
  );
}

function InfoCard({
  icon,
  children,
  accent = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex gap-3 rounded-lg border p-4 text-sm lg:text-base leading-relaxed ${
        accent
          ? "border-[#c40000]/30 bg-[#fff5f5]"
          : "border-zinc-200 bg-zinc-50"
      }`}
    >
      <span className="mt-0.5 shrink-0 text-base">{icon}</span>
      <span className={accent ? "text-[#7a0000]" : "text-zinc-600"}>
        {children}
      </span>
    </div>
  );
}

type Tab = "lease" | "buy";
type SellPath = "diplomat" | "outside" | null;

export default function VehicleSalePage() {
  const [tab, setTab] = useState<Tab>("buy");
  const [sellPath, setSellPath] = useState<SellPath>(null);

  return (
    <main className="min-h-screen bg-[#fafafa] font-['Sarabun',sans-serif]">
      {/* Top stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#c40000] via-[#e53030] to-[#c40000]" />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-4 py-14 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 1px,transparent 40px)",
          }}
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="relative max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c40000]"
          >
            VEHICLE RETURN/ VEHICLE SALE
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-zinc-900 md:text-4xl"
          >
            การคืนรถเช่าซื้อ
            <br />
            <span className="text-[#c40000]">การขายรถยนต์</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm lg:text-base leading-relaxed text-zinc-500"
          >
            เมื่อถึงเวลากลับประจำการ ไม่ว่าจะเป็นการคืนรถเช่า <br/>
            หรือการขายรถ ฝ่ายพิธีฯ พร้อมช่วยเหลือท่านในทุกขั้นตอน
          </motion.p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex gap-2"
        >
          {(
            [
              { key: "lease", label: "🚗  รถเช่า (Lease)", sub: "Return" },
              { key: "buy", label: "🏷️  รถซื้อ (Purchase)", sub: "Sell" },
            ] as const
          ).map(({ key, label, sub }) => (
            <button
              key={key}
              onClick={() => {
                setTab(key);
                setSellPath(null);
              }}
              className={`group flex flex-col items-start gap-0.5 rounded-lg border px-5 py-3 text-left transition-all duration-200 ${
                tab === key
                  ? "border-[#c40000] bg-[#c40000] text-white shadow-md"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
              }`}
            >
              <span className="text-sm lg:text-base font-semibold lg:text-base">{label}</span>
              <span
                className={`text-[10px] uppercase tracking-widest ${tab === key ? "text-red-200" : "text-zinc-400"}`}
              >
                {sub}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ─── LEASE SECTION ─── */}
        {tab === "lease" && (
          <motion.div
            key="lease"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Tag>Lease Return</Tag>
              <p className="text-sm lg:text-base text-zinc-500 lg:text-base">การคืนรถเช่า</p>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-zinc-600 lg:text-base">
              หากท่านทำสัญญาเช่ารถ (Lease) เมื่อครบกำหนดสัญญา สามารถนำรถไปคืนที่ Dealership ได้ทันที
            </p>

            {/* Steps */}
            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
              <div className="bg-zinc-50 px-5 py-3 border-b border-zinc-200">
                <p className="text-xs lg:text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-500">
                  ขั้นตอนการดำเนินการ
                </p>
              </div>
              <div className="divide-y divide-zinc-100">
                {[
                  {
                    step: 1,
                    title: "คืนรถและถอดป้ายทะเบียน",
                    desc: "นำรถไปคืนที่ Dealership และถอดป้ายทะเบียนทูตออกที่นั่น",
                  },
                  {
                    step: 2,
                    title: "รับเอกสารยืนยันการคืนรถ",
                    desc: "ขอรับ Return Receipt จาก Dealership ไว้เป็นหลักฐาน",
                  },
                  {
                    step: 3,
                    title: "ส่งป้ายทะเบียนคืนฝ่ายพิธีฯ",
                    desc: "นำป้ายทะเบียนทูตมาส่งคืนให้ฝ่ายพิธีฯ หร้อมสำเนาเอกสารการคืนรถ เพื่อรายงาน OFM ต่อไป",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 px-5 py-4">
                    <StepBadge n={step} />
                    <div>
                      <p className="text-sm lg:text-base font-semibold text-zinc-800 lg:text-base">{title}</p>
                      <p className="mt-0.5 text-xs lg:text-sm lg:text-base leading-relaxed text-zinc-500 lg:text-sm lg:text-base">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              <InfoCard icon="📋">
                ตรวจสอบเงื่อนไขการคืนรถในสัญญา เช่น ระยะทางที่กำหนด สภาพรถ และค่าใช้จ่ายเพิ่มเติม
                ที่อาจเกิดขึ้น
              </InfoCard>
              <InfoCard icon="🔑">
                เตรียมกุญแจรถ เอกสารในรถ และตรวจสอบของส่วนตัวให้ครบถ้วนก่อนนำรถไปคืน
              </InfoCard>
              <InfoCard icon="📸">
                แนะนำให้ถ่ายรูปสภาพรถก่อนคืน เพื่อเป็นหลักฐานในกรณีที่มีข้อพิพาทภายหลัง
              </InfoCard>
            </div>
          </motion.div>
        )}

        {/* ─── BUY/SELL SECTION ─── */}
        {tab === "buy" && (
          <motion.div
            key="buy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Tag>Vehicle Sale</Tag>
                <p className="text-sm lg:text-base text-zinc-500 lg:text-base">การขายรถ — เลือกประเภทผู้ซื้อ</p>
              </div>
              <p className="mb-6 text-sm lg:text-base leading-relaxed text-zinc-600">
                กระบวนการขายรถแตกต่างกันตามประเภทของผู้ซื้อ กรุณาเลือกสถานการณ์ที่ตรงกับท่าน
              </p>

              {/* Path selector */}
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  onClick={() => setSellPath("diplomat")}
                  className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                    sellPath === "diplomat"
                      ? "border-[#c40000] bg-[#c40000]"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  <p
                    className={`mb-1 text-sm lg:text-base font-bold uppercase tracking-widest ${sellPath === "diplomat" ? "text-red-200" : "text-[#c40000]"}`}
                  >
                    Option A {sellPath !== "diplomat" && <span className="underline"> คลิกเพื่อดูรายละเอียด </span>}
                  </p>
                  <p
                    className={`text-base font-bold ${sellPath === "diplomat" ? "text-white" : "text-zinc-800"}`}
                  >
                    ขายให้นักการทูต
                  </p>
                  <p
                    className={`mt-1 text-sm lg:text-base leading-relaxed ${sellPath === "diplomat" ? "text-red-100" : "text-zinc-500"}`}
                  >
                    ภายในชุมชนนักการทูต (Diplomat Community)
                    <br />
                    ไม่ต้องขอ Title Release
                  </p>
                  {sellPath === "diplomat" && (
                    <span className="absolute right-3 top-3 text-white">✓</span>
                  )}
                </button>

                <button
                  onClick={() => setSellPath("outside")}
                  className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                    sellPath === "outside"
                      ? "border-[#c40000] bg-[#c40000]"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  <p
                    className={`mb-1 text-sm lg:text-base font-bold uppercase tracking-widest ${sellPath === "outside" ? "text-red-200" : "text-[#c40000]"}`}
                  >
                    Option B {sellPath !== "outside" && <span className="underline"> คลิกเพื่อดูรายละเอียด </span>}
                  </p>
                  <p
                    className={`text-base font-bold ${sellPath === "outside" ? "text-white" : "text-zinc-800"}`}
                  >
                    ขายให้บุคคลทั่วไป / Dealer
                  </p>
                  <p
                    className={`mt-1 text-sm lg:text-base lg:text-sm lg:text-base leading-relaxed ${sellPath === "outside" ? "text-red-100" : "text-zinc-500"}`}
                  >
                    นอกชุมชนนักการทูต
                    <br />
                    ต้องขอ Title Release จาก OFM
                  </p>
                  {sellPath === "outside" && (
                    <span className="absolute right-3 top-3 text-white">✓</span>
                  )}
                </button>
              </div>
            </div>

            {/* ── DIPLOMAT PATH ── */}
            {sellPath === "diplomat" && (
              <motion.div
                key="diplomat"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {SECTION_LINE}
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤝</span>
                  <h2 className="text-base lg:text-lg font-bold text-zinc-800">
                    ขายภายในชุมชนนักการทูต
                  </h2>
                </div>

                <p className="text-sm lg:text-base leading-relaxed text-zinc-600">
                  เนื่องจากนักการทูตทั้งหมดอยู่ในความดูแลของ OFM
                  ซึ่งเป็นผู้ถือ Title ของรถทุกคันอยู่แล้ว
                  การโอนกรรมสิทธิ์ระหว่างนักการทูตจึงไม่จำเป็นต้องนำ Title ออกมา
                  — ฝ่ายพิธีการฯ จะดำเนินการแจ้ง OFM เพื่อโอนชื่อในระบบให้
                </p>

                <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
                  <div className="bg-zinc-50 px-5 py-3 border-b border-zinc-200">
                    <p className="text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-500">
                      ขั้นตอนการดำเนินการ
                    </p>
                  </div>
                  <div className="divide-y divide-zinc-100">
                    {[
                      {
                        step: 1,
                        title: "แจ้งข้อมูลผู้ซื้อและรถมายังฝ่ายพิธีการฯ",
                        desc: "แจ้งชื่อ-ที่อยู่ผู้ซื้อ พร้อมข้อมูลรถ (Make, Model, สี, ปี, Odometer, น้ำหนักรถ)",
                      },
                      {
                        step: 2,
                        title: "ฝ่ายพิธีการฯ ดำเนินการแจ้ง OFM",
                        desc: "ฝ่ายพิธีฯ จะดำเนินการยื่นคำร้องขอโอนกรรมสิทธิ์จากผู้ขายไปเป็นผู้ซื้อในระบบของ OFM ชื่อใน Title จะถูกเปลี่ยนโดยที่ไม่ต้องทำการขอเอาออกมา",
                      },
                      {
                        step: 3,
                        title: "ขึ้นทะเบียนรถ (Vehicle Registration)",
                        desc: "หากผู้ซื้อสังกัดสถานเอกอัครราชทูต ณ กรุงวอชิงตัน ฝ่ายพิธีการฯ จะดำเนินการขึ้นทะเบียนรถคันที่ถูกขายให้ผู้ซื้อต่อไป",
                      },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-4 px-5 py-4">
                        <StepBadge n={step} />
                        <div>
                          <p className="text-sm lg:text-base font-semibold text-zinc-800">{title}</p>
                          <p className="mt-0.5 text-xs lg:text-sm lg:text-base leading-relaxed text-zinc-500">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required info */}
                <div>
                  <p className="mb-3 text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-400">
                    ข้อมูลที่ต้องแจ้งฝ่ายพิธีการฯ
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      "ชื่อผู้ซื้อ",
                      "ที่อยู่ผู้ซื้อ",
                      "Make / Model",
                      "สี / ปี",
                      "Odometer",
                      "น้ำหนักรถ",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm lg:text-base font-medium text-zinc-700"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <InfoCard icon="✅" accent>
                  ผู้ซื้อสามารถเป็นนักการทูตจากสถานเอกอัครราชทูตเดียวกัน
                  หรือต่างสถานทูตก็ได้ เนื่องจากนักการทูตทุกชาติอยู่ภายใต้การดูแลของ OFM เช่นเดียวกัน
                </InfoCard>
              </motion.div>
            )}

            {/* ── OUTSIDE PATH ── */}
            {sellPath === "outside" && (
              <motion.div
                key="outside"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {SECTION_LINE}
                <div className="flex items-center gap-2">
                  <span className="text-lg">📄</span>
                  <h2 className="text-base font-bold text-zinc-800">
                    ขายนอกชุมชน — ต้องขอ Title Release
                  </h2>
                </div>

                {/* Sub-tabs: person vs dealer */}
                <SubSellSection />
              </motion.div>
            )}
          </motion.div>
        )}
      </section>
    </main>
  );
}

/* ─── Sub component for outside-community selling ─── */
function SubSellSection() {
  const [mode, setMode] = useState<"person" | "dealer">("dealer");

  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-sm lg:text-base">
        {(
          [
            { key: "person", label: "ขายให้บุคคลทั่วไป" },
            { key: "dealer", label: "ขายให้ Dealer" },
          ] as const
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`rounded-full border px-4 py-1.5 text-xs lg:text-sm lg:text-base font-semibold transition-all ${
              mode === key
                ? "border-zinc-800 bg-zinc-800 text-white"
                : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Shared process */}
      <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
        <div className="bg-zinc-50 px-5 py-3 border-b border-zinc-200">
          <p className="text-xs lg:text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-500">
            ขั้นตอนการดำเนินการ
          </p>
        </div>
        <div className="divide-y divide-zinc-100">
          {[
            {
              step: 1,
              title: "แจ้งข้อมูลผู้ซื้อและข้อมูลรถมายังฝ่ายพิธีการฯ",
              desc:
                mode === "dealer"
                  ? "แจ้งชื่อ-ที่อยู่ Dealer พร้อมข้อมูลรถ (Make, Model, สี, ปี, Odometer, น้ำหนักรถ) เพื่อยื่นคำร้องขอคืน Title"
                  : "แจ้งชื่อ-ที่อยู่ผู้ซื้อ พร้อมข้อมูลรถ (Make, Model, สี, ปี, Odometer, น้ำหนักรถ)",
            },
            {
              step: 2,
              title: "รอ OFM อนุมัติคำร้อง",
              desc: "ระยะเวลารอ 7–14 วันทำการ (ยังไม่รวมขั้นตอนอื่นๆ ในกระบวนการขาย)",
            },
            {
              step: 3,
              title: "ถอดป้ายทะเบียนส่งคืนฝ่ายพิธีการฯ",
              desc: "เมื่อคำร้องได้รับการอนุมัติ ฝ่ายพิธีการฯ จะแจ้งให้ท่านถอดป้ายทะเบียนมาส่งคืน",
            },
            {
              step: 4,
              title: "ฝ่ายพิธีการฯ นำป้ายคืน OFM และรับ Title",
              desc: "OFM เปิดรับป้ายและออก Title เฉพาะวันพุธ เวลา 9:00 – 14:00 น. เท่านั้น",
            },
            {
              step: 5,
              title: "ลงนามใน Title และดำเนินการขาย",
              desc:
                mode === "dealer"
                  ? "รับ Title จากฝ่ายพิธีการฯ ลงนาม แล้วนำไปที่ Dealer เพื่อทำการซื้อขายให้เสร็จสิ้น"
                  : "รับ Title ลงนาม แล้วส่งมอบให้ผู้ซื้อ เพื่อที่ผู้ซื้อจะนำไปใช้ขอป้ายทะเบียนบุคคลธรรมดาต่อไป",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 px-5 py-4">
              <StepBadge n={step} />
              <div>
                <p className="text-sm lg:text-base font-semibold text-zinc-800">{title}</p>
                <p className="mt-0.5 text-xs lg:text-sm lg:text-base leading-relaxed text-zinc-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required info */}
      <div>
        <p className="mb-3 text-xs lg:text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-400">
          ข้อมูลที่ต้องแจ้งฝ่ายพิธีการฯ
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            mode === "dealer" ? "ชื่อบริษัท Dealer" : "ชื่อผู้ซื้อ",
            mode === "dealer" ? "ที่อยู่ Dealer" : "ที่อยู่ผู้ซื้อ",
            "Make / Model",
            "สี / ปี",
            "Odometer",
            "น้ำหนักรถ",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs lg:text-sm lg:text-base font-medium text-zinc-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c40000]" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Dealer-specific warnings */}
      {mode === "dealer" && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <p className="text-xs lg:text-sm lg:text-base font-bold uppercase tracking-widest text-zinc-400">
            ข้อควรรู้ — การขายให้ Dealer
          </p>
          <InfoCard icon="🔍">
            แนะนำให้ตีราคาจากหลาย Dealer ก่อน แล้วเลือก Dealer ที่ให้ราคาที่พอใจที่สุด
            ก่อนดำเนินการยื่นเรื่อง
          </InfoCard>
          <InfoCard icon="⚠️" accent>
            <strong>การเปลี่ยนผู้ซื้อภายหลังมีค่าดำเนินการ $25</strong>{" "}
            และทำให้กระบวนการขายล่าช้าออกไป
            กรุณาให้ Dealer ตรวจสอบรถให้มั่นใจว่าจะรับซื้อ ก่อนยื่นเรื่องมายังฝ่ายพิธีฯ
          </InfoCard>
          <InfoCard icon="🚗">
            <p>
              หาก Dealer ไม่สามารถออก Temporary Tag ได้
              ท่านจะต้อง <span className="text-amber-700">จอดรถไว้ที่ Dealer จนกว่าการขายจะเสร็จสิ้น </span>
              เนื่องจาก <span className="text-[#c40000]">ห้ามขับรถหลังถอดป้ายทะเบียนแล้ว</span> โปรดสอบถาม Dealer ที่ท่านต้องการขายว่ามี Temporary Tag หรือไม่
            </p>
            <p className="mt-2">
              โดยทั่วไปแล้ว Dealer ที่มี Temporary Tag มักจะเป็น Dealer ที่ขายรถใหม่ของรถยี่ห้อนั้น ๆ เช่น Dealer รถ BMW หรือ Mercedes-Benz เป็นต้น ส่วน Dealer
              ที่ขายแต่รถมือสองและไม่ได้ขายเฉพาะยี่ห้อไหนเฉพาะเจาะจง อาจไม่มี Temporary Tag
            </p>
          </InfoCard>
          <InfoCard icon="🔢" accent>
            <strong>Odometer ในไตเติ้ลและในรถต้องตรงกัน</strong>{" "}
            เมื่อยื่นข้อมูลรถแล้ว ท่านควรหยุดใช้รถทันที
            <p className="mt-2">
            เมื่อได้ Title ไปแล้ว หาก Dealer พบว่า Odometer จริงตัวเลขเกินกว่าใน Title Dealer บางที่อาจเสนอราคาซื้อที่ต่ำกว่าที่เคยเสนอในครั้งแรก หรือขอให้ท่านแก้ไขข้อมูลใน Title ให้ตรงกับความเป็นจริง
            ซึ่งจะทำให้เสียค่าดำเนินการกับ OFM เพิ่มเติม $25 และทำให้กระบวนการขายยืดเยื้อออกไป
            </p>
          </InfoCard>
        </motion.div>
      )}

      {/* Shared note block */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3">
        <p className="text-xs lg:text-sm lg:text-base font-bold uppercase tracking-widest text-amber-700">
          หมายเหตุสำคัญ
        </p>
        <div className="space-y-3 text-sm lg:text-base text-amber-800">
          <div className="flex gap-2">
            <span className="shrink-0">⏱</span>
            <span>
              ระยะเวลารอการอนุมัติจาก OFM ประมาณ <strong>7–14 วันทำการ</strong>{" "}
              ยังไม่รวมขั้นตอนอื่นๆ ในกระบวนการขาย
            </span>
          </div>
          <div className="flex gap-2">
            <span className="shrink-0">📅</span>
            <span>
              OFM เปิดให้นำป้ายทะเบียนคืนและรับ Title{" "}
              <strong>เฉพาะวันพุธ เวลา 9:00 – 14:00 น. เท่านั้น</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}