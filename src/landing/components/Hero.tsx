import { LivePreviewPanel } from './LivePreviewPanel';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SimulationState } from '../hooks/useSimulation';

interface HeroProps {
  simulationState: SimulationState;
}

export function Hero({ simulationState }: HeroProps) {
  const navigate = useNavigate();
  return (
    <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-3xl mb-16 relative">
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs bg-gray-100 text-gray-500 px-2 py-1 border border-gray-200 rounded uppercase tracking-widest flex items-center space-x-2 transition-all duration-300">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-calm"></span>
            <span>Session_Active</span>
          </span>
          <span className="font-mono text-xs text-gray-400">IDX // 894.22.A</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6 text-[#111111] relative">
          Train how you speak<br />when you are being judged.
          <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-gray-300 to-transparent animate-pulse"></div>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-light">
          Simulate high-stakes stage and interview environments in XR. The system reads your baseline, triggers real-time audience reactions, and forces you to adapt.
        </p>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/dashboard')} className="bg-[#111111] text-white px-6 py-3 rounded-md font-medium text-sm flex items-center space-x-2 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
            <span>Enter Simulation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="flex flex-col text-xs font-mono text-gray-400 border-l border-gray-200 pl-4">
            <span>REQ: XR_HEADSET</span>
            <span className="text-gray-500">SYS_READY</span>
          </div>
        </div>

        <div className="mt-10 space-y-2.5 border-l border-gray-200 pl-5 relative max-w-lg">
          <div className="absolute -left-px top-0 w-px h-1/3 bg-gray-400"></div>
          <div className="font-mono text-xs text-gray-500 flex items-start space-x-4">
            <span className="text-[#111111] w-14 flex-shrink-0">SEQ_01</span>
            <span>User enters XR stage or panel interview environment.</span>
          </div>
          <div className="font-mono text-xs text-gray-500 flex items-start space-x-4">
            <span className="text-[#111111] w-14 flex-shrink-0">SEQ_02</span>
            <span>System triggers real-time audience behaviors and AI interruptions.</span>
          </div>
          <div className="font-mono text-xs text-gray-500 flex items-start space-x-4">
            <span className="text-red-500 w-14 flex-shrink-0 pulse-calm">SEQ_03</span>
            <span>Environmental pressure scales dynamically if hesitation is detected.</span>
          </div>
        </div>
      </div>

      <LivePreviewPanel {...simulationState} />
    </section>
  );
}
