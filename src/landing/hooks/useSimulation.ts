import { useState, useEffect } from 'react';

const CATEGORIES = ['clarity', 'composure', 'persuasion', 'structure'] as const;
type Category = typeof CATEGORIES[number];

const SYS_PHRASES = [
  "Re-evaluating primary metrics due to high variance anomaly.",
  "Syntax fragmentation confirmed in secondary buffer.",
  "Compensatory acoustic shift identified; mapping trajectory.",
  "Baseline physical lock maintained despite pressure surge.",
  "Ocular dispersion widening to peripheral vectors.",
  "Volume amplification detected in persuasion framework."
];

export interface SimulationLog {
  id: number;
  time: string;
  target: Category;
  phrase: string;
}

export interface SimulationStats {
  load: number;
  vectors: number;
  instances: number;
  time: string;
}

export interface SimulationState {
  activeEvent: Category | null;
  isFlashing: boolean;
  latency: string;
  scores: Record<Category, number>;
  confidence: Record<Category, string | number>;
  stats: SimulationStats;
  logs: SimulationLog[];
}

export function useSimulation(): SimulationState {
  const [activeEvent, setActiveEvent] = useState<Category | null>(null);
  const [isFlashing, setIsFlashing] = useState(false);
  const [latency, setLatency] = useState('12.0');
  const [scores, setScores] = useState({ clarity: 62, composure: 88, persuasion: 94, structure: 41 });
  const [confidence, setConfidence] = useState<Record<Category, string | number>>({ clarity: 98, composure: 92, persuasion: 87, structure: 95 });
  const [stats, setStats] = useState<SimulationStats>({ load: 24, vectors: 4092, instances: 4092, time: '00:14:22.4' });
  const [logs, setLogs] = useState<SimulationLog[]>([]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const loop = () => {
      const target = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
      const newLatency = (Math.random() * 15 + 5).toFixed(1);
      const newConfidence = (Math.random() * 10 + 89).toFixed(1);
      const targetScore = Math.floor(Math.random() * 45 + 50);
      const selectedPhrase = SYS_PHRASES[Math.floor(Math.random() * SYS_PHRASES.length)];

      setActiveEvent(target);
      setIsFlashing(true);
      setLatency(newLatency);

      const d = new Date();
      const timeStr = d.toISOString().substring(11, 23);
      
      setLogs(prev => {
        const newLog: SimulationLog = { id: Date.now(), time: timeStr, target, phrase: selectedPhrase };
        return [newLog, ...prev].slice(0, 3);
      });

      setTimeout(() => {
        setScores(prev => ({ ...prev, [target]: targetScore }));
        setConfidence(prev => ({ ...prev, [target]: newConfidence }));
        setIsFlashing(false);
      }, 400);

      setTimeout(() => {
        setStats({
          load: Math.floor(Math.random() * 35 + 15),
          vectors: Math.floor(Math.random() * 5000 + 3000),
          instances: Math.floor(Math.random() * 1000 + 4000),
          time: `00:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}.${Math.floor(Math.random()*9)}`
        });
        setTimeout(() => setActiveEvent(null), 500);
      }, 700);

      timeoutId = setTimeout(loop, Math.random() * 2500 + 2000);
    };

    timeoutId = setTimeout(loop, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return { activeEvent, isFlashing, latency, scores, confidence, stats, logs };
}
