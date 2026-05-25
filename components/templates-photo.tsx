'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function photoTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, bgImg, isFirst, isLast } = p
    const hasBg = !!bgImg
    const sub = "'Satoshi', sans-serif"

    const B = (bg: string, ch: React.ReactNode) => (
        <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>
            {hasBg ? (
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ) : (
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(45deg, ${accent}22 25%, transparent 25%, transparent 75%, ${accent}22 75%, ${accent}22), linear-gradient(45deg, ${accent}22 25%, transparent 25%, transparent 75%, ${accent}22 75%, ${accent}22)`, backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px', opacity: 0.5 }} />
            )}
            {ch}
        </div>
    )

    return {
        'photo-overlay': B('#0f172a', <>
            <div style={{ position: 'absolute', inset: 0, background: isFirst ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)' : 'rgba(0,0,0,0.7)', backdropFilter: isFirst ? 'none' : 'blur(8px)' }} />
            <ProgressBar index={index} total={total} accent={accent} bg="rgba(255,255,255,0.2)" />
            {brandName && <Brand name={brandName} />}

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: pad * 1.5, paddingBottom: pad * 2 }}>
                    <div style={{ width: 40, height: 4, background: accent, borderRadius: 2, marginBottom: 16 }} />
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#fff', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,.5)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#cbd5e1', marginTop: 16, textShadow: '0 2px 4px rgba(0,0,0,.5)' }}>{slide.subtext}</div>}
                    <CoverSwipe color="#fff" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16, textShadow: '0 4px 12px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#cbd5e1', marginBottom: 24 }}>{slide.subtext}</div>}
                    <div style={{ background: accent, color: '#fff', padding: '12px 32px', borderRadius: 30, fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>{brandName || 'Seguimi'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .14, fontWeight: 800, color: accent, lineHeight: 1, marginBottom: 16 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 16 : 0, textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#cbd5e1', lineHeight: 1.6 }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'photo-split': B('#1e293b', <>
            <div style={{ position: 'absolute', inset: 0, background: '#0f172a' }} />

            {hasBg && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', clipPath: 'polygon(0 0,100% 0,100% 90%,0 100%)' }} />}
            {!hasBg && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(45deg,${accent},${accent2})`, clipPath: 'polygon(0 0,100% 0,100% 90%,0 100%)' }} />}

            {isFirst ? (
                <div style={{ position: 'absolute', top: '45%', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .06, color: accent, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>{brandName || 'Overview'}</div>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#cbd5e1', marginTop: 12, borderLeft: `2px solid ${accent}`, paddingLeft: 12 }}>{slide.subtext}</div>}
                    <CoverSwipe color="#475569" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', top: '45%', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#cbd5e1', marginBottom: 20 }}>{slide.subtext}</div>}
                    <div style={{ border: `2px solid ${accent}`, color: accent, padding: '8px 24px', borderRadius: 4, fontSize: 13, fontWeight: 800, textTransform: 'uppercase' }}>Condividi</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', top: '45%', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: accent }} />
                        <div style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>Punto {index}</div>
                        <div style={{ flex: 1, height: 1, background: '#1e293b' }} />
                    </div>
                    <div style={{ fontSize: titleSize * .9, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .42, color: '#cbd5e1', lineHeight: 1.5 }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'polaroid': B('#f5f0e8', <>
            <div style={{ position: 'absolute', inset: pad * .6, background: '#fff', borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,.1)', display: 'flex', flexDirection: 'column', padding: pad * .8 }}>

                {/* Photo Area */}
                <div style={{ width: '100%', height: width * .85, background: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
                    {hasBg ? (
                        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: isFirst ? 'none' : 'sepia(30%) contrast(110%)' }} />
                    ) : (
                        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg,${accent},${accent2})` }} />
                    )}
                    {!isFirst && <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,.9)', padding: '4px 12px', fontSize: 13, fontWeight: 800, color: accent }}>{index}/{total - 1}</div>}
                </div>

                {/* Text Area */}
                {isFirst ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: pad }}>
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 10 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#1f2937', lineHeight: 1.1, fontFamily: "'Caveat',cursive", transform: 'rotate(-2deg)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#4b5563', marginTop: 10 }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 20, fontSize: 12, color: '#9ca3af', fontFamily: "'Caveat',cursive", textTransform: 'uppercase', letterSpacing: 1 }}>Swipe →</div>
                    </div>
                ) : isLast ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: pad }}>
                        <div style={{ fontSize: titleSize * .9, fontWeight: 800, color: '#1f2937', lineHeight: 1.2, fontFamily: "'Caveat',cursive", transform: 'rotate(1deg)', marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#4b5563' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 16, borderBottom: `2px solid ${accent}`, color: accent, fontSize: 14, fontWeight: 800, fontFamily: "'Caveat',cursive" }}>{brandName || 'Seguimi'}</div>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: pad }}>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 800, color: '#1f2937', lineHeight: 1.2, fontFamily: "'Caveat',cursive", transform: index % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)', marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#4b5563', lineHeight: 1.5 }}>{slide.subtext}</div>}
                    </div>
                )}
            </div>

            {/* Tape decorations */}
            <div style={{ position: 'absolute', top: pad, left: '50%', transform: 'translateX(-50%) rotate(-4deg)', width: 100, height: 25, background: 'rgba(255,255,255,.5)', backdropFilter: 'blur(2px)', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }} />
        </>),

        'cinematic': B('#000', <>
            <div style={{ position: 'absolute', inset: 0, background: '#000' }} />
            {hasBg && <div style={{ position: 'absolute', top: '15%', bottom: '15%', left: 0, right: 0, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: isFirst ? .8 : .5 }} />}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#000 15%,transparent 40%,transparent 60%,#000 85%)' }} />

            <ProgressBar index={index} total={total} accent="#eab308" bg="transparent" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5 }}>
                    <div style={{ fontSize: 10, color: '#eab308', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 800, alignSelf: 'center', marginTop: pad }}>{brandName || 'PRESENTS'}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: titleSize * 1.4, fontWeight: 900, color: '#fff', lineHeight: 1, textTransform: 'uppercase', letterSpacing: -1, textShadow: '0 4px 20px rgba(0,0,0,1)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a1a1aa', marginTop: 16, textTransform: 'uppercase', letterSpacing: 2 }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ alignSelf: 'center', fontSize: 10, color: '#71717a', letterSpacing: 3, paddingBottom: pad }}>SCORRI ORA</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: -1, textShadow: '0 4px 20px rgba(0,0,0,1)', marginBottom: 16 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a1a1aa' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 32, padding: '12px 32px', border: '1px solid #eab308', color: '#eab308', fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>FOLLOW US</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: pad * 1.5, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: pad }}>
                        <div style={{ fontSize: 10, color: '#eab308', letterSpacing: 3, fontWeight: 800 }}>SCENE {index}</div>
                        <div style={{ fontSize: 10, color: '#71717a', letterSpacing: 3, fontWeight: 800 }}>{index}/{total - 1}</div>
                    </div>

                    <div style={{ marginBottom: pad }}>
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 12 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize, fontWeight: 900, color: '#fff', lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: -0.5, marginBottom: slide.subtext ? 12 : 0, textShadow: '0 2px 10px rgba(0,0,0,.8)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#e4e4e7', textShadow: '0 2px 4px rgba(0,0,0,.8)' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
        </>),

        'parallax-depth': B('#0a0a1a', <>
            {hasBg ? (
                <>
                    <div style={{ position: 'absolute', inset: -20, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(20px) brightness(0.4)', transform: `scale(${1 + index * 0.05})` }} />
                    <div style={{ position: 'absolute', top: '15%', bottom: '25%', left: '10%', right: '10%', backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 16, boxShadow: `0 20px 40px rgba(0,0,0,.8), 0 0 0 1px ${accent}44` }} />
                </>
            ) : (
                <>
                    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, ${accent}33, #0a0a1a)` }} />
                    <div style={{ position: 'absolute', top: '15%', bottom: '25%', left: '10%', right: '10%', background: `linear-gradient(135deg, ${accent}88, ${accent2}88)`, borderRadius: 16, boxShadow: `0 20px 40px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.2)` }} />
                </>
            )}

            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: pad * 1.5, paddingBottom: pad * 2 }}>
                {isFirst ? (
                    <>
                        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                            {Array.from({ length: 3 }).map((_, i) => <div key={i} style={{ width: 40, height: 4, background: i === 0 ? accent : 'rgba(255,255,255,.2)', borderRadius: 2 }} />)}
                        </div>
                        <div style={{ fontSize: titleSize * 1.3, fontWeight: 900, color: '#fff', lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,.8)', marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#cbd5e1', textShadow: '0 2px 10px rgba(0,0,0,.5)' }}>{slide.subtext}</div>}
                    </>
                ) : isLast ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.2, textShadow: '0 4px 20px rgba(0,0,0,.8)', marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .48, color: '#cbd5e1', textShadow: '0 2px 10px rgba(0,0,0,.5)', marginBottom: 20 }}>{slide.subtext}</div>}
                        <div style={{ background: accent, color: '#fff', padding: '10px 24px', borderRadius: 8, fontSize: 13, fontWeight: 800, display: 'inline-block', boxShadow: `0 8px 20px ${accent}66` }}>Follow {brandName}</div>
                    </div>
                ) : (
                    <>
                        <div style={{ fontSize: width * .12, fontWeight: 900, color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,.3)`, lineHeight: 1, marginBottom: 8, transform: 'translateY(10px)' }}>{String(index + 1).padStart(2, '0')}</div>
                        <div style={{ padding: '20px', background: 'rgba(10,10,26,.8)', backdropFilter: 'blur(10px)', borderRadius: 12, border: '1px solid rgba(255,255,255,.1)' }}>
                            <div style={{ fontSize: titleSize * .9, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#94a3b8' }}>{slide.subtext}</div>}
                        </div>
                    </>
                )}
            </div>
            {isFirst && <CoverSwipe />}
            <Brand name={brandName || 'Parallax'} />
        </>),

        'frame-collage': B('#e5e5e5', <>
            <div style={{ position: 'absolute', inset: pad * .6, background: '#171717', border: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
                <ProgressBar index={index} total={total} accent="#fff" bg="rgba(255,255,255,.1)" />

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: `12px ${pad}px`, borderBottom: '1px solid #333' }}>
                    <div style={{ fontSize: 10, color: '#fff', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>{brandName || 'GALLERY'}</div>
                    <div style={{ fontSize: 10, color: '#737373', fontWeight: 700 }}>{index + 1}/{total}</div>
                </div>

                <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>

                    {/* Immagine con cornici diverse in base alla pagina */}
                    <div style={{ flex: 1, padding: pad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {isFirst ? (
                            <div style={{ width: '100%', height: '80%', background: '#262626', border: '4px solid #fff', position: 'relative', overflow: 'hidden' }}>
                                {hasBg && <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />}
                            </div>
                        ) : isLast ? (
                            <div style={{ display: 'flex', gap: 10, width: '100%', height: '80%' }}>
                                <div style={{ flex: 1, background: '#262626', position: 'relative', overflow: 'hidden', padding: 4, backgroundClip: 'content-box', border: '1px solid #404040' }}>
                                    {hasBg && <div style={{ position: 'absolute', inset: 4, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'left' }} />}
                                </div>
                                <div style={{ flex: 1, background: '#262626', position: 'relative', overflow: 'hidden', padding: 4, backgroundClip: 'content-box', border: '1px solid #404040' }}>
                                    {hasBg && <div style={{ position: 'absolute', inset: 4, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'right' }} />}
                                </div>
                            </div>
                        ) : (
                            <div style={{ padding: 12, background: '#fff', width: '90%', height: '85%', position: 'relative', transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)', boxShadow: '0 10px 30px rgba(0,0,0,.5)' }}>
                                <div style={{ width: '100%', height: '100%', background: '#262626', position: 'relative', overflow: 'hidden' }}>
                                    {hasBg && <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer text area */}
                    <div style={{ background: '#0a0a0a', padding: pad * 1.2, borderTop: '1px solid #333' }}>
                        {isFirst ? (
                            <>
                                <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', marginBottom: 8 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a3a3a3' }}>{slide.subtext}</div>}
                            </>
                        ) : isLast ? (
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, textTransform: 'uppercase', marginBottom: 12 }}>{slide.text}</div>
                                <div style={{ background: '#fff', color: '#000', padding: '8px 24px', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', display: 'inline-block' }}>Follow</div>
                            </div>
                        ) : (
                            <>
                                <div style={{ fontSize: titleSize * .85, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                                {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#a3a3a3' }}>{slide.subtext}</div>}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>),
    }
}
