  "use client";

export default function BentoCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-[#0a0a0a] p-8 relative flex flex-col transition-colors duration-300 hover:bg-[#0f0f0f] group ${className}`}>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />
      {children}
    </div>
  );
}