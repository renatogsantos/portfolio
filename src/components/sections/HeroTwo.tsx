"use client";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/react";
const CardPortfolio = dynamic(() => import("../CardPortfolio"), {
  loading: () => (
    <Skeleton className="rounded-lg">
      <div className="aspect-video rounded-lg bg-default-300"></div>
    </Skeleton>
  ),
});

export default function HeroTwo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          bounce: 0.6,
          type: "spring",
          delay: 0.5,
        }}
      >
        <ParallaxText baseVelocity={1}>PORTFÓLIO</ParallaxText>
        <ParallaxText baseVelocity={-1}>NOSSOS CLIENTES</ParallaxText>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.5,
            }}
            className="xl:w-1/3 p-6 sticky xl:top-10 h-full"
          >
            <h2 className="text-3xl xl:text-6xl font-bold text-main-700 dark:text-white">
              Conheça <b>Nosso Portfólio</b>
            </h2>
            <p className="font-medium mt-3 hidden xl:block">
              Descubra alguns dos projetos incríveis criados pelo Studio
              Digital! <ArrowRight className="text-main-400" size={40} />
            </p>
            <p className="font-medium mt-3 xl:hidden">
              Descubra alguns dos projetos incríveis criados pelo Studio
              Digital! <ArrowDown className="text-main-400" size={40} />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.5,
            }}
            className="xl:w-full p-6 flex flex-col gap-4"
          >
            <CardPortfolio
              image="/pokedexplore.png"
              title="PokédExplore"
              description="Um site para quem é fã de pokémon e deseja captura alguns para sua coleção"
            />
            <CardPortfolio image="" title="" description="" />
            <CardPortfolio image="" title="" description="" />
            <CardPortfolio image="" title="" description="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
