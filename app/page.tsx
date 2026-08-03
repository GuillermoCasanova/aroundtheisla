import { CoverSlider } from "@/components/CoverSlider";
import { homeSlides } from "@/content/homeSlides";

export default function HomePage() {
  return <CoverSlider slides={homeSlides} />;
}
