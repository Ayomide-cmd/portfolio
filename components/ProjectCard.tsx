 "use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";

export interface ProjectProps {
  title: string;
  desc: string;
  stack?: string[];
  github: string;
  live: string;
  index: number;
  isExplored?: boolean;
  onExplore?: () => void;
}

export default function ProjectCard({
  title,
  desc,
  stack,
  github,
  live,
  index,
  isExplored,
  onExplore,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onExplore}
      className={`group relative bg-black p-8 border border-transparent transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[350px] ${
        isExplored ? "border-[#f472b6]/30" : "hover:border-white/10"
      }`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div
            className={`w-10 h-10 border flex items-center justify-center transition-colors ${
              isExplored
                ? "border-[#f472b6] bg-[#f472b6]/10"
                : "border-white/10 group-hover:border-[#f472b6]"
            }`}
          >
            {isExplored ? (
              <CheckCircle2 size={18} className="text-[#f472b6]" />
            ) : (
              <span className="text-[10px] text-gray-500">0{index + 1}</span>
            )}
          </div>
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 text-white group-hover:text-[#f472b6] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest mb-6">
          {desc}
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {stack?.map((tech) => (
            <span
              key={tech}
              className="text-[8px] border border-white/5 px-2 py-1 text-gray-600 uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {isExplored && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-[#f472b6]/5 pointer-events-none"
        />
      )}
    </motion.div>
  );
}