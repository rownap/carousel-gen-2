import { NextRequest, NextResponse } from 'next/server'
import type { CarouselConfig, ResolvedSlide } from '@/lib/types'
import { fetchUnsplashImage } from '@/lib/unsplash'

/**
 * POST /api/generate
 * 
 * Accepts a CarouselConfig JSON.
 * Resolves image URLs for photo-based templates.
 * Returns resolved slides ready to render.
 */
export async function POST(req: NextRequest) {
  let config: CarouselConfig

  try {
    config = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!config.slides || !Array.isArray(config.slides) || config.slides.length === 0) {
    return NextResponse.json({ error: 'slides array is required' }, { status: 400 })
  }

  const needsPhoto = ['photo-overlay', 'photo-split', 'polaroid'].includes(config.template)

  const resolvedSlides: ResolvedSlide[] = await Promise.all(
    config.slides.map(async (slide) => {
      let resolvedImageUrl: string | undefined

      if (needsPhoto && (slide.image_prompt || slide.text)) {
        const prompt = slide.image_prompt || slide.text
        const isTall = ['tiktok'].includes(config.format)
        resolvedImageUrl = await fetchUnsplashImage(
          prompt,
          config.unsplash_key || process.env.UNSPLASH_ACCESS_KEY,
          isTall ? 608 : 1080,
          isTall ? 1080 : 1080
        )
      }

      if (slide.image_url) resolvedImageUrl = slide.image_url

      return { ...slide, resolvedImageUrl }
    })
  )

  return NextResponse.json({
    format: config.format || 'instagram',
    template: config.template || 'gradient-vibrant',
    accent_color: config.accent_color || '#6366f1',
    font_family: config.font_family || "'Clash Display', sans-serif",
    brand_name: config.brand_name,
    slides: resolvedSlides,
  })
}

export async function GET() {
  return NextResponse.json({
    name: 'CarouselGen API',
    version: '2.0.0',
    endpoints: {
      'POST /api/generate': 'Generate carousel from structured JSON',
      'POST /api/parse': 'Parse free text into carousel JSON',
    },
    schema: {
      format: 'instagram | instagram-portrait | tiktok | linkedin | linkedin-portrait',
      template: 'gradient-vibrant | gradient-dark | gradient-sunset | photo-overlay | photo-split | minimal-light | minimal-dark | bold-type | numbered-steps | glassmorphism | magazine | quote-card | neon-glow | corporate-clean | data-card | story-timeline | polaroid | duotone | brutalist | scrapbook',
      accent_color: '#hexcode (optional)',
      font_family: 'CSS font-family string (optional)',
      slides: [
        {
          text: 'required',
          subtext: 'optional',
          emoji: 'optional',
          image_prompt: 'optional, for photo templates',
          image_url: 'optional, direct URL',
          bg_color: 'optional, per-slide override',
        }
      ]
    }
  })
}
