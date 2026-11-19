import { contactConfig, footerConfig } from '../data/portfolioConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 py-10">
      <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-[#f0f4ff]/55">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-display font-medium text-[#f0f4ff]/80">
            {footerConfig.brandLabel}
          </span>
          <span className="hidden sm:inline text-white/20" aria-hidden="true">
            ·
          </span>
          <a
            href={contactConfig.mailtoUrl}
            className="hover:text-[#f0f4ff] transition-colors"
          >
            {contactConfig.email}
          </a>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6">
          {footerConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="hover:text-[#f0f4ff] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-[#f0f4ff]/45 font-mono-tabular">
          &copy; {currentYear}
        </div>
      </div>
    </footer>
  );
}
