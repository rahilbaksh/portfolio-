"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#A1A1AA] text-sm">
          &copy; {new Date().getFullYear()} Rahil Baksh. All rights reserved.
        </p>
        
        <p className="text-[#A1A1AA] text-sm text-center md:text-left">
          Designed & Built by <span className="text-white font-medium">Rahil Baksh</span>
        </p>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
