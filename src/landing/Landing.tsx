import { useSimulation } from './hooks/useSimulation';
import { GlobalBackground } from './components/GlobalBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PressureSystem } from './components/PressureSystem';
import { DataCapture } from './components/DataCapture';
import { ConflictInsight } from './components/ConflictInsight';
import { InterrogationLog } from './components/InterrogationLog';
import { SynthesisCTA } from './components/SynthesisCTA';
import { Footer } from './components/Footer';

export default function Landing() {
  const simulationState = useSimulation();

  return (
    <div className="bg-[#FAFAFA] text-[#111111] font-sans antialiased selection:bg-gray-200 selection:text-black relative overflow-x-hidden">
      <GlobalBackground />
      <Header latency={simulationState.latency} isFlashing={simulationState.isFlashing} />
      
      <main>
        <Hero simulationState={simulationState} />
        <ProblemSection />
        <PressureSystem />
        <DataCapture />
        <ConflictInsight isFlashing={simulationState.isFlashing} />
        <InterrogationLog logs={simulationState.logs} />
        <SynthesisCTA stats={simulationState.stats} activeEvent={simulationState.activeEvent} />
      </main>

      <Footer />
    </div>
  );
}
