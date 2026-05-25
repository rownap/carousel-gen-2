'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function brandingTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const B = (bg: string, ch: React.ReactNode) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>{ch}</div>

    return {
        'corporate-clean': B('#ffffff', <>
            {/* Header bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: width * .18, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${pad * .8}px` }}>
                <div style={{ fontSize: width * .045, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>{brandName || 'Carousel'}</div>
                <div style={{ width: width * .08, height: width * .08, borderRadius: 4, background: 'rgba(255,255,255,.2)' }} />
            </div>

            {isFirst ? (
                <div style={{ position: 'absolute', top: width * .18, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.2 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Executive Summary</div>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#475569', marginTop: 16 }}>{slide.subtext}</div>}
                    <div style={{ width: 40, height: 4, background: accent, marginTop: 24 }} />
                    <CoverSwipe color="#94a3b8" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', top: width * .18, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#475569' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 30, background: accent, color: '#fff', padding: '12px 32px', borderRadius: 4, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{brandName ? `Follow ${brandName}` : 'Save this carousel'}</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', top: width * .18, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ fontSize: width * .045, fontWeight: 700, color: accent, marginBottom: 12 }}>0{index}</div>
                    <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#0f172a', lineHeight: 1.25, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#475569', lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}

            {/* Footer */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: width * .12, borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${pad * .8}px` }}>
                <div style={{ fontSize: 10, color: '#94a3b8' }}>{brandName ? `© ${new Date().getFullYear()} ${brandName}` : 'Carousel draft'}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: accent }}>{index + 1}/{total}</div>
            </div>
        </>),

        'magazine': B('#fdf6e3', <>
            <div style={{ position: 'absolute', inset: pad * .6, border: '1px solid #d4c5b9' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .12, fontWeight: 900, color: '#2d3748', textTransform: 'uppercase', letterSpacing: -1, borderBottom: '2px solid #2d3748', paddingBottom: 8, marginBottom: 24, textAlign: 'center', fontFamily: "'Playfair Display',serif" }}>{brandName || 'MAGAZINE'}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 16 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.3, fontWeight: 700, color: '#1a202c', lineHeight: 1.1, fontFamily: "'Playfair Display',serif" }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#4a5568', fontStyle: 'italic', marginTop: 16, borderLeft: '3px solid #d4c5b9', paddingLeft: 12 }}>{slide.subtext}</div>}
                    </div>
                    <CoverSwipe color="#a0aec0" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#a0aec0', letterSpacing: 3, textTransform: 'uppercase', borderBottom: '1px solid #d4c5b9', paddingBottom: 12, marginBottom: 24 }}>The End</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 700, color: '#1a202c', lineHeight: 1.2, fontFamily: "'Playfair Display',serif", marginBottom: 16 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#4a5568', fontStyle: 'italic' }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ borderTop: '1px solid #d4c5b9', paddingTop: 16, fontSize: 11, fontWeight: 700, color: '#2d3748', textTransform: 'uppercase', letterSpacing: 2 }}>{brandName || 'SUBSCRIBE'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d4c5b9', paddingBottom: 12, marginBottom: 20 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#a0aec0', letterSpacing: 2, textTransform: 'uppercase' }}>{brandName || 'MAGAZINE'}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#2d3748' }}>P. {index + 1}</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: titleSize, fontWeight: 700, color: '#1a202c', lineHeight: 1.2, fontFamily: "'Playfair Display',serif", marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#4a5568', lineHeight: 1.6, columnCount: slide.subtext.length > 100 ? 2 : 1, columnGap: 20 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
        </>),

        'pitch-deck': B('#0f172a', <>
            <div style={{ position: 'absolute', top: 0, right: 0, width: width * .7, height: width * .7, background: `radial-gradient(circle at top right,${accent}33,transparent 70%)` }} />
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.05)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: pad * 1.5 }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        {slide.emoji && <div style={{ fontSize: width * .14, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.5))' }}>{slide.emoji}</div>}
                    </div>
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', marginBottom: 24 }}>{slide.subtext}</div>}
                    <div style={{ fontSize: 12, color: accent, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Confidential & Proprietary</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ fontSize: width * .06, color: accent, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Thank You</div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 32, padding: '10px 24px', border: `1px solid ${accent}`, color: accent, borderRadius: 4, fontSize: 12, fontWeight: 700 }}>Contact Us</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad }}>
                    <div style={{ fontSize: width * .045, color: accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 16, height: 2, background: accent }} />
                        {brandName || 'Slide'} {index}
                    </div>
                    <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 16 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#cbd5e1', lineHeight: 1.6 }}>{slide.subtext}</div>}
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 10, color: '#64748b' }}>{index + 1}</div>
        </>),

        'case-study': B('#064e3b', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '100% 40px' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5 }}>
                    <div style={{ padding: '4px 12px', background: '#ecfdf5', color: '#064e3b', fontSize: 10, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', alignSelf: 'flex-start', borderRadius: 4, marginBottom: 24 }}>Case Study</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: titleSize * 1.25, fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#a7f3d0', borderLeft: '2px solid #34d399', paddingLeft: 12 }}>{slide.subtext}</div>}
                    </div>
                    <CoverSwipe color="#34d399" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 30, background: 'rgba(52,211,153,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontSize: 24, marginBottom: 20 }}>📈</div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#a7f3d0' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, padding: '10px 24px', background: '#34d399', color: '#064e3b', borderRadius: 4, fontSize: 12, fontWeight: 800 }}>Vedi Analisi Completa →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 16, background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#064e3b', fontSize: 14, fontWeight: 800 }}>{index}</div>
                        <div style={{ height: 1, flex: 1, background: 'rgba(52,211,153,.3)' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#a7f3d0', lineHeight: 1.6 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
        </>),

        'brand-identity': B(accent, <>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', background: accent2, clipPath: 'polygon(15% 0,100% 0,100% 100%,0% 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.2 }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <Brand name={brandName || 'Brand Guidelines'} />
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,.7)', fontWeight: 700, letterSpacing: 1 }}>{index + 1} / {total}</div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {isFirst ? (
                        <>
                            <div style={{ fontSize: width * .06, color: 'rgba(255,255,255,.9)', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>Identity</div>
                            <div style={{ fontSize: titleSize * 1.4, fontWeight: 900, color: '#fff', lineHeight: 1.05, textShadow: '0 4px 12px rgba(0,0,0,.2)' }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.9)', marginTop: 16 }}>{slide.subtext}</div>}
                        </>
                    ) : isLast ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,.2)', marginBottom: 16 }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.9)' }}>{slide.subtext}</div>}
                            <div style={{ marginTop: 24, display: 'inline-block', padding: '12px 32px', border: '2px solid #fff', borderRadius: 30, fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>Stay Consistent</div>
                        </div>
                    ) : (
                        <>
                            <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.15, textShadow: '0 4px 12px rgba(0,0,0,.2)', marginBottom: slide.subtext ? 16 : 0 }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.9)', lineHeight: 1.5, background: 'rgba(0,0,0,.15)', padding: 16, borderRadius: 8, backdropFilter: 'blur(4px)' }}>{slide.subtext}</div>}
                        </>
                    )}
                </div>

                {isFirst && <CoverSwipe />}
            </div>
        </>),
    }
}
