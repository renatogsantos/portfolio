import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";
import "./globals.css";
import { Providers } from "./providers";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato G Santos",
  description:
    "Desenvolvedor Web Front End e Designer UX UI apaixonado por transformar ideias em experiências digitais extraordinárias.",
  keywords:
    "design UX/UI, experiência digital, presença online, design imersivo,desenvolvimento web, Next.js, performance do site, experiência do usuário, experiências digitais, inovação, design, presença online, sucesso online, presença online, estratégias digitais, visibilidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body suppressHydrationWarning className={fontFamily.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
