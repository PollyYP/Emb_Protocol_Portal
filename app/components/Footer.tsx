"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 lg:mt-2 bg-[#f3f3f3] border-t border-black/6 lg:grid lg:grid-cols-5">
      {/* Image with dark overlay */}
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/anofmandvisa_desk.png"
          alt="OFM/VISA Desk Image"
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="flex flex-col px-4 py-6 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 flex-1">
          {/* Contact info */}
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500">เบอร์ติดต่อ</span>
              <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                (202) 298 - 4798
              </a>
            </p>
            <div className="mt-10 space-y-6 text-sm text-gray-700">
              <p>วันทำการ : จันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. <br/> (ยกเว้นวันหยุดนักขัตฤกษ์ของไทยและสหรัฐอเมริกา)</p>
              <p>
                Protocol Section <br/>
                Royal Thai Embassy<br/>
                1024 Wisconsin Ave NW, <br />
                Washington, DC 20007 <br/>
              </p>
              <p>ตึกหลัง ชั้น 3</p>
              <p>protocol@thaiembdc.org</p>
            </div>
          </div>

          {/* Nav links — 3 columns */}
          <div className="grid grid-cols-[auto_auto_auto] justify-between gap-x-6">
            {/* หน้าแรก */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-black/35">เมนูหลัก</p>
              <ul className="mt-6 space-y-3 text-xs lg:text-sm">
                <li>
                  <Link href="/" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">หน้าแรก</Link>
                </li>
              </ul>
            </div>

            {/* ข้าราชการประจำการใหม่ */}
            <div>
              <p className="text-xs lg:text-sm font-medium text-gray-900">ข้าราชการประจำการใหม่</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="text-[11px] font-semibold uppercase tracking-wider text-black/35">แจ้งความประสงค์</li>
                <li><Link href="/arrival/noa" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">Notification of Appointment</Link></li>
                <li><Link href="/arrival/noc" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">Notification of Change</Link></li>
                <li className="pt-2 text-[11px] font-semibold uppercase tracking-wider text-black/35">คู่มือการมาถึง</li>
                <li><Link href="/arrival/housing" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การหาที่พัก</Link></li>
                <li><Link href="/arrival/ssn" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การขอมีเลข SSN</Link></li>
                <li><Link href="/arrival/bank" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การเปิดบัญชีธนาคาร</Link></li>
                <li><Link href="/arrival/vehicle-purchase" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การซื้อ/เช่าซื้อรถ</Link></li>
                <li><Link href="/arrival/auto-insurance" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การทำประกันรถยนต์</Link></li>
                <li><Link href="/arrival/driver-license" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การขอมีใบขับขี่</Link></li>
                <li><Link href="/arrival/vehicle-registration" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การขึ้นทะเบียนรถ</Link></li>
                <li><Link href="/arrival/tax-exemption" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การขอบัตร Tax Exemption</Link></li>
              </ul>
            </div>

            {/* ข้าราชการกลับประจำการ */}
            <div>
              <p className="text-xs lg:text-sm font-medium text-gray-900">ข้าราชการกลับประจำการ</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="text-[11px] font-semibold uppercase tracking-wider text-black/35">แจ้งความประสงค์</li>
                <li><Link href="/termination/not" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">Notification of Termination</Link></li>
                <li className="pt-2 text-[11px] font-semibold uppercase tracking-wider text-black/35">คู่มือการกลับประจำการ</li>
                <li><Link href="/termination/vehicle-sale" className="text-xs lg:text-sm text-gray-700 transition hover:opacity-75">การขายรถ/การคืนรถเช่าซื้อ</Link></li>
              </ul>
            </div>
          </div>
        </div>

       {/* Bottom bar */}
        <div className="mt-6 lg:mt-10 border-t border-black/8 pt-4 flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
          <p className="text-[9px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
            Royal Thai Embassy &nbsp;·&nbsp; Washington D.C.
          </p>
          <p className="text-[9px] lg:text-[11px] text-black/40 uppercase tracking-wider">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <a
            href="https://www.pollyyospan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[9px] lg:text-[11px] font-medium text-black/40 transition-colors hover:text-[#0c0479]"
          >
            <span className="uppercase tracking-wider">Designed & Developed by</span>
            <span className="font-bold tracking-wide text-black/50 transition-colors group-hover:text-[#0c0479]">
              POLLY YOSPAN
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}