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
          <div className="flex flex-col gap-6 p-8 lg:p-16 col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-main-700 dark:text-white">
              Studio <span className="text-main-100">Digital</span>
            </h2>
            <p className="font-medium text-main-700 dark:text-white">
              No Studio Digital, vamos além na transformação de empresas por
              meio de soluções digitais inovadoras. Nossos designs envolventes
              não apenas aprimoram a interação do usuário, mas também criam
              experiências memoráveis que ressoam em todas as fases da jornada
              do cliente. Fundamentados em uma abordagem centrada no usuário,
              dedicamos tempo à pesquisa detalhada e adotamos um processo de
              desenvolvimento sólido, garantindo conquistas impactantes que
              impulsionam o sucesso de nossos clientes.
            </p>
            <p className="font-medium text-main-700 dark:text-white">
              Se você busca ir além na presença online, convidamos você a se
              conectar conosco no Studio Digital. Juntos, exploraremos novas
              fronteiras digitais para elevar o status da sua empresa e destacar
              sua marca em um cenário cada vez mais competitivo.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
