/**
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * ----------------------------------------------------------------------------
 * Edit this file to update videos, thumbnails, creator references, real
 * client reviews, verified statistics, and contact information without
 * touching any layout or UI components.
 */

export type VideoCategory =
  | 'YouTube Long-Form Editing'
  | 'YouTube Shorts'
  | 'Instagram Reels'
  | 'Gaming Videos'
  | 'Podcast Editing'
  | 'Cinematic Videos'
  | 'Motion Graphics';

export const VIDEO_CATEGORIES: readonly ('All' | VideoCategory)[] = [
  'All',
  'YouTube Long-Form Editing',
  'YouTube Shorts',
  'Instagram Reels',
  'Gaming Videos',
  'Podcast Editing',
  'Cinematic Videos',
  'Motion Graphics',
] as const;

export interface PortfolioVideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  /** Paste any standard YouTube watch, share (youtu.be), or Shorts URL */
  youtubeUrl: string;
  /** Local or hosted thumbnail image URL. Leave empty to auto-load YouTube thumbnail. */
  thumbnailUrl: string;
  duration: string;
  /** Set to false when replacing demo references with your own edited projects */
  isDemo: boolean;
  demoLabel: 'DEMO' | 'EDITING REFERENCE';
  editingFocus: string;
  orientation?: 'landscape' | 'vertical';
}

export interface CreatorReferenceItem {
  id: string;
  name: string;
  initials: string;
  styleFocus: string;
  channelUrl: string;
}

export interface TestimonialItem {
  id: string;
  /** Set published to true only after adding genuine client feedback with permission */
  published: boolean;
  clientName: string;
  profilePicture: string;
  channelOrHandle: string;
  reviewText: string;
  proofScreenshotUrl: string;
  reviewSource: string;
}

export interface StatItem {
  id: string;
  label: string;
  /** Set numericValue to a real integer (e.g. 15, 120, 4500000) when verified figures are ready */
  numericValue: number | null;
  /** Suffix shown after animated number, e.g. "+" or "M+" */
  suffix: string;
  /** Format helper: 'standard' renders exact number, 'compact' formats 1000000 -> 1M */
  format?: 'standard' | 'compact';
  placeholder: string;
  note: string;
}

export const siteConfig = {
  brandName: 'KRUNAL',
  portfolioTitle: 'Video Editor Portfolio',
  heroBackdropUrl: '/src/assets/images/hero_editing_suite_1794966096951.jpg',
  hero: {
    headlineLine1: 'Videos That Make People',
    headlineLine2: 'Stop Scrolling.',
    supportingText:
      'I help creators and brands turn ordinary footage into engaging, high-retention videos through creative storytelling and professional editing.',
    primaryCta: 'View My Work',
    secondaryCta: "Let's Work Together",
  },
  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'Clients', href: '#creators' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
  ],
  navCta: {
    label: "Let's Talk",
    href: '#contact',
  },
};

export const creatorReferencesConfig = {
  headingPrefix: 'INSPIRED BY THE',
  headingHighlight: 'BEST CREATORS',
  disclaimer:
    'Editing Style References & Creative Inspiration — Study benchmarks only; not affiliated with or representing past clients.',
  creators: [
    {
      id: 'mrbeast',
      name: 'MrBeast',
      initials: 'MB',
      styleFocus: 'High-Retention Hook Pacing',
      channelUrl: 'https://www.youtube.com/@MrBeast',
    },
    {
      id: 'ishowspeed',
      name: 'IShowSpeed',
      initials: 'IS',
      styleFocus: 'IRL Chaos & Kinetic Cuts',
      channelUrl: 'https://www.youtube.com/@IShowSpeed',
    },
    {
      id: 'sidemen',
      name: 'Sidemen',
      initials: 'SM',
      styleFocus: 'Multi-Cam Group Comedy',
      channelUrl: 'https://www.youtube.com/@Sidemen',
    },
    {
      id: 'ali-abdaal',
      name: 'Ali Abdaal',
      initials: 'AA',
      styleFocus: 'Clean Educational Motion',
      channelUrl: 'https://www.youtube.com/@aliabdaal',
    },
    {
      id: 'carryminati',
      name: 'CarryMinati',
      initials: 'CM',
      styleFocus: 'Punchy Commentary Rhythm',
      channelUrl: 'https://www.youtube.com/@CarryMinati',
    },
    {
      id: 'techno-gamerz',
      name: 'Techno Gamerz',
      initials: 'TG',
      styleFocus: 'Story-Driven Gaming Edits',
      channelUrl: 'https://www.youtube.com/@TechnoGamerzOfficial',
    },
    {
      id: 'dhruv-rathee',
      name: 'Dhruv Rathee',
      initials: 'DR',
      styleFocus: 'Documentary Visual Explainers',
      channelUrl: 'https://www.youtube.com/@dhruvrathee',
    },
    {
      id: 'yes-theory',
      name: 'Yes Theory',
      initials: 'YT',
      styleFocus: 'Cinematic Adventure Arcs',
      channelUrl: 'https://www.youtube.com/@YesTheory',
    },
  ] satisfies CreatorReferenceItem[],
};

