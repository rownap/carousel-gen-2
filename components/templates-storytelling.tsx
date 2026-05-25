'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function storytellingTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const sub = "'Satoshi', sans-serif"
    const B = (bg: string, ch: React.ReactNode) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>{ch}</div>

    return {
        'quote-card': B('#1a1a2e', <>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: pad, background: accent }} />
            <ProgressBar index={index} total={total} accent="#fff" bg="rgba(255,255,255,.1)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad * 2.5 }}>
                    <div style={{ fontSize: width * .2, color: `${accent}44`, lineHeight: .5, fontFamily: 'serif', marginBottom: 20 }}>"</div>
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 700, color: '#fff', lineHeight: 1.15, fontStyle: 'italic', fontFamily: "'Playfair Display',serif" }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', marginTop: 16 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#94a3b8" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, paddingLeft: pad * 2, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 700, color: '#fff', lineHeight: 1.2, fontStyle: 'italic', fontFamily: "'Playfair Display',serif", marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, padding: '10px 24px', border: `2px solid ${accent}`, color: '#fff', borderRadius: 30, fontSize: 13, fontWeight: 700 }}>Segui {brandName || 'Autore'}</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad, paddingLeft: pad * 2.5 }}>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 700, color: '#fff', lineHeight: 1.25, fontStyle: 'italic', fontFamily: "'Playfair Display',serif", marginBottom: slide.subtext ? 16 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#94a3b8', lineHeight: 1.6 }}>— {slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'testimonial': B('#fef3c7', <>
            <div style={{ position: 'absolute', inset: pad * .8, background: '#fff', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,.05)', display: 'flex', flexDirection: 'column' }}>
                {isFirst ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: pad, textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: 4, color: '#fbbf24', fontSize: width * .06, marginBottom: 16 }}>★★★★★</div>
                        <div style={{ fontSize: titleSize * 1.15, fontWeight: 800, color: '#1f2937', lineHeight: 1.2 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280', marginTop: 12 }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 24, fontSize: 11, fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: 1 }}>Leggi le recensioni →</div>
                    </div>
                ) : isLast ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: pad, textAlign: 'center' }}>
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#1f2937', lineHeight: 1.25, marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#6b7280' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 24, background: '#fbbf24', color: '#78350f', padding: '10px 24px', borderRadius: 8, fontSize: 12, fontWeight: 800 }}>Acquista Ora</div>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: pad }}>
                        <div style={{ fontSize: width * .15, color: '#fef3c7', lineHeight: .5, fontWeight: 900, marginBottom: 12 }}>"</div>
                        <div style={{ flex: 1, fontSize: titleSize * .9, fontWeight: 700, color: '#374151', lineHeight: 1.35, marginBottom: slide.subtext ? 16 : 0 }}>{slide.text}</div>

                        {slide.subtext && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', fontWeight: 800 }}>U</div>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 800, color: '#1f2937' }}>{slide.subtext}</div>
                                    <div style={{ fontSize: 11, color: '#6b7280' }}>Cliente verificato</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {brandName && <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: 10, fontWeight: 700, color: '#d97706' }}>{brandName}</div>}
        </>),

        'thread-style': B('#0f172a', <>
            <ProgressBar index={index} total={total} accent="#38bdf8" />

            <div style={{ position: 'absolute', top: pad * 1.5, bottom: pad * 1.5, left: pad * 1.5, width: 2, background: 'rgba(56,189,248,.2)' }} />

            <div style={{ position: 'absolute', inset: 0, padding: pad * 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: pad * .5, alignItems: 'flex-start' }}>
                    <div style={{ width: width * .1, height: width * .1, borderRadius: width * .05, background: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: width * .05, fontWeight: 800, color: '#fff', transform: `translateX(-${width * .05}px)`, zIndex: 2, flexShrink: 0 }}>
                        {(brandName || 'T').charAt(0)}
                    </div>

                    <div style={{ flex: 1, paddingTop: 4 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 800, color: '#f8fafc' }}>{brandName || 'Username'}</div>
                            <div style={{ fontSize: 12, color: '#64748b' }}>@{(brandName || 'user').toLowerCase()}</div>
                            <div style={{ fontSize: 12, color: '#64748b' }}>· {index + 1}/{total}</div>
                        </div>

                        {isFirst ? (
                            <>
                                <div style={{ fontSize: titleSize, fontWeight: 700, color: '#f8fafc', lineHeight: 1.3, marginBottom: 12 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#94a3b8', lineHeight: 1.5 }}>{slide.subtext}</div>}
                                <div style={{ marginTop: 16, fontSize: 12, color: '#38bdf8', fontWeight: 600 }}>Leggi il thread ↓</div>
                            </>
                        ) : isLast ? (
                            <>
                                <div style={{ fontSize: titleSize * .9, color: '#f8fafc', lineHeight: 1.35, marginBottom: 16 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#94a3b8', marginBottom: 16 }}>{slide.subtext}</div>}
                                <div style={{ display: 'flex', gap: 16 }}>
                                    <div style={{ padding: '6px 16px', borderRadius: 16, border: '1px solid #38bdf8', color: '#38bdf8', fontSize: 12, fontWeight: 700 }}>Follow</div>
                                    <div style={{ padding: '6px 16px', borderRadius: 16, border: '1px solid #64748b', color: '#cbd5e1', fontSize: 12, fontWeight: 700 }}>Retweet</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ fontSize: titleSize * .85, color: '#f8fafc', lineHeight: 1.35, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#94a3b8', lineHeight: 1.5 }}>{slide.subtext}</div>}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>),

        'conversation': B('#f3f4f6', <>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{brandName || 'Chat'}</div>
            </div>

            <div style={{ position: 'absolute', top: 60, bottom: 60, left: 0, right: 0, padding: pad, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>

                {isFirst ? (
                    <>
                        <div style={{ alignSelf: 'center', background: '#e5e7eb', padding: '4px 12px', borderRadius: 12, fontSize: 10, color: '#6b7280', marginBottom: 8 }}>Oggi</div>
                        <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '12px 16px', borderRadius: '16px 16px 16px 4px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)', border: '1px solid #f3f4f6' }}>
                            <div style={{ fontSize: titleSize * .9, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{slide.text}</div>
                        </div>
                        {slide.subtext && (
                            <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '12px 16px', borderRadius: '4px 16px 16px 16px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)', border: '1px solid #f3f4f6' }}>
                                <div style={{ fontSize: titleSize * .5, color: '#4b5563', lineHeight: 1.4 }}>{slide.subtext}</div>
                            </div>
                        )}
                    </>
                ) : isLast ? (
                    <>
                        <div style={{ alignSelf: 'flex-end', background: accent, padding: '12px 16px', borderRadius: '16px 16px 4px 16px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)' }}>
                            <div style={{ fontSize: titleSize * .85, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{slide.text}</div>
                        </div>
                        {slide.subtext && (
                            <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '12px 16px', borderRadius: '16px 16px 16px 4px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)', border: '1px solid #f3f4f6' }}>
                                <div style={{ fontSize: titleSize * .5, color: '#4b5563', lineHeight: 1.4 }}>{slide.subtext}</div>
                            </div>
                        )}
                        <div style={{ alignSelf: 'center', marginTop: 20, background: '#fff', border: `1px solid ${accent}`, padding: '8px 20px', borderRadius: 20, fontSize: 12, fontWeight: 700, color: accent }}>Unisciti al canale →</div>
                    </>
                ) : (
                    <>
                        <div style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end', background: index % 2 === 0 ? '#fff' : accent, padding: '12px 16px', borderRadius: index % 2 === 0 ? '16px 16px 16px 4px' : '16px 16px 4px 16px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)', border: index % 2 === 0 ? '1px solid #f3f4f6' : 'none' }}>
                            <div style={{ fontSize: titleSize * .85, fontWeight: 700, color: index % 2 === 0 ? '#111827' : '#fff', lineHeight: 1.3 }}>{slide.text}</div>
                        </div>
                        {slide.subtext && (
                            <div style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end', background: index % 2 === 0 ? '#fff' : accent, padding: '10px 16px', borderRadius: index % 2 === 0 ? '4px 16px 16px 16px' : '16px 4px 16px 16px', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,.05)', border: index % 2 === 0 ? '1px solid #f3f4f6' : 'none', opacity: .9 }}>
                                <div style={{ fontSize: titleSize * .45, color: index % 2 === 0 ? '#4b5563' : 'rgba(255,255,255,.9)', lineHeight: 1.4 }}>{slide.subtext}</div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: '#fff', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                <div style={{ flex: 1, height: 36, background: '#f3f4f6', borderRadius: 18, display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 13, color: '#9ca3af' }}>Scrivi un messaggio...</div>
            </div>

        </>),
    }
}
