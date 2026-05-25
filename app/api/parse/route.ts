import { NextRequest, NextResponse } from 'next/server'
import type { CarouselConfig, SlideFormat, TemplateId } from '@/lib/types'

const DEFAULT_MODEL = 'claude-sonnet-4-20250514'
const MAX_INPUT_LENGTH = 12000

const TEMPLATE_IDS = new Set<TemplateId>([
  'gradient-vibrant', 'gradient-dark', 'gradient-sunset', 'duotone',
  'photo-overlay', 'photo-split', 'polaroid',
  'minimal-light', 'minimal-dark', 'bold-type',
  'numbered-steps', 'data-card', 'story-timeline',
  'corporate-clean', 'magazine', 'quote-card',
  'glassmorphism', 'neon-glow', 'brutalist', 'scrapbook',
  'viral-thread', 'viral-stories', 'viral-tiktok',
])

const FORMAT_IDS = new Set<SlideFormat>([
  'instagram',
  'instagram-portrait',
  'tiktok',
  'linkedin',
  'linkedin-portrait',
])

const SYSTEM_PROMPT = `You are a carousel content parser. Given any free text, return a structured JSON carousel config.

Return only valid JSON.

Schema:
{
  "format": "instagram" | "instagram-portrait" | "tiktok" | "linkedin" | "linkedin-portrait",
  "template": "gradient-vibrant" | "gradient-dark" | "gradient-sunset" | "photo-overlay" | "photo-split" | "minimal-light" | "minimal-dark" | "bold-type" | "numbered-steps" | "glassmorphism" | "magazine" | "quote-card" | "neon-glow" | "corporate-clean" | "data-card" | "story-timeline" | "polaroid" | "duotone" | "brutalist" | "scrapbook" | "viral-thread" | "viral-stories" | "viral-tiktok",
  "accent_color": "#hexcode",
  "font_family": "'FontName', sans-serif",
  "slides": [
    {
      "text": "main headline, max 60 chars",
      "subtext": "supporting text, max 90 chars",
      "emoji": "single emoji",
      "image_prompt": "english image keywords, only for photo templates"
    }
  ]
}

Rules:
- First slide is a hook.
- Last slide is a CTA.
- Use 4 to 8 slides.
- Keep copy short, punchy, and platform-native.
- Prefer corporate-clean or data-card for LinkedIn.
- Prefer viral-tiktok, bold-type, or neon-glow for TikTok.
- Prefer numbered-steps for educational or how-to content.
- Prefer quote-card for motivational content.
- Include image_prompt only for photo-overlay, photo-split, or polaroid.`

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const text = typeof (body as { text?: unknown }).text === 'string'
    ? (body as { text: string }).text.trim().slice(0, MAX_INPUT_LENGTH)
    : ''

  if (!text) return NextResponse.json({ error: 'missing text' }, { status: 400 })

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim()
  if (!apiKey) {
    return NextResponse.json(createFallbackCarousel(text), {
      headers: { 'x-carouselgen-parser': 'local-fallback' },
    })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
        max_tokens: 1200,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: text }],
      }),
    })

    if (!response.ok) {
      throw new Error(`Anthropic API returned ${response.status}`)
    }

    const data = await response.json()
    const raw = typeof data.content?.[0]?.text === 'string' ? data.content[0].text : ''
    const parsed = JSON.parse(stripJson(raw))

    return NextResponse.json(normalizeConfig(parsed, text), {
      headers: { 'x-carouselgen-parser': 'anthropic' },
    })
  } catch (error) {
    console.error('Carousel parse fallback:', error)
    return NextResponse.json(createFallbackCarousel(text), {
      headers: { 'x-carouselgen-parser': 'local-fallback' },
    })
  }
}

function stripJson(raw: string) {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i)
  return (fenced?.[1] || raw).trim()
}

