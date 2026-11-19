import { Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { contactConfig } from '../data/portfolioConfig';

function DiscordMark({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.35rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-balance text-[#f0f4ff] mb-5">
          {contactConfig.headingPrefix}{' '}
          <span className="accent-gradient-text">{contactConfig.headingHighlight}</span>
        </h2>

        <p className="text-base sm:text-lg font-light text-[#f0f4ff]/65 max-w-md mx-auto leading-relaxed mb-10">
          {contactConfig.supportingText}
        </p>

        {/* Three Primary Contact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#f0f4ff] text-[#080c14] text-[15px] font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_28px_rgba(59,130,246,0.2)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact on WhatsApp</span>
          </a>

          <a
            href={contactConfig.mailtoUrl}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel text-[#f0f4ff] text-[15px] font-medium hover:bg-[#3B82F6]/15 hover:border-[#3B82F6]/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <Mail className="w-4 h-4" />
            <span>Send an Email</span>
          </a>

          <a
            href={contactConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel text-[#f0f4ff] text-[15px] font-medium hover:bg-[#5865F2]/20 hover:border-[#5865F2]/55 hover:text-[#99aab5] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <DiscordMark className="w-4 h-4" />
            <span>Join Discord</span>
          </a>
        </div>

        {/* Direct Contact Details Strip */}
        <div className="rounded-2xl glass-panel px-5 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 text-sm text-[#f0f4ff]/70">
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#3B82F6] shrink-0" />
            <span className="font-mono-tabular text-[#f0f4ff]/90">
              {contactConfig.phoneDisplay}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(contactConfig.phoneDisplay, 'phone')}
              aria-label="Copy phone number"
              className="p-1.5 rounded-lg text-[#f0f4ff]/45 hover:text-[#f0f4ff] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <span className="hidden sm:inline text-white/15" aria-hidden="true">
            /
          </span>

          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
            <a
              href={contactConfig.mailtoUrl}
              className="text-[#f0f4ff]/90 hover:text-white transition-colors"
            >
              {contactConfig.email}
            </a>
            <button
              type="button"
              onClick={() => handleCopy(contactConfig.email, 'email')}
              aria-label="Copy email address"
              className="p-1.5 rounded-lg text-[#f0f4ff]/45 hover:text-[#f0f4ff] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <span className="hidden sm:inline text-white/15" aria-hidden="true">
            /
          </span>

          <a
            href={contactConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f0f4ff]/90 hover:text-white transition-colors"
          >
            <DiscordMark className="w-4 h-4 text-[#3B82F6] shrink-0" />
            <span>{contactConfig.discordDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
