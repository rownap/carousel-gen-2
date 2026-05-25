'use client'
import type { ResolvedSlide, TemplateId, SlideFormat } from '@/lib/types'
import { getFormatDimensions } from '@/lib/types'
import { getAspectHeight, shiftHue } from './slide-utils'
import { gradientTemplates } from './templates-gradient'
import { photoTemplates } from './templates-photo'
import { minimalTemplates } from './templates-minimal'
import { educationalTemplates } from './templates-educational'
import { brandingTemplates } from './templates-branding'
import { storytellingTemplates } from './templates-storytelling'
import { creativeTemplates } from './templates-creative'
import { signatureTemplates } from './templates-signature'
import { viralTemplates } from './templates-viral'

interface Props {
  slide: ResolvedSlide
  index: number
  total: number
  template: TemplateId
  format: SlideFormat
  accentColor?: string
  brandName?: string
  width?: number
  fontFamily?: string
}

export function SlideRenderer({ slide, index, total, template, format, accentColor = '#6366f1', brandName, width = 320, fontFamily = "'Satoshi', sans-serif" }: Props) {
  const h = getAspectHeight(format, width)
  const isFirst = index === 0
  const isLast = index === total - 1
  const bgImg = slide.image_file || slide.resolvedImageUrl || slide.image_url

  // Provide three calculated accent colors for gradients/depth
  const accent = slide.bg_color || accentColor || '#6366f1'
  const accent2 = shiftHue(accent, 30)
  const accent3 = shiftHue(accent, -30)

  const pad = width * 0.1
  const titleSize = width * 0.085

  const p = { slide, index, total, accent, accent2, accent3, width, h, font: fontFamily, titleSize, pad, brandName, isFirst, isLast, bgImg, format }

  const templates = {
    ...gradientTemplates(p),
    ...photoTemplates(p),
    ...minimalTemplates(p),
    ...educationalTemplates(p),
    ...brandingTemplates(p),
    ...storytellingTemplates(p),
    ...creativeTemplates(p),
    ...signatureTemplates(p),
    ...viralTemplates(p),
  }

  // Fallback se template non trovato (non dovrebbe succedere)
  return templates[template] || templates['gradient-vibrant']
}
