import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface ConflictInsightProps {
  isFlashing: boolean;
}

export function ConflictInsight({ isFlashing }: ConflictInsightProps) {
  return (
    <section className="py-32 bg-[#FAFAFA] relative z-10 border-t border-gray-200 bleed-divider">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative">
        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest inline-flex items-center space-x-2 mb-4">
          <span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
          <span>Phase 03 // Insight Synthesis</span>
        </span>
        <h2 className="text-3xl font-medium tracking-tight mb-4 text-[#111111]">System Conflict Detected</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Parallel analysis reveals subconscious trade-offs. The human processing unit rarely optimizes all vectors simultaneously under induced stress.</p>
      </div>

      <div className="max-w-5xl mx-auto border border-gray-200 rounded-md bg-white p-12 relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-micro-grid opacity-30 z-0"></div>
        <svg className="absolute inset-0 w-full h-full text-gray-200 z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path className={cn("transition-all duration-300", isFlashing ? "stroke-blue-400 drop-shadow-sm" : "")} style={{ strokeWidth: isFlashing ? '0.8' : '0.3' }} d="M 20 50 Q 50 10 80 50" fill="none" stroke="currentColor" strokeDasharray="2 2" />
          <path className={cn("transition-all duration-300", isFlashing ? "stroke-blue-400 drop-shadow-sm" : "")} style={{ strokeWidth: isFlashing ? '0.8' : '0.3' }} d="M 20 50 Q 50 90 80 50" fill="none" stroke="currentColor" strokeDasharray="2 2" />
          <circle r="1" fill="#2563EB" className="opacity-60">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 20 50 Q 50 10 80 50" />
          </circle>
          <circle r="1" fill="#EA580C" className="opacity-60">
            <animateMotion dur="3.4s" repeatCount="indefinite" path="M 20 50 Q 50 90 80 50" />
          </circle>
        </svg>

        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className={cn("w-full md:w-1/3 bg-[#FAFAFA] border p-6 rounded-md shadow-sm relative group transition-all duration-300", isFlashing ? "border-blue-200 bg-blue-50/20" : "border-gray-100")}>
            <div className="absolute -top-3 left-4 font-mono text-xs bg-white border border-gray-200 text-gray-400 px-2 rounded">NODE_A // LOSS</div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-2 text-[#2563EB] mb-4">
                <ArrowDownRight className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest font-medium">Clarity Fracture</span>
              </div>
              <div className="font-mono text-4xl font-extralight text-gray-400 mb-2 transition-transform group-hover:scale-105">-24%</div>
              <p className="text-xs text-gray-500 leading-relaxed font-mono font-light">Structural breakdown in multi-part sentence construction.</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 text-center px-8 py-8 md:py-0 relative">
            <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-px bg-[#111111]/20"></div>
            <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-[#111111]/20"></div>
            <div className="inline-block font-mono text-xs text-red-500 bg-red-50 border border-red-100 px-2 py-0.5 rounded mb-4 pulse-calm-fast">CORRELATION IDENTIFIED</div>
            <p className="font-medium text-lg leading-snug text-[#111111]">
              You instinctively trade precision for engagement under pressure.
            </p>
          </div>

          <div className={cn("w-full md:w-1/3 bg-white border p-6 rounded-md shadow-sm relative group shadow-orange-500/5 transition-all duration-300", isFlashing ? "border-blue-200 bg-blue-50/20" : "border-gray-200")}>
            <div className="absolute -top-3 left-4 font-mono text-xs bg-white border border-gray-200 text-orange-500 px-2 rounded">NODE_B // COMP</div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-2 text-[#EA580C] mb-4">
                <ArrowUpRight className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest font-medium">Persuasion Spike</span>
              </div>
              <div className="font-mono text-4xl font-extralight text-[#111111] mb-2 transition-transform group-hover:scale-105">+18%</div>
              <p className="text-xs text-gray-500 leading-relaxed font-mono font-light">Unconscious volume amplification to maintain control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
