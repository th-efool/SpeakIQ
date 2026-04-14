import { Session } from "@/lib/mock-data";

export function SynthesisPanel({ session }: { session: Session }) {
  const avg = Math.round((session.clarity + session.depth + session.structure + session.confidence) / 4);

  return (
    <div className="rounded-lg border border-border/60 bg-card px-6 py-5 text-center relative overflow-hidden">
      {/* Blended color bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{
        background: "linear-gradient(90deg, hsl(210 80% 55%), hsl(270 60% 60%), hsl(30 80% 55%), hsl(152 45% 45%))"
      }} />

      <p className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono text-muted-foreground/50 mb-3">
        Synthesis
      </p>
      <p className="text-3xl font-bold font-mono tabular-nums text-foreground score-shimmer mb-2">{avg}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-mono mb-4">Composite Score</p>
      <div className="max-w-md mx-auto space-y-2">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Delivery demonstrates strong structural discipline paired with clear data articulation.
          Composure remains steady under questioning, though persuasive depth could leverage competitive framing.
        </p>
        <p className="text-[10px] font-mono text-muted-foreground/40">
          Pattern: Structure → Clarity positive correlation | Persuasion → Composure inverse tension
        </p>
      </div>
    </div>
  );
}
