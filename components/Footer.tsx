import Image from "next/image";
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_INSTAGRAM, CONTACT_ADDRESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[rgba(201,162,39,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Daddy Style Decor 021"
                width={44}
                height={44}
                className="object-contain"
              />
              <div>
                <p className="font-serif text-2xl font-bold gold-text leading-none">Daddy Style</p>
                <p className="text-base font-sans text-[#c9a227]/85 tracking-[0.3em] uppercase mt-0.5">
                  Decor 021
                </p>
              </div>
            </div>
            <p className="text-base font-sans text-[#e8dcc8]/68 leading-relaxed max-w-xs">
              Profesionalno farbanje nameštaja i enterijera. 25 godina zanata.
              Materijal i prevoz u ceni.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-base font-sans text-[#c9a227]/90 tracking-widest uppercase mb-4">
              Navigacija
            </p>
            <ul className="space-y-2">
              {[
                { label: "Početna", href: "#hero" },
                { label: "O nama", href: "#about" },
                { label: "Usluge", href: "#services" },
                { label: "Galerija", href: "#gallery" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-sans text-[#e8dcc8]/93 hover:text-[#c9a227] transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-base font-sans text-[#c9a227]/90 tracking-widest uppercase mb-4">
              Kontakt
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${CONTACT_PHONE}`} className="text-base font-sans text-[#e8dcc8]/93 hover:text-[#c9a227] transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-base font-sans text-[#e8dcc8]/93 hover:text-[#c9a227] transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-base font-sans text-[#e8dcc8]/93">{CONTACT_ADDRESS}</span>
              </li>
              <li className="pt-1">
                <a
                  href={CONTACT_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-sans text-[#c9a227]/85 hover:text-[#c9a227] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="brush-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-sans text-[#e8dcc8]/93">
          <p>© {new Date().getFullYear()} Daddy Style Decor 021 — Zoran Pejčić</p>
          <p className="text-[#e8dcc8]/60">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a227]/80 hover:text-[#c9a227] transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
