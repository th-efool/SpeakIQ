import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { SessionCard } from "@/components/SessionCard";
import { SystemPreviewPanel } from "@/components/SystemPreviewPanel";
import { sessions, performanceData } from "@/lib/mock-data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";

export default function Dashboard() {
  const systemLoad = Math.round((sessions.length / 20) * 100);
  const lastSession = sessions[0];
  const sessionState = lastSession.score >= 85 ? "ACTIVE" : lastSession.score >= 70 ? "STABLE" : "DEGRADED";
  const bestScore = Math.max(...sessions.map(s => s.score));
  const now = new Date();
  const ts = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

  // Find dips for reference dots
  const dips = performanceData.filter((d, i) => {
    const prev = performanceData[i - 1]?.score ?? d.score;
    const next = performanceData[i + 1]?.score ?? d.score;
    return d.score < prev && d.score < next && d.score < 70;
  });

  return (
    <DashboardLayout title="System Overview" subtitle="Live analysis surface">
      {/* Background system layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="scanline absolute top-0 left-0 w-full h-px bg-primary/10" />
      </div>

      <div className="max-w-6xl space-y-10 relative z-10">
        {/* System State Strip */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard topLabel="IDX" label="SYSTEM_LOAD" value={`${systemLoad}%`} change={`${sessions.length} sessions tracked`} changeType="neutral" timestamp={ts} delta="Δ +3.2" />
          <MetricCard topLabel="LIVE" label="PARALLEL_AGENTS" value="5" change="All agents nominal" changeType="positive" timestamp={ts} delta="Δ 0" />
          <MetricCard topLabel="STATE" label="SESSION_STATE" value={sessionState} change={`Last: ${lastSession.topic}`} changeType={sessionState === "ACTIVE" ? "positive" : sessionState === "DEGRADED" ? "negative" : "neutral"} timestamp={ts} delta={`Δ ${lastSession.score >= 85 ? "↑" : "↓"}`} />
          <MetricCard topLabel="IDX" label="PEAK_PERFORMANCE" value={String(bestScore)} change="Series B Pitch" changeType="positive" timestamp={ts} delta="Δ +4" />
        </div>

        {/* System Preview Panel */}
        <SystemPreviewPanel />

        {/* Cognitive Stability Chart */}
        <div className="card-interactive rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Cognitive Stability Over Time</p>
            <span className="text-[9px] font-mono text-primary/60">LIVE</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(245,50%,56%)" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="hsl(245,50%,56%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240,6%,90%)" strokeOpacity={0.4} />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(240,5%,50%)", fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 10, fill: "hsl(240,5%,50%)", fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontFamily: "monospace",
                    boxShadow: "0 4px 12px -2px hsl(245 50% 56% / 0.1)",
                  }}
                  formatter={(value: number) => [`${value}`, "stability_index"]}
                  labelFormatter={(label) => `clarity_index: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(245,50%,56%)"
                  strokeWidth={2.5}
                  fill="url(#scoreGradient)"
                  dot={{ r: 3, fill: "hsl(245,50%,56%)", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "hsl(245,50%,56%)", strokeWidth: 2, stroke: "hsl(var(--card))" }}
                />
                {dips.map((dip) => (
                  <ReferenceDot key={dip.date} x={dip.date} y={dip.score} r={6} fill="hsl(0,60%,48%)" fillOpacity={0.2} stroke="hsl(0,60%,48%)" strokeWidth={1} />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analysis Snapshots */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Analysis Snapshots</p>
            <span className="text-[9px] font-mono text-primary/60">IDX</span>
          </div>
          <div className="space-y-2">
            {sessions.slice(0, 5).map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
