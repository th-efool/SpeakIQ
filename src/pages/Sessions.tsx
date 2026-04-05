import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { SessionCard } from "@/components/SessionCard";
import { sessions } from "@/lib/mock-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Sessions() {
  const [modeFilter, setModeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const filtered = useMemo(() => {
    let list = modeFilter === "all" ? sessions : sessions.filter((s) => s.mode === modeFilter);
    if (sortBy === "score") list = [...list].sort((a, b) => b.score - a.score);
    if (sortBy === "date") list = [...list].sort((a, b) => b.date.localeCompare(a.date));
    return list;
  }, [modeFilter, sortBy]);

  return (
    <DashboardLayout title="Sessions" subtitle={`${filtered.length} sessions`}>
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-3">
          <Select value={modeFilter} onValueChange={setModeFilter}>
            <SelectTrigger className="w-36 h-8 text-xs">
              <SelectValue placeholder="All modes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All modes</SelectItem>
              <SelectItem value="presentation">Presentation</SelectItem>
              <SelectItem value="q&a">Q&A</SelectItem>
              <SelectItem value="debate">Debate</SelectItem>
              <SelectItem value="pitch">Pitch</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Latest first</SelectItem>
              <SelectItem value="score">Highest score</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          {filtered.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
