import { Session } from "@/lib/mock-data";

interface Conflict {
  from: string;
  to: string;
  fromColor: string;
  toColor: string;
  insight: string;
}

function detectConflicts(session: Session): Conflict[] {
  const conflicts: Conflict[] = [];
  // Clarity low but depth high
  if (session.clarity < session.depth) {
    conflicts.push({
      from: "CLARITY", to: "PERSUASION",
      fromColor: "hsl(210 80% 55%)", toColor: "hsl(30 80% 55%)",
      insight: "Precision drops while persuasion compensates"
    });
  }
  // Structure high but confidence low
  if (session.structure > session.confidence + 5) {
    conflicts.push({
      from: "STRUCTURE", to: "COMPOSURE",
      fromColor: "hsl(152 45% 45%)", toColor: "hsl(270 60% 60%)",
      insight: "Strong framework masks subtle delivery tension"
    });
  }
  // Always show at least one conflict for demo
  if (conflicts.length === 0) {
    conflicts.push({
      from: "CLARITY", to: "COMPOSURE",
      fromColor: "hsl(210 80% 55%)", toColor: "hsl(270 60% 60%)",
      insight: "High clarity correlates with steady composure — reinforcing pattern"
    });
  }
  return conflicts;
}

export function ConflictLayer({ session }: { session: Session }) {
  const conflicts = detectConflicts(session);

  return (
    <div className="rounded-lg border border-border/40 bg-card/50 px-5 py-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono text-muted-foreground/50 mb-3">
        Cross-Agent Signal Conflicts
      </p>
      <div className="space-y-2.5">
        {conflicts.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold" style={{ color: c.fromColor }}>{c.from}</span>
            <div className="flex-1 h-px relative">
              <div className="absolute inset-0" style={{
                background: `linear-gradient(90deg, ${c.fromColor}, transparent 30%, transparent 70%, ${c.toColor})`
              }} />
              <div className="absolute inset-0 opacity-40" style={{
                background: `linear-gradient(90deg, ${c.fromColor}, ${c.toColor})`,
                filter: "blur(2px)"
              }} />
            </div>
            <span className="text-[10px] font-mono font-bold" style={{ color: c.toColor }}>{c.to}</span>
          </div>
        ))}
        <p className="text-[10px] text-muted-foreground/60 italic font-mono leading-relaxed mt-1">
          "{conflicts[0].insight}"
        </p>
      </div>
    </div>
  );
}
