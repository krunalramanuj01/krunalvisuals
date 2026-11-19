import { motion, MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';
import { ContactSection } from './components/ContactSection';
import { CreatorsMarquee } from './components/CreatorsMarquee';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StatsSection } from './components/StatsSection';

function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#080c14] text-[#f0f4ff] overflow-x-clip">
        {/* Subtle fixed ambient atmospheric gradient */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 ambient-canvas-glow"
        />

        <Navbar />

        <main className="relative z-10">
          <HeroSection />
          <SectionReveal>
            <CreatorsMarquee />
          </SectionReveal>
          <SectionReveal>
            <PortfolioSection />
          </SectionReveal>
          <SectionReveal>
            <ReviewsSection />
          </SectionReveal>
          <SectionReveal>
            <StatsSection />
          </SectionReveal>
          <SectionReveal>
            <ContactSection />
          </SectionReveal>
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
