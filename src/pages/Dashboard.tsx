import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { SessionCard } from "@/components/SessionCard";
import { sessions, performanceData } from "@/lib/mock-data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const avgScore = Math.round(sessions.reduce((a, s) => a + s.score, 0) / sessions.length);
  const totalMinutes = sessions.reduce((a, s) => a + s.durationMinutes, 0);

  return (
    <DashboardLayout title="Overview" subtitle="Performance summary">
      <div className="max-w-6xl space-y-8">
        {/* KPI row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Total Sessions" value={String(sessions.length)} change="+3 this week" changeType="positive" />
          <MetricCard label="Average Score" value={String(avgScore)} change="+4 pts vs last month" changeType="positive" />
          <MetricCard label="Practice Time" value={`${totalMinutes} min`} change="126 min total" changeType="neutral" />
          <MetricCard label="Best Score" value="91" change="Series B Pitch" changeType="neutral" />
        </div>

        {/* Chart */}
        <div className="card-interactive rounded-lg border border-border bg-card p-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">Performance Trend</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240,6%,90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(240,5%,50%)" }} axisLine={false} tickLine={false} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: "hsl(240,5%,50%)" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0,0%,100%)",
                    border: "1px solid hsl(240,6%,90%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px -2px hsl(245 50% 56% / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(245,50%,56%)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "hsl(245,50%,56%)", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "hsl(245,50%,56%)", strokeWidth: 2, stroke: "hsl(0,0%,100%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent sessions */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Recent Sessions</p>
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