export const portfolioConfig = {
  headingPrefix: 'CHECK OUT',
  headingHighlight: 'MY WORK',
  subheading:
    'Curated demo reels and editing style references across formats. Replace any entry in portfolioConfig.ts with your own YouTube links.',
  videos: [
    {
      id: 'demo-longform-doc',
      title: 'High-Retention Documentary Storytelling Cut',
      category: 'YouTube Long-Form Editing',
      youtubeUrl: 'https://www.youtube.com/watch?v=CHSnz0bCaUk',
      thumbnailUrl: '/src/assets/images/thumb_youtube_longform_1794966097248.jpg',
      duration: '12:40',
      isDemo: true,
      demoLabel: 'EDITING REFERENCE',
      editingFocus: 'Cold-open hook · Narrative pacing · Layered sound design',
      orientation: 'landscape',
    },
    {
      id: 'demo-youtube-shorts',
      title: 'Fast-Paced Retention Hook & Dynamic Captions',
      category: 'YouTube Shorts',
      youtubeUrl: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
      thumbnailUrl: '/src/assets/images/thumb_shortform_reels_1794966099317.jpg',
      duration: '00:54',
      isDemo: true,
      demoLabel: 'DEMO',
      editingFocus: 'First-3s pattern interrupt · Beat-synced cuts · Punchy SFX',
      orientation: 'vertical',
    },
    {
      id: 'demo-instagram-reels',
      title: 'Urban Night Speed-Ramp & Transitions Reel',
      category: 'Instagram Reels',
      youtubeUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
      thumbnailUrl: '/src/assets/images/thumb_shortform_reels_1794966099317.jpg',
      duration: '00:38',
      isDemo: true,
      demoLabel: 'EDITING REFERENCE',
      editingFocus: 'Optical flow speed ramps · Color match · Whip transitions',
      orientation: 'vertical',
    },
    {
      id: 'demo-gaming-montage',
      title: 'High-Energy Gaming Narrative & VFX Sequence',
      category: 'Gaming Videos',
      youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      thumbnailUrl: '/src/assets/images/thumb_gaming_montage_1794966097415.jpg',
      duration: '09:56',
      isDemo: true,
      demoLabel: 'EDITING REFERENCE',
      editingFocus: '3D camera shakes · Audio ducking · Reaction zoom timing',
      orientation: 'landscape',
    },
    {
      id: 'demo-podcast-edit',
      title: 'Multi-Cam Creator Podcast & Highlight Clip',
      category: 'Podcast Editing',
      youtubeUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
      thumbnailUrl: '/src/assets/images/thumb_podcast_studio_1794966097543.jpg',
      duration: '18:15',
      isDemo: true,
      demoLabel: 'DEMO',
      editingFocus: 'Tight dialogue cleanup · J/L-cuts · Clean lower thirds',
      orientation: 'landscape',
    },
    {
      id: 'demo-cinematic-film',
      title: 'Atmospheric Travel & Anamorphic Color Grade',
      category: 'Cinematic Videos',
      youtubeUrl: 'https://www.youtube.com/watch?v=1La4QzGeaaQ',
      thumbnailUrl: '/src/assets/images/thumb_cinematic_film_1794966098707.jpg',
      duration: '05:24',
      isDemo: true,
      demoLabel: 'EDITING REFERENCE',
      editingFocus: 'Film emulation LUTs · Foley ambience · Visual continuity',
      orientation: 'landscape',
    },
    {
      id: 'demo-motion-graphics',
      title: '3D Motion Graphics & Explainer Breakdown',
      category: 'Motion Graphics',
      youtubeUrl: 'https://www.youtube.com/watch?v=WhWc3b3KhnY',
      thumbnailUrl: '/src/assets/images/thumb_motion_graphics_1794966098786.jpg',
      duration: '07:44',
      isDemo: true,
      demoLabel: 'EDITING REFERENCE',
      editingFocus: 'Keyframe easing · Kinetic typography · Clean 3D compositing',
      orientation: 'landscape',
    },
    {
      id: 'demo-storytelling-cut',
      title: 'Character-Driven Visual Essay & Sound Mix',
      category: 'YouTube Long-Form Editing',
      youtubeUrl: 'https://www.youtube.com/watch?v=_cMxraX_5RE',
      thumbnailUrl: '/src/assets/images/thumb_cinematic_film_1794966098707.jpg',
      duration: '10:29',
      isDemo: true,
      demoLabel: 'DEMO',
      editingFocus: 'Story arc structure · B-roll rhythm · Emotional score swells',
      orientation: 'landscape',
    },
  ] satisfies PortfolioVideoItem[],
};

