import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PizzazzZ - Sistema Completo para Pizzarias",
  description: "Aumente seus lucros em até 40% com o sistema completo de gestão e delivery para pizzarias. Controle pedidos, estoque e finanças em um só lugar.",
  keywords: "sistema para pizzaria, delivery pizzaria, gestão pizzaria, controle de pedidos, sistema delivery",
  authors: [{ name: "PizzazzZ" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PizzazzZ - Sistema Completo para Pizzarias",
    description: "Aumente seus lucros em até 40% com o sistema completo de gestão e delivery para pizzarias.",
    type: "website",
    locale: "pt_BR",
    images: [{
      url: "/opengraph-image.svg",
      width: 1200,
      height: 630,
      alt: "PizzazzZ - Sistema Completo para Pizzarias"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PizzazzZ - Sistema Completo para Pizzarias",
    description: "Aumente seus lucros em até 40% com o sistema completo de gestão e delivery para pizzarias.",
    images: [{
      url: "/opengraph-image.svg",
      width: 1200,
      height: 630,
      alt: "PizzazzZ - Sistema Completo para Pizzarias"
    }]
  },
  robots: "index, follow"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#EF5350"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="relative">
      <body suppressHydrationWarning className={clsx(dmSans.className, "antialiased bg-[#feeaea]")}>
        {children}
      </body>
    </html>
  );
}
