import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "farbanje nameštaja",
    "farbanje Novi Sad",
    "lakiranje stolarije",
    "bajcovanje",
    "restauracija nameštaja",
    "farbanje kuhinja",
    "Daddy Style Decor",
    "Zoran Pejčić",
    "moleraj Novi Sad",
    "farbanje komoda",
    "farbanje prozora",
    "sencenje",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-pitch text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
