'use client'
import type { TemplateProps } from './slide-utils'
import { ProgressBar, Counter, CoverSwipe, CTAFooter } from './slide-utils'

export function viralTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const B = (bg: string, ch: React.ReactNode, ex: React.CSSProperties = {}) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg, ...ex }}>{ch}</div>

    return {
        // ═══════════════════════════════════════════════
        // THREAD STYLE — X/Twitter thread simulation
        // ═══════════════════════════════════════════════
        'viral-thread': B('#000', <>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                {/* Header bar */}
                <div style={{ padding: `${pad * .4}px ${pad * .7}px`, borderBottom: '1px solid #2f3336', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#e7e9ea' }}>Thread</div>
                    <div style={{ fontSize: 11, color: '#71767b' }}>{index + 1}/{total}</div>
                </div>

                {/* Tweet content */}
                <div style={{ flex: 1, padding: pad * .7, display: 'flex', gap: 10 }}>
                    {/* Avatar + thread line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ width: width * .09, height: width * .09, borderRadius: width * .045, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .04, fontWeight: 700, color: '#fff' }}>
                            {(brandName || 'U').charAt(0).toUpperCase()}
                        </div>
                        {!isLast && <div style={{ width: 2, flex: 1, background: '#2f3336', marginTop: 4 }} />}
                    </div>

                    {/* Tweet body */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#e7e9ea' }}>{brandName || 'Username'}</div>
                            <div style={{ fontSize: 12, color: '#71767b' }}>@{(brandName || 'user').toLowerCase().replace(/\s+/g, '')}</div>
                        </div>

                        {isFirst ? (
                            <>
                                <div style={{ fontSize: titleSize * .75, fontWeight: 700, color: '#e7e9ea', lineHeight: 1.3, marginBottom: 10 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#71767b', lineHeight: 1.5 }}>{slide.subtext}</div>}
                                <div style={{ marginTop: 14, fontSize: 12, color: accent }}>Scorri per leggere il thread completo ↓</div>
                            </>
                        ) : isLast ? (
                            <>
                                <div style={{ fontSize: titleSize * .65, color: '#e7e9ea', lineHeight: 1.4, marginBottom: 14 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .42, color: '#71767b', lineHeight: 1.5, marginBottom: 10 }}>{slide.subtext}</div>}
                                <div style={{ borderTop: '1px solid #2f3336', paddingTop: 12, display: 'flex', justifyContent: 'space-around' }}>
                                    <div style={{ fontSize: 12, color: '#71767b' }}>💬 Commenta</div>
                                    <div style={{ fontSize: 12, color: '#71767b' }}>🔁 Condividi</div>
                                    <div style={{ fontSize: 12, color: '#71767b' }}>❤️ Like</div>
                                </div>
                            </>
                        ) : (
                            <>
                                {slide.emoji && <div style={{ fontSize: width * .07, marginBottom: 6 }}>{slide.emoji}</div>}
                                <div style={{ fontSize: titleSize * .65, color: '#e7e9ea', lineHeight: 1.4, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .42, color: '#71767b', lineHeight: 1.5 }}>{slide.subtext}</div>}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>),

        // ═══════════════════════════════════════════════
        // STORIES IG — Instagram Stories aesthetic
        // ═══════════════════════════════════════════════
        'viral-stories': B(`linear-gradient(135deg,${accent},${accent2})`, <>
            <ProgressBar index={index} total={total} accent="rgba(255,255,255,.8)" bg="rgba(255,255,255,.2)" />

            {/* Top stories bar */}
            <div style={{ position: 'absolute', top: 12, left: pad * .6, right: pad * .6, display: 'flex', gap: 3 }}>
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= index ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.25)' }} />
                ))}
            </div>

            {/* Profile header */}
            <div style={{ position: 'absolute', top: 24, left: pad * .6, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: width * .08, height: width * .08, borderRadius: width * .04, background: 'rgba(255,255,255,.3)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .035, fontWeight: 700, color: '#fff' }}>
                    {(brandName || 'U').charAt(0)}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{brandName || 'username'}</div>
            </div>

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.3, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .18, marginBottom: 16, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.3))' }}>{slide.emoji}</div>}
                    <div style={{ background: 'rgba(0,0,0,.35)', backdropFilter: 'blur(10px)', borderRadius: 16, padding: `${pad * .5}px ${pad * .7}px` }}>
                        <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{slide.text}</div>
                    </div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.85)', marginTop: 14, background: 'rgba(0,0,0,.2)', padding: '4px 12px', borderRadius: 8 }}>{slide.subtext}</div>}
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ background: 'rgba(0,0,0,.35)', backdropFilter: 'blur(10px)', borderRadius: 16, padding: `${pad * .5}px ${pad * .7}px`, marginBottom: 16 }}>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{slide.text}</div>
                    </div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: 'rgba(255,255,255,.85)', marginBottom: 16 }}>{slide.subtext}</div>}
                    <div style={{ background: '#fff', color: '#000', padding: '10px 28px', borderRadius: 30, fontSize: 13, fontWeight: 800 }}>{brandName || 'Seguimi'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.1, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 10 }}>{slide.emoji}</div>}
                    <div style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(10px)', borderRadius: 14, padding: `${pad * .4}px ${pad * .6}px` }}>
                        <div style={{ fontSize: titleSize * .85, fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>{slide.text}</div>
                    </div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: 'rgba(255,255,255,.8)', marginTop: 10 }}>{slide.subtext}</div>}
                </div>
            )}

            {/* Bottom reply bar */}
            <div style={{ position: 'absolute', bottom: 12, left: pad * .6, right: pad * .6, background: 'rgba(255,255,255,.15)', borderRadius: 30, padding: '8px 16px', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Invia un messaggio...</div>
        </>),

        // ═══════════════════════════════════════════════
        // TIKTOK AESTHETIC — Big text, trend fonts, dark
        // ═══════════════════════════════════════════════
        'viral-tiktok': B('#000', <>
            <ProgressBar index={index} total={total} accent="#fe2c55" bg="rgba(254,44,85,.15)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.1 }}>
                    {slide.emoji && <div style={{ fontSize: width * .18, marginBottom: 14, filter: 'drop-shadow(0 0 20px rgba(254,44,85,.5))' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.6, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: -2, textTransform: 'uppercase' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: '#fe2c55', fontWeight: 700, marginTop: 14 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 30, height: 3, background: '#fe2c55', borderRadius: 2 }} />
                        <div style={{ fontSize: 10, color: '#fe2c55', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Swipe</div>
                    </div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: -1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: 'rgba(255,255,255,.6)', marginTop: 10 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ background: '#fe2c55', color: '#fff', padding: '10px 24px', borderRadius: 6, fontSize: 13, fontWeight: 800 }}>Follow</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{brandName || '@handle'}</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: width * .22, fontWeight: 900, color: 'rgba(254,44,85,.08)', lineHeight: 1, position: 'absolute', top: pad * .5, right: pad * .5 }}>{String(index + 1).padStart(2, '0')}</div>
                    {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 10 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.15, fontWeight: 900, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: -1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.5)', marginTop: 10, lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}

            {/* TikTok right sidebar */}
            <div style={{ position: 'absolute', right: 10, bottom: h * .15, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{ width: width * .08, height: width * .08, borderRadius: width * .04, background: '#fe2c55', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .035, color: '#fff', fontWeight: 700 }}>
                    {(brandName || 'U').charAt(0)}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 18 }}>❤️</div>
                    <div style={{ fontSize: 9, color: '#fff', fontWeight: 700 }}>4.2K</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 18 }}>💬</div>
                    <div style={{ fontSize: 9, color: '#fff', fontWeight: 700 }}>128</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 18 }}>🔖</div>
                    <div style={{ fontSize: 9, color: '#fff', fontWeight: 700 }}>Save</div>
                </div>
            </div>
        </>),
    }
}
