import { ArrowUpRight } from 'lucide-react';
import { creatorReferencesConfig } from '../data/portfolioConfig';

export function CreatorsMarquee() {
  const repeatedCreators = [
    ...creatorReferencesConfig.creators,
    ...creatorReferencesConfig.creators,
  ];

  return (
    <section id="creators" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
        <h2 className="font-display text-[clamp(1.75rem,3.8vw,3rem)] font-bold tracking-[-0.03em] leading-[1.12] text-[#f0f4ff] text-balance mb-4">
          {creatorReferencesConfig.headingPrefix}{' '}
          <span className="text-[#3B82F6]">{creatorReferencesConfig.headingHighlight}</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-[#f0f4ff]/58 max-w-xl mx-auto leading-relaxed">
          {creatorReferencesConfig.disclaimer}
        </p>
      </div>

      <div className="marquee-mask py-2">
        <div className="marquee-track">
          {repeatedCreators.map((creator, idx) => (
            <a
              key={`${creator.id}-${idx}`}
              href={creator.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${creator.name} — ${creator.styleFocus} (Editing Reference)`}
              className="group inline-flex items-center gap-3.5 rounded-full glass-panel pl-2.5 pr-5 py-2 hover:bg-white/[0.11] hover:border-[#3B82F6]/45 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center font-display text-xs font-bold tracking-wider text-[#f0f4ff] group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 transition-colors shrink-0">
                {creator.initials}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-sm font-semibold text-[#f0f4ff] flex items-center gap-1">
                  {creator.name}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-90 transition-opacity" />
                </span>
                <span className="text-xs text-[#f0f4ff]/55">{creator.styleFocus}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
