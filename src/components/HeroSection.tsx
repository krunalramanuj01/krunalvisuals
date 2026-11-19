import { ArrowRight, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { siteConfig } from '../data/portfolioConfig';

const TIMECODE_MARKS = ['00:00', '00:06', '00:12', '00:18', '00:24'];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle atmospheric editing suite backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {!imageFailed && (
          <img
            src={siteConfig.heroBackdropUrl}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover opacity-25 scale-[1.02]"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,12,20,0.72) 0%, rgba(8,12,20,0.48) 45%, rgba(8,12,20,0.88) 85%, rgba(8,12,20,1) 100%)',
          }}
        />
      </div>

      {/* Main Centered Hero Content */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <h1 className="font-display text-[clamp(2.4rem,6.4vw,5.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-balance text-[#f0f4ff] mb-6">
          <span className="block">{siteConfig.hero.headlineLine1}</span>
          <span className="block accent-gradient-text pb-1">
            {siteConfig.hero.headlineLine2}
          </span>
        </h1>

        <p className="max-w-[540px] text-base sm:text-lg font-light leading-relaxed text-[#f0f4ff]/70 mb-10">
          {siteConfig.hero.supportingText}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('work');
            }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f0f4ff] text-[#080c14] text-[15px] font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-200 shadow-[0_6px_28px_rgba(59,130,246,0.22)] hover:shadow-[0_10px_36px_rgba(59,130,246,0.42)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{siteConfig.hero.primaryCta}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel text-[#f0f4ff] text-[15px] font-medium hover:bg-white/[0.11] hover:border-[#3B82F6]/45 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <span>{siteConfig.hero.secondaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Subtle, uncluttered timeline rail cue at bottom of hero */}
      <div
        aria-hidden="true"
        className="relative z-10 w-full max-w-3xl mx-auto mt-16 sm:mt-20 px-4"
      >
        <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#f0f4ff]/35 mb-2">
          {TIMECODE_MARKS.map((tc) => (
            <span key={tc}>{tc}</span>
          ))}
        </div>
        <div className="relative h-px w-full bg-white/12">
          <div className="absolute left-0 top-0 h-px w-[38%] bg-gradient-to-r from-[#3B82F6]/80 to-[#a78bfa]/80" />
          <div className="absolute left-[38%] -top-1.5 w-0.5 h-3.5 bg-[#3B82F6]" />
        </div>
      </div>
    </section>
  );
}
