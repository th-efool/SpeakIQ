

## Add Agent Detail Modal

### What changes

1. **New file: `src/components/session/AgentDetailModal.tsx`**
   - Dialog-based modal using existing `Dialog`/`DialogContent` from `@/components/ui/dialog`
   - Displays: agent name + color, score, "What was good" list, "What needs improvement" list, suggestion text
   - Props: `open`, `onOpenChange`, `agent` (nullable)

2. **Update `src/components/session/ParallelExpertPanel.tsx`**
   - Add `onSelectAgent` prop to `ParallelExpertPanel` and pass it through to `ExpertColumn`
   - Make each `ExpertColumn` root div clickable (cursor-pointer, hover effect) calling `onSelectAgent` with agent detail data
   - Agent detail data built from existing `expertConfigs` with added `good` and `bad` arrays (mock data)

3. **Update `src/pages/SessionDetail.tsx`**
   - Add `selectedAgent` and `modalOpen` state
   - Pass `onSelectAgent` handler to `ParallelExpertPanel`
   - Render `AgentDetailModal` at the bottom of the page

### Data shape passed to modal

```ts
{
  name: string;       // e.g. "CLARITY"
  color: string;      // from expert config
  score: number;      // from session
  good: string[];     // mock strengths
  bad: string[];      // mock weaknesses
  suggestion: string; // from expert config
}
```

### No changes to
- Existing layout, styling, or other components
- Mock data file

