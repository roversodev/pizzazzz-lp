import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PizzazzZ - Sistema de Gestão e Delivery para Pizzarias | Aumente seus Lucros",
  description: "Sistema completo para pizzarias que automatiza pedidos, delivery, estoque e finanças. Aumente seus lucros em até 40% com nossa solução integrada. Experimente grátis!",
  keywords: "sistema para pizzaria, software para pizzaria, sistema de delivery para pizzaria, gestão de pizzaria, controle de pedidos, sistema de gestão para pizzaria, automação de pizzaria, sistema integrado para pizzaria, controle financeiro pizzaria, sistema de delivery, controle de estoque pizzaria, software delivery pizzaria",
  authors: [{ name: "PizzazzZ" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PizzazzZ - Sistema Completo para Pizzarias",
    description: "Sistema completo para pizzarias que automatiza pedidos, delivery, estoque e finanças. Aumente seus lucros em até 40% com nossa solução integrada.",
    type: "website",
    locale: "pt_BR",
    images: [{
      url: "https://www.pizzazzz.com.br/delivery-pizza.png",
      width: 1200,
      height: 630,
      alt: "PizzazzZ - Sistema Completo para Pizzarias"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PizzazzZ - Sistema Completo para Pizzarias",
    description: "Sistema completo para pizzarias que automatiza pedidos, delivery, estoque e finanças. Aumente seus lucros em até 40% com nossa solução integrada.",
    images: [{
      url: "https://www.pizzazzz.com.br/delivery-pizza.png",
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
  themeColor: "#000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="relative">
      <body suppressHydrationWarning className={clsx(dmSans.className, "antialiased bg-[#feeaea] overflow-x-clip")}>
        {children}
      </body>
    </html>
  );
}
