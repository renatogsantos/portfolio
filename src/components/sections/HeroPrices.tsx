"use client";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import PricesCard from "../PricesCard";
import { planPrices } from "../../config/plans";
import { Plans } from "@/config/types";

export default function HeroPrices() {
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
        <ParallaxText baseVelocity={1}>TABELA DE PREÇOS</ParallaxText>
        <ParallaxText baseVelocity={-1}>FAÇA SEU ORÇAMENTO</ParallaxText>
      </motion.div>
      <div className="container mx-auto p-6 py-12">
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
          className="flex flex-col"
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-main-700 dark:text-white">
            Conheça Nossos <b>Planos</b>
          </h2>
          <p className="font-medium mt-3">
            Descubra nossos planos acessíveis e repletos de recursos para
            impulsionar sua presença online - desde o básico essencial até o
            premium personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {planPrices.map((plan: any) => (
            <PricesCard plan={plan} />
          ))}
        </div>
      </div>
    </>
  );
}
