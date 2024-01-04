"use client";
import {
  Code,
  GithubLogo,
  LinkedinLogo,
  PaintBrush,
  RocketLaunch,
  WhatsappLogo,
} from "@phosphor-icons/react";
import MainButton from "../Button";
import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

export default function HomeSection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        placement="center"
        className="p-6 bg-white dark:bg-main-800"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <ContactForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="container mx-auto rounded-3xl dark:bg-main-700 bg-white lg:mt-12 xl:mt-24 shadow-3xl dark:shadow-2xl grid lg:grid-cols-2 bg-home">
        <div className="flex flex-col gap-6 p-8 lg:p-14 xl:p-16">
          <p className="text-main-700 dark:text-white text-1xl xl:text-2xl font-bold">
            Construindo o futuro
            <br /> através de design e tecnologia
          </p>
          <h1
            className="text-4xl md:text-6xl xl:text-8xl font-extrabold text-main-700 dark:text-white"
            defaultValue="Studio Digital"
          >
            Studio<span className="text-main-100">Digital</span>
          </h1>
          <p className="text-main-700 dark:text-white text-2xl xl:text-3xl font-bold">
            Seu sucesso é nossa missão
          </p>
          <MainButton
            icon={null}
            typeButton="button"
            title="Entre em contato"
            onClick={onOpen}
            onPress={onOpen}
          />
          <div className="flex items-center gap-4">
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <PaintBrush size={24} weight="duotone" />
              Design
            </span>
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <Code size={24} weight="duotone" />
              Coding
            </span>
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <RocketLaunch size={24} weight="duotone" />
              Business
            </span>
          </div>
        </div>
        <div className="relative hidden lg:flex">
          <img
            draggable={false}
            src="/arrow-line.svg"
            alt="Linha pontilhada"
            className="arrow-line-home"
          />
          <img
            draggable={false}
            src="/man-home.png"
            alt="Homem gritando"
            className="man-home"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          bounce: 0.6,
          type: "spring",
          delay: 0.1
        }}
        className="container mx-auto p-4 flex justify-center lg:justify-between"
      >
        <span className="text-main-700 dark:text-white font-medium hidden lg:block">
          Conheça mais sobre o <b>Studio Digital</b>
        </span>
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
      </motion.div>
    </>
  );
}
