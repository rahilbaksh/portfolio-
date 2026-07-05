"use client";

import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { about } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Get to know me
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div className="lg:col-span-3 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                {about.intro}
              </p>
            </Reveal>

            {/* Info Cards */}
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Education */}
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
                      <GraduationCap size={18} className="text-[#4F46E5]" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      Education
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {about.education.degree}
                  </p>
                  <p className="text-white text-sm font-medium mt-1">
                    CGPA: {about.education.cgpa}
                  </p>
                </div>

                {/* Current Role */}
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                      <Briefcase size={18} className="text-[#10B981]" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      Current Role
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    AI/ML Engineer Intern
                  </p>
                  <p className="text-white text-sm font-medium mt-1">
                    HiLearn Technology
                  </p>
                </div>

                {/* Location */}
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 sm:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center">
                      <MapPin size={18} className="text-[#A1A1AA]" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      Location
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm">{about.location}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Specializations */}
          <div className="lg:col-span-2">
            <Reveal delay={0.3}>
              <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 text-xs font-medium text-[#A1A1AA] bg-white/[0.04] border border-white/[0.06] rounded-md hover:text-white hover:border-white/[0.12] transition-all duration-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Gradient border decorative card */}
            <Reveal delay={0.4}>
              <div className="mt-4 relative group">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#4F46E5]/30 via-transparent to-[#10B981]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <p className="text-white text-2xl font-bold tracking-tight">
                    Production
                    <span className="text-[#4F46E5]">-</span>First
                  </p>
                  <p className="text-[#A1A1AA] text-sm mt-2 leading-relaxed">
                    I focus on building AI systems that don&apos;t just work in
                    notebooks — they work in production, at scale, with real
                    users.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
