"use client";

import { achievements } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 border-y border-white/[0.08] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                  <AnimatedCounter
                    value={achievement.value}
                    suffix={achievement.suffix}
                  />
                </div>
                <p className="text-[#A1A1AA] text-sm uppercase tracking-wider font-medium">
                  {achievement.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
