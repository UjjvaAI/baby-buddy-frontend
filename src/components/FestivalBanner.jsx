import { useLocation } from "react-router-dom";

export default function FestivalBanner({ images, alt, onlyHome = true }) {
  const { pathname } = useLocation();
  if (onlyHome && pathname !== "/") return null;

  return (
    <picture>
      <source media="(min-width:1024px)" srcSet={images.desktop} />
      <source media="(min-width:640px)" srcSet={images.tablet} />
      <img
        src={images.mobile}
        alt={alt}
        className="w-full h-auto object-contain bg-[#25C2FF]"
        loading="eager"
      />
    </picture>
  );
}
