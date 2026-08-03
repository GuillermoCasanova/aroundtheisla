export function placeholderSvg(label: string, hue: number, aspect = "4/5") {
  const [widthRatio, heightRatio] = aspect.split("/").map(Number);
  const width = 800;
  const height = Math.round((width * heightRatio) / widthRatio);

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="hsl(${hue}, 18%, 22%)"/>
          <stop offset="100%" stop-color="hsl(${hue + 40}, 24%, 12%)"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="50%" fill="rgba(255,255,255,0.72)" font-family="Arial, sans-serif" font-size="28" letter-spacing="6" text-anchor="middle" dominant-baseline="middle">${label.toLowerCase()}</text>
    </svg>
  `)}`;
}

export const galleryHues: Record<string, number> = {
  "around-1": 200,
  "around-2": 30,
  "around-3": 160,
};
