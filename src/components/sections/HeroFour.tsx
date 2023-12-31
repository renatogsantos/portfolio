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
  RocketLaunch,
  WhatsappLogo,
} from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Loading, Notify } from "notiflix";

type EmailSend = {
  nomeCompleto: string;
  email: string;
  telefone: string;
  comoEncontrou: string;
  mensagem: string;
};

export default function HeroFour() {
  const EmailServiceID: any = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const EmailTemplateID: any = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const EmailPublicKey: any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<EmailSend>();

  const howDoYouFoundUs = [
    { label: "Google" },
    { label: "Facebook" },
    { label: "Instagram" },
    { label: "Twitter" },
    { label: "Linkedin" },
  ];

  const EnviaContato: SubmitHandler<EmailSend> = (data) => {
    Loading.circle({ svgColor: "#6401FF" });
    const form = formRef.current;

    if (form) {
      emailjs
        .sendForm(EmailServiceID, EmailTemplateID, form, EmailPublicKey)
        .then((response) => {
          console.log(response);
          Notify.success(
            `Olá ${data.nomeCompleto}, sua mensagem foi recebida com sucesso!`,
            {
              position: "center-bottom",
              success: { background: "#6401FF", textColor: "#fff" },
            }
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          Loading.remove();
        });

      reset();
      clearErrors();
    }
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
              delay: 0.5,
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
          >
            <form ref={formRef} onSubmit={handleSubmit(EnviaContato)}>
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  label="Nome completo"
                  variant="bordered"
                  isInvalid={errors.nomeCompleto ? true : false}
                  color={errors.nomeCompleto ? "danger" : "secondary"}
                  className="w-full"
                  errorMessage={
                    errors.nomeCompleto && "Por favor insira um nome"
                  }
                  {...register("nomeCompleto", { required: true })}
                />
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
                  isInvalid={errors.comoEncontrou ? true : false}
                  color={errors.comoEncontrou ? "danger" : "secondary"}
                  className="w-full"
                  {...register("comoEncontrou", { required: true })}
                >
                  {(item) => (
                    <SelectItem key={item.label} value={item.label}>
                      {item.label}
                    </SelectItem>
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
