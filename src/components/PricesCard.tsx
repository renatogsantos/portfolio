import { Check, Info, X } from "@phosphor-icons/react";
import MainButton from "./Button";
import { formatarParaBRL } from "../config/helpers";
import { Plans } from "@/config/types";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PricesCard({ plan }: { plan: Plans }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ douration: 1, type: "spring", bounce: 0.3 }}
      key={plan.id}
      className="bg-white hover:bg-light dark:bg-main-700 hover:dark:bg-main-800 rounded-2xl p-6 shadow-3xl dark:shadow-2xl cursor-pointer text-main-700 dark:text-white hover:outline outline-3 outline-main-300"
    >
      <div className="flex flex-col gap-6">
        <span className="text-2xl font-bold">{plan.title}</span>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
          <div className="flex lg:flex-col items-center gap-1 lg:gap-0">
            <span className="text-[9px] font-bold text-gray">Orçamento</span>
            <span className="text-[9px] font-bold text-gray">Em até 2x de</span>
          </div>
          <span className="text-5xl font-extrabold ">
            {formatarParaBRL(plan.price / 2)}
          </span>
          <div className="flex lg:flex-col items-center gap-1 lg:gap-0">
            <span className="text-[9px] font-bold text-gray">
              Valor total de
            </span>
            <span className="text-[9px] font-bold text-gray">
              {formatarParaBRL(plan.price)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">Entrega em {plan.time} dias</span>
          <Tooltip
            placement="top-end"
            className="w-[300px]"
            content="O prazo de entrega e o valor podem variar de acordo com os requisitos específicos do projeto."
          >
            <Info size={24} weight="duotone" />
          </Tooltip>
        </div>
        <MainButton
          icon={false}
          size={true}
          link={`https://api.whatsapp.com/send?phone=5511911882402&text=Ol%C3%A1%20Renato,%20Gostaria%20de%20obter%20o%20${plan.title}`}
          typeButton="submit"
          title="Obter Plano"
          onClick={() => {}}
          onPress={() => {}}
        />
        <div className="bg-slate-300 dark:bg-slate-600 w-full h-[1px]" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-2">
            <span className="text-2xl font-bold">Sobre o plano</span>
            <span className="text-sm font-medium">{plan.title}</span>
          </div>
          <ul>
            {plan.services.map((service, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-2 mb-2"
              >
                <span className="text-sm font-madium">{service.title}</span>
                {service.type ? (
                  <div className="p-1 rounded-full bg-main-50">
                    <Check
                      size={16}
                      weight="bold"
                      className="text-white dark:text-black"
                    />
                  </div>
                ) : (
                  <div className="p-1 rounded-full bg-slate-600 opacity-30">
                    <X
                      size={16}
                      weight="bold"
                      className="text-white dark:text-black"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
