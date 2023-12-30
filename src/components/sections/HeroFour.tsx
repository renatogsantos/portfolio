"use client";
import {
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import MainButton from "../Button";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function HeroFour() {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const howDoYouFoundUs = [
    { id: 1, label: "Google" },
    { id: 2, label: "Facebook" },
    { id: 3, label: "Instagram" },
    { id: 4, label: "Twitter" },
    { id: 5, label: "Linkedin" },
  ];

  const sendForm = (data: any) => {
    console.log(data);
    reset();
    clearErrors();
  };
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
        className="container mx-auto p-4 lg:mt-12"
      >
        <div className="grid xl:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl xl:text-4xl font-bold text-main-700 dark:text-white">
              Entre em contato
            </h2>
            <p className="font-medium">
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
          </div>
          <div>
            <form onSubmit={handleSubmit(sendForm)}>
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  label="Seu melhor Email"
                  variant="bordered"
                  isInvalid={errors.email ? true : false}
                  color={errors.email ? "danger" : "secondary"}
                  className="w-full"
                  errorMessage={
                    errors.email && "Por favor insira um e-mail válido"
                  }
                  {...register("email", { required: true })}
                />
                <Input
                  type="tel"
                  label="Telefone Whatsapp"
                  variant="bordered"
                  isInvalid={errors.telefone ? true : false}
                  color={errors.telefone ? "danger" : "secondary"}
                  className="w-full"
                  errorMessage={
                    errors.telefone && "Por favor insira um telefone válido"
                  }
                  {...register("telefone", { required: true })}
                  />
                <Select
                  items={howDoYouFoundUs}
                  label="Como nos encontrou?"
                  variant="bordered"
                  isInvalid={errors.comoNosAchou ? true : false}
                  color={errors.comoNosAchou ? "danger" : "secondary"}
                  className="w-full"
                  {...register("comoNosAchou", { required: true })}
                >
                  {(item) => (
                    <SelectItem key={item.id}>{item.label}</SelectItem>
                  )}
                </Select>
                <Textarea
                  type="text"
                  label="Deixe sua mensagem"
                  variant="bordered"
                  isInvalid={errors.mensagem ? true : false}
                  color={errors.mensagem ? "danger" : "secondary"}
                  className="w-full"
                  errorMessage={
                    errors.mensagem && "Por favor insira uma mensagem válida"
                  }
                  {...register("mensagem", { required: true })}
                />
                <MainButton
                  typeButton="submit"
                  title="Enviar"
                  onClick={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
