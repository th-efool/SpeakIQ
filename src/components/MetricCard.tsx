import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  topLabel?: string;
  timestamp?: string;
  delta?: string;
}

function useCountUp(target: string, duration = 1200) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9.]/g, "");
    const start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (num - start) * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return display;
}

export function MetricCard({ label, value, change, changeType = "neutral", topLabel, timestamp, delta }: MetricCardProps) {
  const animatedValue = useCountUp(value);

  return (
    <div className="card-interactive rounded-lg border border-border bg-card p-4 relative overflow-hidden group">
      {/* Top micro label */}
      {topLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60 font-mono">{topLabel}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        </div>
      )}
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-card-foreground tabular-nums font-mono score-shimmer">{animatedValue}</p>
      
      <div className="mt-2 flex items-center justify-between gap-2">
        {change && (
          <p className={cn(
            "text-xs",
            changeType === "positive" && "text-success font-medium",
            changeType === "negative" && "text-destructive font-medium",
            changeType === "neutral" && "text-muted-foreground"
          )}>
            {change}
          </p>
        )}
        {delta && (
          <span className="text-[10px] font-mono text-primary/70 font-semibold">{delta}</span>
        )}
      </div>

      {/* Micro timestamp */}
      {timestamp && (
        <p className="mt-1.5 text-[9px] font-mono text-muted-foreground/60">T-REF: {timestamp}</p>
      )}
    </div>
  );
}
