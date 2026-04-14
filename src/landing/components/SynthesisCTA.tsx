import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { SimulationStats } from "../hooks/useSimulation";

interface SynthesisCTAProps {
  stats: SimulationStats;
  activeEvent: string | null;
}

export function SynthesisCTA({ stats, activeEvent }: SynthesisCTAProps) {
  const navigate = useNavigate();
  const getWidth = (index: number) => {
    if (!activeEvent) return [25, 35, 15, 25][index];
    return Math.random() * 40 + 10;
  };

  return (
    <section className="py-32 bg-[#111111] text-white text-center px-6 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
        <div className="font-mono text-xs text-gray-500 mb-8 border border-gray-800 px-3 py-1 rounded-sm bg-black/50 hover:bg-black transition-colors">
          PARALLEL INSTANCES_ACTIVE: <span className="text-white">{stats.instances.toLocaleString()}</span>
        </div>

        <div className="w-full max-w-sm mb-12">
          <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 px-1">
            <span className="flicker-once">PROCESSING</span>
            <span>100% VECTOR_MAP</span>
          </div>
          <div className="flex space-x-0.5 h-1.5 w-full mx-auto rounded-full overflow-hidden bg-gray-900 group">
            <div className="bg-[#2563EB] h-full transition-all duration-1000" style={{ width: `${getWidth(0)}%` }}></div>
            <div className="bg-[#7C3AED] h-full transition-all duration-1000" style={{ width: `${getWidth(1)}%` }}></div>
            <div className="bg-[#EA580C] h-full transition-all duration-1000" style={{ width: `${getWidth(2)}%` }}></div>
            <div className="bg-[#059669] h-full transition-all duration-1000" style={{ width: `${getWidth(3)}%` }}></div>
          </div>
        </div>

        <h2 className="text-4xl font-medium tracking-tight mb-6 leading-tight">
          We don't give feedback.<br />We reconstruct how you perform.
        </h2>
        <p className="text-gray-400 mb-10 text-lg font-light max-w-lg">
          Enter the simulation. Face the reactive environment. Run the diagnostic.
        </p>
        
        <button onClick={() => navigate('/dashboard')} className="bg-white text-[#111111] px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 group relative overflow-hidden">
          <span className="relative z-10 flex items-center space-x-2 text-sm uppercase tracking-wide">
            <span>Start XR Simulation</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        <div className="flex items-center space-x-4 mt-8 font-mono text-xs text-gray-600">
          <span className="pulse-calm">SECURE INFRASTRUCTURE</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>V 2.4.0_BUILD.88</span>
        </div>
      </div>
    </section>
  );
}
