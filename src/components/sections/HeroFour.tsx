"use client";
import {
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "../Button";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import {
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  RocketLaunch,
  WhatsappLogo,
} from "@phosphor-icons/react";
import ContactForm from "./ContactForm";

export default function HeroFour() {
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
        <ParallaxText baseVelocity={1}>ENTRE EM</ParallaxText>
        <ParallaxText baseVelocity={-1}>CONTATO</ParallaxText>
      </motion.div>
      <div className="container mx-auto p-4 lg:mt-12">
        <div className="grid xl:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.3,
            }}
            className="flex flex-col gap-6"
          >
            <RocketLaunch
              size={64}
              weight="duotone"
              className="text-main-700 dark:text-white"
            />
            <h2 className="text-3xl xl:text-4xl font-bold text-main-700 dark:text-white">
              Conecte-se conosco para explorar oportunidades incríveis!
            </h2>
            <p className="font-medium text-main-700 dark:text-white">
              Pronto para iniciar sua jornada digital? Entre em contato conosco
              para uma consulta inicial. Estamos aqui para ouvir suas ideias,
              entender suas necessidades e transformar seus objetivos em
              realidade digital.
            </p>

            <div className="flex items-center gap-4">
              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Whatsapp"
                color="primary"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=5511911882402&text=Ol%C3%A1%20Renato,%20pode%20me%20ajudar?"
                  target="_blank"
                  color="secondary"
                  aria-label="Whatsapp"
                >
                  <WhatsappLogo size={24} weight="duotone" />
                </Link>
              </Tooltip>
              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Linkedin"
                color="primary"
              >
                <Link
                  href="https://www.linkedin.com/in/renato-g-santos/"
                  target="_blank"
                  color="secondary"
                  aria-label="Linkedin"
                >
                  <LinkedinLogo size={24} weight="duotone" />
                </Link>
              </Tooltip>
              <Tooltip
                placement="bottom"
                showArrow={true}
                content="Github"
                color="primary"
              >
                <Link
                  href="https://github.com/renatogsantos"
                  target="_blank"
                  color="secondary"
                  aria-label="Github"
                >
                  <GithubLogo size={24} weight="duotone" />
                </Link>
              </Tooltip>
            </div>
            <span className="font-medium text-main-700 dark:text-white">
              Prefere uma reunião?{" "}
              <Link
                href="https://calendar.app.google/7ZiptucnE3S7YABH7"
                target="_blank"
              >
                Agende agora
              </Link>
            </span>
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
              delay: 0.3,
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </>
  );
}
