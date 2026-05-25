'use client'
import type { TemplateProps } from './slide-utils'
import { ProgressBar, Counter, CoverSwipe, CTAFooter } from './slide-utils'

export function signatureTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const B = (bg: string, ch: React.ReactNode, ex: React.CSSProperties = {}) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg, ...ex }}>{ch}</div>

    return {
        // ═══════════════════════════════════════════════════════
        // EDITORIAL MAGAZINE — Vogue/GQ inspired, serif, elegant
        // ═══════════════════════════════════════════════════════
        'sig-editorial': B('#f8f5f0', <>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#1a1a1a' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#1a1a1a' }} />

            {isFirst ? (
                // COVER: Full editorial spread
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: `${pad * .5}px ${pad}px`, borderBottom: '1px solid #d4c5a9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#8b7355' }}>{brandName || 'EDITORIAL'}</div>
                        <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: 2, color: '#8b7355', fontStyle: 'italic' }}>Vol. {total}</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                        <div style={{ width: 50, height: 1, background: '#1a1a1a', margin: '0 auto 24px' }} />
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 16 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.4, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.05, fontFamily: "'Playfair Display',serif", letterSpacing: -1 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .42, color: '#8b7355', fontStyle: 'italic', marginTop: 16, fontFamily: "'Lora',serif" }}>{slide.subtext}</div>}
                        <div style={{ width: 50, height: 1, background: '#1a1a1a', margin: '24px auto 0' }} />
                    </div>
                    <div style={{ padding: `${pad * .4}px ${pad}px`, borderTop: '1px solid #d4c5a9', textAlign: 'center', fontSize: 9, color: '#8b7355', letterSpacing: 2, textTransform: 'uppercase' }}>Scorri per continuare →</div>
                </div>
            ) : isLast ? (
                // CTA: Closing editorial
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: `${pad * .5}px ${pad}px`, borderBottom: '1px solid #d4c5a9', fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#8b7355' }}>{brandName || 'EDITORIAL'}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                        <div style={{ fontSize: width * .15, color: '#d4c5a9', lineHeight: 1, marginBottom: 12, fontFamily: "'Playfair Display',serif" }}>"</div>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 400, color: '#1a1a1a', lineHeight: 1.3, fontFamily: "'Playfair Display',serif", fontStyle: 'italic' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .4, color: '#8b7355', marginTop: 16 }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ padding: `${pad * .6}px ${pad}px`, borderTop: '2px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#1a1a1a', letterSpacing: 2, textTransform: 'uppercase' }}>{brandName || 'Seguimi'}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#8b7355', letterSpacing: 1 }}>Follow →</div>
                    </div>
                </div>
            ) : (
                // CONTENT: Magazine column layout
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: `${pad * .4}px ${pad}px`, borderBottom: '1px solid #d4c5a9', display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#8b7355', letterSpacing: 2 }}>
                        <span style={{ textTransform: 'uppercase', fontWeight: 700 }}>{brandName || 'EDITORIAL'}</span>
                        <span>{index + 1} / {total}</span>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: pad }}>
                        <div style={{ borderLeft: '3px solid #1a1a1a', paddingLeft: pad * .6, flex: 1 }}>
                            <div style={{ fontSize: width * .04, fontWeight: 700, color: '#8b7355', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Capitolo {index}</div>
                            <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, fontFamily: "'Playfair Display',serif" }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#6b5a3e', fontFamily: "'Lora',serif", lineHeight: 1.5, marginTop: 10 }}>{slide.subtext}</div>}
                        </div>
                    </div>
                </div>
            )}
        </>),

        // ═══════════════════════════════════════════════════
        // TECHWAVE — Cyberpunk, neon accents, dark
        // ═══════════════════════════════════════════════════
        'sig-techwave': B('#08080f', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,255,136,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.02) 1px,transparent 1px)', backgroundSize: `${width * .08}px ${width * .08}px` }} />
            <ProgressBar index={index} total={total} accent="#00ff88" bg="rgba(0,255,136,.08)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: '#00ff88', marginBottom: 16, letterSpacing: 2 }}>{'>'} INITIALIZING...</div>
                    {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 14, filter: 'drop-shadow(0 0 10px #00ff88)' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.05, textShadow: '0 0 30px rgba(0,255,136,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#00ff8888', fontFamily: "'JetBrains Mono',monospace", marginTop: 14 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#00ff88', boxShadow: '0 0 10px #00ff88' }} />
                        <div style={{ fontSize: 10, color: '#00ff88', fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1 }}>SWIPE TO CONTINUE</div>
                    </div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: '#00ff88', marginBottom: 16, letterSpacing: 2 }}>{'>'} PROGRAM COMPLETE</div>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, textShadow: '0 0 20px rgba(0,255,136,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#00ff8888', fontFamily: "'JetBrains Mono',monospace", marginTop: 12 }}>{slide.subtext}</div>}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `${pad * .5}px ${pad}px`, borderTop: '1px solid #00ff8833', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#00ff88', fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1 }}>{brandName || '@handle'}</div>
                        <div style={{ background: '#00ff88', color: '#000', fontSize: 10, fontWeight: 700, padding: '4px 12px', fontFamily: "'JetBrains Mono',monospace" }}>FOLLOW</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                        <div style={{ width: width * .1, height: width * .1, border: '2px solid #00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .05, fontWeight: 800, color: '#00ff88', fontFamily: "'JetBrains Mono',monospace" }}>{String(index + 1).padStart(2, '0')}</div>
                        <div style={{ flex: 1, height: 1, background: '#00ff8833' }} />
                    </div>
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0, textShadow: '0 0 20px rgba(0,255,136,.2)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.5)', fontFamily: "'JetBrains Mono',monospace", lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        // ═══════════════════════════════════════════════════
        // LUXE GOLD — Black & gold, luxury, ornamental
        // ═══════════════════════════════════════════════════
        'sig-luxe': B('#0a0a0a', <>
            <div style={{ position: 'absolute', inset: 8, border: '1px solid #d4a84422', borderRadius: 2 }} />
            <div style={{ position: 'absolute', inset: 16, border: '1px solid #d4a84411' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ fontSize: width * .06, color: '#d4a844', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 4, fontWeight: 300 }}>✦ ✦ ✦</div>
                    <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg,transparent,#d4a844,transparent)', marginBottom: 24 }} />
                    {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 16, filter: 'drop-shadow(0 0 10px rgba(212,168,68,.4))' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 700, color: '#d4a844', lineHeight: 1.1, fontFamily: "'Cinzel',serif", letterSpacing: 2 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: 'rgba(212,168,68,.6)', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', marginTop: 16, letterSpacing: 1 }}>{slide.subtext}</div>}
                    <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg,transparent,#d4a844,transparent)', marginTop: 24 }} />
                    <div style={{ marginTop: 12, fontSize: 9, color: '#d4a84466', letterSpacing: 3, textTransform: 'uppercase' }}>Scorri</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ width: 50, height: 50, borderRadius: 25, border: '2px solid #d4a844', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#d4a844', marginBottom: 20 }}>✦</div>
                    <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#d4a844', lineHeight: 1.2, fontFamily: "'Cinzel',serif", letterSpacing: 1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .4, color: 'rgba(212,168,68,.5)', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', marginTop: 12 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, padding: '8px 24px', border: '1px solid #d4a844', fontSize: 10, fontWeight: 700, color: '#d4a844', letterSpacing: 3, textTransform: 'uppercase' }}>{brandName || 'Follow'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div style={{ fontSize: width * .08, fontWeight: 300, color: '#d4a84433', fontFamily: "'Cinzel',serif" }}>{String(index + 1).padStart(2, '0')}</div>
                        <div style={{ flex: 1, height: 1, background: '#d4a84422' }} />
                    </div>
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#d4a844', lineHeight: 1.2, fontFamily: "'Cinzel',serif", letterSpacing: 1, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: 'rgba(212,168,68,.5)', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 10, right: 14, fontSize: 9, color: '#d4a84433', fontFamily: "'Cinzel',serif", letterSpacing: 2 }}>{index + 1} / {total}</div>
        </>),

        // ═══════════════════════════════════════════════════
        // ORGANIC FLOW — Nature, wellness, soft curves
        // ═══════════════════════════════════════════════════
        'sig-organic': B('#f0ebe3', <>
            <div style={{ position: 'absolute', top: -width * .3, right: -width * .15, width: width * .7, height: width * .7, borderRadius: '50%', background: '#d4c5a920' }} />
            <div style={{ position: 'absolute', bottom: -width * .2, left: -width * .1, width: width * .5, height: width * .5, borderRadius: '50%', background: '#8b9e7a15' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.4, textAlign: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 30, background: '#8b9e7a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20 }}>{slide.emoji || '🌿'}</div>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 700, color: '#3d3929', lineHeight: 1.15 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b7355', fontStyle: 'italic', marginTop: 14 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 30, height: 2, background: '#8b9e7a', borderRadius: 1 }} />
                        <div style={{ fontSize: 10, color: '#8b9e7a', fontWeight: 600, letterSpacing: 1 }}>SCORRI</div>
                        <div style={{ width: 30, height: 2, background: '#8b9e7a', borderRadius: 1 }} />
                    </div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.3, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#3d3929', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b7355', fontStyle: 'italic' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, background: '#8b9e7a', color: '#fff', padding: '10px 28px', borderRadius: 30, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>{brandName || 'Seguimi'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad * 1.2, gap: pad * .5 }}>
                    <div style={{ width: width * .11, height: width * .11, borderRadius: width * .055, background: '#8b9e7a20', border: '2px solid #8b9e7a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .045, fontWeight: 700, color: '#8b9e7a', flexShrink: 0 }}>{index + 1}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#3d3929', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b7355', lineHeight: 1.5, fontStyle: 'italic' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 10, right: 14, fontSize: 10, color: '#8b735566' }}>{index + 1}/{total}</div>
        </>),

        // ═══════════════════════════════════════════════════
        // POP ART — Warhol, bold colors, halftone, comics
        // ═══════════════════════════════════════════════════
        'sig-pop-art': B('#ff1493', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#00000020 2px,transparent 2px)', backgroundSize: '12px 12px' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: pad * .8, background: '#ffed00', border: '6px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .15, marginBottom: 12, filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,.3))' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.4, fontWeight: 900, color: '#ff1493', lineHeight: 1, textTransform: 'uppercase', textShadow: '3px 3px 0 #000', WebkitTextStroke: '1px #000' } as React.CSSProperties}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, fontWeight: 800, color: '#000', marginTop: 12 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 16, background: '#000', color: '#ffed00', padding: '6px 16px', fontSize: 11, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase' }}>SWIPE →</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: pad * .8, background: '#00bfff', border: '6px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', textShadow: '3px 3px 0 #000', WebkitTextStroke: '1px #000' } as React.CSSProperties}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, fontWeight: 800, color: '#000', marginTop: 10 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
                        <div style={{ background: '#ffed00', border: '4px solid #000', padding: '8px 20px', fontWeight: 900, fontSize: 13, textTransform: 'uppercase' }}>{brandName || 'FOLLOW!'}</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: pad * .8, background: index % 2 === 0 ? '#ffed00' : '#00bfff', border: '6px solid #000', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: '#000', color: index % 2 === 0 ? '#ffed00' : '#00bfff', padding: '6px 14px', fontSize: 13, fontWeight: 900, alignSelf: 'flex-start' }}>#{index + 1}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * .8 }}>
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 10 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * .95, fontWeight: 900, color: '#000', lineHeight: 1.15, textTransform: 'uppercase' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, fontWeight: 700, color: '#000', marginTop: 8, borderLeft: '4px solid #ff1493', paddingLeft: 8 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
        </>),
    }
}
