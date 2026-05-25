export type SlideFormat = 'instagram' | 'instagram-portrait' | 'tiktok' | 'linkedin' | 'linkedin-portrait'

export type TemplateId =
  // Gradient
  | 'gradient-vibrant' | 'gradient-dark' | 'gradient-sunset' | 'duotone' | 'aurora' | 'liquid-mesh' | 'holographic'
  // Photo
  | 'photo-overlay' | 'photo-split' | 'polaroid' | 'cinematic' | 'parallax-depth' | 'frame-collage'
  // Minimal
  | 'minimal-light' | 'minimal-dark' | 'bold-type' | 'swiss' | 'mono-space' | 'paper-texture'
  // Educational
  | 'numbered-steps' | 'data-card' | 'story-timeline' | 'infographic' | 'checklist-pro' | 'flowchart'
  // Branding
  | 'corporate-clean' | 'magazine' | 'pitch-deck' | 'case-study' | 'brand-identity'
  // Creative
  | 'glassmorphism' | 'neon-glow' | 'brutalist' | 'scrapbook' | 'retro-vhs' | 'comic-book' | 'vaporwave' | '3d-card'
  // Storytelling
  | 'quote-card' | 'testimonial' | 'thread-style' | 'conversation'
  // Signature Premium
  | 'sig-editorial' | 'sig-techwave' | 'sig-luxe' | 'sig-organic' | 'sig-pop-art'
  // Viral Social
  | 'viral-thread' | 'viral-stories' | 'viral-tiktok'

export type TemplatePlatform = 'instagram' | 'tiktok' | 'linkedin' | 'all'
export type TemplateSection = 'gradient' | 'photo' | 'minimal' | 'educational' | 'branding' | 'creative' | 'storytelling' | 'signature' | 'viral'

export interface SlideData {
  text: string
  subtext?: string
  emoji?: string
  bg_color?: string
  image_url?: string
  image_prompt?: string
  image_file?: string // base64 data URL from local upload
}

export interface CarouselConfig {
  format: SlideFormat
  template: TemplateId
  accent_color?: string
  font_family?: string
  slides: SlideData[]
  unsplash_key?: string
  openai_key?: string
  brand_name?: string
  brand_logo?: string
}

export interface ResolvedSlide extends SlideData {
  resolvedImageUrl?: string
}

// ── Font options ──
export interface FontOption {
  id: string
  name: string
  family: string
  category: 'sans-serif' | 'serif' | 'display' | 'handwriting' | 'monospace'
}

