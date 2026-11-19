import { Film, Play } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  getYouTubeFallbackThumbnail,
  portfolioConfig,
  VIDEO_CATEGORIES,
  type PortfolioVideoItem,
  type VideoCategory,
} from '../data/portfolioConfig';
import { VideoModal } from './VideoModal';

function VideoThumbnail({ video }: { video: PortfolioVideoItem }) {
  const [imgError, setImgError] = useState(false);
  const src = video.thumbnailUrl || getYouTubeFallbackThumbnail(video.youtubeUrl) || '';

  if (!src || imgError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0e1525] to-[#080c14] p-6 text-center">
        <Film className="w-8 h-8 text-[#3B82F6]/70" />
        <span className="font-display text-sm font-semibold text-[#f0f4ff]/80">
          {video.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={video.title}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | VideoCategory>('All');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') return portfolioConfig.videos;
    return portfolioConfig.videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-[1160px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.03em] leading-[1.1] text-[#f0f4ff] mb-4">
            {portfolioConfig.headingPrefix}{' '}
            <span className="text-[#3B82F6]">{portfolioConfig.headingHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#f0f4ff]/60 max-w-xl mx-auto leading-relaxed">
            {portfolioConfig.subheading}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter portfolio by editing category"
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10"
        >
          {VIDEO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  isActive
                    ? 'bg-[#f0f4ff] text-[#080c14] font-semibold shadow-sm'
                    : 'bg-white/[0.05] border border-white/10 text-[#f0f4ff]/68 hover:text-[#f0f4ff] hover:bg-white/[0.09]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Video Portfolio Grid */}
        {filteredVideos.length === 0 ? (
          <div className="rounded-2xl glass-panel p-12 text-center">
            <p className="text-sm text-[#f0f4ff]/60">
              No videos listed in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredVideos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-[#0d1320]/80 hover:border-[#3B82F6]/45 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.65)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <VideoThumbnail video={video} />

                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/75 via-[#080c14]/15 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-300" />

                  {/* Centered Play Affordance */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#080c14]/75 border border-white/25 text-[#f0f4ff] backdrop-blur-md group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:scale-110 transition-all duration-200 shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Clean Unboxed Card Metadata & Title */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#f0f4ff]/58 mb-2">
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

                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#f0f4ff] group-hover:text-white transition-colors mb-1.5">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#f0f4ff]/55 line-clamp-1">
                    {video.editingFocus}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
