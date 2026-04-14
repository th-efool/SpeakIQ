import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { sessions, transcript, aiFeedback } from "@/lib/mock-data";
import { ParallelExpertPanel } from "@/components/session/ParallelExpertPanel";
import { ConflictLayer } from "@/components/session/ConflictLayer";
import { SynthesisPanel } from "@/components/session/SynthesisPanel";
import { InterrogationBlock } from "@/components/session/InterrogationBlock";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SessionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = sessions.find((s) => s.id === id);
  const [activeTime, setActiveTime] = useState<string | null>(null);

  const handleSelectTime = useCallback((time: string) => {
    setActiveTime(time);
    // Scroll transcript line into view
    const el = document.getElementById(`t-${time}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const handleTranscriptClick = useCallback((time: string) => {
    setActiveTime(time);
  }, []);

  if (!session) {
    return (
      <DashboardLayout title="Session Not Found">
        <p className="text-sm text-muted-foreground">No session found with this ID.</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title={session.topic} subtitle={`${session.date} · ${session.duration} · ${session.mode}`}>
      <div className="max-w-7xl space-y-6">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-5 rounded-lg border border-border bg-card px-6 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Score</p>
            <p className="text-2xl font-bold tabular-nums text-foreground score-shimmer">{session.score}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Mode</p>
            <p className="text-sm font-medium text-foreground capitalize">{session.mode}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Aggressiveness</p>
            <p className="text-sm font-medium text-foreground capitalize">{session.aggressiveness}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Duration</p>
            <p className="text-sm font-medium text-foreground">{session.duration}</p>
          </div>
        </div>

        {/* Transcript */}
        <div className="rounded-lg border border-border bg-card">
          <div className="border-b border-border px-6 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Transcript</p>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-6 space-y-2">
            {transcript.map((line, i) => (
              <button
                key={i}
                id={`t-${line.time}`}
                onClick={() => handleTranscriptClick(line.time)}
                className={cn(
                  "flex gap-3 w-full text-left rounded px-2 py-1.5 transition-colors",
                  activeTime === line.time
                    ? "bg-primary/10 border border-primary/20"
                    : "hover:bg-accent/40"
                )}
              >
                <span className="shrink-0 w-10 text-[11px] tabular-nums text-muted-foreground/60 pt-0.5">{line.time}</span>
                <div className={cn(
                  "text-sm leading-relaxed transition-colors",
                  line.speaker === "audience" ? "text-primary font-medium" : "text-foreground/80"
                )}>
                  {line.speaker === "audience" && (
                    <span className="text-[10px] uppercase tracking-widest text-primary/70 mr-2">Audience</span>
                  )}
                  {line.text}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Parallel Expert Columns */}
        <ParallelExpertPanel session={session} onSelectTime={handleSelectTime} />

        {/* Conflict Layer */}
        <ConflictLayer session={session} />

        {/* Synthesis */}
        <SynthesisPanel session={session} />

        {/* Cross-Examination */}
        <InterrogationBlock />
      </div>
    </DashboardLayout>
  );
}