export const FONT_OPTIONS: FontOption[] = [
  // Viral Aesthetic (TikTok/IG)
  { id: 'anton', name: 'Anton (Viral PRO)', family: "'Anton', sans-serif", category: 'display' },
  { id: 'archivo-black', name: 'Archivo Black (Viral PRO)', family: "'Archivo Black', sans-serif", category: 'display' },
  { id: 'oswald', name: 'Oswald (Viral PRO)', family: "'Oswald', sans-serif", category: 'sans-serif' },
  { id: 'epilogue', name: 'Epilogue (Viral PRO)', family: "'Epilogue', sans-serif", category: 'sans-serif' },
  { id: 'manrope', name: 'Manrope (Viral PRO)', family: "'Manrope', sans-serif", category: 'sans-serif' },
  { id: 'fraunces', name: 'Fraunces (Viral PRO)', family: "'Fraunces', serif", category: 'serif' },
  { id: 'prata', name: 'Prata (Viral PRO)', family: "'Prata', serif", category: 'serif' },
  { id: 'permanent-marker', name: 'Permanent Marker (Viral PRO)', family: "'Permanent Marker', cursive", category: 'handwriting' },

  // Premium Fonts
  { id: 'syne', name: 'Syne (Premium)', family: "'Syne', sans-serif", category: 'display' },
  { id: 'cormorant', name: 'Cormorant (Premium)', family: "'Cormorant Garamond', serif", category: 'serif' },
  { id: 'cinzel', name: 'Cinzel (Premium)', family: "'Cinzel', serif", category: 'display' },
  { id: 'bricolage', name: 'Bricolage Grotesque (Premium)', family: "'Bricolage Grotesque', sans-serif", category: 'display' },
  { id: 'bodoni', name: 'Bodoni Moda (Premium)', family: "'Bodoni Moda', serif", category: 'serif' },
  { id: 'marcellus', name: 'Marcellus (Premium)', family: "'Marcellus', serif", category: 'serif' },
  { id: 'plus-jakarta', name: 'Plus Jakarta Sans (Premium)', family: "'Plus Jakarta Sans', sans-serif", category: 'sans-serif' },

  // Free Fonts
  { id: 'clash-display', name: 'Clash Display (PRO)', family: "'Clash Display', sans-serif", category: 'display' },
  { id: 'satoshi', name: 'Satoshi', family: "'Satoshi', sans-serif", category: 'sans-serif' },
  { id: 'inter', name: 'Inter', family: "'Inter', sans-serif", category: 'sans-serif' },
  { id: 'poppins', name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans-serif' },
  { id: 'montserrat', name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans-serif' },
  { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display', serif", category: 'serif' },
  { id: 'dm-sans', name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans-serif' },
  { id: 'space-grotesk', name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'sans-serif' },
  { id: 'outfit', name: 'Outfit', family: "'Outfit', sans-serif", category: 'sans-serif' },
  { id: 'lora', name: 'Lora', family: "'Lora', serif", category: 'serif' },
  { id: 'caveat', name: 'Caveat', family: "'Caveat', cursive", category: 'handwriting' },
  { id: 'bebas-neue', name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", category: 'display' },
  { id: 'jetbrains-mono', name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'monospace' },
]

// ── Section metadata ──
export interface SectionInfo {
  id: TemplateSection
  name: string
  icon: string
}

export const SECTIONS: SectionInfo[] = [
  { id: 'signature', name: '⭐ Signature PRO', icon: '⭐' },
  { id: 'viral', name: '🔥 Viral Social', icon: '🔥' },
  { id: 'gradient', name: 'Gradient', icon: '🎨' },
  { id: 'photo', name: 'Photo', icon: '📸' },
  { id: 'minimal', name: 'Minimal', icon: '✨' },
  { id: 'educational', name: 'Educational', icon: '📚' },
  { id: 'branding', name: 'Branding', icon: '💼' },
  { id: 'creative', name: 'Creative', icon: '🎯' },
  { id: 'storytelling', name: 'Storytelling', icon: '💬' },
]

// ── Template metadata ──
export interface TemplateInfo {
  id: TemplateId
  name: string
  description: string
  needsPhoto: boolean
  preview: string
  platform: TemplatePlatform
  section: TemplateSection
  premium: boolean
}

export const TEMPLATES: TemplateInfo[] = [
  // ═══════════════ GRADIENT ═══════════════
  { id: 'gradient-vibrant', name: 'Gradient Vibrant', description: 'Gradiente luminoso, testo centrato', needsPhoto: false, preview: 'linear-gradient(135deg,#6366f1,#ec4899)', platform: 'all', section: 'gradient', premium: false },
  { id: 'gradient-dark', name: 'Gradient Dark', description: 'Scuro con accento neon', needsPhoto: false, preview: 'linear-gradient(135deg,#0f0f1a,#1e1b4b)', platform: 'all', section: 'gradient', premium: false },
  { id: 'gradient-sunset', name: 'Sunset', description: 'Caldo, energico', needsPhoto: false, preview: 'linear-gradient(135deg,#f97316,#ec4899,#a855f7)', platform: 'all', section: 'gradient', premium: false },
  { id: 'duotone', name: 'Duotone', description: 'Due colori intensi con pattern', needsPhoto: false, preview: 'linear-gradient(135deg,#ff6b6b,#4ecdc4)', platform: 'all', section: 'gradient', premium: false },
  { id: 'aurora', name: 'Aurora Borealis', description: 'Effetto aurora gradient multi-colore', needsPhoto: false, preview: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)', platform: 'all', section: 'gradient', premium: false },
  { id: 'liquid-mesh', name: 'Liquid Mesh', description: 'Mesh gradient complessi con blur', needsPhoto: false, preview: 'linear-gradient(135deg,#1a1a3e,#4a2c8a,#2d6aa0)', platform: 'all', section: 'gradient', premium: true },
  { id: 'holographic', name: 'Holographic', description: 'Effetto olografico rainbow CSS', needsPhoto: false, preview: 'linear-gradient(135deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)', platform: 'all', section: 'gradient', premium: true },

  // ═══════════════ PHOTO ═══════════════
  { id: 'photo-overlay', name: 'Photo + Overlay', description: 'Foto sfondo con testo sovrapposto', needsPhoto: true, preview: 'linear-gradient(135deg,#334155,#0f172a)', platform: 'all', section: 'photo', premium: false },
  { id: 'photo-split', name: 'Photo Split', description: 'Foto metà + testo metà', needsPhoto: true, preview: 'linear-gradient(90deg,#1e293b 50%,#0f172a 50%)', platform: 'all', section: 'photo', premium: false },
  { id: 'polaroid', name: 'Polaroid', description: 'Stile foto polaroid con note', needsPhoto: true, preview: 'linear-gradient(135deg,#f5f0e8,#e8e0d0)', platform: 'instagram', section: 'photo', premium: false },
  { id: 'cinematic', name: 'Cinematic', description: 'Bande nere + testo cinematico bold', needsPhoto: true, preview: 'linear-gradient(180deg,#000 15%,#1a1a2e 15%,#1a1a2e 85%,#000 85%)', platform: 'all', section: 'photo', premium: false },
  { id: 'parallax-depth', name: 'Parallax Depth', description: 'Multi-layer con effetto profondità', needsPhoto: true, preview: 'linear-gradient(135deg,#0a0a1a,#1a1a3e)', platform: 'all', section: 'photo', premium: true },
  { id: 'frame-collage', name: 'Frame Collage', description: 'Multi-foto in cornici artistiche', needsPhoto: true, preview: 'linear-gradient(135deg,#2d2d2d,#1a1a1a)', platform: 'instagram', section: 'photo', premium: true },

  // ═══════════════ MINIMAL ═══════════════
  { id: 'minimal-light', name: 'Minimal Light', description: 'Bianco pulito, tipografia forte', needsPhoto: false, preview: 'linear-gradient(135deg,#f8fafc,#e2e8f0)', platform: 'all', section: 'minimal', premium: false },
  { id: 'minimal-dark', name: 'Minimal Dark', description: 'Nero con dettaglio accento', needsPhoto: false, preview: 'linear-gradient(135deg,#09090b,#18181b)', platform: 'all', section: 'minimal', premium: false },
  { id: 'bold-type', name: 'Bold Type', description: 'Tipografia gigante, nessuna foto', needsPhoto: false, preview: 'linear-gradient(135deg,#1e1b4b,#312e81)', platform: 'all', section: 'minimal', premium: false },
  { id: 'swiss', name: 'Swiss Design', description: 'Griglia pulita, tipografia Helvetica-style', needsPhoto: false, preview: 'linear-gradient(135deg,#ffffff,#f0f0f0)', platform: 'all', section: 'minimal', premium: false },
  { id: 'mono-space', name: 'Mono Space', description: 'Font monospace, stile terminale elegante', needsPhoto: false, preview: 'linear-gradient(135deg,#0a0e14,#1a1e24)', platform: 'all', section: 'minimal', premium: true },
  { id: 'paper-texture', name: 'Paper Texture', description: 'Sfondo carta con tipografia serif elegante', needsPhoto: false, preview: 'linear-gradient(135deg,#f5f1eb,#e8e0d4)', platform: 'all', section: 'minimal', premium: true },

  // ═══════════════ EDUCATIONAL ═══════════════
  { id: 'numbered-steps', name: 'Numbered Steps', description: 'Numeri grandi + step educativi', needsPhoto: false, preview: 'linear-gradient(135deg,#0f172a,#1e3a5f)', platform: 'all', section: 'educational', premium: false },
  { id: 'data-card', name: 'Data Card', description: 'Numeri/statistiche grandi + label', needsPhoto: false, preview: 'linear-gradient(135deg,#0c1222,#162033)', platform: 'all', section: 'educational', premium: false },
  { id: 'story-timeline', name: 'Story Timeline', description: 'Timeline verticale con punti', needsPhoto: false, preview: 'linear-gradient(180deg,#0f0f1a,#1a1a2e)', platform: 'all', section: 'educational', premium: false },
  { id: 'infographic', name: 'Infographic', description: 'Layout con icone, numeri, stile infografica', needsPhoto: false, preview: 'linear-gradient(135deg,#1e3a5f,#0f172a)', platform: 'all', section: 'educational', premium: false },
  { id: 'checklist-pro', name: 'Checklist Pro', description: 'Lista con checkbox e progress bar', needsPhoto: false, preview: 'linear-gradient(135deg,#065f46,#064e3b)', platform: 'all', section: 'educational', premium: true },
  { id: 'flowchart', name: 'Flowchart', description: 'Diagramma di flusso con frecce e box', needsPhoto: false, preview: 'linear-gradient(135deg,#1e1b4b,#312e81)', platform: 'all', section: 'educational', premium: true },

  // ═══════════════ BRANDING ═══════════════
  { id: 'corporate-clean', name: 'Corporate Clean', description: 'Professionale, header con brand', needsPhoto: false, preview: 'linear-gradient(180deg,#1e40af 30%,#ffffff 30%)', platform: 'linkedin', section: 'branding', premium: false },
  { id: 'magazine', name: 'Magazine', description: 'Layout editoriale stile rivista', needsPhoto: false, preview: 'linear-gradient(135deg,#fef3c7,#fde68a)', platform: 'all', section: 'branding', premium: false },
  { id: 'pitch-deck', name: 'Pitch Deck', description: 'Stile presentazione investor', needsPhoto: false, preview: 'linear-gradient(135deg,#0f172a,#1e293b)', platform: 'linkedin', section: 'branding', premium: true },
  { id: 'case-study', name: 'Case Study', description: 'Before/after, metriche, risultati', needsPhoto: false, preview: 'linear-gradient(135deg,#064e3b,#065f46)', platform: 'linkedin', section: 'branding', premium: true },
  { id: 'brand-identity', name: 'Brand Identity', description: 'Palette colori, tipografia brand', needsPhoto: false, preview: 'linear-gradient(135deg,#7c3aed,#4f46e5)', platform: 'all', section: 'branding', premium: true },

  // ═══════════════ CREATIVE ═══════════════
  { id: 'glassmorphism', name: 'Glassmorphism', description: 'Card vetro con effetto blur', needsPhoto: false, preview: 'linear-gradient(135deg,#667eea,#764ba2)', platform: 'all', section: 'creative', premium: false },
  { id: 'neon-glow', name: 'Neon Glow', description: 'Testo con effetto neon luminoso', needsPhoto: false, preview: 'linear-gradient(135deg,#000,#0a0a0a)', platform: 'all', section: 'creative', premium: false },
  { id: 'brutalist', name: 'Brutalist', description: 'Bordi neri spessi, layout raw', needsPhoto: false, preview: 'linear-gradient(135deg,#fff,#f0f0f0)', platform: 'all', section: 'creative', premium: false },
  { id: 'scrapbook', name: 'Scrapbook', description: 'Stile collage/nastro adesivo', needsPhoto: false, preview: 'linear-gradient(135deg,#fef9ef,#fdf2e9)', platform: 'instagram', section: 'creative', premium: false },
  { id: 'retro-vhs', name: 'Retro VHS', description: 'Effetto VHS con scan lines e glitch', needsPhoto: false, preview: 'linear-gradient(135deg,#1a0a2e,#2d1b4e)', platform: 'all', section: 'creative', premium: true },
  { id: 'comic-book', name: 'Comic Book', description: 'Layout fumetto con halftone e bordi', needsPhoto: false, preview: 'linear-gradient(135deg,#fef08a,#fbbf24)', platform: 'all', section: 'creative', premium: true },
  { id: 'vaporwave', name: 'Vaporwave', description: 'Estetica rosa/viola, grid 3D', needsPhoto: false, preview: 'linear-gradient(135deg,#ff71ce,#01cdfe,#b967ff)', platform: 'all', section: 'creative', premium: true },
  { id: '3d-card', name: '3D Card', description: 'Card con ombra prospettica 3D CSS', needsPhoto: false, preview: 'linear-gradient(135deg,#1e293b,#0f172a)', platform: 'all', section: 'creative', premium: true },

  // ═══════════════ STORYTELLING ═══════════════
  { id: 'quote-card', name: 'Quote Card', description: 'Citazione con barra laterale accent', needsPhoto: false, preview: 'linear-gradient(135deg,#1a1a2e,#2d1b69)', platform: 'all', section: 'storytelling', premium: false },
  { id: 'testimonial', name: 'Testimonial', description: 'Card con stelline e citazione autore', needsPhoto: false, preview: 'linear-gradient(135deg,#fef3c7,#fde68a)', platform: 'all', section: 'storytelling', premium: false },
  { id: 'thread-style', name: 'Thread Style', description: 'Simula un thread social con avatar', needsPhoto: false, preview: 'linear-gradient(135deg,#0f172a,#1e293b)', platform: 'all', section: 'storytelling', premium: false },
  { id: 'conversation', name: 'Conversation', description: 'Chat bubbles stile messaging', needsPhoto: false, preview: 'linear-gradient(135deg,#e5e7eb,#d1d5db)', platform: 'all', section: 'storytelling', premium: true },

  // ═══════════════ SIGNATURE PREMIUM ═══════════════
  { id: 'sig-editorial', name: 'Editorial Magazine', description: 'Layout rivista Vogue/GQ, serif elegante', needsPhoto: false, preview: 'linear-gradient(135deg,#f8f5f0,#e8e0d0)', platform: 'all', section: 'signature', premium: true },
  { id: 'sig-techwave', name: 'TechWave', description: 'Cyberpunk dark, neon verde, griglia', needsPhoto: false, preview: 'linear-gradient(135deg,#08080f,#0a1a0f)', platform: 'all', section: 'signature', premium: true },
  { id: 'sig-luxe', name: 'Luxe Gold', description: 'Nero e oro, luxury brand, ornamentale', needsPhoto: false, preview: 'linear-gradient(135deg,#0a0a0a,#1a1a0a)', platform: 'all', section: 'signature', premium: true },
  { id: 'sig-organic', name: 'Organic Flow', description: 'Colori naturali, forme ondulate, wellness', needsPhoto: false, preview: 'linear-gradient(135deg,#f0ebe3,#e0d9cd)', platform: 'all', section: 'signature', premium: true },
  { id: 'sig-pop-art', name: 'Pop Art', description: 'Warhol/Lichtenstein, colori saturi, halftone', needsPhoto: false, preview: 'linear-gradient(135deg,#ff1493,#ffed00)', platform: 'all', section: 'signature', premium: true },

  // ═══════════════ VIRAL SOCIAL ═══════════════
  { id: 'viral-thread', name: 'Thread X', description: 'Simula un thread X/Twitter con avatar', needsPhoto: false, preview: 'linear-gradient(135deg,#000,#15202b)', platform: 'all', section: 'viral', premium: false },
  { id: 'viral-stories', name: 'IG Stories', description: 'Stile stories con sticker e gradient', needsPhoto: false, preview: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', platform: 'instagram', section: 'viral', premium: false },
  { id: 'viral-tiktok', name: 'TikTok Style', description: 'Testo gigante, font trend, nero', needsPhoto: false, preview: 'linear-gradient(135deg,#000,#fe2c55)', platform: 'all', section: 'viral', premium: false },
]

// ── Helpers ──
export function getTemplatesForPlatform(platform: 'instagram' | 'tiktok' | 'linkedin'): TemplateInfo[] {
  return TEMPLATES.filter(t => t.platform === 'all' || t.platform === platform)
}

export function getTemplatesBySection(platform: 'instagram' | 'tiktok' | 'linkedin'): Record<TemplateSection, TemplateInfo[]> {
  const available = getTemplatesForPlatform(platform)
  const grouped: Record<TemplateSection, TemplateInfo[]> = {
    signature: [], viral: [], gradient: [], photo: [], minimal: [], educational: [], branding: [], creative: [], storytelling: [],
  }
  available.forEach(t => grouped[t.section].push(t))
  return grouped
}

export function getFormatDimensions(format: SlideFormat): { width: number; height: number; label: string } {
  switch (format) {
    case 'instagram': return { width: 1080, height: 1080, label: 'Instagram 1:1' }
    case 'instagram-portrait': return { width: 1080, height: 1350, label: 'Instagram 4:5' }
    case 'tiktok': return { width: 1080, height: 1920, label: 'TikTok 9:16' }
    case 'linkedin': return { width: 1080, height: 1080, label: 'LinkedIn 1:1' }
    case 'linkedin-portrait': return { width: 1080, height: 1350, label: 'LinkedIn 4:5' }
    default: return { width: 1080, height: 1080, label: '1:1' }
  }
}
