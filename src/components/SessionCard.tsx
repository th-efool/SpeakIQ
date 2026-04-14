import { useNavigate } from "react-router-dom";
import type { Session } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

function scoreColor(score: number) {
  if (score >= 85) return "text-success";
  if (score >= 70) return "text-foreground";
  return "text-warning";
}

function borderAccent(score: number) {
  if (score >= 85) return "border-l-success";
  if (score >= 70) return "border-l-primary/40";
  return "border-l-warning";
}

function dominantWeakness(session: Session) {
  const metrics = { clarity: session.clarity, depth: session.depth, structure: session.structure, confidence: session.confidence };
  const lowest = Object.entries(metrics).sort((a, b) => a[1] - b[1])[0];
  return lowest[0].toUpperCase();
}

function modeBadge(mode: string) {
  return (
    <span className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {mode}
    </span>
  );
}

export function SessionCard({ session }: { session: Session }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/sessions/${session.id}`)}
      className={cn(
        "card-interactive w-full text-left rounded-lg border border-border border-l-[3px] bg-card p-4 hover:border-primary/30 group",
        borderAccent(session.score)
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-card-foreground truncate">{session.topic}</p>
          <div className="mt-1.5 flex items-center gap-3 flex-wrap">
            <span className="text-[11px] text-muted-foreground">{session.date}</span>
            <span className="text-[11px] text-muted-foreground">{session.duration}</span>
            {modeBadge(session.mode)}
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-destructive/10 text-destructive font-medium">
              ↓ {dominantWeakness(session)}
            </span>
          </div>
          {/* Mini breakdown bars */}
          <div className="mt-2 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-muted-foreground">CLR</span>
              <div className="w-12 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary/60" style={{ width: `${session.clarity}%` }} />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-muted-foreground">CMP</span>
              <div className="w-12 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-success/60" style={{ width: `${session.confidence}%` }} />
              </div>
            </div>
            <span className="text-[9px] font-mono text-muted-foreground/60">CONF: {session.confidence}%</span>
          </div>
        </div>
        <span className={cn("text-xl font-bold tabular-nums font-mono", scoreColor(session.score))}>
          {session.score}
        </span>
      </div>
    </button>
  );
}
