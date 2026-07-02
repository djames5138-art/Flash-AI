# Flash AI

An AI-powered flashcard study platform. Students paste text, upload a photo of notes, or upload a PDF/Word document — Gemini generates 10 flashcards instantly. Includes study mode with 3D card flips, podcast mode, Quiz & Match games, AI Tutor chat, streak tracking, and a Stripe-powered premium paywall.

## Run & Operate

- `pnpm --filter @workspace/flash-ai run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (auto-provisioned)
- Required secret: `GEMINI_API_KEY` — Google Gemini API key (get free at https://aistudio.google.com/app/apikey)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- AI: Google Gemini 1.5 Flash (`@google/generative-ai`)
- Document parsing: `pdf-parse` (PDF), `mammoth` (DOCX)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/flash-ai/` — React frontend app (dark purple UI, mobile-first)
- `artifacts/api-server/src/routes/` — API route handlers
  - `sets.ts` — CRUD for flashcard sets + free-tier limit enforcement
  - `generate.ts` — Gemini AI generation (text, image, document upload)
  - `chat.ts` — AI Tutor chat via Gemini
  - `user.ts` — User info + streak tracking
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/db/src/schema/flashcards.ts` — DB schema (flashcard_sets, user_settings)

## Architecture decisions

- Document upload (`/api/generate/document`) is NOT in the OpenAPI spec — handled with raw `fetch + FormData` on the frontend, `multer` on the backend. Binary format in OpenAPI causes TypeScript errors with Orval's Node.js codegen.
- Single anonymous "user" model (no auth) — premium status and streak tracked in `user_settings` table, one row per app instance.
- Free tier: 5 sets max. Enforced server-side in `sets.ts` POST handler (returns 403 `FREE_LIMIT_REACHED`).
- Stripe paywall is a direct link (https://buy.stripe.com/test_7sYbJ2dmzdzdf8Cet6fjG00) — no server-side Stripe integration needed.
- Dark mode forced via `document.documentElement.classList.add('dark')` in main.tsx (Tailwind v4 `@apply dark` is not valid).

## Product

- **Create tab**: Generate flashcards from pasted text, photo of notes (base64 → Gemini Vision), or PDF/DOCX upload
- **My Sets tab**: View/delete saved sets, streak tracker, set count vs. limit
- **Study mode**: Full-screen 3D flip cards, podcast mode (Web Speech API), progress indicator
- **Games tab**: Quiz mode (multiple choice) and Match mode (timed tile matching)
- **AI Tutor tab**: Full chat interface with Gemini, persistent session history

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any OpenAPI spec change, always run codegen before building/running.
- The `@apply dark` variant is invalid in Tailwind v4 — use JS to add the `dark` class to `document.documentElement` instead.
- `pdf-parse` ESM module needs `(await import("pdf-parse")) as any` to access `.default` correctly.
- DB schema changes require `pnpm --filter @workspace/db run push` followed by `pnpm run typecheck:libs`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
