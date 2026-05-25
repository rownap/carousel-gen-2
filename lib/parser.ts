import type { CarouselConfig } from './types'

/**
 * Parses free text or a voice transcript into a CarouselConfig.
 * Calls /api/parse, which uses Anthropic when configured and a local fallback
 * when the app is running without provider keys.
 */
export async function parseTextToCarousel(text: string): Promise<CarouselConfig> {
  const res = await fetch('/api/parse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  if (!res.ok) throw new Error('Parse error')
  return res.json()
}
