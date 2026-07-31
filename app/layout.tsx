import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContentGuard } from "@/components/security/ContentGuard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoshua Figueroa · Ingeniero de Sistemas",
  description:
    "Portafolio de Yoshua Figueroa — Ingeniero de Sistemas. Soporte TIC, analítica de datos con Power BI y automatización con IA.",
  openGraph: {
    title: "Yoshua Figueroa · Ingeniero de Sistemas",
    description:
      "Soporte TIC · Analítica de datos con Power BI · Automatización con IA.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport = {
  themeColor: "#0b1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ContentGuard />
        <div className="aurora" />
        {children}
      </body>
    </html>
  );
}
