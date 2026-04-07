const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Farbanje i lakiranje",
    description:
      "Profesionalno farbanje svih drvenih i metalnih površina. Jednoslojna i višeslojna obrada za dugotrajan sjaj.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Bajcovanje",
    description:
      "Dubinska impregnacija i bojenje drveta bajcom za prirodan, bogat izgled koji naglašava teksturu materijala.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Tehnike sencenja",
    description:
      "Specijalne dekorativne tehnike — sencenje, patina, ombre efekti i artistički prelivi koji daju jedinstven karakter.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Kuhinje i ormani",
    description:
      "Kompletna obnova kuhinjskih fronti i ormanskih vrata — nova boja, novi sjaj bez skupe zamene celokupnog nameštaja.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
    title: "Stolarija i prozori",
    description:
      "Farbanje i renovacija vrata, prozora, šokolatara i sve stolarije — produžavamo vek i osvežavamo izgled.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Moleraj i krecenje",
    description:
      "Unutrašnje farbanje zidova, krečenje i glajsanje. Sve tehnike zidne obrade — od klasičnog do dekorativnog.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Restauracija nameštaja",
    description:
      "Obnova starih i oštećenih komada — sitne prepravke, popravke, krpljenje i potpuna restauracija.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Sve ostale površine",
    description:
      "Komode, police, zvučnici, metalne konstrukcije — ako ima površinu, možemo je ofarbati. Bukvalno sve.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-base font-sans tracking-[0.4em] uppercase text-[#c9a227] mb-3">
            Šta radimo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Naše usluge</span>
          </h2>
          <p className="font-sans text-[#e8dcc8]/85 max-w-lg mx-auto text-base leading-relaxed">
            Svaka usluga dolazi sa uključenim materijalom i prevozom. Radimo na terenu u Novom Sadu
            i okolini do 100 km.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div key={i} className="card-gold bg-[#111] p-6 group relative overflow-hidden">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c9a227]/30 group-hover:border-[#c9a227]/70 transition-colors" />

              {/* Icon */}
              <div className="text-[#c9a227] mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#e8dcc8] mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-base font-sans text-[#e8dcc8]/80 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom line */}
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#c9a227] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 border border-[#c9a227]/25 bg-[#111] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.05)_0%,transparent_70%)]" />
          <p className="font-serif text-2xl md:text-3xl font-bold text-[#e8dcc8] mb-2 relative z-10">
            Materijal i prevoz — u ceni
          </p>
          <p className="font-sans text-[#e8dcc8]/85 text-base mb-6 relative z-10">
            Bez skrivenih troškova. Dolazimo do vas.
          </p>
          <a
            href="#contact"
            className="btn-gold inline-block px-8 py-3 text-base font-sans rounded-sm uppercase tracking-widest relative z-10"
          >
            Zatražite procenu
          </a>
        </div>
      </div>
    </section>
  );
}
