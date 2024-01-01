"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function JourneyBuilder() {
  const constraintsRef = useRef(null);

  const processoConstrucaoSite = [
    {
      titulo: "Descubra Suas Necessidades",
      descricao:
        "Vamos conversar para entender suas metas e o que você quer no seu site.",
      razao:
        "Garantir que o site atenda perfeitamente às suas expectativas e necessidades.",
    },
    {
      titulo: "Designs Incríveis Exclusivos",
      descricao:
        "Criamos designs atraentes que tornam o seu site único e impactante.",
      razao: "Proporcionar uma presença online memorável para seus visitantes.",
    },
    {
      titulo: "Foco no Seu Público",
      descricao:
        "Adotamos uma abordagem centrada no usuário, pensando em quem vai visitar o site.",
      razao:
        "Assegurar que o site seja intuitivo e envolvente para o seu público-alvo.",
    },
    {
      titulo: "Realizamos Suas Ideias",
      descricao:
        "Colocamos em prática os designs, transformando suas ideias em um site funcional.",
      razao: "Concretizar suas ideias em uma presença digital tangível.",
    },
    {
      titulo: "Testamos para a Excelência",
      descricao:
        "Realizamos testes rigorosos para garantir um funcionamento impecável.",
      razao:
        "Assegurar que seu site seja livre de erros, proporcionando a melhor experiência possível.",
    },
    {
      titulo: "Sua Opinião Final",
      descricao: "Mostramos o site para você revisar e dar feedback.",
      razao: "Certificar que o site atenda totalmente às suas expectativas.",
    },
    {
      titulo: "Lançamento Global",
      descricao: "Configuramos tudo e lançamos seu site para o mundo ver.",
      razao:
        "Colocar sua presença online em ação, começando a conquistar a internet.",
    },
    {
      titulo: "Suporte Contínuo Personalizado",
      descricao:
        "Oferecemos suporte contínuo pós-lançamento, garantindo o sucesso constante do seu site.",
      razao:
        "Manter seu site atualizado e atender às demandas em constante evolução do seu negócio.",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          bounce: 0.4,
          type: "spring",
          delay: 0.3,
        }}
        className="journey-grid p-4"
        ref={constraintsRef}
      >
        <div className="container mx-auto py-24 grid xl:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              bounce: 0.4,
              type: "spring",
            }}
            className="flex flex-col xl:col-span-2"
            drag
            whileDrag={{ scale: 1.2 }}
            dragConstraints={constraintsRef}
          >
            <div>
              <h2 className="text-3xl xl:text-4xl font-bold text-main-700 dark:text-white">
                Sua{" "}
                <span className="hover:text-main-300 transition ease-in-out">
                  Jornada Digital
                </span>{" "}
                de Sucesso!
              </h2>
              <p className="text-sm font-medium mt-3">
                Explore conosco nosso processo para construir o site dos seus
                sonhos. Desde a descoberta das suas necessidades até o
                lançamento do seu site no mundo, estamos empenhados em
                transformar suas ideias em uma presença online envolvente e
                única. Com designs exclusivos e uma abordagem centrada no
                usuário, garantimos que cada etapa seja uma experiência
                memorável. Valorizamos muito o seu feedback, e nosso compromisso
                com o suporte contínuo assegura que seu site evolua alinhado aos
                seus objetivos. Vamos iniciar essa emocionante jornada digital
                de sucesso juntos!
              </p>
            </div>
          </motion.div>
          {processoConstrucaoSite.map(({ titulo, descricao, razao }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                bounce: 0.4,
                type: "spring",
              }}
              key={i}
              className="journey-item dark:bg-slate-800 bg-white shadow-3xl p-6"
              drag
              whileDrag={{ scale: 1.2 }}
              dragConstraints={constraintsRef}
            >
              <span className="text-3xl font-black text-main-700 dark:text-white">
                {i + 1}
              </span>
              <h4 className="text-main-300 font-bold">{titulo}</h4>
              <p className="text-xs font-medium text-main-700 dark:text-white">
                {descricao}
              </p>
              <p className="text-xs font-medium text-main-700 dark:text-white">
                {razao}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              bounce: 0.4,
              type: "spring",
            }}
            className="flex flex-col xl:col-span-2"
            drag
            whileDrag={{ scale: 1.2 }}
            dragConstraints={constraintsRef}
          >
            <div>
              <h2 className="text-2xl font-bold text-main-700 dark:text-white">
                Preparando-se para o Próximo Capítulo com Studio Digital!
              </h2>
              <p className="text-xs font-medium mt-3">
                Chegamos ao final desta emocionante jornada digital, guiando
                você através do processo de transformação e criação do seu site
                com o Studio Digital. Seu site agora é a expressão tangível das
                suas aspirações, uma presença online que vai além do
                convencional.
              </p>
              <p className="text-xs font-medium mt-3">
                Este é apenas o ponto de partida para o que está por vir.
                Estamos aqui não apenas para encerrar esta fase, mas para
                continuar apoiando seu sucesso contínuo na era digital.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
