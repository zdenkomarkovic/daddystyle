export default function About() {
  const stats = [
    { number: "25+", label: "Godina iskustva" },
    { number: "100km", label: "Radius usluge" },
    { number: "100%", label: "Materijal u ceni" },
  ];

  return (
    <section id="about" className="py-12 bg-[#0f0f0f] paint-bg relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 brush-divider mb-12" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-base font-sans tracking-[0.4em] uppercase text-[#c9a227] mb-3">
            Ko smo mi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            <span className="gold-text">O radionici</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <div className="inline-block mb-8">
              <div className="border border-[#c9a227]/30 px-6 py-4 relative">
                <div className="absolute -top-px left-4 w-8 h-px bg-[#c9a227]" />
                <div className="absolute -bottom-px right-4 w-8 h-px bg-[#c9a227]" />
                <p className="font-serif text-lg italic text-[#e8dcc8]/90 leading-relaxed">
                  &ldquo;Bavimo se farbanjem svega što ima površinu — stolarija, nameštaj, komode,
                  police, prozori, zvučnici, kuhinjski ormani. Sve.&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-5 font-sans text-[#e8dcc8]/93 leading-relaxed text-base">
              <p>
                Radionica <strong className="text-[#c9a227]">Daddy Style Decor 021</strong> bavi se
                profesionalnim farbanjem i obradom površina već{" "}
                <strong className="text-[#c9a227]">25 godina</strong>. Osnivač i majstor Zoran
                Pejčić unosi u svaki rad decenije naučenog zanata i ljubavi prema detalju.
              </p>
              <p>
                Radimo lakiranje, bajcovanje, farbanje u svim tehnikama — uključujući{" "}
                <strong className="text-[#c9a227]">tehnike sencenja</strong>, krecenje, krpljenje i
                kompleksnu restauraciju. Pored farbanja, radimo i{" "}
                <strong className="text-[#c9a227]">sitne prepravke i restauraciju</strong>{" "}
                nameštaja, kao i moleraj enterijera.
              </p>
              <p>
                <strong className="text-[#c9a227]">Sav materijal i prevoz</strong> su uključeni u
                cenu — bez skrivenih troškova. Radimo na terenu u Novom Sadu i okolini do 100 km.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#c9a227]/30 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-xl text-[#c9a227]">Z</span>
              </div>
              <div>
                <p className="font-serif font-bold text-[#e8dcc8]">Zoran Pejčić</p>
                <p className="text-base font-sans text-[#c9a227]/90 tracking-widest uppercase mt-0.5">
                  Osnivač &amp; Majstor
                </p>
              </div>
            </div>
          </div>

          {/* Image + stats side */}
          <div className="space-y-6">
            <div className="relative">
              {/* Gold frame effect */}
              <div className="absolute -inset-3 border border-[#c9a227]/20 pointer-events-none" />
              <div className="absolute -inset-1.5 border border-[#c9a227]/10 pointer-events-none" />
              <div
                className="aspect-[4/3] bg-cover bg-center bg-[#111] relative overflow-hidden"
                style={{ backgroundImage: "url('/1000082472.webp')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-gold bg-[#111] px-4 py-5 text-center">
                  <p className="font-serif text-2xl font-bold gold-text">{stat.number}</p>
                  <p className="text-base font-sans text-[#e8dcc8]/85 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 brush-divider mt-12" />
    </section>
  );
}
