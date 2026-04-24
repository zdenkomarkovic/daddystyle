"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_PHONE } from "@/lib/constants";

const navLinks = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#about" },
  { label: "Usluge", href: "#services" },
  { label: "Galerija", href: "#gallery" },
  { label: "Pokrivenost", href: "#coverage" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[rgba(201,162,39,0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6  flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Daddy Style Decor 021"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="hidden sm:block font-serif text-xl font-bold gold-text tracking-wide leading-none">
            Daddy Style Decor 021
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-sans text-[#e8dcc8]/80 hover:text-[#c9a227] transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="btn-gold px-4 py-2 text-base sm:text-base rounded-sm font-sans whitespace-nowrap"
        >
          {CONTACT_PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
        >
          <span
            className={`block w-6 h-0.5 bg-[#c9a227] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#c9a227] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#c9a227] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-screen bg-[#0a0a0a]/98 border-b border-[rgba(201,162,39,0.2)]"
            : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-base text-[#e8dcc8]/80 hover:text-[#c9a227] transition-colors tracking-widest uppercase py-2 border-b border-[rgba(201,162,39,0.1)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="btn-gold block text-center py-3 rounded-sm text-base mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Pozovite nas
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
