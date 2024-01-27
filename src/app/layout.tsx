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
    "design UX/UI, UX/UI, experiência digital, presença online, design imersivo,desenvolvimento web, Next.js, performance do site, experiência do usuário, experiências digitais, inovação, design, presença online, sucesso online, presença online, estratégias digitais, visibilidade, nextjs, next, js, tailwind, typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TCSLSSH0GR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TCSLSSH0GR');`,
          }}
        />
      </head>
      <body suppressHydrationWarning className={fontFamily.className}>
        <Providers>
          <div className="bg-slate-600 text-white fixed bottom-0 z-[1000] w-full flex justify-center">
            <span className="text-xs hidden lg:flex">
              Estamos trabalhando para aprimorar nosso site! Algumas informações
              ainda estão em desenvolvimento e podem ser ajustadas. Agradecemos
              sua compreensão e paciência.
            </span>
            <span className="text-xs lg:hidden">Site em desenvolvimento.</span>
          </div>
          <MainNavbar />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
