"use client";
import { BezierCurve, ChartLineUp, Code, Flask } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";

export default function HeroOne() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 1,
          bounce: 0.6,
          type: "spring",
          delay: 0.5,
        }}
      >
        <ParallaxText baseVelocity={-1}>STUDIO</ParallaxText>
        <ParallaxText baseVelocity={1}>DIGITAL</ParallaxText>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.5,
            }}
            className="xl:w-full p-6"
          >
            <h2 className="text-3xl xl:text-6xl font-bold text-main-700 dark:text-white">
              Transforme sua <b>Presença Online</b>
            </h2>
            <p className="font-medium mt-3">
              Bem-vindo ao <b>Studio Digital</b>, onde a inovação encontra o
              design e a experiência digital ganha vida!
            </p>
            <p className="font-medium mt-3">
              Descubra o potencial ilimitado da sua presença online através do
              nosso expertise em Design UX/UI e Desenvolvimento Web com
              tecnologias avançadas como Next.js. Deixe-nos guiar você por uma
              jornada onde suas ideias se transformam em experiências digitais
              extraordinárias.
            </p>
          </motion.div>
          <div className="xl:w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 1,
                  bounce: 0.6,
                  type: "spring",
                  delay: 0.5,
                }}
                className="flex flex-col gap-4 p-6"
              >
                <div className="card-icon">
                  <BezierCurve size={40} weight="duotone" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-main-700 dark:text-white">
                  Design Imersivo para Sua Marca
                </h3>
                <p className="text-sm">
                  Dê vida à sua marca com o Studio Digital! Nossa equipe
                  especializada em Design UX/UI está pronta para transformar
                  suas ideias em uma experiência digital envolvente. Descubra
                  como podemos criar interfaces intuitivas e visualmente
                  cativantes que destacam sua presença online. Explore o
                  potencial ilimitado do design imersivo e destaque-se em meio à
                  concorrência. Confie no Studio Digital para elevar sua marca a
                  novos patamares!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 1,
                  bounce: 0.6,
                  type: "spring",
                  delay: 0.5,
                }}
                className="flex flex-col gap-4 p-6"
              >
                <div className="card-icon">
                  <Code size={40} weight="duotone" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-main-700 dark:text-white">
                  Desenvolvimento Web Avançado
                </h3>
                <p className="text-sm">
                  Explore o futuro da web com o Studio Digital! Nossa equipe de
                  Desenvolvimento Web utiliza tecnologias avançadas como Next.js
                  para criar websites rápidos, responsivos e inovadores.
                  Descubra como podemos otimizar a performance do seu site,
                  proporcionando uma experiência de usuário excepcional. Alcance
                  novos horizontes com o desenvolvimento web avançado do Studio
                  Digital e posicione-se à frente no mundo online.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 1,
                  bounce: 0.6,
                  type: "spring",
                  delay: 0.5,
                }}
                className="flex flex-col gap-4 p-6"
              >
                <div className="card-icon">
                  <Flask size={40} weight="duotone" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-main-700 dark:text-white">
                  Transforme Ideias em Experiências Digitais Extraordinárias
                </h3>
                <p className="text-sm">
                  No Studio Digital, suas ideias ganham vida digital!
                  Permita-nos guiá-lo em uma jornada onde a inovação encontra o
                  design. Descubra como transformamos conceitos em experiências
                  digitais extraordinárias, destacando o que há de único na sua
                  visão. Sua presença online nunca foi tão impactante. Confie no
                  nosso expertise para transformar suas ideias em realidade
                  digital.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 1,
                  bounce: 0.6,
                  type: "spring",
                  delay: 0.5,
                }}
                className="flex flex-col gap-4 p-6"
              >
                <div className="card-icon">
                  <ChartLineUp size={40} weight="duotone" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-main-700 dark:text-white">
                  O Caminho para o Sucesso Online Começa Aqui
                </h3>
                <p className="text-sm">
                  No Studio Digital, a excelência é o nosso padrão! Descubra
                  como podemos elevar a sua presença online, proporcionando
                  resultados tangíveis. Seja visto, seja lembrado - com
                  estratégias comprovadas e um toque de criatividade, nossa
                  equipe está pronta para guiar sua marca rumo ao sucesso
                  online. Invista no seu futuro digital com o Studio Digital e
                  alcance novos patamares de visibilidade e impacto.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
