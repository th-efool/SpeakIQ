import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export interface AgentDetail {
  name: string;
  color: string;
  score: number;
  good: string[];
  bad: string[];
  suggestion: string;
}

export function AgentDetailModal({ open, onOpenChange, agent }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agent: AgentDetail | null;
}) {
  if (!agent) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-0 p-0 overflow-hidden">
        <VisuallyHidden><DialogTitle>{agent.name} Detail</DialogTitle></VisuallyHidden>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <p className="text-xs font-bold uppercase tracking-[0.2em] font-mono" style={{ color: agent.color }}>
            {agent.name}
          </p>
          <p className="text-2xl font-bold font-mono tabular-nums text-card-foreground score-shimmer">
            {agent.score}
          </p>
        </div>

        {/* Good */}
        <div className="px-6 pt-4 pb-3 space-y-1.5">
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">What was good</p>
          <div className="space-y-1">
            {agent.good.map((g, i) => (
              <p key={i} className="text-[11px] text-foreground/80 leading-relaxed">• {g}</p>
            ))}
          </div>
        </div>

        {/* Bad */}
        <div className="px-6 pb-3 space-y-1.5">
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">What needs improvement</p>
          <div className="space-y-1">
            {agent.bad.map((b, i) => (
              <p key={i} className="text-[11px] text-foreground/80 leading-relaxed">• {b}</p>
            ))}
          </div>
        </div>

        {/* Suggestion */}
        <div className="px-6 pb-5 space-y-1.5">
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">Suggestion</p>
          <p className="text-[11px] text-muted-foreground/70 leading-relaxed italic">{agent.suggestion}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
