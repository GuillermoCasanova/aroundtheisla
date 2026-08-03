"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryHues, placeholderSvg } from "@/lib/placeholders";

type GalleryImageProps = {
  src: string;
  alt: string;
  label: string;
  slug: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  fill?: boolean;
  className?: string;
  sizes?: string;
  onClick?: () => void;
};

export function GalleryImage({
  src,
  alt,
  label,
  slug,
  priority = false,
  loading,
  fill = true,
  className = "object-cover",
  sizes = "100vw",
  onClick,
}: GalleryImageProps) {
  const fallback = useMemo(
    () => placeholderSvg(label, galleryHues[slug] ?? 210),
    [label, slug],
  );
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageSrc = !src || failedSrc === src ? fallback : src;

  if (!src && failedSrc === null) {
    return null;
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      loading={loading ?? (priority ? undefined : "lazy")}
      sizes={sizes}
      className={className}
      onError={() => {
        if (failedSrc !== src) setFailedSrc(src);
      }}
      onClick={onClick}
      unoptimized={imageSrc.startsWith("data:")}
    />
  );
}
