import { cn } from "@/lib/utils";
import { AnimatedNumber } from "./AnimatedNumber";
import { Eye, Heart, Target, Layers, ArrowUpRight, ArrowDownRight, Minus, Clock } from "lucide-react";
import type { SimulationStats } from "../hooks/useSimulation";

interface LivePreviewPanelProps {
  activeEvent: string | null;
  isFlashing: boolean;
  scores: Record<string, number>;
  confidence: Record<string, string | number>;
  stats: SimulationStats;
}

export function LivePreviewPanel({ activeEvent, isFlashing, scores, confidence, stats }: LivePreviewPanelProps) {
  
  const iconMap: Record<string, React.ElementType> = { clarity: Eye, composure: Heart, persuasion: Target, structure: Layers };
  const colorMap: Record<string, string> = { clarity: '#2563EB', composure: '#7C3AED', persuasion: '#EA580C', structure: '#059669' };
  const deltaMap: Record<string, { icon: React.ElementType; value: string; positive: boolean }> = {
    clarity: { icon: ArrowDownRight, value: '2.4', positive: false },
    composure: { icon: Minus, value: '0.0', positive: true },
    persuasion: { icon: ArrowUpRight, value: '4.1', positive: true },
    structure: { icon: ArrowDownRight, value: '8.7', positive: false },
  };
  const descMap: Record<string, string> = {
    clarity: 'Syntax fragmentation detected upon high-pressure interruption.',
    composure: 'Physical baseline maintained despite elevated cognitive load.',
    persuasion: 'Volume and pitch actively adjusted to retain authority.',
    structure: 'Core argument systematically abandoned post-interruption.',
  };
  const levelMap: Record<string, string> = { clarity: '3', composure: '4', persuasion: '5', structure: '2' };

  const renderColumn = (id: string, title: string) => {
    const isActive = activeEvent === id;
    const colorHex = colorMap[id];
    const Icon = iconMap[id];
    const delta = deltaMap[id];
    const DeltaIcon = delta.icon;

    return (
      <div key={id} className="p-5 relative overflow-hidden hover:bg-[#FAFAFA] transition-colors z-10">
        <div className={cn(
          "absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none",
          isActive && isFlashing ? "opacity-100 flicker-once" : "opacity-0"
        )}>
          <div className="font-mono text-xs bg-white border px-2 py-1 rounded shadow-sm flex items-center space-x-1.5" style={{ borderColor: `${colorHex}4d`, color: colorHex }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-calm-fast" style={{ backgroundColor: colorHex }}></span>
            <span>PROCESSING...</span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-2">
            <Icon className="h-4 w-4" style={{ color: colorHex }} />
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: colorHex }}>{title}</span>
          </div>
          <div className="text-right">
            <div className={cn("font-mono text-xs transition-all duration-300", isActive && isFlashing ? "text-[#111111]" : "text-gray-400")}>
              CONF. {confidence[id]}%
            </div>
            <div className={cn("font-mono text-xs flex items-center justify-end", delta.positive ? "text-emerald-500" : "text-red-500")}>
              <DeltaIcon className="h-3 w-3" /> {delta.value}
            </div>
          </div>
        </div>

        <div className="flex items-end space-x-2 mb-4">
          <AnimatedNumber value={scores[id]} className="font-mono text-4xl font-extralight text-[#111111] leading-none transition-all duration-300" />
          <div className="flex flex-col mb-0.5">
            <span className="font-mono text-xs text-gray-400 border-b border-gray-200 uppercase leading-none pb-0.5 mb-0.5">Idx</span>
            <span className="font-mono text-xs text-gray-500 leading-none">Lvl. {levelMap[id]}</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-6 min-h-[48px] leading-relaxed font-light">{descMap[id]}</p>
      </div>
    );
  };

  return (
    <div className="border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col relative group">
      <div className="bg-[#FAFAFA] border-b border-gray-200 p-3 flex items-center justify-between relative z-20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 pulse-calm-fast"></span>
            <span className="font-mono text-xs text-gray-600">LIVE EXTRACTION</span>
          </div>
          <span className="font-mono text-xs text-gray-400 border-l border-gray-200 pl-4">SESSION_094 // PR_ENV</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className={cn("font-mono text-xs hidden md:inline-block transition-colors duration-300", activeEvent && isFlashing ? "text-[#111111] flicker-once" : "text-gray-400")}>
            {activeEvent && isFlashing ? `BUFFER: RE-SYNC [${activeEvent.toUpperCase()}]` : "BUFFER: SYNCHRONIZED"}
          </span>
          <div className="font-mono text-xs text-[#111111] bg-gray-100 px-3 py-1 rounded border border-gray-200 flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>T+ [{stats.time}]</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 relative bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent animate-scan"></div>
        </div>
        {renderColumn('clarity', 'Clarity')}
        {renderColumn('composure', 'Composure')}
        {renderColumn('persuasion', 'Persuasion')}
        {renderColumn('structure', 'Structure')}
      </div>

      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex justify-between items-center text-xs font-mono text-gray-400 z-20">
        <div className="flex space-x-4">
          <span>SYS_LOAD: {stats.load}%</span>
          <span>VECTORS: {stats.vectors.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="w-1 h-1 bg-[#111111] rounded-full"></span>
          <span className="w-1 h-1 bg-gray-400 rounded-full pulse-calm"></span>
        </div>
      </div>
    </div>
  );
}
