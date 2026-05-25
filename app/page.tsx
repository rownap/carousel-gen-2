'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import type { CarouselConfig, ResolvedSlide, TemplateId, SlideFormat } from '@/lib/types'
import { TEMPLATES, SECTIONS, FONT_OPTIONS, getTemplatesBySection, getFormatDimensions } from '@/lib/types'
import { getAspectHeight } from '@/components/slide-utils'
import { SlideRenderer } from '@/components/SlideRenderer'
import { ImageUpload } from '@/components/ImageUpload'

// ── icons (inline SVG) ──
const Icon = {
  Wand: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M17.8 6.2 19 5M3 21l9-9M12.2 6.2 11 5" /></svg>,
  Download: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
  Plus: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  Trash: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" /></svg>,
  Lock: () => <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8v-4zm4 11.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" /></svg>,
}

type InputMode = 'text' | 'manual'
type Platform = 'instagram' | 'tiktok' | 'linkedin'

interface ManualSlide { text: string; subtext: string; emoji: string; image_prompt: string; image_file?: string }

const DEFAULT_ACCENT = '#6366f1'
const DEFAULT_FONT = "'Clash Display', sans-serif"

const PLATFORM_FORMATS: Record<Platform, { value: SlideFormat; label: string }[]> = {
  instagram: [{ value: 'instagram', label: '1:1 Quadrato' }, { value: 'instagram-portrait', label: '4:5 Portrait' }],
  tiktok: [{ value: 'tiktok', label: '9:16 Verticale' }],
  linkedin: [{ value: 'linkedin', label: '1:1 Quadrato' }, { value: 'linkedin-portrait', label: '4:5 Portrait' }],
}

