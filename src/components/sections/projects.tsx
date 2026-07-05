"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <Reveal delay={index * 0.1}>
      <div
        className={`group relative ${
          isFeatured ? "lg:col-span-2" : ""
        }`}
      >
        {/* Gradient border on hover */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4F46E5]/20 via-transparent to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden hover:border-white/[0.12] transition-all duration-300">
          {/* Project Visual */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#111111] to-[#0B0B0B]">
            {/* Abstract geometric visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Animated circles */}
                <motion.div
                  className="w-32 h-32 rounded-full border border-[#4F46E5]/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-[#4F46E5]/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-8 rounded-full bg-[#4F46E5]/5 flex items-center justify-center">
                  <span className="text-[#4F46E5] text-2xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured badge */}
            {isFeatured && (
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20">
                <Star size={12} className="text-[#4F46E5] fill-[#4F46E5]" />
                <span className="text-[#4F46E5] text-xs font-medium">
                  Featured
                </span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div>
              <p className="text-[#4F46E5] text-xs font-medium uppercase tracking-wider mb-1.5">
                {project.subtitle}
              </p>
              <h3 className="text-white text-xl font-semibold tracking-tight group-hover:text-[#4F46E5] transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Problem → Solution */}
            <div className="space-y-3 py-3 border-t border-b border-white/[0.06]">
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Problem
                </p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-1">
                  Solution
                </p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-2 rounded-lg bg-white/[0.02]">
                    <p className="text-white text-lg font-bold">{metric.value}</p>
                    <p className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-medium text-[#A1A1AA] bg-white/[0.04] rounded-md border border-white/[0.06] uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#A1A1AA] border border-white/[0.08] rounded-lg hover:text-white hover:border-white/[0.16] transition-all duration-200"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors duration-200 ml-auto">
                Case Study
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              What I&apos;ve built
            </h2>
            <p className="text-[#A1A1AA] text-base mt-3 max-w-xl">
              Production-grade systems designed to solve real problems with
              measurable impact.
            </p>
          </div>
        </Reveal>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-8">
            <ProjectCard project={featuredProject} index={0} />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
