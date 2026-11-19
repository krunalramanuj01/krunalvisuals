import { ExternalLink, Film, X } from 'lucide-react';
import { useEffect } from 'react';
import {
  getYouTubeEmbedUrl,
  type PortfolioVideoItem,
} from '../data/portfolioConfig';

interface VideoModalProps {
  video: PortfolioVideoItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#04070d]/88 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-[#0b101b] shadow-[0_28px_80px_rgba(0,0,0,0.75)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-white/10">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#f0f4ff]/58 mb-1">
              {video.isDemo && (
                <>
                  <span className="text-[#3B82F6] font-semibold tracking-wide">
                    {video.demoLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span>{video.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tabular">{video.duration}</span>
            </div>
            <h3
              id="video-modal-title"
              className="font-display text-base sm:text-lg font-semibold text-[#f0f4ff] truncate"
            >
              {video.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/12 bg-white/[0.05] text-[#f0f4ff] hover:bg-white/15 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center p-6">
              <Film className="w-10 h-10 text-[#3B82F6]" />
              <p className="text-sm text-[#f0f4ff]/70 max-w-md">
                Video embed URL is not configured yet. Update{' '}
                <span className="font-mono-tabular text-[#f0f4ff]">youtubeUrl</span> in{' '}
                <span className="font-mono-tabular text-[#f0f4ff]">portfolioConfig.ts</span>.
              </p>
            </div>
          )}
        </div>

        {/* Footer Info & External Fallback */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 bg-white/[0.02] border-t border-white/10 text-xs text-[#f0f4ff]/60">
          <p>{video.editingFocus}</p>
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#3B82F6] hover:text-[#a78bfa] font-medium whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Open on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