const PLATFORM_META: { id: Platform; label: string; icon: string }[] = [
  { id: 'instagram', label: 'Instagram', icon: '📸' },
  { id: 'tiktok', label: 'TikTok', icon: '🎵' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
]

export default function HomePage() {
  const [mode, setMode] = useState<InputMode>('manual')
  const [platform, setPlatform] = useState<Platform>('instagram')
  const [format, setFormat] = useState<SlideFormat>('instagram')
  const [template, setTemplate] = useState<TemplateId>('gradient-vibrant')
  const [accent, setAccent] = useState(DEFAULT_ACCENT)
  const [fontFamily, setFontFamily] = useState(DEFAULT_FONT)
  const [brandName, setBrandName] = useState('')
  const [freeText, setFreeText] = useState('')

  const [manualSlides, setManualSlides] = useState<ManualSlide[]>([
    { text: '5 Consigli per il tuo Design', subtext: 'Swipe per scoprire', emoji: '🎨', image_prompt: '' },
    { text: 'Usa contrasti forti', subtext: 'Il testo deve essere sempre leggibile', emoji: '👁️', image_prompt: '' },
    { text: 'Salva per dopo', subtext: 'E seguimi per altri tips!', emoji: '🚀', image_prompt: '' }
  ])

  const [resolvedSlides, setResolvedSlides] = useState<ResolvedSlide[]>([])
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ msg: string; type: 'ok' | 'err' | 'info' } | null>(null)
  const [exportLoading, setExportLoading] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState(0)

  const slidesRef = useRef<HTMLDivElement[]>([])

  const SLIDE_W = 420 // Larger live preview
  const templatesBySection = getTemplatesBySection(platform)
  const currentTemplate = TEMPLATES.find(t => t.id === template)

  const setMsg = (msg: string, type: 'ok' | 'err' | 'info') => {
    setStatus({ msg, type })
    if (type !== 'info') setTimeout(() => setStatus(null), 4000)
  }

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p)
    const formats = PLATFORM_FORMATS[p]
    setFormat(formats[0].value)
    // Find first available free template for new platform
    const available = Object.values(getTemplatesBySection(p)).flat().filter(t => !t.premium)
    if (available.length > 0) setTemplate(available[0].id)
  }

  const handleTemplateSelect = (t: TemplateId, isPremium: boolean) => {
    // if (isPremium) {
    //   setShowPremiumModal(true)
    //   return
    // }
    setTemplate(t)
    // Se passiamo a manuale text dopo json parse e poi edit
    generateLive()
  }

  // ── Live sync with preview ──
  const generateLive = useCallback(() => {
    if (mode === 'manual') {
      const config: CarouselConfig = {
        format, template, accent_color: accent, font_family: fontFamily, brand_name: brandName,
        slides: manualSlides.map(s => ({ ...s, image_url: s.image_prompt.startsWith('http') ? s.image_prompt : undefined }))
      }
      setResolvedSlides(config.slides as ResolvedSlide[])
    }
  }, [mode, format, template, accent, fontFamily, brandName, manualSlides])

  // Sync manual slides on change
  useEffect(() => { generateLive() }, [generateLive])
  useEffect(() => {
    if (selectedSlide >= resolvedSlides.length) {
      setSelectedSlide(Math.max(0, resolvedSlides.length - 1))
    }
  }, [resolvedSlides.length, selectedSlide])

  // ── Smart AI Generation ──
  const generateAI = async () => {
    setLoading(true)
    setMsg('Generazione intelligente...', 'info')
    try {
      if (!freeText.trim()) throw new Error('Scrivi qualcosa prima')
      const parseRes = await fetch('/api/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: freeText }),
      })
      if (!parseRes.ok) throw new Error('Errore nel parsing')
      const config: CarouselConfig = await parseRes.json()

      setFormat(config.format || 'instagram')
      const p = config.format.includes('tiktok') ? 'tiktok' : config.format.includes('linkedin') ? 'linkedin' : 'instagram'
      setPlatform(p)

      const t = config.template || 'gradient-vibrant'
      const isPrem = TEMPLATES.find(x => x.id === t)?.premium
      setTemplate(isPrem ? 'gradient-vibrant' : t) // fallback se premium

      if (config.accent_color) setAccent(config.accent_color)
      if (config.font_family) setFontFamily(config.font_family)

      const slides = config.slides.map(s => ({ ...s, image_prompt: s.image_prompt || '', subtext: s.subtext || '', emoji: s.emoji || '' }))
      setManualSlides(slides as ManualSlide[])
      setMode('manual') // Switch to manual to edit after generation

      setMsg(`✓ ${slides.length} slide generate!`, 'ok')
    } catch (e: unknown) {
      setMsg('Errore: ' + getErrorMessage(e), 'err')
    } finally {
      setLoading(false)
    }
  }

  // ── Export PNG/ZIP/PDF ──
  const exportSlides = async (type: 'png' | 'zip' | 'pdf', index?: number) => {
    setExportLoading(true)
    setMsg(`Esportazione ${type.toUpperCase()}...`, 'info')
    try {
      if (resolvedSlides.length === 0) throw new Error('Nessuna slide da esportare')

      const { default: html2canvas } = await import('html2canvas')
      const canvases: HTMLCanvasElement[] = []

      const single = index !== undefined
      const range = single ? [index] : resolvedSlides.map((_, i) => i)

      for (let i of range) {
        const el = slidesRef.current[i]
        if (!el) continue
        const canvas = await html2canvas(el.firstElementChild as HTMLElement, { scale: 1, useCORS: true, backgroundColor: null, logging: false })
        canvases.push(canvas)
      }

      if (type === 'png' && single) {
        const a = document.createElement('a')
        a.download = `slide-${index! + 1}.png`
        a.href = canvases[0].toDataURL('image/png')
        a.click()
      } else if (type === 'zip') {
        const { default: JSZip } = await import('jszip')
        const zip = new JSZip()
        for (let i = 0; i < canvases.length; i++) {
          const blob = await new Promise<Blob>(res => canvases[i].toBlob(b => res(b!), 'image/png'))
          zip.file(`slide-${i + 1}.png`, blob)
        }
        const content = await zip.generateAsync({ type: 'blob' })
        const a = document.createElement('a')
        a.href = URL.createObjectURL(content)
        a.download = `carousel-${format}.zip`
        a.click()
      } else if (type === 'pdf') {
        const { default: jsPDF } = await import('jspdf')
        const dims = getFormatDimensions(format)
        const W = dims.width / (dims.width / 210)
        const H = W * (dims.height / dims.width)
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: [W, H] })

        for (let i = 0; i < canvases.length; i++) {
          if (i > 0) pdf.addPage([W, H])
          pdf.addImage(canvases[i].toDataURL('image/png'), 'PNG', 0, 0, W, H)
        }
        pdf.save(`carousel-${format}.pdf`)
      }
      setMsg(`✓ Esportato con successo!`, 'ok')
    } catch (e: unknown) {
      setMsg('Errore export: ' + getErrorMessage(e), 'err')
    } finally {
      setExportLoading(false)
    }
  }

  // Slide mutators
  const addManualSlide = () => setManualSlides(s => [...s, { text: '', subtext: '', emoji: '', image_prompt: '' }])
  const updateManualSlide = (i: number, field: keyof ManualSlide, val: string) => setManualSlides(s => s.map((sl, idx) => idx === i ? { ...sl, [field]: val } : sl))
  const removeManualSlide = (i: number) => setManualSlides(s => s.filter((_, idx) => idx !== i))

  const slideH = getAspectHeight(format, SLIDE_W)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* ── HEADER ── */}
      <header style={{ height: 60, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between', flexShrink: 0, background: 'var(--surface)' }}>
        <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22, fontWeight: 700, color: 'var(--text)', letterSpacing: -0.5 }}>
          Carousel<span style={{ color: 'var(--accent)' }}>Gen</span><span style={{ fontSize: 10, color: 'var(--muted)', marginLeft: 8, fontWeight: 400 }}>v2 PRO</span>
        </div>

        {/* Platform Tabs */}
        <div style={{ display: 'flex', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: 4 }}>
          {PLATFORM_META.map(p => (
            <button key={p.id} onClick={() => handlePlatformChange(p.id)} style={{ padding: '6px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, transition: 'all .2s', background: platform === p.id ? 'var(--surface2)' : 'transparent', color: platform === p.id ? 'var(--text)' : 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>{p.icon}</span> {p.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => exportSlides('pdf')} disabled={exportLoading} style={{ ...btnStyle, background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)', width: 'auto', padding: '6px 16px' }}><Icon.Download /> PDF</button>
          <button onClick={() => exportSlides('zip')} disabled={exportLoading} style={{ ...btnStyle, background: 'var(--accent)', color: '#fff', width: 'auto', padding: '6px 16px' }}><Icon.Download /> ZIP Mlti-Image</button>
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* LEFT PANEL: Editor (55%) */}
        <div style={{ width: '55%', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>

          {/* Customization Bar (Sticky) */}
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'end', gap: 16, background: 'var(--surface)' }}>
            <div>
              <Label>Format / Ratio</Label>
              <select value={format} onChange={e => setFormat(e.target.value as SlideFormat)} style={{ ...inputStyle, width: 140 }}>
                {PLATFORM_FORMATS[platform].map(f => (<option key={f.value} value={f.value}>{f.label}</option>))}
              </select>
            </div>
            <div>
              <Label>Brand (Opzionale)</Label>
              <input value={brandName} onChange={e => setBrandName(e.target.value)} placeholder="@tuoaccount" style={{ ...inputStyle, width: 140 }} />
            </div>
            <div>
              <Label>Color Accent</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '4px 8px' }}>
                <input type="color" value={accent} onChange={e => setAccent(e.target.value)} style={{ width: 26, height: 26, padding: 0, border: 'none', cursor: 'pointer', borderRadius: 4, background: 'transparent' }} />
                <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--muted)' }}>{accent}</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <Label>Font Family</Label>
              <select value={fontFamily} onChange={e => setFontFamily(e.target.value)} style={{ ...inputStyle, fontFamily: fontFamily }}>
                {FONT_OPTIONS.map(f => (<option key={f.id} value={f.family} style={{ fontFamily: f.family }}>{f.name} — {f.category}</option>))}
              </select>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Template Gallery */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, fontFamily: "'Clash Display', sans-serif" }}>Template Gallery</h2>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>Scegli uno stile per il tuo carousel</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {SECTIONS.map(section => {
                  const sectionTemplates = templatesBySection[section.id]
                  if (sectionTemplates.length === 0) return null

                  return (
                    <div key={section.id}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span>{section.icon}</span> {section.name}
                        <div style={{ flex: 1, height: 1, background: 'var(--border2)' }} />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                        {sectionTemplates.map(t => (
                          <div
                            key={t.id}
                            onClick={() => handleTemplateSelect(t.id, t.premium || false)}
                            style={{
                              position: 'relative', borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
                              border: `2px solid ${template === t.id ? 'var(--accent)' : 'var(--border)'}`,
                              background: 'var(--bg)', transition: 'all .2s transform .1s',
                              transform: template === t.id ? 'translateY(-2px)' : 'none',
                              boxShadow: template === t.id ? '0 8px 24px rgba(99,102,241,.2)' : 'none',
                            }}
                          >
                            <div style={{ height: 60, background: t.preview, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: 24, opacity: 0.8 }}>{section.icon}</span>
                            </div>
                            <div style={{ padding: '8px 10px' }}>
                              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
                              {t.needsPhoto && <div style={{ fontSize: 9, color: 'var(--accent3)', marginTop: 2 }}>📷 Richiede foto</div>}
                            </div>

                            {/* Premium Overlay */}
                            {t.premium && (
                              <div style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)', borderRadius: 6, padding: '2px 6px', display: 'flex', alignItems: 'center', gap: 4, color: '#fbbf24', fontSize: 9, fontWeight: 800 }}>
                                <Icon.Lock /> PRO
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Slides Editor Area */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, fontFamily: "'Clash Display', sans-serif" }}>Contenuto Slides</h2>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>Modifica il testo per ogni slide</div>
                </div>
                <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: 4, display: 'flex' }}>
                  <button onClick={() => setMode('manual')} style={{ ...btnStyle, padding: '4px 12px', fontSize: 12, width: 'auto', background: mode === 'manual' ? 'var(--surface2)' : 'transparent', color: mode === 'manual' ? '#fff' : 'var(--muted)' }}>🎛️ Manuale</button>
                  <button onClick={() => setMode('text')} style={{ ...btnStyle, padding: '4px 12px', fontSize: 12, width: 'auto', background: mode === 'text' ? 'var(--accent)' : 'transparent', color: mode === 'text' ? '#fff' : 'var(--muted)' }}>✨ AI Text</button>
                </div>
              </div>

              {/* Text to Carousel Mode */}
              {mode === 'text' && (
                <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Label>Trascrivi un blog post, LinkedIn post, o note ruvide e l'AI creerà il carousel</Label>
                  <textarea value={freeText} onChange={e => setFreeText(e.target.value)} placeholder="..." style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} />
                  <button onClick={generateAI} disabled={loading} style={{ ...btnStyle, background: 'var(--accent)', color: '#fff' }}>
                    {loading ? 'Generando...' : ' ✨ Genera Slides con AI'}
                  </button>
                </div>
              )}

              {/* Manual Editor Mode */}
              {mode === 'manual' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {manualSlides.map((s, i) => (
                    <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 8 }}>
                        {manualSlides.length > 1 && (
                          <button onClick={() => removeManualSlide(i)} style={{ background: 'var(--surface2)', border: 'none', borderRadius: 6, padding: 6, color: 'var(--warn)', cursor: 'pointer' }}><Icon.Trash /></button>
                        )}
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>Slide {i + 1} {i === manualSlides.length - 1 && ' (CTA)'}</div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'flex', gap: 10 }}>
                          <div style={{ width: 80 }}><Label>Emoji</Label><input value={s.emoji} onChange={e => updateManualSlide(i, 'emoji', e.target.value)} style={{ ...inputStyle, textAlign: 'center', fontSize: 20 }} /></div>
                          <div style={{ flex: 1 }}><Label>Headline (Principale)</Label><input value={s.text} onChange={e => updateManualSlide(i, 'text', e.target.value)} style={{ ...inputStyle, fontWeight: 600 }} /></div>
                        </div>
                        <div><Label>Subtext (Secondario / Più lungo)</Label><input value={s.subtext} onChange={e => updateManualSlide(i, 'subtext', e.target.value)} style={inputStyle} /></div>

                        {/* Only show image upload if template needs photo */}
                        {currentTemplate?.needsPhoto && (
                          <div style={{ marginTop: 8 }}>
                            <Label>Immagine Sfondo</Label>
                            <ImageUpload
                              value={s.image_file}
                              onImageChange={url => updateManualSlide(i, 'image_file', url || '')}
                              prompt={s.image_prompt}
                              onPromptChange={p => updateManualSlide(i, 'image_prompt', p)}
                              showAiGenerate={true}
                              accentColor={accent}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <button onClick={addManualSlide} style={{ ...btnStyle, background: 'transparent', border: '1px dashed var(--border2)', color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16 }}>
                    <Icon.Plus /> Aggiungi Nuova Slide
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: Live Preview (45%) */}
        <div style={{ width: '45%', background: 'var(--bg)', display: 'flex', flexDirection: 'column', position: 'relative' }}>

          {/* Main big preview */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, overflowY: 'auto' }}>
            {resolvedSlides.length > 0 && (
              <div
                style={{
                  borderRadius: 20, overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,.4)',
                  border: '1px solid rgba(255,255,255,.05)',
                  transition: 'all .3s ease-out'
                }}
              >
                <SlideRenderer
                  slide={resolvedSlides[selectedSlide]}
                  index={selectedSlide}
                  total={resolvedSlides.length}
                  template={template}
                  format={format}
                  accentColor={accent}
                  fontFamily={fontFamily}
                  brandName={brandName || undefined}
                  width={SLIDE_W}
                />
              </div>
            )}
          </div>

          {/* Thumbnails strip at bottom */}
          <div style={{ height: 160, background: 'var(--surface2)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16, overflowX: 'auto' }}>
            {resolvedSlides.map((s, i) => (
              <div
                key={i}
                onClick={() => setSelectedSlide(i)}
                style={{
                  flexShrink: 0, position: 'relative', cursor: 'pointer', borderRadius: 10, overflow: 'hidden',
                  border: `2px solid ${selectedSlide === i ? 'var(--accent)' : 'transparent'}`,
                  opacity: selectedSlide === i ? 1 : 0.6,
                  transition: 'all .2s'
                }}
              >
                <div style={{ pointerEvents: 'none', transform: 'scale(0.25)', transformOrigin: 'top left', width: SLIDE_W * 0.25, height: getAspectHeight(format, SLIDE_W) * 0.25 }}>
                  {/* Hidden full renderer just for scale down, or we can use ref. Doing the actual renderer scaled down */}
                  <div style={{ width: SLIDE_W, height: getAspectHeight(format, SLIDE_W) }}>
                    <SlideRenderer slide={s} index={i} total={resolvedSlides.length} template={template} format={format} accentColor={accent} fontFamily={fontFamily} brandName={brandName || undefined} width={SLIDE_W} />
                  </div>
                </div>
                {/* ref attach point for export (hidden by parent overflow) */}
                <div style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute' }}>
                  <div ref={el => { if (el) slidesRef.current[i] = el }} style={{ width: 1080, height: getAspectHeight(format, 1080) }}>
                    <SlideRenderer slide={s} index={i} total={resolvedSlides.length} template={template} format={format} accentColor={accent} fontFamily={fontFamily} brandName={brandName || undefined} width={1080} />
                  </div>
                </div>

                <div style={{ position: 'absolute', top: 4, left: 4, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: 10, padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Premium Modal Overlay */}
      {
        showPremiumModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 24, padding: 32, maxWidth: 400, textAlign: 'center', position: 'relative' }}>
              <button onClick={() => setShowPremiumModal(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--muted)', fontSize: 24, cursor: 'pointer' }}>×</button>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✨</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24, fontWeight: 700, margin: '0 0 12px 0' }}>Sblocca i Template Premium</h2>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                I template marcati con <span style={{ color: '#fbbf24', fontWeight: 700 }}>PRO</span> sono riservati agli utenti premium. Ottieni accesso a 15+ template esclusivi 3D, retro, corporate e molto altro.
              </p>
              <button onClick={() => setShowPremiumModal(false)} style={{ ...btnStyle, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: '#fff', fontSize: 16, fontWeight: 700, padding: '14px 24px' }}>
                Scopri CarouselGen PRO
              </button>
            </div>
          </div>
        )
      }

      {/* Toast status */}
      {status && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', padding: '12px 24px', borderRadius: 12, fontSize: 13, fontWeight: 600, zIndex: 1000, boxShadow: '0 8px 32px rgba(0,0,0,.3)', background: status.type === 'ok' ? '#10b981' : status.type === 'err' ? '#ef4444' : 'var(--accent)', color: '#fff' }}>
          {status.msg}
        </div>
      )}
    </div>
  )
}

const inputStyle: React.CSSProperties = { width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontFamily: "'Satoshi', sans-serif", fontSize: 13, padding: '10px 12px', outline: 'none', transition: 'border-color .2s' }
const btnStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', padding: '10px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', transition: 'all .2s', fontFamily: "'Satoshi', sans-serif", fontWeight: 600 }
function Label({ children }: { children: React.ReactNode }) { return <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{children}</div> }
function getErrorMessage(error: unknown) { return error instanceof Error ? error.message : String(error) }
