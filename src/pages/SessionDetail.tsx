import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { sessions, transcript, aiFeedback } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-medium tabular-nums text-foreground">{value}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-accent">
        <div
          className={cn(
            "h-full rounded-full transition-all",
            value >= 85 ? "bg-success" : value >= 70 ? "bg-primary" : "bg-warning"
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function SessionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return (
      <DashboardLayout title="Session Not Found">
        <p className="text-sm text-muted-foreground">No session found with this ID.</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title={session.topic} subtitle={`${session.date} · ${session.duration} · ${session.mode}`}>
      <div className="max-w-6xl space-y-6">
        {/* Back + metadata */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card px-5 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Score</p>
            <p className="text-xl font-semibold tabular-nums text-foreground">{session.score}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Mode</p>
            <p className="text-sm font-medium text-foreground capitalize">{session.mode}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Aggressiveness</p>
            <p className="text-sm font-medium text-foreground capitalize">{session.aggressiveness}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Duration</p>
            <p className="text-sm font-medium text-foreground">{session.duration}</p>
          </div>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* LEFT: Transcript */}
          <div className="lg:col-span-3 rounded-lg border border-border bg-card">
            <div className="border-b border-border px-5 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Transcript</p>
            </div>
            <div className="max-h-[500px] overflow-y-auto p-5 space-y-3">
              {transcript.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 w-10 text-[11px] tabular-nums text-muted-foreground pt-0.5">{line.time}</span>
                  <div className={cn(
                    "text-sm leading-relaxed",
                    line.speaker === "audience" ? "text-primary font-medium" : "text-foreground"
                  )}>
                    {line.speaker === "audience" && (
                      <span className="text-[11px] uppercase tracking-wider text-primary mr-2">Audience</span>
                    )}
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Analysis */}
          <div className="lg:col-span-2 space-y-4">
            {/* Score breakdown */}
            <div className="rounded-lg border border-border bg-card p-5 space-y-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Score Breakdown</p>
              <ScoreBar label="Clarity" value={session.clarity} />
              <ScoreBar label="Depth" value={session.depth} />
              <ScoreBar label="Structure" value={session.structure} />
              <ScoreBar label="Confidence" value={session.confidence} />
            </div>

            {/* Strengths */}
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Strengths</p>
              <ul className="space-y-2">
                {aiFeedback.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Areas to Improve</p>
              <ul className="space-y-2">
                {aiFeedback.improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <AlertCircle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Missed points */}
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Missed Points</p>
              <ul className="space-y-2">
                {aiFeedback.missedPoints.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
