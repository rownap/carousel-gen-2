'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, SwipeBadge, Brand, Counter, ProgressDots, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function gradientTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, accent3, width, h, font, titleSize, pad, brandName, isFirst, isLast, format } = p
    const sub = "'Satoshi', sans-serif"
    const B = (bg: string, ch: React.ReactNode, ex: React.CSSProperties = {}) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg, ...ex }}>{ch}</div>

    return {
        'gradient-vibrant': B(`linear-gradient(135deg,${accent},${accent2} 60%,${accent3})`, <>
            <ProgressBar index={index} total={total} accent="rgba(255,255,255,.4)" bg="rgba(255,255,255,.12)" />
            <div style={{ position: 'absolute', top: -width * .15, right: -width * .15, width: width * .5, height: width * .5, borderRadius: '50%', background: 'rgba(255,255,255,.1)' }} />
            <div style={{ position: 'absolute', bottom: -width * .1, left: -width * .1, width: width * .4, height: width * .4, borderRadius: '50%', background: 'rgba(0,0,0,.1)' }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                // ── COVER ──
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.2, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 20 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.25, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 12, textShadow: '0 4px 24px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.7)', fontFamily: sub, fontWeight: 400, marginTop: 8 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                // ── CTA ──
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: width * .06, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 16 }}>Riassumendo</div>
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 16, textShadow: '0 2px 20px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.75)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent={accent} width={width} pad={pad} />
                </div>
            ) : (
                // ── CONTENT ──
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .6 }}>
                    <NumberBadge index={index} accent="rgba(255,255,255,.2)" size={width * .12} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0, textShadow: '0 2px 20px rgba(0,0,0,.3)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.75)', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'gradient-dark': B(`linear-gradient(135deg,#0f0f1a,${accent}33)`, <>
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.08)" />
            <div style={{ position: 'absolute', top: '10%', right: '5%', width: width * .35, height: width * .35, borderRadius: '50%', background: `radial-gradient(circle,${accent}22,transparent 70%)` }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ width: width * .15, height: 4, background: accent, borderRadius: 2, marginBottom: 20 }} />
                    {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 16 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.45)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ width: 50, height: 50, borderRadius: 25, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>✦</div>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.5)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent={accent} dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                        <div style={{ fontSize: width * .14, fontWeight: 800, color: `${accent}44`, lineHeight: 1 }}>{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.45)', fontFamily: sub }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} /><ProgressDots total={total} index={index} accent={accent} left={pad} />
        </>),

        'gradient-sunset': B('linear-gradient(135deg,#f97316,#ec4899 50%,#a855f7)', <>
            <ProgressBar index={index} total={total} accent="rgba(255,255,255,.5)" bg="rgba(255,255,255,.15)" />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%,rgba(255,255,255,.12),transparent 60%)' }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.2, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .16, marginBottom: 18, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.3))' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.1, textShadow: '0 4px 24px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.8)', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 10, textShadow: '0 4px 24px rgba(0,0,0,.2)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.8)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#f97316" width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .5 }}>
                    <NumberBadge index={index} accent="rgba(255,255,255,.25)" size={width * .11} />
                    <div style={{ flex: 1 }}>
                        {slide.emoji && <div style={{ fontSize: width * .08, marginBottom: 8 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0, textShadow: '0 4px 24px rgba(0,0,0,.2)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.8)', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'duotone': B(accent, <>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: accent2, clipPath: 'polygon(20% 0,100% 0,100% 100%,0% 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: `${width * .04}px ${width * .04}px` }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingRight: pad * 2.5 }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 14 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 900, color: '#fff', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.7)', fontFamily: sub, marginTop: 10 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12, textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.8)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent={accent2} width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingRight: pad * 2 }}>
                    <div style={{ fontSize: width * .18, fontWeight: 900, color: 'rgba(255,255,255,.12)', lineHeight: 1, marginBottom: -8 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 12 : 0, textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .52, color: 'rgba(255,255,255,.8)', fontFamily: sub }}>{slide.subtext}</div>}
                </div>
            )}
            <Dots total={total} index={index} />
        </>),

        'aurora': B('#0f2027', <>
            <ProgressBar index={index} total={total} accent="#20b2aa" bg="rgba(32,178,170,.15)" />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 20%,rgba(32,178,170,.3),transparent 50%),radial-gradient(ellipse at 70% 80%,rgba(138,43,226,.25),transparent 50%),radial-gradient(ellipse at 50% 50%,rgba(0,128,128,.2),transparent 60%)' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(180deg,rgba(32,178,170,.15),transparent)', filter: 'blur(30px)' }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.2, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 20 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 700, color: '#e0f2f1', lineHeight: 1.15, textShadow: '0 2px 20px rgba(0,128,128,.5)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: 'rgba(176,224,220,.6)', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#20b2aa" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#e0f2f1', lineHeight: 1.2, marginBottom: 12, textShadow: '0 2px 20px rgba(0,128,128,.5)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(176,224,220,.6)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#20b2aa" dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .5 }}>
                    <NumberBadge index={index} accent="rgba(32,178,170,.3)" color="#e0f2f1" size={width * .11} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize, fontWeight: 700, color: '#e0f2f1', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0, textShadow: '0 2px 20px rgba(0,128,128,.5)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(176,224,220,.6)', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Dots total={total} index={index} activeColor="#20b2aa" inactiveColor="rgba(32,178,170,.3)" />
        </>),

        'liquid-mesh': B('#1a1a3e', <>
            <ProgressBar index={index} total={total} accent="#8b5cf6" bg="rgba(139,92,246,.15)" />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%,rgba(99,102,241,.4),transparent 40%),radial-gradient(circle at 80% 70%,rgba(168,85,247,.35),transparent 40%),radial-gradient(circle at 50% 10%,rgba(45,106,160,.3),transparent 50%)', filter: 'blur(40px)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 50%,rgba(236,72,153,.2),transparent 45%)', filter: 'blur(50px)' }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.2, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 20, filter: 'drop-shadow(0 0 20px rgba(139,92,246,.5))' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 700, color: '#fff', lineHeight: 1.15, textShadow: '0 2px 24px rgba(0,0,0,.4)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: 'rgba(255,255,255,.55)', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 12, textShadow: '0 2px 24px rgba(0,0,0,.4)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.55)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#8b5cf6" width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .5 }}>
                    <NumberBadge index={index} accent="rgba(139,92,246,.3)" size={width * .11} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize * 1.05, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0, textShadow: '0 2px 24px rgba(0,0,0,.4)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.55)', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Dots total={total} index={index} />
        </>),

        'holographic': B('#0a0a0a', <>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(238,119,82,.15),rgba(231,60,126,.15),rgba(35,166,213,.15),rgba(35,213,171,.15))', backgroundSize: '400% 400%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'conic-gradient(from 0deg,rgba(238,119,82,.12),rgba(231,60,126,.12),rgba(35,166,213,.12),rgba(35,213,171,.12),rgba(238,119,82,.12))' }} />
            <div style={{ position: 'absolute', inset: 8, borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.03)', backdropFilter: 'blur(1px)' }} />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 18 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.15, fontWeight: 700, color: '#fff', lineHeight: 1.15, background: 'linear-gradient(90deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as React.CSSProperties}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: 'rgba(255,255,255,.45)', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.3, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 12, background: 'linear-gradient(90deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as React.CSSProperties}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: 'rgba(255,255,255,.4)', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#e73c7e" width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad * 1.3, gap: pad * .5 }}>
                    <div style={{ fontSize: width * .16, fontWeight: 800, lineHeight: 1, background: 'linear-gradient(180deg,#ee7752,#e73c7e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', flexShrink: 0 } as React.CSSProperties}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0, background: 'linear-gradient(90deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as React.CSSProperties}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: 'rgba(255,255,255,.45)', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),
    }
}
