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
    <Link href={link} target="_blank" aria-label={title}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, bounce: 0.2, type: "spring", delay: 0.5 }}
        className="flex flex-col gap-1 relative"
      >
        <div
          className="bg-slate-400 rounded-3xl aspect-video card-portfolio"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex flex-col mt-6">
          <span className="text-md font-medium">{title}</span>
          <span className="text-sm">{description}</span>
        </div>
      </motion.div>
    </Link>
  );
}
