import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function MetricCard({ label, value, change, changeType = "neutral" }: MetricCardProps) {
  return (
    <div className="card-interactive rounded-lg border border-border bg-card p-5">
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-card-foreground tabular-nums">{value}</p>
      {change && (
        <p className={cn(
          "mt-1.5 text-xs",
          changeType === "positive" && "text-success font-medium",
          changeType === "negative" && "text-destructive font-medium",
          changeType === "neutral" && "text-muted-foreground"
        )}>
          {change}
        </p>
      )}
    </div>
  );
}
