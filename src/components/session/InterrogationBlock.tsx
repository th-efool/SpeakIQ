const questions = [
  { q: "Why did you hesitate before answering the enterprise pipeline question?", ref: "T+1:02 → T+1:15" },
  { q: "You avoided committing to a specific Q4 revenue target — why?", ref: "T+1:38" },
  { q: "The transition to retention felt abrupt. Was this intentional?", ref: "T+1:55" },
  { q: "You didn't address competitive threats. Was this a deliberate omission?", ref: "N/A" },
];

export function InterrogationBlock() {
  return (
    <div className="rounded-lg border border-border/40 bg-card/50 px-6 py-5">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono text-muted-foreground/50 mb-4">
        Cross-Examination
      </p>
      <div className="space-y-3">
        {questions.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="text-[9px] font-mono text-muted-foreground/30 tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-sm font-mono text-foreground/80 leading-relaxed">"{item.q}"</p>
              <p className="text-[9px] font-mono text-muted-foreground/40 mt-0.5">{item.ref}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