function normalizeConfig(value: unknown, sourceText: string): CarouselConfig {
  const input = value as Partial<CarouselConfig>
  const fallback = createFallbackCarousel(sourceText)

  const format = typeof input.format === 'string' && FORMAT_IDS.has(input.format as SlideFormat)
    ? input.format as SlideFormat
    : fallback.format

  const template = typeof input.template === 'string' && TEMPLATE_IDS.has(input.template as TemplateId)
    ? input.template as TemplateId
    : fallback.template

  const slides = Array.isArray(input.slides) && input.slides.length > 0
    ? input.slides.slice(0, 8).map((slide, index) => ({
      text: limitText(stringValue(slide?.text) || fallback.slides[index]?.text || fallback.slides[0].text, 70),
      subtext: limitText(stringValue(slide?.subtext), 100),
      emoji: limitText(stringValue(slide?.emoji), 4),
      image_prompt: limitText(stringValue(slide?.image_prompt), 80),
    }))
    : fallback.slides

  return {
    format,
    template,
    accent_color: isHex(input.accent_color) ? input.accent_color : fallback.accent_color,
    font_family: typeof input.font_family === 'string' ? input.font_family : fallback.font_family,
    slides: slides.length >= 2 ? slides : fallback.slides,
  }
}

function createFallbackCarousel(text: string): CarouselConfig {
  const lower = text.toLowerCase()
  const format = pickFormat(lower)
  const template = pickTemplate(lower, format)
  const topic = extractTopic(text)
  const slideCount = pickSlideCount(text)
  const points = extractPoints(text).slice(0, Math.max(1, slideCount - 2))
  const bodySlides = ensurePoints(points, topic, slideCount - 2)

  return {
    format,
    template,
    accent_color: pickAccent(lower, format),
    font_family: pickFont(lower),
    slides: [
      {
        text: limitText(topic || 'Trasforma questa idea in contenuto', 60),
        subtext: 'Un carousel pronto da rifinire e pubblicare',
        emoji: pickEmoji(lower, 0),
        image_prompt: photoPrompt(template, topic),
      },
      ...bodySlides.map((point, index) => ({
        text: limitText(point.title, 60),
        subtext: limitText(point.subtext, 90),
        emoji: pickEmoji(lower, index + 1),
        image_prompt: photoPrompt(template, `${topic} ${point.title}`),
      })),
      {
        text: 'Salva e condividi',
        subtext: 'Usalo come base, poi adatta voce e brand.',
        emoji: '↗',
        image_prompt: photoPrompt(template, `${topic} social media`),
      },
    ],
  }
}

function pickFormat(lower: string): SlideFormat {
  if (lower.includes('tiktok') || lower.includes('reel') || lower.includes('vertical')) return 'tiktok'
  if (lower.includes('linkedin')) return lower.includes('portrait') ? 'linkedin-portrait' : 'linkedin'
  if (lower.includes('portrait') || lower.includes('4:5')) return 'instagram-portrait'
  return 'instagram'
}

function pickTemplate(lower: string, format: SlideFormat): TemplateId {
  if (format === 'tiktok') return 'viral-tiktok'
  if (format.includes('linkedin')) return lower.includes('dato') || lower.includes('stat') ? 'data-card' : 'corporate-clean'
  if (lower.includes('foto') || lower.includes('photo') || lower.includes('immagine')) return 'photo-overlay'
  if (lower.includes('quote') || lower.includes('mindset') || lower.includes('motivaz')) return 'quote-card'
  if (lower.includes('step') || lower.includes('consigli') || lower.includes('how to') || lower.includes('come ')) return 'numbered-steps'
  if (lower.includes('dark') || lower.includes('nero')) return 'gradient-dark'
  return 'gradient-vibrant'
}

function pickAccent(lower: string, format: SlideFormat) {
  if (format.includes('linkedin')) return '#2563eb'
  if (lower.includes('wellness') || lower.includes('salute') || lower.includes('bio')) return '#10b981'
  if (lower.includes('luxury') || lower.includes('premium')) return '#f59e0b'
  if (lower.includes('tiktok') || lower.includes('viral')) return '#ec4899'
  return '#6366f1'
}

