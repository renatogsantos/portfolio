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
          duration: .5,
          bounce: 0.6,
          type: "spring",
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
            className="xl:w-full p-6 sticky xl:top-12 h-full"
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
              description="Um espaço online dedicado aos verdadeiros aficionados por Pokémon que desejam ampliar suas coleções capturando novos exemplares."
              link="https://pokedexplore.vercel.app/"
            />
            <CardPortfolio
              image="lithiumbr.png"
              title="Lithium BR"
              description="LithiumBR: A principal loja online para produtos Apple! Descubra a excelência em tecnologia com a garantia de qualidade e estilo."
              link="https://www.lithiumbr.com/"
            />
            <CardPortfolio
              image="rayxcomercial.png"
              title="Rayx Comercial"
              description="Empresa do ramo de acessórios automotivos. Temos os melhores vendedores da área especializados e comprometidos com o serviço. A nossa empresa está preparada para atender clientes de médio e grande porte, oferecendo sempre uma solução inteligente e prática para o atendimento."
              link="https://www.rayx.com.br/"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
