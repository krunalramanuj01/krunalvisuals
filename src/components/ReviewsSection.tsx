import { ArrowRight, Image as ImageIcon, MessageSquareQuote } from 'lucide-react';
import { useMemo, useState } from 'react';
import { testimonialsConfig, type TestimonialItem } from '../data/portfolioConfig';

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const [showProof, setShowProof] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const initials = item.clientName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="rounded-3xl glass-panel p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:border-[#3B82F6]/35 hover:-translate-y-1">
      {showProof && item.proofScreenshotUrl ? (
        <div className="flex flex-col h-full gap-4">
          <div className="flex items-center justify-between text-xs text-[#f0f4ff]/60">
            <span className="font-medium text-[#3B82F6]">
              Verified Proof · {item.reviewSource || 'Client Message'}
            </span>
            <button
              type="button"
              onClick={() => setShowProof(false)}
              className="text-[#f0f4ff]/75 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Back to quote
            </button>
          </div>
          <div className="relative flex-1 min-h-[190px] rounded-xl overflow-hidden border border-white/12 bg-black/40">
            <img
              src={item.proofScreenshotUrl}
              alt={`Review proof from ${item.clientName}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-between gap-2 mb-5">
              <span className="text-xs text-[#f0f4ff]/50">
                {item.reviewSource || 'Verified Client Review'}
              </span>
              {item.proofScreenshotUrl && (
                <button
                  type="button"
                  onClick={() => setShowProof(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#a78bfa] transition-colors cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>View proof</span>
                </button>
              )}
            </div>

            <blockquote className="text-[15px] leading-relaxed text-[#f0f4ff]/88 font-light italic">
              &ldquo;{item.reviewText}&rdquo;
            </blockquote>
          </div>

          <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 overflow-hidden flex items-center justify-center font-display text-xs font-bold text-[#f0f4ff] shrink-0">
              {item.profilePicture && !avatarError ? (
                <img
                  src={item.profilePicture}
                  alt={item.clientName}
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="font-display text-sm font-semibold text-[#f0f4ff] truncate">
                {item.clientName}
              </div>
              {item.channelOrHandle && (
                <div className="text-xs text-[#3B82F6] font-medium truncate">
                  {item.channelOrHandle}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export function ReviewsSection() {
  const publishedReviews = useMemo(
    () =>
      testimonialsConfig.items.filter(
        (item) =>
          item.published &&
          item.clientName.trim().length > 0 &&
          item.reviewText.trim().length > 0
      ),
    []
  );

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-display text-[clamp(1.85rem,4.3vw,3.15rem)] font-bold tracking-[-0.03em] leading-[1.12] text-[#f0f4ff] text-balance">
            {testimonialsConfig.headingPrefix}{' '}
            <span className="text-[#3B82F6]">{testimonialsConfig.headingHighlight}</span>
          </h2>
        </div>

        {publishedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publishedReviews.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto rounded-3xl glass-panel px-6 py-10 sm:px-10 sm:py-12 text-center">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.06] border border-white/12 text-[#3B82F6] mb-4">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#f0f4ff]/70 leading-relaxed max-w-md mx-auto mb-6">
              {testimonialsConfig.emptyStateMessage}
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-[#a78bfa] transition-colors"
            >
              <span>Start a collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
