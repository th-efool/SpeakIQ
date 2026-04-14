import { cn } from "@/lib/utils";
import { Terminal, Play } from "lucide-react";
import type { SimulationLog } from "../hooks/useSimulation";

interface InterrogationLogProps {
  logs: SimulationLog[];
}

export function InterrogationLog({ logs }: InterrogationLogProps) {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest inline-flex items-center space-x-2">
            <span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
            <span>Phase 04 // Interrogation</span>
          </span>
        </div>

        <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden bg-white flex flex-col">
          <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between z-20 relative">
            <div className="flex items-center space-x-3">
              <Terminal className="h-4 w-4 text-gray-400" />
              <span className="font-mono text-xs text-gray-600 uppercase tracking-widest font-medium">System Interrogation Log</span>
            </div>
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300 pulse-calm"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row relative">
            <div className="absolute inset-0 bg-sys-grid opacity-10 pointer-events-none z-0"></div>
            <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden flex flex-col justify-start min-h-[300px]">
              <div className="w-full relative z-10 flex flex-col space-y-4 min-h-[150px]">
                {logs.length === 0 ? (
                  <div className="relative z-10 flex space-x-4 mb-4 opacity-70 blur-[0.5px]">
                    <div className="w-8 h-8 rounded-md bg-[#111111] flex items-center justify-center flex-shrink-0 text-white font-mono text-xs shadow-sm">SYS</div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-gray-400 mb-2 flex justify-between">
                        <span>T+ 00:18:42.11</span>
                        <span className="text-blue-500 border border-blue-200 bg-blue-50 px-1 rounded uppercase">ANALYSIS_NODE_3</span>
                      </div>
                      <p className="text-base font-medium tracking-tight text-[#111111] mb-4 bg-gray-50/80 backdrop-blur p-3 border border-gray-100 rounded shadow-sm">
                        "You avoided committing to a clear stance regarding the timeline — why?"
                      </p>
                    </div>
                  </div>
                ) : (
                  logs.map((log, index) => (
                    <div 
                      key={log.id} 
                      className={cn(
                        "relative z-10 flex space-x-4 mb-4 transition-all duration-700 shadow-sm",
                        index === 0 && "opacity-100 translate-y-0",
                        index === 1 && "opacity-70 blur-[0.5px] scale-[0.99]",
                        index === 2 && "opacity-30 blur-[1.5px] scale-[0.98]"
                      )}
                    >
                      <div className={cn("w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 text-white font-mono text-xs shadow-sm", index === 0 ? "bg-blue-600 flicker-once" : "bg-[#111111]")}>SYS</div>
                      <div className="flex-1">
                        <div className="font-mono text-xs text-gray-400 mb-2 flex justify-between">
                          <span>T+ {log.time}</span>
                          <span className="text-emerald-500 border border-emerald-200 bg-emerald-50 px-1 rounded uppercase">UPDATE_{log.target.toUpperCase()}</span>
                        </div>
                        <p className={cn("text-sm font-medium tracking-tight text-[#111111] mb-2 p-3 border border-gray-100 rounded", index === 0 ? "bg-white" : "bg-gray-50/80 backdrop-blur")}>
                          "{log.phrase}"
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="pl-12 border-l border-gray-200 ml-4 space-y-4 relative z-10 mt-8 pt-4">
                <div className="absolute -left-1 top-6 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
                <div className="bg-white border border-gray-200 p-4 rounded-md text-xs text-gray-600 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-[#111111] transition-colors"></div>
                  <div className="font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">Behavioral Evidence Trace</div>
                  <span className="font-light leading-relaxed">Use of passive voice increased by <span className="font-mono text-[#111111] bg-gray-100 px-1 rounded font-medium">40%</span>. Eye contact tracking maps reveal visual dispersion towards peripheral avatars 1.2s immediately preceding verbal response.</span>
                </div>
                <div className="flex items-center justify-between bg-blue-50/50 border border-blue-100 p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-colors">
                  <div className="flex items-center space-x-2 text-[#2563EB] text-xs font-medium">
                    <Play className="h-3 w-3" />
                    <span>Review XR Playback Segment</span>
                  </div>
                  <span className="font-mono text-xs text-blue-400">00:00:14</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:w-1/3 bg-[#FAFAFA]/80 backdrop-blur-sm font-mono text-xs z-10">
              <h4 className="text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Trace Data</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between hover:text-[#111111] transition-colors"><span>CONFIDENCE</span><span className="text-[#111111]">98.2%</span></li>
                <li className="flex justify-between hover:text-[#111111] transition-colors"><span>OCULAR_DISP</span><span className="text-red-500">+2.4 RAD</span></li>
                <li className="flex justify-between hover:text-[#111111] transition-colors"><span>VOICE_TENS</span><span className="text-[#111111]">ELEVATED</span></li>
                <li className="flex justify-between hover:text-[#111111] transition-colors"><span>COGNITIVE_LD</span><span className="text-[#111111]">LVL 4</span></li>
              </ul>
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="text-gray-400 mb-2">SYNTHESIS GRAPH</div>
                <div className="flex items-end h-12 space-x-1 opacity-50 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FAFAFA] opacity-50 group-hover:opacity-0 transition-opacity"></div>
                  {[20,30,50,90,60,40].map((h, i) => (
                    <div key={i} className={cn("w-full transition-all duration-300", h === 90 ? "bg-[#111111] relative pulse-calm-fast" : "bg-gray-300 hover:bg-gray-400")} style={{ height: `${h}%` }}>
                      {h === 90 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-[#111111]">TRIG</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
