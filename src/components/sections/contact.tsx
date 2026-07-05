"use client";

import { useState } from "react";
import { Send, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { socialLinks } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-[#4F46E5] text-sm font-medium tracking-wider uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Let&apos;s build something great
            </h2>
            <p className="text-[#A1A1AA] text-base mt-4">
              I&apos;m currently open for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back
              to you!
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="relative group">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#4F46E5]/30 via-transparent to-[#10B981]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <form
                  onSubmit={handleSubmit}
                  className="relative p-8 rounded-2xl border border-white/[0.08] bg-[#111111]"
                >
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#A1A1AA] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#A1A1AA] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Connect Info */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
                <h3 className="text-white font-medium mb-4">Connect with me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                        {link.icon === "github" ? (
                          <GithubIcon className="w-[18px] h-[18px]" />
                        ) : link.icon === "linkedin" ? (
                          <LinkedinIcon className="w-[18px] h-[18px]" />
                        ) : (
                          <Mail size={18} />
                        )}
                      </div>
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-xl border border-[#4F46E5]/30 bg-[#4F46E5]/5 hover:bg-[#4F46E5]/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center text-[#4F46E5]">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-0.5">
                      Download Resume
                    </h3>
                    <p className="text-[#A1A1AA] text-xs">PDF Version (1.2 MB)</p>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
