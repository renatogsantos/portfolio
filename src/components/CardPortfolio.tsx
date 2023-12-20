"use client"
import { LinkSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function CardPortfolio({
  image,
  title,
  description,
  link,
}: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, bounce: 0.2, type: "spring", delay: 0.5 }}
      className="flex flex-col gap-1 relative"
    >
      <div
        className="bg-slate-400 rounded xl:rounded-2xl aspect-video card-portfolio"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col mt-6">
        <Link href={link} target="_blank" aria-label={title}>
          <span className="text-md font-medium flex">
            <LinkSimple size={24} /> {title}
          </span>
        </Link>
        <span className="text-sm">{description}</span>
      </div>
    </motion.div>
  );
}
