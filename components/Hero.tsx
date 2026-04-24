import { CONTACT_PHONE, CONTACT_INSTAGRAM } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center md:justify-start overflow-hidden"
    >
      {/* Background image — full bleed for mobile, hidden behind desktop panels */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Multi-layer dark overlay for readability + gold tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/10 to-[#0a0a0a]/30" />
      {/* Subtle gold vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06)_0%,transparent_70%)]" />

      {/* Desktop split: dark left panel */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-[#0d0d0d]" />

      {/* Desktop split: right image panel */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
        <img
          src="/hero.jpg"
          alt="Daddy Style Decor radovi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/10" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#c9a227]/40 hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#c9a227]/40 hidden md:block" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b border-l border-[#c9a227]/40 hidden md:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r border-[#c9a227]/40 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto md:text-left md:w-1/2 md:max-w-none md:pl-16 lg:pl-24 xl:pl-32 md:pr-8 md:mx-0">
        {/* Eyebrow */}
        <p className="text-base font-sans tracking-[0.4em] uppercase text-[#ebe6dd] mb-1">
          Novi Sad · 25 Godina iskustva
        </p>

        {/* Main title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 leading-none">
          <span className="gold-shimmer whitespace-nowrap">Daddy Style</span>
          <span className="gold-shimmer whitespace-nowrap block md:inline"> Decor 021</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-4 md:justify-start">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a227]" />
          <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a227]" />
        </div>

        {/* Tagline */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#ebe6dd] mb-2 italic">
          Profesionalno farbanje i ukrasavanje svih drvenih povrsina
        </p>
        <p className="font-sans text-[#f3f0ec]/90 text-base sm:text-base max-w-xl mx-auto leading-relaxed mb-0 md:mx-0">
          Stolarija, nameštaj, kuhinje, komode, prozori, zvučnici — sve od nas dobija novi sjaj.
          Materijal i prevoz u ceni.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="btn-gold px-8 py-4 text-base font-sans rounded-sm uppercase tracking-widest inline-block"
          >
            Zakažite odmah
          </a>
          <a
            href="#gallery"
            className="btn-outline-gold px-8 py-4 text-base font-sans rounded-sm uppercase tracking-widest inline-block"
          >
            Pogledajte radove
          </a>
        </div>

        {/* Instagram link */}
        <div className="mt-4">
          <a
            href={CONTACT_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-sans text-[#c9a227]/85 hover:text-[#c9a227] transition-colors tracking-widest uppercase"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @daddy_style_decor.021
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce md:left-1/4">
        <span className="text-base font-sans tracking-[0.3em] uppercase text-[#c9a227]/80">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-[#c9a227]/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
