import { motion } from "framer-motion";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function CardPortfolio({
  image,
  title,
  description,
}: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, bounce: 0.2, type: "spring", delay: 0.5 }}
      className="flex flex-col gap-1"
    >
      <div
        className="bg-slate-400 rounded-lg aspect-video card-portfolio"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col">
        <span className="text-md font-medium">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    </motion.div>
  );
}
