# CarouselGen

CarouselGen is a Next.js app for creating social media carousels from free text or structured JSON.

It supports:

- Instagram, TikTok/Reels, and LinkedIn formats
- visual slide editing
- template system (including image-aware templates)
- API parsing (`/api/parse`) + generation (`/api/generate`)
- export-ready slide output

## Portfolio Status

| Area | Status |
| --- | --- |
| Build | Passing |
| Typecheck | Passing |
| Template render tests | Passing |
| API smoke test | Passing |
| Public demo URL | Not deployed yet |

## Verified on May 25, 2026

```bash
npm ci
npm run typecheck
npm run test:templates
npm run build
```

API checks run locally:

- `POST /api/parse` with free text input
- `POST /api/generate` with structured config
- `GET /api/generate` schema endpoint

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- optional Anthropic API for smart parsing
- optional Unsplash API for image lookup

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Optional Environment Variables

| Variable | Purpose |
| --- | --- |
| `ANTHROPIC_API_KEY` | AI parsing in `/api/parse` |
| `ANTHROPIC_MODEL` | Model override |
| `UNSPLASH_ACCESS_KEY` | Live Unsplash image search |

Without API keys, the app still works via deterministic local fallback behavior.
