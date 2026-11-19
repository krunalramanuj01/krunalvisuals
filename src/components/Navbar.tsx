import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig } from '../data/portfolioConfig';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-3 sm:pt-5 pointer-events-none">
      <div
        className={`mx-auto max-w-[820px] pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full border px-4 sm:px-5 py-2.5 transition-all duration-200 ${
          scrolled
            ? 'bg-[#0a0e18]/85 border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl'
            : 'bg-[#0a0e18]/65 border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
        }`}
      >
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="font-display text-sm sm:text-[15px] font-bold tracking-tight text-[#f0f4ff] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-full px-1.5 py-1"
        >
          {siteConfig.brandName}
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3.5 py-1.5 text-sm font-normal text-[#f0f4ff]/65 hover:text-[#f0f4ff] hover:bg-white/[0.06] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Prominent Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={siteConfig.navCta.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(siteConfig.navCta.href);
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f0f4ff] text-[#080c14] text-sm font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c14]"
          >
            {siteConfig.navCta.label}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#f0f4ff] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden mx-auto max-w-[820px] mt-2 pointer-events-auto rounded-2xl border border-white/15 bg-[#0a0e18]/95 backdrop-blur-2xl p-3 shadow-2xl">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-sm font-medium text-[#f0f4ff]/80 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.navCta.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(siteConfig.navCta.href);
              }}
              className="mt-1 px-4 py-3 text-center text-sm font-semibold rounded-xl bg-[#f0f4ff] text-[#080c14] hover:bg-[#3B82F6] hover:text-white transition-colors"
            >
              {siteConfig.navCta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
