import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Session } from "@/lib/mock-data";
import { Eye, Shield, Zap, LayoutGrid, TrendingUp, TrendingDown } from "lucide-react";

interface ExpertConfig {
  key: string;
  label: string;
  icon: React.ElementType;
  color: string;
  tintClass: string;
  borderClass: string;
  scoreKey: keyof Session;
  confidence: number;
  delta: number;
  observation: string;
  evidence: string;
  evidenceTime: string;
  suggestion: string;
}

function useCountUp(target: number, duration = 800, delay = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return value;
}

function ExpertColumn({ expert, session, isActive, onSelectEvidence, onClickAgent, delay }: {
  expert: ExpertConfig;
  session: Session;
  isActive: boolean;
  onSelectEvidence: (time: string) => void;
  onClickAgent?: () => void;
  delay: number;
}) {
  const score = useCountUp(session[expert.scoreKey] as number, 800, delay);
  const Icon = expert.icon;
  const rawScore = session[expert.scoreKey] as number;

  return (
    <div
      onClick={onClickAgent}
      className={cn(
        "rounded-lg border bg-background/50 p-4 transition-all duration-300 group relative overflow-hidden cursor-pointer hover:bg-accent/30",
        expert.borderClass,
        isActive && "ring-1 ring-primary/20"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle tint overlay */}
      <div className={cn("absolute inset-0 opacity-[0.03] pointer-events-none", expert.tintClass)} />

      {/* Faint grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      <div className="relative z-10 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Icon className="h-3.5 w-3.5" style={{ color: expert.color }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono" style={{ color: expert.color }}>
              {expert.label}
            </span>
          </div>
          <span className="text-[9px] font-mono text-muted-foreground/60">
            CONF: {expert.confidence}%
          </span>
        </div>

        {/* Score + Delta */}
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold font-mono tabular-nums text-card-foreground score-shimmer">
            {score}
          </p>
          <div className={cn(
            "flex items-center gap-0.5 text-[10px] font-mono",
            expert.delta >= 0 ? "text-success" : "text-destructive"
          )}>
            {expert.delta >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {expert.delta >= 0 ? "+" : ""}{expert.delta}
          </div>
        </div>

        {/* Score bar */}
        <div className="h-1 w-full rounded-full bg-accent">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${rawScore}%`, backgroundColor: expert.color }}
          />
        </div>

        {/* Observation */}
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          {expert.observation}
        </p>

        {/* Evidence */}
        <button
          onClick={() => onSelectEvidence(expert.evidenceTime)}
          className="w-full text-left rounded bg-accent/30 px-2.5 py-2 hover:bg-accent/50 transition-colors"
        >
          <p className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider mb-0.5">Evidence</p>
          <p className="text-[10px] font-mono" style={{ color: expert.color }}>
            T+{expert.evidenceTime}
          </p>
          <p className="text-[10px] text-muted-foreground/80 mt-0.5 leading-relaxed">
            {expert.evidence}
          </p>
        </button>

        {/* Suggestion */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-wider mb-0.5">Suggestion</p>
          <p className="text-[10px] text-muted-foreground/70 leading-relaxed italic">
            {expert.suggestion}
          </p>
        </div>
      </div>
    </div>
  );
}

const expertConfigs: ExpertConfig[] = [
  {
    key: "clarity", label: "CLARITY", icon: Eye,
    color: "hsl(210 80% 55%)", tintClass: "bg-blue-500", borderClass: "border-blue-500/10 hover:border-blue-500/30",
    scoreKey: "clarity", confidence: 94, delta: 3,
    observation: "Strong articulation of key points with precise vocabulary. Data references are immediate and specific.",
    evidence: "Revenue came in at $4.2 million — 23% increase",
    evidenceTime: "0:28",
    suggestion: "Consider adding brief pauses after major data points to allow absorption."
  },
  {
    key: "composure", label: "COMPOSURE", icon: Shield,
    color: "hsl(270 60% 60%)", tintClass: "bg-purple-500", borderClass: "border-purple-500/10 hover:border-purple-500/30",
    scoreKey: "confidence", confidence: 87, delta: 2,
    observation: "Steady delivery under pressure. Calm response to direct question about enterprise pipeline.",
    evidence: "Of course. We closed 12 new enterprise accounts…",
    evidenceTime: "1:15",
    suggestion: "Maintain eye contact longer during Q&A to project additional confidence."
  },
  {
    key: "persuasion", label: "PERSUASION", icon: Zap,
    color: "hsl(30 80% 55%)", tintClass: "bg-orange-500", borderClass: "border-orange-500/10 hover:border-orange-500/30",
    scoreKey: "depth", confidence: 81, delta: -1,
    observation: "Effective use of supporting data. Enterprise growth framing is compelling but lacks competitive context.",
    evidence: "Growth primarily driven by expansion in enterprise segment",
    evidenceTime: "0:45",
    suggestion: "Add competitive benchmarks to strengthen the persuasive impact of growth claims."
  },
  {
    key: "structure", label: "STRUCTURE", icon: LayoutGrid,
    color: "hsl(152 45% 45%)", tintClass: "bg-green-500", borderClass: "border-green-500/10 hover:border-green-500/30",
    scoreKey: "structure", confidence: 90, delta: 4,
    observation: "Logical flow with clear transitions. Smooth bridge from metrics to retention topic.",
    evidence: "Moving to retention metrics, our net revenue retention sits at 118%",
    evidenceTime: "1:55",
    suggestion: "Add a brief summary before transitioning to the roadmap section."
  },
];

const agentDetails: Record<string, { good: string[]; bad: string[] }> = {
  clarity: {
    good: ["Precise vocabulary and data references", "Immediate citation of specific numbers", "Clean sentence structure throughout"],
    bad: ["Could pause more after key data points", "Some jargon may alienate non-technical listeners"],
  },
  composure: {
    good: ["Calm and steady under direct questioning", "No filler words during pressure moments", "Confident tone maintained throughout"],
    bad: ["Eye contact dropped briefly during tough Q&A", "Slight rush when transitioning after challenges"],
  },
  persuasion: {
    good: ["Strong use of supporting data", "Enterprise growth framing is compelling", "Effective emotional appeals"],
    bad: ["Lacks competitive context for claims", "Could strengthen call-to-action moments"],
  },
  structure: {
    good: ["Logical flow with clear transitions", "Smooth bridge between topic areas", "Good use of signposting language"],
    bad: ["Missing summary before roadmap section", "Q&A transition felt abrupt"],
  },
};

export function ParallelExpertPanel({ session, onSelectTime, onSelectAgent }: {
  session: Session;
  onSelectTime: (time: string) => void;
  onSelectAgent?: (agent: { name: string; color: string; score: number; good: string[]; bad: string[]; suggestion: string }) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Parallel Expert Analysis</p>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {expertConfigs.map((expert, i) => (
          <ExpertColumn
            key={expert.key}
            expert={expert}
            session={session}
            isActive={false}
            onSelectEvidence={onSelectTime}
            onClickAgent={() => onSelectAgent?.({
              name: expert.label,
              color: expert.color,
              score: session[expert.scoreKey] as number,
              good: agentDetails[expert.key]?.good ?? [],
              bad: agentDetails[expert.key]?.bad ?? [],
              suggestion: expert.suggestion,
            })}
            delay={200 + i * 100}
          />
        ))}
      </div>
    </div>
  );
}