export const testimonialsConfig = {
  headingPrefix: "DON'T TAKE MY WORD FOR IT.",
  headingHighlight: 'TAKE THEIRS.',
  emptyStateMessage:
    'Verified client feedback will appear here once creators grant permission to publish their reviews.',
  /**
   * 4 clean placeholder slots.
   * Empty or unpublished items (published: false) are automatically hidden from the live site.
   * To publish a genuine testimonial: fill in the real details and set published: true.
   */
  items: [
    {
      id: 'review-slot-1',
      published: false,
      clientName: '',
      profilePicture: '',
      channelOrHandle: '',
      reviewText: '',
      proofScreenshotUrl: '',
      reviewSource: '',
    },
    {
      id: 'review-slot-2',
      published: false,
      clientName: '',
      profilePicture: '',
      channelOrHandle: '',
      reviewText: '',
      proofScreenshotUrl: '',
      reviewSource: '',
    },
    {
      id: 'review-slot-3',
      published: false,
      clientName: '',
      profilePicture: '',
      channelOrHandle: '',
      reviewText: '',
      proofScreenshotUrl: '',
      reviewSource: '',
    },
    {
      id: 'review-slot-4',
      published: false,
      clientName: '',
      profilePicture: '',
      channelOrHandle: '',
      reviewText: '',
      proofScreenshotUrl: '',
      reviewSource: '',
    },
  ] satisfies TestimonialItem[],
};

export const statsConfig = {
  /** Set to false to hide the statistics section completely until real numbers are entered */
  showPlaceholdersWhenEmpty: true,
  items: [
    {
      id: 'creators-worked-with',
      label: 'Creators Worked With',
      numericValue: null,
      suffix: '+',
      format: 'standard',
      placeholder: '—',
      note: 'Verified client count updated upon project completion',
    },
    {
      id: 'videos-edited',
      label: 'Videos Edited',
      numericValue: null,
      suffix: '+',
      format: 'standard',
      placeholder: '—',
      note: 'Published deliverables tracked across formats',
    },
    {
      id: 'total-views-generated',
      label: 'Total Views Generated',
      numericValue: null,
      suffix: '+',
      format: 'compact',
      placeholder: '—',
      note: 'Cumulative verified audience reach',
    },
  ] satisfies StatItem[],
};

export const contactConfig = {
  headingPrefix: 'READY TO LEVEL UP',
  headingHighlight: 'YOUR CONTENT?',
  supportingText: "Have a project in mind? Let's create something amazing together.",
  phoneDisplay: '8128374667',
  whatsappUrl: 'https://wa.me/918128374667',
  email: 'krunalramanuj0@gmail.com',
  mailtoUrl: 'mailto:krunalramanuj0@gmail.com',
  discordDisplay: 'discord.gg/k2UfvAES',
  discordUrl: 'https://discord.gg/k2UfvAES',
};

export const footerConfig = {
  brandLabel: 'Video editor portfolio',
  links: [
    { label: 'Home', href: '#hero' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
};

/**
 * Extracts a YouTube video ID from watch, share, shorts, or embed URLs.
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}

export function getYouTubeFallbackThumbnail(url: string): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
