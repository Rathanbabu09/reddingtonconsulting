import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProviders } from "@/components/motion/Providers";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | IT Staffing & Consulting in Sachse, Texas`,
    template: `%s | ${site.shortName} Consulting`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | IT Staffing & Consulting`,
    description: site.description,
    images: [{ url: "/brand/reddington-logo.png", width: 800, height: 274, alt: site.name }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#070d1c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/reddington-logo.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <MotionProviders>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProviders>
      </body>
    </html>
  );
}
