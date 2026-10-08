import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import type { LayoutProps } from "@/types/common";
import "./globals.css";
import { siteConfig } from "@/config/site";

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
      <body className="bg-concrete text-canopy font-sans antialiased">{children}</body>
    </html>
  );
}
