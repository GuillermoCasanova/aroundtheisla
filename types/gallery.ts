export type Gallery = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  cover: string;
  photos: string[];
  hasImages: boolean;
};

export type HomeSlide = {
  images: string[];
  slug: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  credit: string;
  copyright: string;
  email: string;
  instagram: string;
};
