import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultSlides = [
  {
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80",
    alt: "Sample banner 1",
  },
  {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    alt: "Sample banner 2",
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    alt: "Sample banner 3",
  },
];

export default function Carousel({ slides = defaultSlides, autoPlayMs = 5000 }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  if (!slides || slides.length === 0) {
    return <div className="carouselEmpty">No slides to display</div>;
  }

  const goTo = useCallback(
    (index) => {
      const next = (index + slides.length) % slides.length;
      setCurrent(next);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (!autoPlayMs) return;
    timeoutRef.current = setTimeout(next, autoPlayMs);
    return () => clearTimeout(timeoutRef.current);
  }, [current, autoPlayMs, next]);

  return (
    <div className="carouselWrapper">
      <div
        className="carouselTrack"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="carouselSlide">
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${i + 1}`}
              className="carouselImage"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="carouselArrow carouselArrowLeft"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="carouselArrow carouselArrowRight"
      >
        <ChevronRight size={20} />
      </button>

      <div className="carouselDots">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`carouselDot ${i === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
