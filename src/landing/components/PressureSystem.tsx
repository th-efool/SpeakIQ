import { Eye, VolumeX, MessageCircle } from "lucide-react";

export function PressureSystem() {
  return (
    <section className="py-32 bg-[#FAFAFA] relative z-10 border-t border-gray-200 bleed-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2 mb-4">
              <span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
              <span>Phase 01 // Induction</span>
            </span>
            <h2 className="text-3xl font-medium tracking-tight mb-4 text-[#111111]">Controlled environmental stress.</h2>
            <p className="text-gray-500 text-lg font-light">Pressure is computed, not random. XR instances induce stress through highly precise variables.</p>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-gray-400 border border-gray-200 bg-white px-3 py-2 rounded shadow-sm text-right transition-colors duration-300">
            <div className="mb-1 text-gray-500">ENV_CTRL_ACTIVE</div>
            <div className="text-emerald-500 flex items-center justify-end space-x-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>3 ACTIVE MODULES</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-6 rounded-md hover:border-gray-300 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-[#111111] transition-colors"></div>
            <div className="flex justify-between items-start mb-10">
              <Eye className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <div className="flex flex-col items-end space-y-2">
                <div className="w-8 h-4 bg-[#111111] rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 pulse-calm"></div>
                </div>
                <span className="font-mono text-xs text-gray-400">TRK_LOCK</span>
              </div>
            </div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1">Mod_01</div>
            <h3 className="font-medium text-sm mb-2 text-[#111111]">Audience Gaze Shifts</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">Simulates disinterest or intense scrutiny via synchronized avatar eye-tracking algorithms.</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-md hover:border-gray-300 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-blue-500 transition-colors"></div>
            <div className="flex justify-between items-start mb-10">
              <VolumeX className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <div className="flex flex-col items-end">
                <div className="font-mono text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded bg-gray-50 mb-1">AMP: HIGH</div>
                <span className="font-mono text-xs text-blue-500 pulse-calm">ISO_ACTV</span>
              </div>
            </div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1">Mod_02</div>
            <h3 className="font-medium text-sm mb-2 text-[#111111]">Silence Amplification</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">Acoustic isolation protocols that artificially extend pauses to induce social panic.</p>
            <div className="h-1 w-full bg-gray-100 rounded-full relative">
              <div className="absolute left-0 top-0 h-full w-[85%] bg-blue-500 rounded-full pulse-calm-fast"></div>
              <div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-md hover:border-red-200 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-red-500 transition-colors"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-bl-full pointer-events-none pulse-calm"></div>
            <div className="flex justify-between items-start mb-10 relative z-10">
              <MessageCircle className="h-5 w-5 text-red-500 pulse-calm" />
              <div className="flex flex-col items-end">
                <div className="font-mono text-xs text-red-500 bg-red-50 px-2 py-0.5 border border-red-100 rounded mb-1">INJECTING</div>
                <span className="font-mono text-xs text-red-400">VAR_HIGH</span>
              </div>
            </div>
            <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1 relative z-10">Mod_03</div>
            <h3 className="font-medium text-sm mb-2 text-[#111111] relative z-10">Algorithmic Interruptions</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light relative z-10">Injects verbal challenges precisely at moments of highest cognitive load based on variance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
