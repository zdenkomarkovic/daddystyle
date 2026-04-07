const areas = [
  "Novi Sad",
  "Beograd",
  "Sremska Mitrovica",
  "Zrenjanin",
  "Subotica",
  "Vrbas",
  "Bačka Palanka",
  "Ruma",
  "Šid",
  "Stara Pazova",
  "Inđija",
  "Sremski Karlovci",
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-12 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-base font-sans tracking-[0.4em] uppercase text-[#c9a227] mb-3">
            Gde radimo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Oblast pokrivenosti</span>
          </h2>
          <p className="font-sans text-[#e8dcc8]/85 text-base max-w-md mx-auto leading-relaxed">
            Radimo u Novom Sadu i svim mestima u krugu od 100 km. Dolazimo do vas — materijal i
            prevoz su uvek u ceni.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Map visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#c9a227]/15 animate-[spin_30s_linear_infinite]" />
              {/* 100km ring */}
              <div className="absolute inset-4 rounded-full border border-[#c9a227]/25 border-dashed" />
              {/* 50km ring */}
              <div className="absolute inset-[30%] rounded-full border border-[#c9a227]/40" />
              {/* Center */}
              <div className="absolute inset-[42%] rounded-full bg-[#c9a227] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
              </div>
              {/* Glow */}
              <div className="absolute inset-[42%] rounded-full bg-[#c9a227]/20 blur-md" />

              {/* Labels */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-8 text-center">
                <span className="text-base font-sans font-bold text-[#c9a227] tracking-widest uppercase block">
                  Novi Sad
                </span>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                <span className="text-base font-sans text-[#c9a227]/80 tracking-wider uppercase">
                  100 km radius
                </span>
              </div>

              {/* Dot markers at compass points */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const r = 50; // percent from center
                const x = 50 + r * Math.sin(rad);
                const y = 50 - r * Math.cos(rad);
                return (
                  <div
                    key={deg}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#c9a227]/40"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  />
                );
              })}
            </div>
          </div>

          {/* Areas list */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-base font-sans text-[#e8dcc8]/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] flex-shrink-0" />
                  {area}
                </div>
              ))}
              <div className="flex items-center gap-2 text-base font-sans text-[#c9a227]/85 col-span-2 sm:col-span-3 mt-1">
                <span className="w-1.5 h-1.5 rounded-full border border-[#c9a227]/50 flex-shrink-0" />
                I sve okolne opštine...
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📍", text: "Novi Sad i okolina do 100 km" },
                { icon: "🚗", text: "Prevoz u ceni — dolazimo do vas" },
                { icon: "🎨", text: "Radimo na terenu ili u radionici" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 card-gold bg-[#111] px-5 py-4"
                >
                  <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                  <p className="text-base font-sans text-[#e8dcc8]/93">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