function pickFont(lower: string) {
  if (lower.includes('luxury') || lower.includes('elegante')) return "'Playfair Display', serif"
  if (lower.includes('linkedin') || lower.includes('business')) return "'Inter', sans-serif"
  if (lower.includes('tech') || lower.includes('ai') || lower.includes('saas')) return "'Space Grotesk', sans-serif"
  return "'Clash Display', sans-serif"
}

function pickEmoji(lower: string, index: number) {
  if (lower.includes('linkedin') || lower.includes('business')) return ['💼', '📌', '📈', '✅', '🚀'][index % 5]
  if (lower.includes('mindset') || lower.includes('motivaz')) return ['✨', '🧠', '🔥', '🎯', '💬'][index % 5]
  if (lower.includes('tech') || lower.includes('ai')) return ['⚡', '🤖', '🧩', '📊', '🚀'][index % 5]
  return ['✨', '01', '02', '03', '↗'][index % 5]
}

function pickSlideCount(text: string) {
  const match = text.match(/(\d{1,2})\s*(slide|slides|punti|consigli|step)/i)
  const requested = match ? Number(match[1]) : 5
  return Math.min(8, Math.max(4, Number.isFinite(requested) ? requested : 5))
}

function extractTopic(text: string) {
  const cleaned = text
    .replace(/\s+/g, ' ')
    .replace(/^(crea|genera|fammi|prepara|scrivi)\s+(un|una|uno)?\s*(carousel|carosello|post|contenuto)?\s*(su|sul|sulla|about|per)?\s*/i, '')
    .replace(/\b(instagram|tiktok|linkedin|reels?)\b/gi, '')
    .replace(/\b(di|da)?\s*\d{1,2}\s*(slide|slides|punti|consigli|step)\b/gi, '')
    .replace(/,?\s*stile\s+[^,.!?]+/gi, '')
    .trim()
    .replace(/^(su|sul|sulla|about|per|di)\s+/i, '')
    .replace(/\s*,\s*,/g, ',')
    .replace(/,\s*$/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return limitText(capitalize(cleaned.split(/[.!?]/)[0] || cleaned), 60)
}

function extractPoints(text: string) {
  return text
    .split(/\n+|(?<=[.!?])\s+/)
    .map((part) => part.replace(/^[-*•\d.)\s]+/, '').trim())
    .filter((part) => !/^(crea|genera|fammi|prepara|scrivi)\b/i.test(part))
    .filter((part) => part.length > 18)
    .map((part) => ({
      title: capitalize(part.split(/[:.;]/)[0]),
      subtext: part,
    }))
}

function ensurePoints(points: { title: string; subtext: string }[], topic: string, count: number) {
  const defaults = [
    { title: 'Perche conta', subtext: `${topic} diventa piu chiaro quando lo trasformi in pochi punti forti.` },
    { title: 'La leva principale', subtext: 'Porta una sola idea per slide e togli tutto cio che distrae.' },
    { title: 'Errore da evitare', subtext: 'Non riempire il visual: il carousel deve guidare, non spiegare tutto.' },
    { title: 'Prossimo passo', subtext: 'Chiudi con una CTA semplice: salva, condividi, commenta o prova.' },
    { title: 'Rendi tutto concreto', subtext: 'Aggiungi esempi, numeri o un micro-caso reale quando possibile.' },
    { title: 'Dai ritmo', subtext: 'Alterna hook, insight, prova e azione per mantenere alta l attenzione.' },
  ]

  return Array.from({ length: count }, (_, index) => points[index] || defaults[index % defaults.length])
}

function photoPrompt(template: TemplateId, value: string) {
  return ['photo-overlay', 'photo-split', 'polaroid'].includes(template) ? value || 'modern workspace' : undefined
}

function stringValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function limitText(value: string | undefined, maxLength: number) {
  if (!value) return ''
  return value.length > maxLength ? `${value.slice(0, maxLength - 1).trim()}…` : value
}

function isHex(value: unknown): value is string {
  return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value)
}

function capitalize(value: string) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value
}
