"use client";
import { motion } from "framer-motion";

type CardProps = {
  icon: any;
  title: string;
  description: string;
};

export default function CardText({ icon, title, description }: CardProps) {
  return (
    <>
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
        className="flex flex-col gap-4 p-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            bounce: 0.6,
            type: "spring",
            delay: 0.5,
          }}
          className="card-icon"
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl lg:text-3xl font-bold text-main-700 dark:text-white">
          {title}
        </h3>
        <p className="font-medium text-main-700 dark:text-white">
          {description}
        </p>
      </motion.div>
    </>
  );
}
