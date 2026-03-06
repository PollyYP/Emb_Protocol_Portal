"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "PROTOCOL SECTION · OFM/VISA DESK";
  const letters = Array.from(text);

  return (
    <section className="mt-2 w-full">
      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="px-2 md:px-6 lg:px-10">
        <motion.p
          className="text-right text-xs lg:text-sm font-semibold uppercase italic tracking-[0.15em] text-[#c40000] p-2 bg-[#f3f3f3]"
          initial="hidden"
          animate="show"
          variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
          }}
          >
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className="inline-block"
              variants={{
              hidden: { opacity: 0, y: 4 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="mx-auto w-full px-2 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* LEFT: Image */}
          <div className="relative w-full md:w-2/3">
            <div className="relative aspect-video w-full overflow-hidden bg-black/5 md:aspect-16/10">
              <Image
                src="/emb_front3.jpg"
                alt="Royal Thai Embassy"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Red panel */}
          <div className="relative mt-4 w-full bg-[#e0261c] p-5 text-white md:mt-0 md:w-1/3 md:p-7">


            {/* Title */}
            <h2 className="text-xl font-extrabold leading-tight md:text-2xl">
              GET IN TOUCH
            </h2>

            <div className="relative flex w-full flex-1 flex-col bg-[#e0261c] text-white"></div>

            {/* Contact Information */}
            <div className="mt-6 md:mt-2 lg:mt-10 space-y-8 text-sm lg:text-base">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 font-semibold">
                <LocationIcon />
                <span>Address</span>
                </div>
                <div className="mt-2 border-b border-white/60 pb-6 md:pb-4 lg:pb-10">
                1024 Wisconsin Ave NW <br />
                Washington, D.C. 20007 <br />
                ตึกหลัง ชั้น 3
                </div>
            </div>

            {/* Email */}
            <div>
                <div className="flex items-center gap-3 font-semibold">
                <MailIcon />
                <span>Email</span>
                </div>
                <div className="mt-2 border-b border-white/60 pb-10 md:pb-4 lg:pb-10">
                protocol@thaiembdc.org
                </div>
            </div>

            {/* Phone */}
            <div>
                <div className="flex items-center gap-3 font-semibold">
                <PhoneIcon />
                <span>Telephone</span>
                </div>
                <div className="mt-2 border-b border-white/60 pb-10 md:pb-4 lg:pb-10">
                +1 (202) 298-4798
                </div>
            </div>
            </div>
            <div className="mt-12 mb-8 text-sm text-center lg:text-base lg:mt-16">
                หากท่านมีข้อสงสัยเกี่ยวกับระเบียบ OFM <br/>
                หรือต้องการขยายระยะเวลาการตรวจลงตราของสหรัฐฯ <br/> 
                OFM/VISA DESK ยินดีให้บริการทุกท่านค่ะ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= ICONS ================= */

function LocationIcon() {
  return (
    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
      <path d="M2 4h20v16H2V4zm10 9 10-7H2l10 7z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.33a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1l-2.37 2.23z"/>
    </svg>
  );
}