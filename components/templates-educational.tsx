'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function educationalTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const sub = "'Satoshi', sans-serif"
    const B = (bg: string, ch: React.ReactNode) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>{ch}</div>

    return {
        'numbered-steps': B('#0f172a', <>
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.05)" />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${accent},${accent2})` }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 12, background: `linear-gradient(135deg,${accent},${accent2})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, marginBottom: 24, boxShadow: `0 8px 32px ${accent}44` }}>{slide.emoji || '📚'}</div>
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.15, textShadow: '0 4px 20px rgba(0,0,0,.5)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub, marginTop: 16 }}>{slide.subtext}</div>}
                    <div style={{ padding: '6px 16px', borderRadius: 20, background: 'rgba(255,255,255,.1)', marginTop: 24, fontSize: 11, fontWeight: 700, color: '#cbd5e1', letterSpacing: 1.5, textTransform: 'uppercase' }}>Swipe per imparare →</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: width * .06, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Conclusione</div>
                    <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent={accent} dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad, gap: pad * .6 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                        <div style={{ fontSize: width * .035, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>STEP</div>
                        <div style={{ width: width * .14, height: width * .14, borderRadius: width * .07, background: 'rgba(255,255,255,.05)', border: `2px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .06, fontWeight: 800, color: accent, boxShadow: `0 0 20px ${accent}33` }}>{index}</div>
                    </div>
                    <div style={{ flex: 1, borderLeft: '1px solid #1e293b', paddingLeft: 16 }}>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#f8fafc', lineHeight: 1.25, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .52, color: '#94a3b8', fontFamily: sub, lineHeight: 1.55 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            {brandName && <div style={{ position: 'absolute', top: 12, left: 16, fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: 1.5, textTransform: 'uppercase' }}>{brandName}</div>}
            <Counter index={index} total={total} />
        </>),

        'data-card': B('#0c1222', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.05)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .06, fontWeight: 700, color: accent, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Report Data</div>
                    <div style={{ fontSize: titleSize * 1.4, fontWeight: 800, color: '#fff', lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,.5)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#64748b', fontFamily: sub, marginTop: 16, borderLeft: `2px solid ${accent}`, paddingLeft: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe color={accent} />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub }}>{slide.subtext}</div>}
                    <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                        <div style={{ border: `1px solid ${accent}`, color: accent, padding: '8px 20px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>SALVA</div>
                        <div style={{ background: accent, color: '#fff', padding: '8px 20px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>CONDIVIDI</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                    <div style={{ background: 'rgba(255,255,255,.03)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,.05)', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 10px 40px rgba(0,0,0,.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {slide.emoji && <div style={{ fontSize: width * .1 }}>{slide.emoji}</div>}
                            <div style={{ padding: '4px 12px', borderRadius: 12, background: `${accent}22`, color: accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{index}/{total - 1}</div>
                        </div>
                        <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            {brandName && <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: 1 }}>{brandName}</div>}
        </>),

        'story-timeline': B('#0f0f1a', <>
            <div style={{ position: 'absolute', left: pad * 1.5, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,.1)' }} />
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,.05)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad * 2.5 }}>
                    <div style={{ position: 'absolute', left: pad * 1.5 - 6, top: '40%', width: 14, height: 14, borderRadius: 7, background: accent, boxShadow: `0 0 15px ${accent}` }} />
                    {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 12 }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#8b949e', fontFamily: sub, marginTop: 12 }}>{slide.subtext}</div>}
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad * 2.5 }}>
                    <div style={{ position: 'absolute', left: pad * 1.5 - 6, top: '50%', width: 14, height: 14, borderRadius: 7, background: accent, boxShadow: `0 0 15px ${accent}` }} />
                    <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#8b949e', fontFamily: sub, marginBottom: 20 }}>{slide.subtext}</div>}
                    <div style={{ display: 'inline-flex', background: accent, color: '#fff', padding: '8px 20px', borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, alignSelf: 'flex-start' }}>Segui {brandName || 'Ora'}</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad * 2.5 }}>
                    <div style={{ position: 'absolute', left: pad * 1.5 - 6, top: '50%', width: 14, height: 14, borderRadius: 7, background: accent, border: '3px solid #0f0f1a' }} />
                    <div style={{ fontSize: width * .04, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Fase {index}</div>
                    <div style={{ fontSize: titleSize, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#8b949e', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'infographic': B('#1e3a5f', <>
            <div style={{ position: 'absolute', inset: 0, opacity: .05, backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
            <ProgressBar index={index} total={total} accent="#38bdf8" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.2 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                        <div style={{ width: 12, height: 40, background: '#38bdf8', borderRadius: 4 }} />
                        <div style={{ width: 12, height: 28, background: '#818cf8', borderRadius: 4, alignSelf: 'flex-end' }} />
                        <div style={{ width: 12, height: 20, background: '#f472b6', borderRadius: 4, alignSelf: 'flex-end' }} />
                    </div>
                    <div style={{ fontSize: titleSize * 1.35, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub, marginTop: 14 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#38bdf8" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', fontFamily: sub }}>{slide.subtext}</div>}
                    <CTAFooter brandName={brandName} accent="#38bdf8" dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: pad }}>
                    <div style={{ width: '40%', height: '70%', background: 'rgba(255,255,255,.05)', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,.1)' }}>
                        <div style={{ fontSize: width * .16, fontWeight: 800, color: '#38bdf8', lineHeight: 1 }}>{Math.round((index / (total - 1)) * 100)}%</div>
                        <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginTop: 8 }}>Progresso</div>
                    </div>
                    <div style={{ flex: 1, paddingLeft: pad }}>
                        {slide.emoji && <div style={{ fontSize: width * .08, marginBottom: 10 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#94a3b8', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'checklist-pro': B('#064e3b', <>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'rgba(255,255,255,.1)' }}>
                <div style={{ height: '100%', width: `${(index + 1) / total * 100}%`, background: '#34d399', transition: 'width .3s' }} />
            </div>

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .06, color: '#34d399', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Checklist Guidata</div>
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#a7f3d0', fontFamily: sub, marginTop: 14 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#34d399" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 30, background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, color: '#064e3b', marginBottom: 20 }}>✓</div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#a7f3d0', fontFamily: sub }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, fontSize: 13, fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: 2 }}>{brandName || 'Seguimi'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#064e3b', fontSize: 18, fontWeight: 800, flexShrink: 0, marginTop: 4 }}>✓</div>
                        <div>
                            <div style={{ fontSize: titleSize * .95, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#a7f3d0', fontFamily: sub, lineHeight: 1.5 }}>{slide.subtext}</div>}
                        </div>
                    </div>
                </div>
            )}
            <Brand name={brandName || 'Checklist'} />
        </>),

        'flowchart': B('#1e1b4b', <>
            <ProgressBar index={index} total={total} accent="#818cf8" bg="rgba(255,255,255,.05)" />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(129,140,248,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,.1) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ border: '2px dashed #818cf8', borderRadius: 12, padding: 20, background: 'rgba(129,140,248,.1)' }}>
                        {slide.emoji && <div style={{ fontSize: width * .12, marginBottom: 10 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{slide.text}</div>
                    </div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a5b4fc', fontFamily: sub, marginTop: 16 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#818cf8" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ border: '2px solid #818cf8', borderRadius: 12, padding: 24, background: '#312e81' }}>
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 10 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a5b4fc', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>
                    <CTAFooter brandName={brandName} accent="#818cf8" dark width={width} pad={pad} />
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad }}>
                    {/* Previous step arrow simulated */}
                    <div style={{ width: 2, height: 40, background: '#818cf8', marginBottom: 4 }} />
                    <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #818cf8', marginBottom: 12 }} />

                    <div style={{ background: '#312e81', border: '2px solid #818cf8', borderRadius: 8, padding: 20, width: '90%', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,0,0,.3)' }}>
                        <div style={{ fontSize: 10, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Processo {index} di {total - 2}</div>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a5b4fc', fontFamily: sub }}>{slide.subtext}</div>}
                    </div>

                    {/* Next step line simulated */}
                    <div style={{ width: 2, height: 40, background: '#818cf8', marginTop: 16 }} />
                </div>
            )}
            <Counter index={index} total={total} />
        </>),
    }
}
