import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainNavbar from "@/components/Navbar";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudioDigital",
  description:
    "Bem-vindo ao Studio Digital, onde a inovação encontra o design e a experiência digital ganha vida!",
  keywords:
    "design UX/UI, experiência digital, presença online, design imersivo,desenvolvimento web, Next.js, performance do site, experiência do usuário, experiências digitais, inovação, design, presença online, sucesso online, presença online, estratégias digitais, visibilidade, nextjs, next, js, tailwind, typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className={fontFamily.className}>
        <Providers>
          <MainNavbar />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
