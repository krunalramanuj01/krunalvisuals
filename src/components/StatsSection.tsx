import { useEffect, useRef, useState } from 'react';
import { statsConfig, type StatItem } from '../data/portfolioConfig';

function formatStatNumber(value: number, format: StatItem['format'] = 'standard'): string {
  if (format === 'compact') {
    if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return value.toLocaleString();
}

function AnimatedStatValue({ item }: { item: StatItem }) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (item.numericValue === null || hasAnimated) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(item.numericValue);
      setHasAnimated(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || item.numericValue === null) return;

        setHasAnimated(true);
        const target = item.numericValue;
        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(target * eased));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [item.numericValue, hasAnimated]);

  return (
    <div ref={containerRef} className="font-display font-extrabold text-4xl sm:text-5xl leading-none font-mono-tabular">
      {item.numericValue !== null ? (
        <span className="accent-gradient-text">
          {formatStatNumber(displayValue, item.format)}
          {item.suffix}
        </span>
      ) : (
        <span className="text-[#f0f4ff]/30">{item.placeholder}</span>
      )}
    </div>
  );
}

export function StatsSection() {
  const hasRealStats = statsConfig.items.some((s) => s.numericValue !== null);

  if (!hasRealStats && !statsConfig.showPlaceholdersWhenEmpty) {
    return null;
  }

  return (
    <section aria-label="Portfolio statistics" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {statsConfig.items.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl glass-panel px-7 py-9 sm:py-10 flex flex-col items-start gap-3 transition-all duration-200 hover:bg-white/[0.08] hover:border-[#3B82F6]/30"
            >
              <AnimatedStatValue item={stat} />
              <div className="text-[15px] font-medium text-[#f0f4ff]/85">
                {stat.label}
              </div>
              {stat.numericValue === null && (
                <p className="text-xs text-[#f0f4ff]/42 leading-relaxed">
                  {stat.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
