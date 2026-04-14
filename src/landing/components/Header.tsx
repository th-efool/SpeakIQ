import { cn } from "@/lib/utils";
import { Cpu, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  latency: string;
  isFlashing: boolean;
}

export function Header({ latency, isFlashing }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-calm-fast"></div>
            <span className="font-medium tracking-tight text-sm uppercase text-[#111111]">SpeakXR</span>
          </div>
          <div className="hidden md:flex items-center space-x-3 border-l border-gray-200 pl-4 text-xs font-mono text-gray-400">
            <span className="flex items-center space-x-1">
              <Cpu className="h-3 w-3" />
              <span>NODE_04</span>
            </span>
            <span className={cn("flex items-center space-x-1 transition-colors duration-300", isFlashing ? "text-emerald-400" : "text-emerald-600")}>
              <Wifi className="h-3 w-3" />
              <span>LATENCY: {latency}ms</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className="font-mono text-xs text-[#111111] uppercase leading-none mb-0.5">SYS.STATUS</span>
            <span className="font-mono text-xs text-emerald-600 uppercase leading-none">PARALLEL_ACTIVE</span>
          </div>
          <button className="text-gray-500 hover:text-[#111111] transition-colors font-medium text-xs uppercase tracking-wide">Docs_</button>
          <button onClick={() => navigate('/dashboard')} className="bg-[#111111] text-white px-5 py-2 rounded-md font-medium text-xs uppercase tracking-wide hover:bg-gray-800 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <span>Initialize</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
