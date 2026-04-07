"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

const INITIAL_COUNT = 24;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visibleImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, INITIAL_COUNT);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [lightbox]);

  const nextImage = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % GALLERY_IMAGES.length);
  }, [lightbox]);

  return (
    <section id="gallery" className="py-12 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 brush-divider mb-12" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-base font-sans tracking-[0.4em] uppercase text-[#c9a227] mb-3">
            Naši radovi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Galerija</span>
          </h2>
          <p className="font-sans text-[#e8dcc8]/85 text-base max-w-md mx-auto">
            Svaki rad je jedinstven. Pogledajte šta smo uradili za naše klijente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {visibleImages.map((img, i) => (
            <button
              key={img}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden group bg-[#111] border border-[rgba(201,162,39,0.1)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            >
              <Image
                src={`/${img}.webp`}
                alt={`Rad ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading={i < 12 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[rgba(201,162,39,0.08)] transition-all duration-300" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 border border-[#c9a227]/60 bg-[#0a0a0a]/60 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#c9a227]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Show more */}
        {!showAll && GALLERY_IMAGES.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline-gold px-8 py-3 text-base font-sans rounded-sm uppercase tracking-widest"
            >
              Prikaži sve ({GALLERY_IMAGES.length} radova)
            </button>
          </div>
        )}

        {/* Instagram link */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/daddy_style_decor.021/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-sans text-[#c9a227]/85 hover:text-[#c9a227] transition-colors tracking-widest uppercase"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Još radova na Instagramu
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/97 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-[#c9a227] hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-base font-sans text-[#c9a227]/85 tracking-widest">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-[#c9a227]/85 hover:text-[#c9a227] transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/${GALLERY_IMAGES[lightbox]}.webp`}
              alt={`Rad ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-[#c9a227]/85 hover:text-[#c9a227] transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 brush-divider mt-12" />
    </section>
  );
}
