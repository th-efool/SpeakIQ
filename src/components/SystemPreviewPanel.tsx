import { sessions } from "@/lib/mock-data";

const experts = [
  { key: "clarity", label: "CLARITY", color: "hsl(var(--primary))", observation: "Strong articulation of key points", evidence: "T+0:28 — Revenue data clearly presented" },
  { key: "composure", label: "COMPOSURE", color: "hsl(var(--success))", observation: "Steady delivery under pressure", evidence: "T+1:15 — Calm response to direct question" },
  { key: "persuasion", label: "PERSUASION", color: "hsl(var(--warning))", observation: "Effective use of supporting data", evidence: "T+0:45 — Enterprise growth framing" },
  { key: "structure", label: "STRUCTURE", color: "hsl(var(--destructive))", observation: "Logical flow with clear transitions", evidence: "T+1:55 — Smooth metrics-to-retention bridge" },
] as const;

const scoreMap: Record<string, number> = {
  clarity: sessions[0]?.clarity ?? 85,
  composure: sessions[0]?.confidence ?? 80,
  persuasion: sessions[0]?.depth ?? 78,
  structure: sessions[0]?.structure ?? 82,
};

const confMap: Record<string, number> = {
  clarity: 94, composure: 87, persuasion: 81, structure: 90,
};

export function SystemPreviewPanel() {
  return (
    <div className="card-interactive rounded-lg border border-border bg-card p-6">
      <div className="flex items-center gap-3 mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Live Analysis Surface</p>
        <span className="text-[9px] font-mono text-primary/60 uppercase tracking-wider">ACTIVE</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experts.map((expert, i) => (
          <div
            key={expert.key}
            className="rounded-md border border-border/60 bg-background/50 p-4 hover:border-primary/30 transition-all duration-300 group"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono mb-2" style={{ color: expert.color, opacity: 0.7 }}>
              {expert.label}
            </p>
            <p className="text-2xl font-bold font-mono tabular-nums text-card-foreground score-shimmer">
              {scoreMap[expert.key]}
            </p>
            <p className="text-[10px] font-mono text-muted-foreground/60 mt-1">
              CONF: {confMap[expert.key]}%
            </p>
            <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
              {expert.observation}
            </p>
            <p className="text-[9px] font-mono text-muted-foreground/50 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              {expert.evidence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
