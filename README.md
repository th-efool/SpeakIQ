# SpeakXR

**A speech-training analytics dashboard for rehearsing high-pressure presentations, pitches, debates, and Q&A.**

[![React](https://img.shields.io/badge/React-18-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/E2E-Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-Not_specified-lightgrey)](#license)

SpeakXR is a prototype interface for reviewing speaking-practice sessions through several complementary analytical lenses. It organizes session scores, transcript evidence, expert-style feedback, cross-signal observations, and a synthesized performance summary into one workspace.

> **Status:** Front-end prototype. The repository currently uses local mock data for sessions, transcripts, performance history, and feedback. The interface should not be interpreted as a connected speech-recognition service or independently validated assessment system.

## Overview

Practicing a presentation or pitch is more useful when feedback is tied to specific moments instead of delivered as a single opaque score. SpeakXR explores a review workflow that connects overall session metrics to transcript passages and multiple dimensions of delivery.

The dashboard models speaking performance across areas such as clarity, composure, persuasion, and structure. A session detail view brings together transcript excerpts, expert-style panels, potential signal conflicts, synthesis, and follow-up questions.

The current implementation demonstrates the product experience and data visualization patterns. It does not, by itself, establish that speech is recorded, transcribed, or evaluated by live AI models.

## Key Features

- **Performance dashboard** — summary metrics, session state, peak score, historical performance visualization, and recent analysis snapshots.
- **Session library** — review prior sample sessions, filter by practice mode, and sort by date or score.
- **Transcript-linked review** — inspect a sample transcript and select timestamped passages to connect evidence with analytical observations.
- **Parallel expert-style panels** — view separate feedback dimensions for clarity, composure, persuasion, and structure, each with a score, confidence label, observation, evidence excerpt, and suggestion.
- **Cross-signal conflict layer** — highlights illustrative relationships or tensions between analysis dimensions.
- **Composite synthesis** — aggregates example metrics into a single summary score with explanatory context.
- **Cross-examination prompts** — review follow-up questions intended to help a speaker examine omissions, transitions, and difficult moments.
- **Settings interface** — configure prototype preferences such as default speaking mode, audience aggressiveness, and notification preferences.

All displayed examples and scores should be treated as demonstration data unless replaced with measured output from a real evaluation pipeline.

## Example Review Workflow

```text
Choose a practice session
        |
        v
Review session metrics
        |
        v
Inspect transcript and timestamps
        |
        v
Compare analysis dimensions
  |-- Clarity
  |-- Composure
  |-- Persuasion
  |-- Structure
        |
        v
Review signal conflicts and synthesis
        |
        v
Identify improvements for the next rehearsal
```

This diagram describes the intended review experience. It does not imply that the current repository implements recording, speech-to-text, or live model inference.

## Technology Stack

| Technology | Role |
|---|---|
| React 18 | Component-based user interface |
| TypeScript | Static typing for application code |
| Vite | Development server and production bundler |
| Tailwind CSS | Utility-first styling |
| shadcn/ui and Radix UI | Reusable accessible UI primitives |
| React Router | Client-side navigation |
| TanStack Query | Server-state/query infrastructure |
| Recharts | Performance charts and data visualization |
| Lucide React | Interface iconography |
| Vitest and Testing Library | Unit/component test tooling |
| Playwright | Browser end-to-end test tooling |

## Getting Started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Installation

```bash
git clone https://github.com/th-efool/SpeakXR.git
cd SpeakXR
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal. The repository's Vite configuration uses port `8080` by default.

### Production build

```bash
npm run build
npm run preview
```

### Quality checks

```bash
npm run lint
npm test
```

Playwright is configured in the repository. To run browser tests, use the relevant Playwright command and ensure the required browser binaries are installed.

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/dashboard` | Performance overview and session snapshots |
| `/sessions` | Session list with mode filters and sorting |
| `/sessions/:id` | Detailed transcript and analysis view |
| `/settings` | Profile and practice preferences interface |

## Project Structure

```text
.
├── instructions/          # UI design and implementation notes
├── public/                # Static assets
├── src/
│   ├── components/        # Shared and session-analysis components
│   ├── landing/            # Landing-page implementation
│   ├── lib/
│   │   ├── mock-data.ts   # Sample sessions, transcripts, and feedback
│   │   └── utils.ts       # Shared utilities
│   ├── pages/             # Dashboard, sessions, detail, and settings pages
│   ├── test/              # Test setup and tests
│   ├── App.tsx             # Routes and application providers
│   └── main.tsx            # Application entry point
├── playwright.config.ts   # Playwright configuration
├── vitest.config.ts       # Vitest configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## Current Scope and Limitations

SpeakXR is currently a front-end prototype. In particular:

- Session records, transcript content, historical chart values, and feedback examples are stored as local mock data.
- Analytical scores, confidence values, observations, and suggestions are illustrative UI content rather than validated measurements.
- The cross-signal conflict layer uses deterministic conditions on sample metrics; it is not evidence of model-based causal analysis.
- Settings controls demonstrate the intended interface but are not proof of persisted user preferences, account management, or notification delivery.
- The repository does not currently demonstrate an end-to-end microphone capture, speech-to-text, or live AI inference workflow.

Before using the product for real coaching or assessment, connect the UI to a defined evaluation pipeline, document the scoring methodology, validate results against representative speech samples, and clearly communicate uncertainty and limitations.

## Potential Roadmap

- [ ] Define typed interfaces for session ingestion, transcript segments, evidence references, scoring, and feedback.
- [ ] Connect an audio-capture and speech-to-text pipeline, with explicit consent and recording controls.
- [ ] Replace mock feedback with a configurable evaluation service and document each metric.
- [ ] Link each observation to traceable transcript or audio evidence.
- [ ] Add evaluation benchmarks for scoring consistency, robustness, and bias.
- [ ] Persist sessions and preferences with authentication and appropriate access controls.
- [ ] Distinguish live results, stored user sessions, and demo fixtures throughout the UI.
- [ ] Add CI for linting, tests, and production builds.

## Contributing

For substantial changes, open an issue describing the proposed behavior or problem before submitting a pull request. Keep contributions focused, document user-visible behavior changes, and add tests when practical.

## Privacy and Security

Do not commit API keys, credentials, private transcripts, or recordings containing sensitive information. Before introducing audio capture or storing transcripts, establish explicit consent, retention controls, deletion behavior, access restrictions, and secure handling of any external-service credentials.

## License

No license is currently specified in the repository. Unless a license is added, users should not assume permission to redistribute or reuse the code. Add a license file before inviting external reuse under explicit terms.

---

**Repository:** [th-efool/SpeakXR](https://github.com/th-efool/SpeakXR)
