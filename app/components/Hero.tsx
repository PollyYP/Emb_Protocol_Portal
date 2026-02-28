"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-2 w-full">
      {/* local keyframes so you don't need globals.css */}
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

      <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* LEFT: Image */}
          <div className="relative w-full md:w-2/3">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5 md:aspect-[16/10]">
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
            {/* Spinning badge */}
            <div className="absolute -right-6 -top-6 md:-right-8 md:-top-8">
              <div
                className="h-28 w-28 md:h-36 md:w-36"
                style={{ animation: "spinSlow 10s linear infinite" }}
              >
                <svg viewBox="0 0 300 300" className="h-full w-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M 150,150
                        m -95,0
                        a 95,95 0 1,1 190,0
                        a 95,95 0 1,1 -190,0
                      "
                    />
                  </defs>

                  <circle cx="150" cy="150" r="135" fill="#1f3f9a" />
                  <circle cx="150" cy="150" r="55" fill="white" />

                  <circle cx="150" cy="150" r="125" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="4" />
                  <circle cx="150" cy="150" r="65" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="4" />

                  <polygon
                    points="
                      150,95
                      163,132
                      202,132
                      170,155
                      182,192
                      150,170
                      118,192
                      130,155
                      98,132
                      137,132
                    "
                    fill="#e0261c"
                  />

                  <text fill="white" fontSize="32" fontWeight="800" letterSpacing="3">
                    <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                      ยินดีต้อนรับ ★
                    </textPath>
                  </text>

                  <text fill="white" fontSize="32" fontWeight="800" letterSpacing="3">
                    <textPath href="#circlePath" startOffset="75%" textAnchor="middle">
                      สู่กรุงวอชิงตัน ★
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
              Contact Us
            </h2>

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
                ตึกหลัง ชั้น 2
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