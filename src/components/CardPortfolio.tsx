"use client";
import { LinkSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  ready: boolean;
};

export default function CardPortfolio({
  image,
  title,
  description,
  link,
  ready,
}: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ douration: 1, type: "spring", bounce: 0.3 }}
      className="flex flex-col gap-1 relative"
    >
      <div
        className="bg-slate-400 rounded-lg aspect-video card-portfolio"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex items-center justify-between">
          <Link href={link} target="_blank" aria-label={title}>
            <span className="text-md font-medium flex gap-2">
              <LinkSimple size={24} /> {title}
            </span>
          </Link>
          {ready ? (
            <span className="bg-green-500/40 text-main-700 dark:text-white p-1 px-3 rounded-full">
              Online
            </span>
          ) : (
            <span className="bg-main-100/40 text-main-700 dark:text-white p-1 px-3 rounded-full">
              Em produção
            </span>
          )}
        </div>
        <span className="text-sm p-2">{description}</span>
      </div>
    </motion.div>
  );
}
