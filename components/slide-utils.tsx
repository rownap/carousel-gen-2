'use client'
import type { ResolvedSlide, TemplateId, SlideFormat } from '@/lib/types'

// Color utilities
export function hexToRgb(hex: string) {
    return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`
}

export function shiftHue(hex: string, deg: number): string {
    const r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2
    let h = 0, s = 0
    if (max !== min) {
        const d = max - min; s = l > .5 ? d / (2 - max - min) : d / (max + min)
        switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; default: h = (r - g) / d + 4 } h /= 6
    }
    h = ((h * 360 + deg) % 360) / 360
    const hue2rgb = (p: number, q: number, t: number) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p }
    const q = l < .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q
    const nr = Math.round(hue2rgb(p, q, h + 1 / 3) * 255), ng = Math.round(hue2rgb(p, q, h) * 255), nb = Math.round(hue2rgb(p, q, h - 1 / 3) * 255)
    return `#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`
}

export function getAspectHeight(format: SlideFormat, width: number): number {
    switch (format) { case 'tiktok': return Math.round(width * 16 / 9); case 'instagram-portrait': case 'linkedin-portrait': return Math.round(width * 5 / 4); default: return width }
}

export interface TemplateProps {
    slide: ResolvedSlide; index: number; total: number; accent: string; accent2: string; accent3: string
    width: number; h: number; font: string; titleSize: number; pad: number; brandName?: string
    isFirst: boolean; isLast: boolean; bgImg?: string; format: SlideFormat
}

// Shared UI elements
export function Dots({ total, index, activeColor = '#fff', inactiveColor = 'rgba(255,255,255,.3)' }: { total: number; index: number; activeColor?: string; inactiveColor?: string }) {
    return <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5, alignItems: 'center' }}>
        {Array.from({ length: total }).map((_, i) => <div key={i} style={{ width: i === index ? 20 : 6, height: 6, borderRadius: 3, background: i === index ? activeColor : inactiveColor, transition: 'width .3s' }} />)}
    </div>
}

export function SwipeBadge() {
    return <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(8px)', borderRadius: 20, padding: '4px 12px', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>Swipe →</div>
}

export function Brand({ name }: { name: string }) {
    return <div style={{ position: 'absolute', top: 14, left: 14, fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.7)', letterSpacing: 1.5, textTransform: 'uppercase' }}>{name}</div>
}

export function Counter({ index, total }: { index: number; total: number }) {
    return <div style={{ position: 'absolute', bottom: 14, right: 16, fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,.5)', fontFamily: 'monospace' }}>{index + 1}/{total}</div>
}

export function ProgressDots({ total, index, accent, dark = '#1e1e2e', left }: { total: number; index: number; accent: string; dark?: string; left: number }) {
    return <div style={{ position: 'absolute', bottom: 14, left, display: 'flex', gap: 5 }}>
        {Array.from({ length: total }).map((_, i) => <div key={i} style={{ width: i === index ? 20 : 6, height: 5, borderRadius: 3, background: i === index ? accent : dark }} />)}
    </div>
}

// ── Slide-Role Aware Components ──

/** Progress bar at top of slide */
export function ProgressBar({ index, total, accent, bg = 'rgba(255,255,255,.15)' }: { index: number; total: number; accent: string; bg?: string }) {
    const pct = ((index + 1) / total) * 100
    return <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: bg }}>
        <div style={{ height: '100%', width: `${pct}%`, background: accent, borderRadius: '0 2px 2px 0', transition: 'width .3s' }} />
    </div>
}

/** Large number badge for content slides */
export function NumberBadge({ index, accent, color = '#fff', size }: { index: number; accent: string; color?: string; size: number }) {
    return <div style={{ width: size, height: size, borderRadius: size / 2, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * .5, fontWeight: 800, color, flexShrink: 0 }}>{index + 1}</div>
}

/** CTA footer for last slide */
export function CTAFooter({ brandName, accent, dark = false, width, pad }: { brandName?: string; accent: string; dark?: boolean; width: number; pad: number }) {
    const bg = dark ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.15)'
    const txt = dark ? '#fff' : '#fff'
    return <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `${pad * .6}px ${pad}px`, background: bg, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: width * .032, fontWeight: 700, color: txt, textTransform: 'uppercase', letterSpacing: 1.5 }}>{brandName || 'Seguimi'}</div>
        <div style={{ background: accent, color: '#fff', fontSize: width * .028, fontWeight: 700, padding: '6px 16px', borderRadius: 20 }}>Follow →</div>
    </div>
}

/** Cover swipe indicator with animated arrow */
export function CoverSwipe({ color = '#fff' }: { color?: string }) {
    return <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 6, color, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', opacity: .7 }}>
        Scorri <span style={{ fontSize: 16 }}>→</span>
    </div>
}
