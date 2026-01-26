 "use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Loader from "../components/Loader";
import BentoCard from "../components/BentoCard";
import ProjectCard from "../components/ProjectCard";
import { Transition } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Award, 
  Code, 
  Cpu, 
  Layout, 
  Sparkles, 
  Terminal,
  Layers,
  Zap,
  Box,
  ExternalLink,
  Target,
  CheckCircle2,
  AlertCircle,
  Mail,
  ChevronDown
} from "lucide-react";

const UNLOCK_TRANSITION = { 
  duration: 0.8, 
  ease: [0.16, 1, 0.3, 1] 
} as const; 

const DOODLE_TRANSITION = { 
  duration: 1, 
  ease: "easeInOut" 
} as const; 

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [exploredProjects, setExploredProjects] = useState<string[]>([]);
  const [showNudge, setShowNudge] = useState(false);
  
  const emphasisElements = useRef<Set<HTMLElement>>(new Set());
  const setEmphasisRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      emphasisElements.current.add(node);
    }
  }, []);

  const flagshipProjects = [
     {
      title: "Poppa Vitamins",
      desc: "UI-focused e-commerce prototype built with React and GSAP, emphasizing smooth scroll-based animations and interactive product sections. Designed to explore motion as a UX tool while maintaining responsive layouts and performance-conscious animation patterns.",
      stack: ["React", "E-commerce", "GSAP", "Responsive Design"],
      github: "https://github.com/Ayomide-cmd",
      live: "https://poppa-vitamins-web.vercel.app/"
    },
    {
      title: "Cakely",
      desc: "Frontend-focused e-commerce product built with React, Redux Toolkit, and a Node.js/Express API. Designed core ordering and cart flows, managed global state, and handled cross-origin client–server communication. Deployed frontend and backend separately with production environment configuration.",
      stack: ["Redux Toolkit", "Express.js", "CORS", "Rest API"],
      github: "https://github.com/Ayomide-cmd/cakely",
      live: "https://cakely-amber.vercel.app"
    },
    {
      title: "Taweret",
      desc: "Content-driven nonprofit website built with React and modern frontend tooling. Focused on semantic markup, responsive layouts, and component reuse, with motion-enhanced interactions to improve usability without sacrificing performance.",
      stack: ["Next.js", "TypeScript", "Framer Motion"],
      github: "https://github.com/Ayomide-cmd",
      live: "https://taweret.vercel.app/"
    }
  ];

  const supportingProjects = [
    {
      title: "Steflix",
      desc: "Movie streaming interface built with React and Redux, consuming the TMDB API. Implemented reusable content sliders, asynchronous data fetching, and UI state handling for loading and error scenarios.",
      stack: ["React", "Redux", "SASS", "API Integration"],
      github: "https://github.com/Ayomide-cmd",
      live: "https://steflix-eight.vercel.app/"
    },
    {
      title: "Peach Jump",
      desc: "Physics-based browser game built with vanilla JavaScript and HTML5 Canvas. Implements collision detection, dynamic physics interactions, and responsive DOM management to create an engaging interactive experience.",
      stack: ["JavaScript", "HTML5 Canvas", "Game Logic"],
      github: "https://github.com/Ayomide-cmd/PeachJump",
      live: "https://peach-jump.vercel.app/"
    }
  ];

  const allProjects = [...flagshipProjects, ...supportingProjects];

  const handleExplore = (title: string) => {
    if (!exploredProjects.includes(title)) {
      setExploredProjects(prev => [...prev, title]);
    }
  };

  const isFlagshipComplete = flagshipProjects.every(p => exploredProjects.includes(p.title));
  const isMissionComplete = exploredProjects.length === allProjects.length;

  useEffect(() => {
    if (loading || emphasisElements.current.size === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("text-pink-500");
          } else {
            entry.target.classList.remove("text-pink-500");
          }
        });
      },
      { threshold: 0.3 }
    );

    emphasisElements.current.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-mono">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 md:p-12 max-w-7xl mx-auto"
          >
            <section className="min-h-[90vh] flex flex-col justify-center mb-20">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4 text-white">
                Stephanie Ayomide Adetomiwa
              </h1>
              <div className="text-xl md:text-3xl uppercase tracking-widest text-[#f472b6] italic">
                <Typewriter
                  options={{
                    strings: ['Creative Coder', 'Web Developer.'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: "_",
                  }}
                />
              </div>
            </section>

            <section id="what-i-do" className="mb-32 relative">
              <div className="relative inline-block mb-12">
                <h2 className="text-6xl md:text-7xl font-handwriting text-[#f472b6] relative z-10">
                  What I Do
                </h2>

                <svg
                  className="absolute -inset-4 w-[120%] h-[140%] text-[#f472b6]/30 pointer-events-none"
                  viewBox="0 0 200 100"
                >
                  <motion.path
                    d="M20,50 Q25,10 100,15 Q175,20 180,50 Q175,90 100,85 Q25,80 20,50"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={DOODLE_TRANSITION}
                  />
                </svg>
              </div>

              <div className="max-w-4xl mb-20 relative">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light relative z-10">
  I am a frontend developer who pushes the web beyond static interfaces by combining{' '}
  <motion.span 
    initial={{ color: "rgb(209, 213, 219)" }} 
    whileInView={{ color: "#f472b6" }} 
    viewport={{ amount: 1, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7 }}
    className="font-bold inline"
  >
    WebGL
  </motion.span>,{' '}
  <motion.span 
    initial={{ color: "rgb(209, 213, 219)" }} 
    whileInView={{ color: "#f472b6" }} 
    viewport={{ amount: 1, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7 }}
    className="font-bold inline"
  >
    physics libraries
  </motion.span>, and{' '}
  <motion.span 
    initial={{ color: "rgb(209, 213, 219)" }} 
    whileInView={{ color: "#f472b6" }} 
    viewport={{ amount: 1, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7 }}
    className="font-bold inline"
  >
    performance-driven architecture
  </motion.span>. I enjoy writing code that transforms static pages into{' '}
  <motion.span 
    initial={{ color: "rgb(209, 213, 219)" }} 
    whileInView={{ color: "#f472b6" }} 
    viewport={{ amount: 1, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7 }}
    className="font-bold italic inline"
  >
    dynamic, tactile experiences
  </motion.span>.
  <br /><br />
  My work builds toward{' '}
  <motion.span 
    initial={{ color: "rgb(209, 213, 219)" }} 
    whileInView={{ color: "#f472b6" }} 
    viewport={{ amount: 1, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7 }}
    className="font-bold inline"
  >
    full-scale game development
  </motion.span>, applying these principles of animation, interactivity, and real-time computation to craft immersive, high-performance experiences on the web.
</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#1a1a1a] border border-[#1a1a1a]">
                {[
                  { 
                    icon: <Cpu size={40} />, 
                    title: "Visual Systems", 
                    body: "Implementing the logic behind particle systems, physics, and fluid interactions." 
                  },
                  { 
                    icon: <Zap size={40} />, 
                    title: "Kinetic Implementation", 
                    body: "Engineering high-performance motion using WebGL and GSAP to translate concepts into tactile realities." 
                  },
                  { 
                    icon: <Code size={40} />, 
                    title: "Web Architecture", 
                    body: "Scalable, performant frontend structures built with Next.js and TypeScript." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black p-10 flex flex-col gap-6 group transition-colors relative overflow-hidden">
                    <div className="text-[#f472b6]">{item.icon}</div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">{item.body}</p>
                    <motion.div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Zap size={16} className="text-[#f472b6]/20" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </section>

            <motion.section 
              id="project-intel"
              className="mt-32 mb-32 relative"
              onViewportLeave={() => { if(!isMissionComplete) setShowNudge(true) }}
            > 
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1a1a1a] pb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Target size={20} className="text-[#f472b6]" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#f472b6] font-bold">Active Mission</span>
                  </div>
                  <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">Project Intel</h2>
                  <p className="text-gray-500 text-xs uppercase mt-2 tracking-widest max-w-md leading-relaxed">
                    Access flagship fragments to unlock the full supporting briefing.
                  </p>
                </div>

                <div className="bg-[#111] p-4 border border-[#1a1a1a] min-w-50">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                    <span className={isMissionComplete ? "text-[#f472b6]" : "text-gray-500"}>
                      {isMissionComplete ? "Mission Successful" : "Data Collected"}
                    </span>
                    <span className="text-[#f472b6]">{exploredProjects.length}/{allProjects.length}</span>
                  </div>
                  <div className="h-1 w-full bg-[#1a1a1a]">
                    <motion.div 
                      className="h-full bg-[#f472b6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(exploredProjects.length / allProjects.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-[#1a1a1a] border border-[#1a1a1a]">
                {flagshipProjects.map((p, i) => (
                  <div key={p.title} className="group/flagship relative overflow-hidden">
                    <ProjectCard 
                      {...p} 
                      index={i} 
                      isExplored={exploredProjects.includes(p.title)}
                      onExplore={() => handleExplore(p.title)} 
                    />
                    {!isFlagshipComplete && (
                       <div className="absolute inset-0 pointer-events-none border border-[#f472b6]/0 group-hover/flagship:border-[#f472b6]/20 transition-colors duration-500 z-20" />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {isFlagshipComplete && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={UNLOCK_TRANSITION}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-4 py-12">
                      <div className="h-px flex-1 bg-[#1a1a1a]" />
                      <div className="flex items-center gap-2 text-[#f472b6]">
                        <ChevronDown size={16} className="animate-bounce" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Supporting Intel Unlocked</span>
                      </div>
                      <div className="h-px flex-1 bg-[#1a1a1a]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[#1a1a1a] border border-[#1a1a1a]">
                      {supportingProjects.map((p, i) => (
                        <ProjectCard 
                          key={p.title} 
                          {...p} 
                          index={i + 3} 
                          isExplored={exploredProjects.includes(p.title)}
                          onExplore={() => handleExplore(p.title)} 
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isMissionComplete && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 flex items-center justify-center gap-4 text-[#f472b6] bg-[#f472b6]/5 py-4 border border-[#f472b6]/20"
                  >
                    <CheckCircle2 size={20} />
                    <span className="text-xs uppercase tracking-[0.5em] font-bold">Mission Complete: Full Portfolio Unlocked.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>

            <section id="stack-section" className="mb-32 relative">
              <AnimatePresence>
                {showNudge && !isMissionComplete && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-20 right-0 flex items-center gap-3 text-gray-500 hover:text-[#f472b6] cursor-pointer transition-colors"
                    onClick={() => {
                      document.getElementById('project-intel')?.scrollIntoView({ behavior: 'smooth' });
                      setShowNudge(false);
                    }}
                  >
                    <AlertCircle size={14} className="animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest underline decoration-[#f472b6]/30">Unfinished Mission Above</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-6xl md:text-7xl font-handwriting text-[#f472b6] mb-12">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1 bg-[#1a1a1a] border border-[#1a1a1a]">
                {[
                  { name: "Next.js", icon: <Layers size={24} /> },
                  { name: "TypeScript", icon: <Terminal size={24} /> },
                  { name: "Framer Motion", icon: <Zap size={24} /> },
                  { name: "GSAP", icon: <Box size={24} /> },
                  { name: "CORS", icon: <Layout size={24} /> },
                  { name: "React JS", icon: <Cpu size={24} /> },
                  { name: "Git | Github", icon: <Github size={24} /> }
                ].map((tech) => (
                  <div key={tech.name} className="bg-black p-8 flex flex-col items-center justify-center gap-4 group transition-colors min-h-40" aria-label={`Technology: ${tech.name}`}>
                    <div className="text-gray-500 group-hover:text-[#f472b6] transition-all transform group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-center">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-12 gap-1 bg-[#1a1a1a] border border-[#1a1a1a] mb-32">
              <BentoCard className="col-span-12 md:col-span-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Award size={20} className="text-[#f472b6]" />
                  <span className="text-[9px] text-gray-500 font-mono">OCT 2025</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-white">AltSchool Africa</h4>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Diploma: Frontend Engineering</p>
                </div>
              </BentoCard>

              <BentoCard className="col-span-12 md:col-span-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Award size={20} className="text-[#f472b6]" />
                  <a href="https://certificate.terrahq.co/188448ADDNB2MJX290" target="_blank" rel="noopener noreferrer" aria-label="View Terra Learning Certificate">
                    <ExternalLink size={14} className="text-gray-600 hover:text-white transition" />
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-white">Terra Learning</h4>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Frontend Web Development (React JS)</p>
                </div>
              </BentoCard>

              <BentoCard className="col-span-12 flex justify-around items-center py-12">
                <a href="https://github.com/Ayomide-cmd" target="_blank" className="hover:text-[#f472b6] transition-all text-white flex flex-col items-center gap-2">
                  <Github size={28} />
                  <span className="text-[10px] uppercase tracking-[0.4em]">Github</span>
                </a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-[#f472b6] transition-all text-white flex flex-col items-center gap-2">
                  <Linkedin size={28} />
                  <span className="text-[10px] uppercase tracking-[0.4em]">Linkedin</span>
                </a>
              </BentoCard>
            </div>

            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[#1a1a1a] border border-[#1a1a1a]">
                <div className="bg-black p-10 md:p-16 flex flex-col justify-center relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#f472b6] font-bold mb-4 block">
                      Level Complete
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-8">
                      Let's build <br /> 
                      <span className="italic font-handwriting text-[#f472b6] lowercase">something</span> alive.
                    </h2>
                    <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] leading-relaxed max-w-xs">
                      Currently accepting new missions and creative collaborations for 2026.
                    </p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                    <SendIcon size={300} />
                  </div>
                </div>

                <div className="bg-black p-10 md:p-16 flex flex-col justify-between">
                  <div className="border-t border-[#1a1a1a]">
                    <a 
                      href="mailto:adetomiwasteph@gmail.com"
                      className="flex items-center justify-between py-12 group hover:px-4 transition-all duration-300 border-b border-[#1a1a1a]"
                    >
                      <span className="text-sm md:text-lg text-white font-bold group-hover:translate-x-2 transition-transform inline-block">
                        adetomiwasteph@gmail.com
                      </span>
                      <div className="text-gray-800 group-hover:text-[#f472b6] transition-colors">
                        <Mail size={24} />
                      </div>
                    </a>
                  </div>
                  <div className="mt-12 pt-8 flex justify-between items-center text-[9px] text-gray-700 uppercase tracking-widest">
                    <span>© 2026 S.A.A</span>
                    <span className="flex items-center gap-2">
                      Status: <span className="w-1.5 h-1.5 bg-[#f472b6] rounded-full animate-pulse" /> Available
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <ScrollIndicator />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-12 right-12 z-50 pointer-events-none"
        >
          <span className="text-[#f472b6] text-[10px] font-bold tracking-[0.4em] uppercase animate-pulse">
            Keep Scrolling 
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SendIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}