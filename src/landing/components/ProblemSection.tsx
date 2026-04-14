export function ProblemSection() {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2">
            <span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
            <span>Phase 00 // Baseline Degradation</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-6 leading-snug text-[#111111]">
              You don't fail because of poor preparation.
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
              You fail because your clarity degrades the moment real social pressure is applied. We map exactly where your execution fractures when all eyes are on you.
            </p>
            <div className="flex flex-col space-y-3 font-mono text-xs text-gray-400 border-l border-gray-200 pl-4">
              <div className="flex justify-between max-w-xs"><span>ISOLATION_INDEX</span><span className="text-[#111111]">NOMINAL</span></div>
              <div className="flex justify-between max-w-xs"><span>PRESSURE_STATE</span><span className="text-red-500 pulse-calm-fast">ACTIVE</span></div>
            </div>
          </div>
          
          <div className="relative h-72 border border-gray-200 bg-[#FAFAFA] rounded-md p-8 flex flex-col justify-center space-y-8 overflow-hidden group">
            <div className="absolute inset-0 bg-micro-grid opacity-50 z-0"></div>
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-blue-500/30 z-10 animate-sweep pointer-events-none"></div>

            <div className="relative z-10 flex items-center space-x-4 opacity-100 transition-opacity">
              <div className="font-mono text-xs text-gray-400 w-12">T-00</div>
              <div className="flex-1 h-1.5 bg-[#111111] rounded-sm relative">
                <div className="absolute -top-4 right-0 font-mono text-xs text-[#111111]">100%</div>
              </div>
              <div className="font-mono text-xs text-gray-600 w-32 uppercase tracking-wide">Structured Thought</div>
            </div>
            <div className="relative z-10 flex items-center space-x-4 opacity-80">
              <div className="font-mono text-xs text-gray-400 w-12">T-14</div>
              <div className="flex-1 flex space-x-1">
                <div className="h-1.5 bg-gray-500 rounded-sm w-3/4"></div>
                <div className="h-1.5 bg-gray-500 rounded-sm w-1/4 opacity-50"></div>
              </div>
              <div className="font-mono text-xs text-gray-500 w-32 uppercase tracking-wide relative">
                Cognitive Load
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-red-400 bg-red-50 px-1 rounded">-14%</span>
              </div>
            </div>
            <div className="relative z-10 flex items-center space-x-4 opacity-90">
              <div className="font-mono text-xs text-red-500 w-12 pulse-calm">T-22</div>
              <div className="flex-1 flex space-x-1 relative">
                <div className="absolute -inset-y-3 left-[20%] w-[40%] bg-red-500/5 border border-red-500/20 rounded z-0"></div>
                <div className="h-1.5 bg-red-500 rounded-sm w-[15%] z-10"></div>
                <div className="h-1.5 bg-gray-300 rounded-sm w-[25%] z-10 pulse-calm-fast"></div>
                <div className="h-1.5 bg-red-500 rounded-sm w-[10%] z-10"></div>
                <div className="h-1.5 bg-gray-300 rounded-sm w-[35%] z-10"></div>
                <div className="h-1.5 bg-gray-200 rounded-sm w-[15%] z-10"></div>
              </div>
              <div className="font-mono text-xs text-red-500 w-32 uppercase tracking-wide relative">
                Pressure State
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-red-500 bg-red-100 px-1 rounded">FRAG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
