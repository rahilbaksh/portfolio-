"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Layers, Container } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";
import {
  StaggerContainer,
  staggerItem,
} from "@/components/motion/stagger-container";

const iconMap: Record<string, React.ReactNode> = {
  "code-2": <Code2 size={20} />,
  brain: <Brain size={20} />,
  layers: <Layers size={20} />,
  container: <Container size={20} />,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Technologies I work with
            </h2>
          </div>
        </Reveal>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 0.1}>
              <div className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] group-hover:bg-[#4F46E5]/15 transition-colors duration-300">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="text-white text-base font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.03}>
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={staggerItem}
                      className="px-3 py-1.5 text-xs font-medium text-[#A1A1AA] bg-white/[0.04] border border-white/[0.06] rounded-md hover:text-white hover:border-[#4F46E5]/30 hover:bg-[#4F46E5]/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
