"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Where I&apos;ve worked
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F46E5]/50 via-white/[0.08] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-[#4F46E5]" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#4F46E5]"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-white text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-[#A1A1AA] text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[#A1A1AA] text-xs font-medium tracking-wider uppercase shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#A1A1AA] text-sm leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#4F46E5] shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-medium text-[#A1A1AA] bg-white/[0.04] rounded-md border border-white/[0.06] uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
