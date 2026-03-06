"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] border-t border-black/6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          {/* Left — branding */}
          <div className="flex items-center gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40">
              Protocol Section · Royal Thai Embassy · Washington D.C.
            </p>
          </div>

          {/* Right — developer credit */}
          <a
            href="https://www.pollyyospan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[11px] font-medium text-black/30 transition-colors hover:text-[#0c0479]"
          >
            <span className="uppercase tracking-wider">Designed & Developed by</span>
            <span className="font-bold tracking-wide text-black/50 transition-colors group-hover:text-[#0c0479]">
              pollyyospan.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}