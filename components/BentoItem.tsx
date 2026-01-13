 "use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function BentoCard({ children, className, title }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group ${className}`}
    >
      {title && <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{title}</p>}
      {children}
    </motion.div>
  );
}