"use client";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Avatar, AvatarGroup, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
const CardPortfolio = dynamic(() => import("../CardPortfolio"), {
  loading: () => (
    <Skeleton className="rounded-lg">
      <div className="aspect-video rounded-lg bg-default-300"></div>
    </Skeleton>
  ),
});

export default function HeroTwo() {
  const [comment, setComment] = useState(1);

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
            className="xl:w-full p-6 sticky xl:top-14 h-full"
          >
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col">
                <h2 className="text-3xl xl:text-6xl font-bold text-main-700 dark:text-white">
                  Explorando a <b>Criatividade</b>
                </h2>
                <p className="font-medium mt-3">
                  Um Showcase de Inovação e Inspiração Digital
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <AvatarGroup isBordered>
                  <Avatar
                    color={comment == 1 ? "success" : "default"}
                    src="/vitor.png"
                    onMouseEnter={() => {
                      setComment(1);
                    }}
                  />
                  <Avatar
                    color={comment == 2 ? "success" : "default"}
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    onMouseEnter={() => {
                      setComment(2);
                    }}
                  />
                  <Avatar
                    color={comment == 3 ? "success" : "default"}
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    onMouseEnter={() => {
                      setComment(3);
                    }}
                  />
                  <Avatar
                    color={comment == 4 ? "success" : "default"}
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    onMouseEnter={() => {
                      setComment(4);
                    }}
                  />
                  <Avatar
                    color={comment == 5 ? "success" : "default"}
                    src="/perfil-rayx.png"
                    onMouseEnter={() => {
                      setComment(5);
                    }}
                  />
                </AvatarGroup>
                {comment == 1 && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      bounce: 0.6,
                      type: "spring",
                    }}
                    className="font-medium text-main-700 dark:text-white"
                  >
                    A Lithium Brasil era uma pequena loja virtual, de produtos
                    Apple, que se agigantou após os serviços do Studio Digital,
                    com o nosso maravilhoso website, totalmente otimizado para
                    Mobile e Desktop, e aperfeiçoamento da presença digital no
                    Google My Business, Facebook e Instagram. Está buscando por
                    profissionalismo, responsabilidade e dedicação? Então sua
                    busca acaba aqui.
                  </motion.p>
                )}
                {comment == 2 && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      bounce: 0.6,
                      type: "spring",
                    }}
                    className="font-medium text-main-700 dark:text-white"
                  >
                    Studio Digital, vocês são simplesmente demais! 🚀 Os designs
                    são tipo um &rdquo;show à parte&rdquo; - super modernos e
                    cativantes! Meu site nunca esteve tão estiloso e intuitivo.
                    🎨💻 Além disso, a galera lá é tão descolada, sempre
                    antenada nas últimas tendências digitais. Recomendo de olhos
                    fechados para quem curte inovação com um toque de estilo!
                  </motion.p>
                )}
                {comment == 3 && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      bounce: 0.6,
                      type: "spring",
                    }}
                    className="font-medium text-main-700 dark:text-white"
                  >
                    Mano, sério, Studio Digital é on point! 🌐💯 Os caras
                    entendem de tecnologia como ninguém, e o jeito como eles
                    equilibram funcionalidade com aquele visual top é coisa de
                    outro mundo. Meu site tá bombando graças a esses gênios
                    digitais. 🚀 Se você quer lacrar na web, não pensa duas
                    vezes, manda ver com o Studio Digital!
                  </motion.p>
                )}
                {comment == 4 && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      bounce: 0.6,
                      type: "spring",
                    }}
                    className="font-medium text-main-700 dark:text-white"
                  >
                    Studio Digital é vida, pessoal! 🌈💻 A vibe deles é tão
                    positiva e criativa que parece que meu site ganhou um
                    upgrade de felicidade. A equipe é supercool e sempre
                    disposta a entender minhas ideias malucas. 😜 Se você quer
                    um toque jovem e inovador pro seu negócio online, vai de
                    Studio Digital que é sucesso garantido! ✨
                  </motion.p>
                )}
                {comment == 5 && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      bounce: 0.6,
                      type: "spring",
                    }}
                    className="font-medium text-main-700 dark:text-white"
                  >
                    Graças ao Studio Digital, a Rayx Comercial agora se destaca
                    online com um website otimizado e presença estratégica nas
                    redes sociais. A parceria transformou nossa abordagem em
                    acessórios automotivos, oferecendo soluções inteligentes
                    para clientes de médio e grande porte. A equipe altamente
                    dedicada do Studio Digital redefiniu nossa presença digital,
                    proporcionando uma experiência única no setor. Estamos
                    entusiasmados com o sucesso que essa colaboração trouxe à
                    Rayx Comercial!
                  </motion.p>
                )}
              </div>
            </div>
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
