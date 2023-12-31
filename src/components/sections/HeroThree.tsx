"use client";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/react";
import MainButton from "../Button";
const CardPortfolio = dynamic(() => import("../CardPortfolio"), {
  loading: () => (
    <Skeleton className="rounded-lg">
      <div className="aspect-video rounded-lg bg-default-300"></div>
    </Skeleton>
  ),
});

export default function HeroThree() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          bounce: 0.6,
          type: "spring",
        }}
      >
        <ParallaxText baseVelocity={-1}>SAIBA MAIS</ParallaxText>
        <ParallaxText baseVelocity={1}>STUDIO DIGITAL</ParallaxText>
      </motion.div>
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            bounce: 0.6,
            type: "spring",
          }}
          className="container mx-auto rounded-3xl dark:bg-slate-800 bg-white lg:my-12 shadow-3xl grid lg:grid-cols-3 bg-hero-three"
        >
          <div className="relative hidden lg:flex col-span-1">
            <img
              draggable={false}
              src="/man-about-us.png"
              alt="Homem sorrindo"
              className="man-hero-three"
            />
          </div>
          <div className="flex flex-col gap-6 p-8 lg:p-14 xl:p-16 col-span-2">
            <h2 className="text-3xl xl:text-4xl font-bold text-main-700 dark:text-white">
              Studio Digital
            </h2>
            <p className="font-medium text-main-700 dark:text-white">
              Bem-vindo ao Studio Digital, seu destino definitivo para serviços
              de desenvolvimento e design que transformam visões em realidade
              digital. Nossa equipe dedicada de especialistas une paixão e
              expertise para criar experiências online extraordinárias. Em um
              mundo cada vez mais digital, reconhecemos a importância de
              destacar sua presença na web. Do desenvolvimento de sites
              intuitivos à criação de identidades visuais marcantes, estamos
              comprometidos em elevar sua presença online a novos patamares.
            </p>
            <p className="font-medium text-main-700 dark:text-white hidden 2xl:flex">
              No Studio Digital, não apenas construímos websites e designs, mas
              também cultivamos parcerias duradouras. Combinando nossa expertise
              técnica com uma abordagem centrada no cliente, trabalhamos em
              colaboração para alcançar seus objetivos e superar expectativas.
              Seja você um empreendedor visionário, uma startup ambiciosa ou uma
              empresa consolidada em busca de renovação, estamos prontos para
              embarcar nessa jornada digital ao seu lado.
            </p>
            <p className="font-medium text-main-700 dark:text-white hidden 2xl:flex">
              Transforme suas ideias em realidade conosco no Studio Digital,
              onde a inovação encontra o design, e o futuro ganha vida online.
              Estamos ansiosos para criar algo extraordinário para você. Vamos
              começar a construir sua presença digital de destaque!
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
