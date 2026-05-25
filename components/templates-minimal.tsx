'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function minimalTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const sub = "'Satoshi', sans-serif"
    const B = (bg: string, ch: React.ReactNode) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>{ch}</div>

    return {
        'minimal-light': B('#fafafa', <>
            <ProgressBar index={index} total={total} accent={accent} bg="#e5e7eb" />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: width * .45, height: width * .45, borderRadius: '50%', background: `${accent}12` }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.2 }}>
                    <div style={{ width: 40, height: 4, background: accent, borderRadius: 2, marginBottom: 24 }} />
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 18 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#6b7280', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    {brandName && <div style={{ position: 'absolute', bottom: pad, left: pad, fontSize: 11, fontWeight: 700, color: accent, letterSpacing: 1.5, textTransform: 'uppercase' }}>{brandName}</div>}
                    <CoverSwipe color="#999" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', fontFamily: sub }}>{slide.subtext}</div>}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `${pad * .5}px ${pad}px`, borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#374151', letterSpacing: 1.5, textTransform: 'uppercase' }}>{brandName || 'Seguimi'}</div>
                        <div style={{ background: accent, color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 16 }}>Follow →</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .5 }}>
                    <div style={{ fontSize: width * .16, fontWeight: 800, color: `${accent}20`, lineHeight: 1, flexShrink: 0 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ flex: 1 }}>
                        {slide.emoji && <div style={{ fontSize: width * .07, marginBottom: 8 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'minimal-dark': B('#111111', <>
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.08)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.2 }}>
                    <div style={{ width: 40, height: 4, background: accent, borderRadius: 2, marginBottom: 24 }} />
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 18 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#9ca3af', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#9ca3af', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent={accent} dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .5 }}>
                    <div style={{ fontSize: width * .16, fontWeight: 800, color: 'rgba(255,255,255,.06)', lineHeight: 1, flexShrink: 0 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#9ca3af', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            {brandName && <div style={{ position: 'absolute', top: 14, left: 14, fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.4)', letterSpacing: 1.5, textTransform: 'uppercase' }}>{brandName}</div>}
            <Counter index={index} total={total} />
        </>),

        'bold-type': B('#fff', <>
            <ProgressBar index={index} total={total} accent="#000" bg="#e5e7eb" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 16 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.5, fontWeight: 900, color: '#000', lineHeight: 1.05, letterSpacing: -2 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: accent, fontWeight: 600, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#999" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 900, color: '#000', lineHeight: 1.1, letterSpacing: -1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: accent, fontWeight: 600, marginTop: 10 }}>{slide.subtext}</div>}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `${pad * .5}px ${pad}px`, borderTop: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: 12, fontWeight: 900, color: '#000', textTransform: 'uppercase', letterSpacing: 2 }}>{brandName || 'FOLLOW'}</div>
                        <div style={{ fontSize: 20 }}>→</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                        <div style={{ fontSize: width * .2, fontWeight: 900, color: `${accent}15`, lineHeight: 1 }}>{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#000', lineHeight: 1.1, letterSpacing: -1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', fontFamily: sub, marginTop: 8 }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'swiss': B('#fff', <>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: accent }} />
            <ProgressBar index={index} total={total} accent={accent} bg="#e5e7eb" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: pad, paddingLeft: pad + 10 }}>
                    <div style={{ fontSize: width * .06, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>{brandName || 'Guide'}</div>
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#000', lineHeight: 1.05, letterSpacing: -1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#6b7280', fontFamily: sub, marginTop: 12, borderLeft: `3px solid ${accent}`, paddingLeft: 10 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 30, fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: 2 }}>Scorri →</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad + 10, textAlign: 'left' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#000', lineHeight: 1.2, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', fontFamily: sub }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ background: accent, color: '#fff', fontSize: 12, fontWeight: 700, padding: '8px 20px', borderRadius: 0 }}>FOLLOW</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#000', textTransform: 'uppercase', letterSpacing: 1.5 }}>{brandName || '@handle'}</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', padding: pad, paddingLeft: pad + 10, gap: pad * .4 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                        <div style={{ fontSize: width * .04, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Punto {index + 1}</div>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#000', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 14, right: 14, fontSize: 10, fontWeight: 700, color: '#ccc', fontFamily: 'monospace' }}>{index + 1}/{total}</div>
        </>),

        'mono-space': B('#0d1117', <>
            <ProgressBar index={index} total={total} accent="#58a6ff" bg="rgba(88,166,255,.15)" />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(88,166,255,.03) 1px,transparent 1px)', backgroundSize: '100% 24px' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: '#8b949e', marginBottom: 12 }}>$ cat README.md</div>
                    <div style={{ fontSize: titleSize * 1.15, fontWeight: 700, color: '#c9d1d9', lineHeight: 1.15, fontFamily: "'JetBrains Mono',monospace" }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b949e', fontFamily: "'JetBrains Mono',monospace", marginTop: 12, borderLeft: '3px solid #58a6ff', paddingLeft: 10 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#58a6ff" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: '#58a6ff', marginBottom: 12 }}>$ echo "Grazie!"</div>
                    <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#c9d1d9', lineHeight: 1.2, fontFamily: "'JetBrains Mono',monospace" }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b949e', fontFamily: "'JetBrains Mono',monospace", marginTop: 10 }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#58a6ff" dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: '#58a6ff', marginBottom: 10 }}># Step {index + 1}</div>
                    <div style={{ fontSize: titleSize * .85, fontWeight: 700, color: '#c9d1d9', lineHeight: 1.2, fontFamily: "'JetBrains Mono',monospace", marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#8b949e', fontFamily: "'JetBrains Mono',monospace", lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 10, right: 14, fontSize: 10, color: '#484f58', fontFamily: "'JetBrains Mono',monospace" }}>{index + 1}/{total}</div>
        </>),

        'paper-texture': B('#f5f0e8', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#d4c5a9 0.5px,transparent 0.5px)', backgroundSize: '8px 8px', opacity: .3 }} />
            <ProgressBar index={index} total={total} accent="#8b6914" bg="rgba(139,105,20,.15)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.3, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 16 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 700, color: '#2c1810', lineHeight: 1.15, fontFamily: "'Playfair Display',serif" }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#6b5a3e', fontFamily: "'Lora',serif", fontStyle: 'italic', marginTop: 14 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#8b6914" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ width: 60, height: 1, background: '#8b6914', marginBottom: 20 }} />
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#2c1810', lineHeight: 1.2, fontFamily: "'Playfair Display',serif", marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#6b5a3e', fontFamily: "'Lora',serif", fontStyle: 'italic' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, fontSize: 12, fontWeight: 700, color: '#8b6914', letterSpacing: 2, textTransform: 'uppercase' }}>{brandName || 'Seguimi'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad * 1.2, gap: pad * .5 }}>
                    <div style={{ fontSize: width * .15, fontWeight: 700, color: '#8b691420', lineHeight: 1, fontFamily: "'Playfair Display',serif", flexShrink: 0 }}>{index + 1}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#2c1810', lineHeight: 1.2, fontFamily: "'Playfair Display',serif", marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#6b5a3e', fontFamily: "'Lora',serif", fontStyle: 'italic', lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 10, right: 14, fontSize: 10, color: '#8b691466', fontFamily: "'Lora',serif" }}>{index + 1} di {total}</div>
        </>),
    }
}
