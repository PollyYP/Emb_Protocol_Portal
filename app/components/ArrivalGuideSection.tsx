"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type Slide = {
  no: number;
  title: string;
  href: string;
  image: string;
};

export default function ArrivalGuideCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        no: 1,
        title: "หาที่พัก",
        href: "/arrival/housing",
        image: "/washington.jpg",
      },
      {
        no: 2,
        title: "ขอมีเลข SSN",
        href: "/arrival/ssn",
        image: "/ssn.jpg",
      },
      {
        no: 3,
        title: "เปิดบัญชีธนาคาร",
        href: "/arrival/bank",
        image: "/bank.jpg",
      },
      {
        no: 4,
        title: "หารถยนต์ส่วนบุคคล",
        href: "/arrival/car",
        image: "/car.jpg",
      },
    ],
    []
  );

  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v === 0 ? slides.length - 1 : v - 1));
  const next = () => setI((v) => (v === slides.length - 1 ? 0 : v + 1));

  const active = slides[i];

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-10">
        <h2 className="text-4xl font-extrabold text-[#e0261c] md:text-6xl">
          แนวทางปฏิบัติเมื่อเดินทางมาถึง
        </h2>

        <div className="mt-8">
          <div className="relative w-full overflow-hidden border border-black/10">

            {/* Background Image */}
            <div className="absolute inset-0 opacity-90">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-0 top-0 z-20 flex h-full w-12 items-center justify-center text-3xl font-light text-white hover:bg-black/30 md:w-16"
            >
              &lt;
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-0 top-0 z-20 flex h-full w-12 items-center justify-center text-3xl font-light text-white hover:bg-black/30 md:w-16"
            >
              &gt;
            </button>

            {/* Card Content */}
            <Link
              href={active.href}
              className="relative z-10 block px-14 py-16 md:px-20 md:py-24"
            >
              {/* Big number */}
              <div className="absolute left-6 top-6 text-[110px] font-extrabold leading-none text-white/80 md:text-[160px]">
                {active.no}
              </div>

              {/* Center content */}
              <div className="flex min-h-[240px] flex-col items-center justify-center text-center md:min-h-[320px]">
                <div className="text-4xl font-extrabold text-white md:text-6xl">
                  {active.title}
                </div>

                <div className="mt-6 text-sm text-white/80 md:text-base">
                  คลิกเพื่อดูรายละเอียด →
                </div>
              </div>
            </Link>

          </div>

          {/* Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full ${
                  idx === i ? "bg-black/80" : "bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}