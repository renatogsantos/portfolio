import { Check, PaperPlaneTilt, X } from "@phosphor-icons/react";
import MainButton from "./Button";

export default function PricesCard() {
  return (
    <>
      <div className="bg-white dark:bg-main-700 rounded-2xl p-6 shadow-3xl dark:shadow-2xl cursor-pointer text-main-700 dark:text-white hover:outline outline-3 outline-main-300">
        <div className="flex flex-col gap-6">
          <span className="text-2xl font-bold">Plano Básico</span>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-extrabold ">R$ 1.000</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray">valor cobrado</span>
              <span className="text-xs font-bold text-gray">por projeto</span>
            </div>
          </div>
          <span className="text-xs font-bold">
            Plano básico para até 1 página web
          </span>
          <MainButton
            icon={false}
            size={true}
            typeButton="submit"
            title="Obter Plano"
            onClick={() => {}}
            onPress={() => {}}
          />
          <hr />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">Vantagens</span>
            <span className="text-sm font-medium">
              Saiba tudo sobre o plano
            </span>
            <ul>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-main-50">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Possui no plano</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-main-50">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Possui no plano</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-main-50">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Possui no plano</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-main-50">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Possui no plano</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-main-50">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Possui no plano</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-gray">
                  <X
                    size={16}
                    weight="bold"
                    className="text-white dark:text-black"
                  />
                </div>
                <span>Não possui no plano</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
