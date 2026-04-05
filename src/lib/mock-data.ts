export interface Session {
  id: string;
  topic: string;
  date: string;
  duration: string;
  durationMinutes: number;
  score: number;
  mode: "presentation" | "q&a" | "debate" | "pitch";
  aggressiveness: "low" | "medium" | "high";
  clarity: number;
  depth: number;
  structure: number;
  confidence: number;
}

export const sessions: Session[] = [
  { id: "s-001", topic: "Q3 Revenue Forecast", date: "2026-04-04", duration: "12:34", durationMinutes: 12, score: 87, mode: "presentation", aggressiveness: "medium", clarity: 91, depth: 82, structure: 88, confidence: 85 },
  { id: "s-002", topic: "Product Roadmap Update", date: "2026-04-03", duration: "18:12", durationMinutes: 18, score: 72, mode: "presentation", aggressiveness: "low", clarity: 78, depth: 65, structure: 74, confidence: 70 },
  { id: "s-003", topic: "Series B Pitch", date: "2026-04-02", duration: "8:45", durationMinutes: 9, score: 91, mode: "pitch", aggressiveness: "high", clarity: 93, depth: 88, structure: 92, confidence: 90 },
  { id: "s-004", topic: "Engineering All-Hands", date: "2026-04-01", duration: "22:10", durationMinutes: 22, score: 68, mode: "presentation", aggressiveness: "low", clarity: 72, depth: 60, structure: 70, confidence: 68 },
  { id: "s-005", topic: "Board Meeting Prep", date: "2026-03-30", duration: "15:22", durationMinutes: 15, score: 83, mode: "q&a", aggressiveness: "high", clarity: 85, depth: 80, structure: 84, confidence: 82 },
  { id: "s-006", topic: "Investor Q&A Simulation", date: "2026-03-28", duration: "10:05", durationMinutes: 10, score: 78, mode: "q&a", aggressiveness: "medium", clarity: 80, depth: 76, structure: 78, confidence: 77 },
  { id: "s-007", topic: "Technical Architecture Review", date: "2026-03-26", duration: "25:30", durationMinutes: 26, score: 64, mode: "debate", aggressiveness: "high", clarity: 68, depth: 58, structure: 66, confidence: 63 },
  { id: "s-008", topic: "Sales Kickoff Keynote", date: "2026-03-24", duration: "14:18", durationMinutes: 14, score: 89, mode: "presentation", aggressiveness: "medium", clarity: 92, depth: 86, structure: 90, confidence: 88 },
];

export const performanceData = [
  { date: "Mar 1", score: 62 },
  { date: "Mar 5", score: 65 },
  { date: "Mar 10", score: 68 },
  { date: "Mar 15", score: 64 },
  { date: "Mar 20", score: 72 },
  { date: "Mar 24", score: 78 },
  { date: "Mar 26", score: 64 },
  { date: "Mar 28", score: 78 },
  { date: "Mar 30", score: 83 },
  { date: "Apr 1", score: 68 },
  { date: "Apr 2", score: 91 },
  { date: "Apr 3", score: 72 },
  { date: "Apr 4", score: 87 },
];

export const transcript = [
  { time: "0:00", text: "Good morning everyone. Thank you for joining this quarterly review.", speaker: "user" },
  { time: "0:12", text: "I'd like to start by walking through our key performance indicators for Q3.", speaker: "user" },
  { time: "0:28", text: "Revenue came in at $4.2 million, which represents a 23% increase over Q2.", speaker: "user" },
  { time: "0:45", text: "This growth was primarily driven by expansion in our enterprise segment.", speaker: "user" },
  { time: "1:02", text: "Could you elaborate on the enterprise pipeline specifically?", speaker: "audience" },
  { time: "1:15", text: "Of course. We closed 12 new enterprise accounts this quarter, with an average contract value of $180K.", speaker: "user" },
  { time: "1:38", text: "The pipeline for Q4 looks strong — we have 28 qualified opportunities in late stage.", speaker: "user" },
  { time: "1:55", text: "Moving to retention metrics, our net revenue retention sits at 118%.", speaker: "user" },
  { time: "2:12", text: "Churn decreased from 3.2% to 2.1%, which is below our target of 2.5%.", speaker: "user" },
  { time: "2:30", text: "What's driving the improvement in churn?", speaker: "audience" },
  { time: "2:42", text: "Two main factors: our new onboarding flow and the dedicated CSM program we launched in February.", speaker: "user" },
  { time: "3:05", text: "Now let me turn to our product roadmap and key initiatives for Q4.", speaker: "user" },
];

export const aiFeedback = {
  strengths: [
    "Strong opening with clear agenda setting",
    "Good use of specific data points to support claims",
    "Confident handling of audience questions",
    "Logical flow from metrics to roadmap",
  ],
  improvements: [
    "Consider pausing longer after key data points for emphasis",
    "The transition from retention to roadmap felt abrupt — add a summary bridge",
    "Eye contact distribution could be more balanced across the audience",
    "Reduce filler words ('um', 'so') during Q&A responses",
  ],
  missedPoints: [
    "Did not address competitive landscape changes",
    "Gross margin trends were not mentioned",
    "No mention of team growth or hiring plans",
  ],
};
