"use client";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiNpmjsFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import { BezierCurve, ChartLineUp, Code, Flask } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import { Button, Tooltip } from "@nextui-org/react";
import CardText from "../CardText";

export default function HeroOne() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          bounce: 0.6,
          type: "spring",
          delay: 0.1,
        }}
      >
        <ParallaxText baseVelocity={-1}>TRANSFORME SUA</ParallaxText>
        <ParallaxText baseVelocity={1}>PRESENÇA ONLINE</ParallaxText>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              bounce: 0.6,
              type: "spring",
              delay: 0.1,
            }}
            className="lg:w-full p-6"
          >
            <h2 className="text-3xl lg:text-6xl font-bold text-main-700 dark:text-white">
              Transforme sua{" "}
              <b>
                <span className="hover:text-main-300 transition-colors ease-in-out">
                  Presença Online
                </span>
              </b>
            </h2>
            <p className="font-medium lg:text-4xl text-main-700 dark:text-white mt-3">
              Bem-vindo ao <b>Studio Digital</b>, onde a <b>inovação</b>{" "}
              encontra o <b>design</b> e a <b>experiência digital</b> ganha
              vida!
            </p>
            <p className="font-medium text-main-700 dark:text-white mt-3">
              Descubra o potencial ilimitado da sua presença online através do
              nosso expertise em Design UX/UI e Desenvolvimento Web com
              tecnologias avançadas como Next.js, Tailwindcss e Typescript.
              Deixe-nos guiar você por uma jornada onde suas ideias se
              transformam em experiências digitais extraordinárias.
            </p>
            <div className="flex py-4">
              <Tooltip
                placement="bottom"
                showArrow={true}
                content="HTML 5"
                color="primary"
              >
                <Button
                  id="HTML 5"
                  name="HTML 5"
                  aria-label="HTML 5"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoHtml5 size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="CSS 3"
                color="primary"
              >
                <Button
                  id="CSS 3"
                  name="CSS 3"
                  aria-label="CSS 3"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoCss3 size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Javascript"
                color="primary"
              >
                <Button
                  id="Javascript"
                  name="Javascript"
                  aria-label="Javascript"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoJavascript size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Typescript"
                color="primary"
              >
                <Button
                  id="Typescript"
                  name="Typescript"
                  aria-label="Typescript"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoTypescript size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="NextJs"
                color="primary"
              >
                <Button
                  id="NEXT JS 13"
                  name="NEXT JS 13"
                  aria-label="NEXT JS 13"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <TbBrandNextjs size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Tailwindcss"
                color="primary"
              >
                <Button
                  id="Tailwindcss"
                  name="Tailwindcss"
                  aria-label="Tailwindcss"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <SiTailwindcss size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="ReactJs"
                color="primary"
              >
                <Button
                  id="React JS"
                  name="React JS"
                  aria-label="React JS"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoReact size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Redux"
                color="primary"
              >
                <Button
                  id="Redux"
                  name="Redux"
                  aria-label="Redux"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <BiLogoRedux size={32} />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                showArrow={true}
                content="NPM"
                color="primary"
              >
                <Button
                  id="NPM JS"
                  name="NPM JS"
                  aria-label="NPM JS"
                  size="sm"
                  isIconOnly
                  className="bg-transparent text-main-700 dark:text-white"
                >
                  <RiNpmjsFill size={32} />
                </Button>
              </Tooltip>
            </div>
          </motion.div>
          <div className="lg:w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <CardText
                icon={<BezierCurve size={40} weight="duotone" />}
                title="Design Imersivo para Sua Marca"
                description="Dê vida à sua marca com o Studio Digital! Nossa equipe
                  especializada em Design UX/UI está pronta para transformar
                  suas ideias em uma experiência digital envolvente. Descubra
                  como podemos criar interfaces intuitivas e visualmente
                  cativantes que destacam sua presença online. Explore o
                  potencial ilimitado do design imersivo e destaque-se em meio à
                  concorrência. Confie no Studio Digital para elevar sua marca a
                  novos patamares!"
              />
              <CardText
                icon={<Code size={40} weight="duotone" />}
                title="Desenvolvimento Web Avançado"
                description="Explore o futuro da web com o Studio Digital! Nossa equipe de
                Desenvolvimento utiliza ferramentas como Next.js, Tailwindcss,
                Typescript para criar websites rápidos, responsivos e
                inovadores. Descubra como podemos otimizar a performance do
                seu site, proporcionando uma experiência de usuário
                excepcional. Alcance novos horizontes com o desenvolvimento
                web avançado do Studio Digital e posicione-se à frente no
                mundo online."
              />
              <CardText
                icon={<Flask size={40} weight="duotone" />}
                title="Transforme Ideias em Experiências Digitais Extraordinárias"
                description="No Studio Digital, suas ideias ganham vida digital!
                Permita-nos guiá-lo em uma jornada onde a inovação encontra o
                design. Descubra como transformamos conceitos em experiências
                digitais extraordinárias, destacando o que há de único na sua
                visão. Sua presença online nunca foi tão impactante. Confie no
                nosso expertise para transformar suas ideias em realidade
                digital."
              />
              <CardText
                icon={<ChartLineUp size={40} weight="duotone" />}
                title="O Caminho para o Sucesso Online Começa Aqui"
                description="No Studio Digital, a excelência é o nosso padrão! Descubra
                como podemos elevar a sua presença online, proporcionando
                resultados tangíveis. Seja visto, seja lembrado - com
                estratégias comprovadas e um toque de criatividade, nossa
                equipe está pronta para guiar sua marca rumo ao sucesso
                online. Invista no seu futuro digital com o Studio Digital e
                alcance novos patamares de visibilidade e impacto."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
