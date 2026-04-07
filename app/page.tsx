import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Farbanje nameštaja i enterijera — Novi Sad",
  description:
    "Daddy Style Decor 021 — profesionalno farbanje, lakiranje i bajcovanje nameštaja, stolarije, kuhinja i enterijera. 25 godina iskustva. Novi Sad +100km. Materijal i prevoz u ceni.",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
