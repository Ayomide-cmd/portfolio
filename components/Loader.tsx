"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-200 flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-sm">
      <div className="flex justify-between mb-4 font-mono text-[15px] tracking-[0.3em] text-[#f472b6]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            POLISHING PIXELS... ALMOST THERE!
          </motion.span>
          <span>{progress}%</span>
        </div>
        
        <div className="h-05 w-full bg-[#1a1a1a] overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#f472b6]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 flex justify-center"
        >
          <div className="w-1 h-1 bg-[#f472b6] rounded-full mx-1" />
          <div className="w-1 h-1 bg-[#f472b6] rounded-full mx-1" />
          <div className="w-1 h-1 bg-[#f472b6] rounded-full mx-1" />
        </motion.div>
      </div>
    </motion.div>
  );
}