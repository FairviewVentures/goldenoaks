"use client";

import { useEffect, useRef, useState } from "react";
import { type Photo, photoAlt, thumbnail } from "@/lib/photos";

type Props = {
  photos: Photo[];
  label: string;
};

const arrow =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Swipeable photo carousel built on native scroll snapping. It does not
// auto-advance, so visitors control the pace (WCAG 2.2.2).
const Carousel = ({ photos, label }: Props) => {
  const track = useRef<HTMLUListElement>(null);
  const thumbs = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // Keep the current thumbnail visible in the thumbnail strip.
  useEffect(() => {
    const strip = thumbs.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2,
    });
  }, [active]);

  const goTo = (index: number) => {
    const el = track.current;
    if (!el) return;
    const next = (index + photos.length) % photos.length;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollTo({
      left: next * el.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section aria-roledescription="carousel" aria-label={label}>
      <div className="relative">
        <ul
          ref={track}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, index) => (
            <li
              key={photo.src}
              className="w-full shrink-0 snap-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${photos.length}`}
              aria-hidden={index !== active}
            >
              <img
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={photoAlt(photo, index, photos.length)}
                // Load the current photo and its neighbours right away.
                loading={Math.abs(index - active) <= 1 ? "eager" : "lazy"}
                decoding="async"
                className="mx-auto aspect-[4/3] h-auto w-full object-contain md:aspect-auto md:h-[60vh] md:max-h-[640px]"
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          className={`${arrow} left-2 md:left-4`}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className={`${arrow} right-2 md:right-4`}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2 text-center text-sm" aria-live="polite">
        Photo {active + 1} of {photos.length}
      </p>
      <ul
        ref={thumbs}
        className="relative mx-auto mt-2 flex w-max max-w-full gap-2 overflow-x-auto px-4 pb-2"
      >
        {photos.map((photo, index) => (
          <li key={photo.src} className="shrink-0">
            <button
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === active}
              className={`block overflow-hidden rounded border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${index === active ? "border-black" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <img
                src={thumbnail(photo.src)}
                alt=""
                width={96}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-16 w-24 object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
