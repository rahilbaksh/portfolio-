"use client";

import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-32 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Professional qualifications
            </h2>
          </div>
        </Reveal>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.1}>
              <div className="group relative p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Award size={20} className="text-[#4F46E5]" />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
