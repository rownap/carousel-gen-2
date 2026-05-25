# CarouselGen

CarouselGen is a Next.js app for creating social media carousel posts from manual input or free-form text. It includes a visual slide editor, multiple format presets, template galleries, image-aware layouts, and export flows for PNG, ZIP, and PDF.

This repository is currently a private staging repo. The product has been verified locally, but no public demo URL is attached yet.

## What It Does

- Builds carousels for Instagram, TikTok/Reels, and LinkedIn formats.
- Converts rough notes or prompts into editable carousel slides.
- Provides manual editing for headline, subtext, emoji, brand label, accent color, font, and template.
- Supports photo templates with uploaded images, direct image URLs, Unsplash API images, or deterministic fallback imagery.
- Exports the finished carousel as single PNG, multi-image ZIP, or PDF.
- Exposes API routes that can be used by agents or automations.

## Status

| Area | Status |
| --- | --- |
| Local app | Working |
| Build | Passing |
| Dependency audit | Passing |
| API generation route | Working |
| Text parsing | Working with Anthropic key, falls back locally without keys |
| Public demo | Pending |
| Monetization/auth | Not implemented |

## API

### `POST /api/parse`

Converts free-form text into a carousel configuration.

```json
{
  "text": "Create a 5-slide LinkedIn carousel about launching a SaaS MVP"
}
```

If `ANTHROPIC_API_KEY` is configured, the route uses Anthropic. Without a key, it returns a local deterministic fallback so the app remains usable in development and demos.

### `POST /api/generate`

Accepts a structured carousel config and resolves image URLs for photo templates.

```json
{
  "format": "instagram",
  "template": "gradient-vibrant",
  "accent_color": "#6366f1",
  "brand_name": "@brand",
  "slides": [
    {
      "text": "5 lessons from launching an MVP",
      "subtext": "Swipe for the playbook",
      "emoji": "🚀"
    }
  ]
}
```

### `GET /api/generate`

Returns the available API schema.

## Environment Variables

All keys are optional for local use.

| Variable | Purpose |
| --- | --- |
| `ANTHROPIC_API_KEY` | Enables AI parsing for `/api/parse`. |
| `ANTHROPIC_MODEL` | Optional model override. Defaults to `claude-sonnet-4-20250514`. |
| `UNSPLASH_ACCESS_KEY` | Enables live Unsplash search for photo templates. |

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
npm run test:templates
npm audit --audit-level=moderate
```

## Portfolio Note

CarouselGen is a strong portfolio candidate once a public deployment is attached. Before making it public, the next steps are visual QA on desktop/mobile, a real demo URL, and a short product page with screenshots or a demo video.
