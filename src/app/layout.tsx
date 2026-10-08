import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import type { LayoutProps } from "@/types/common";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Crystal",
    lastName: "Kizor",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: siteConfig.indexable,
    follow: siteConfig.indexable,
  },
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="bg-concrete text-canopy font-sans antialiased">
        <a
          href="#main"
          className="focus:bg-canopy focus:text-limewash sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
