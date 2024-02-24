import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import MainButton from "./Button";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";
import { Loading, Notify } from "notiflix";
import emailjs from "@emailjs/browser";

type EmailSend = {
  nomeCompleto: string;
  email: string;
  telefone: string;
  comoEncontrou: string;
  mensagem: string;
};

export default function ContactForm() {
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
      <form ref={formRef} onSubmit={handleSubmit(EnviaContato)}>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            label="Nome completo"
            variant="bordered"
            isInvalid={errors.nomeCompleto ? true : false}
            color={errors.nomeCompleto ? "danger" : "secondary"}
            className="w-full"
            errorMessage={errors.nomeCompleto && "Por favor insira um nome"}
            {...register("nomeCompleto", { required: true })}
          />
          <Input
            type="email"
            label="Seu melhor Email"
            variant="bordered"
            isInvalid={errors.email ? true : false}
            color={errors.email ? "danger" : "secondary"}
            className="w-full"
            errorMessage={errors.email && "Por favor insira um e-mail válido"}
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
            icon={<PaperPlaneTilt size={24} weight="duotone" />}
            size={false}
            typeButton="submit"
            title="Enviar Mensagem"
            onClick={() => {}}
            onPress={() => {}}
          />
        </div>
      </form>
    </>
  );
}
