import { ArrowUpRight, ArrowDownRight, Circle } from "lucide-react";

export function DataCapture() {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        <div className="md:col-span-4 relative transition-colors duration-300 rounded-md p-2 -ml-2">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2 mb-4">
            <span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
            <span>Phase 02 // Extraction</span>
          </span>
          <h2 className="text-3xl font-medium tracking-tight mb-8 text-[#111111]">Real-time signal extraction.</h2>
          
          <div className="space-y-1 font-mono text-xs text-[#111111] border border-gray-200 bg-[#FAFAFA] p-4 rounded-md shadow-sm">
            <div className="flex justify-between items-end py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors px-1 -mx-1 rounded">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase">Metric</span>
                <span>Speech Rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">184 wpm</span>
                <span className="text-red-500 bg-red-50 px-1 rounded flex items-center"><ArrowUpRight className="h-3 w-3" /> 12%</span>
              </div>
            </div>
            <div className="flex justify-between items-end py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors px-1 -mx-1 rounded">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase">Metric</span>
                <span>Response Latency</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">1.2s</span>
                <span className="text-emerald-500 bg-emerald-50 px-1 rounded flex items-center"><ArrowDownRight className="h-3 w-3" /> 0.1s</span>
              </div>
            </div>
            <div className="flex justify-between items-end py-2 border-b border-gray-200 relative overflow-hidden px-1 -mx-1 rounded">
              <div className="absolute inset-0 bg-red-50/30 z-0 pulse-calm"></div>
              <div className="flex flex-col relative z-10">
                <span className="text-red-400 text-xs uppercase">Anomaly</span>
                <span>Filler Density</span>
              </div>
              <div className="flex items-center space-x-3 relative z-10">
                <span className="text-[#111111] font-medium">8.4%</span>
                <span className="text-red-500 bg-red-100 px-1 rounded flex items-center flicker-once">ERR</span>
              </div>
            </div>
            <div className="flex justify-between items-end py-2 px-1 -mx-1 hover:bg-gray-100 transition-colors rounded">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase">State</span>
                <span>Pitch Variance</span>
              </div>
              <span className="text-blue-500 font-medium tracking-wide">NOMINAL</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 relative">
          <div className="relative w-full h-56 border border-gray-200 bg-white rounded-md overflow-hidden shadow-sm flex flex-col group">
            <div className="absolute inset-0 bg-micro-grid opacity-20 pointer-events-none z-0"></div>
            
            <div className="h-8 border-b border-gray-100 bg-gray-50 flex justify-between items-center px-4 relative z-10">
              <div className="flex items-center space-x-3 font-mono text-xs text-gray-500">
                <span className="flex items-center space-x-1"><Circle className="h-2.5 w-2.5 fill-red-500 text-red-500 pulse-calm-fast" /><span>REC</span></span>
                <span className="border-l border-gray-300 pl-3">CH_01: AUDIO_CORE</span>
              </div>
              <span className="font-mono text-xs text-gray-400">DBFS: -12.4</span>
            </div>

            <div className="flex-1 relative w-full flex items-end px-4 space-x-[2px] pb-6 z-10">
              {/* Normal bars */}
              {[20,30,50,40,60,80,90,100,70,50,30,20,10,10,10].map((h, i) => (
                <div key={`n${i}`} className="w-1 bg-gray-200 hover:bg-gray-400 transition-colors" style={{ height: `${h}%` }}></div>
              ))}
              
              <div className="absolute bottom-6 top-2 left-[20%] w-[25%] bg-red-50/50 border-x border-red-200 flex flex-col justify-between z-0 pulse-calm">
                <span className="text-xs font-mono text-red-500 bg-white px-1 self-start border border-red-100 ml-1 mt-1 rounded shadow-sm relative z-20">EVENT: SILENCE_AMP</span>
              </div>
              
              {/* Red bars */}
              {[5,5,2,2,2,2,5,10,30].map((h, i) => (
                <div key={`r${i}`} className="w-1 bg-red-300 z-10" style={{ height: `${h}%` }}></div>
              ))}
              <div className="w-1 bg-red-500 z-10 relative" style={{ height: '80%' }}>
                <div className="absolute -top-5 -left-4 font-mono text-xs text-red-500 bg-white border border-red-200 px-1 rounded shadow-sm">SPIKE</div>
              </div>
              {[90,60,40,20].map((h, i) => (
                <div key={`r2${i}`} className="w-1 bg-red-300 z-10" style={{ height: `${h}%` }}></div>
              ))}
              
              {/* Recovery bars */}
              {[30,40,60,80,90,70,40,20,10,30].map((h, i) => (
                <div key={`g${i}`} className="w-1 bg-gray-300 ml-0.5" style={{ height: `${h}%` }}></div>
              ))}
              
              <div className="absolute top-0 bottom-6 left-[35%] w-[1.5px] bg-[#2563EB] z-20 group-hover:left-[40%] transition-all duration-1000 ease-in-out">
                <div className="w-2.5 h-2.5 border-2 border-[#2563EB] bg-white rounded-full absolute -top-1 -left-[4.5px]"></div>
              </div>
            </div>

            <div className="absolute bottom-0 w-full h-6 border-t border-gray-200 bg-gray-50 flex justify-between items-center px-4 font-mono text-xs text-gray-400 z-10">
              <span className="relative pt-1.5">00:14:15</span>
              <span className="relative pt-1.5 text-blue-500 font-medium">00:14:22</span>
              <span className="relative pt-1.5">00:14:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
