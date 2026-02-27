"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e0261c] py-12 text-white">
      <div className="mx-auto w-full px-4 text-center md:px-10">

        {/* Title */}
        <h3 className="text-2xl font-extrabold md:text-3xl">
          ติดต่อฝ่ายพิธีการทางการทูต
        </h3>

        {/* Contact Info */}
        <div className="mt-6 space-y-3 text-sm md:text-base">

          <p>
            สถานเอกอัครราชทูต ณ กรุงวอชิงตัน
          </p>

          <p>
            1024 Wisconsin Ave NW, Washington, DC 20007
          </p>

          <p>
            โทรศัพท์: +1 (202) 298-4798
          </p>

          <p>
            อีเมล:{" "}
            <a
              href="mailto:protocol@thaiembdc.org"
              className="font-semibold underline hover:text-white/80"
            >
              protocol@thaiembdc.org
            </a>
          </p>

        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-24 bg-white/40" />

        {/* Copyright */}
        <p className="mt-6 text-xs opacity-80">
          © {new Date().getFullYear()} Royal Thai Embassy, Washington, D.C.
        </p>

      </div>
    </footer>
  );
}