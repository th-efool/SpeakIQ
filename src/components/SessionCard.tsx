import { useNavigate } from "react-router-dom";
import type { Session } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

function scoreColor(score: number) {
  if (score >= 85) return "text-success";
  if (score >= 70) return "text-foreground";
  return "text-warning";
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
      className="card-interactive w-full text-left rounded-lg border border-border bg-card p-4 hover:border-primary/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-card-foreground truncate">{session.topic}</p>
          <div className="mt-1.5 flex items-center gap-3">
            <span className="text-[11px] text-muted-foreground">{session.date}</span>
            <span className="text-[11px] text-muted-foreground">{session.duration}</span>
            {modeBadge(session.mode)}
          </div>
        </div>
        <span className={cn("text-xl font-bold tabular-nums", scoreColor(session.score))}>
          {session.score}
        </span>
      </div>
    </button>
  );
}
