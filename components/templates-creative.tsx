'use client'
import type { TemplateProps } from './slide-utils'
import { Dots, Brand, Counter, ProgressBar, NumberBadge, CTAFooter, CoverSwipe } from './slide-utils'

export function creativeTemplates(p: TemplateProps): Record<string, React.ReactNode> {
    const { slide, index, total, accent, accent2, width, h, font, titleSize, pad, brandName, isFirst, isLast } = p
    const B = (bg: string, ch: React.ReactNode) => <div style={{ width, height: h, position: 'relative', overflow: 'hidden', fontFamily: font, background: bg }}>{ch}</div>

    return {
        'glassmorphism': B('linear-gradient(135deg,#667eea,#764ba2)', <>
            <div style={{ position: 'absolute', top: -width * .2, right: -width * .1, width: width * .6, height: width * .6, borderRadius: '50%', background: accent, filter: 'blur(40px)', opacity: .6 }} />
            <div style={{ position: 'absolute', bottom: -width * .1, left: -width * .2, width: width * .7, height: width * .7, borderRadius: '50%', background: accent2, filter: 'blur(50px)', opacity: .6 }} />
            <ProgressBar index={index} total={total} accent="#fff" bg="rgba(255,255,255,.2)" />

            <div style={{ position: 'absolute', inset: pad * .8, background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(20px)', borderRadius: 24, border: '1px solid rgba(255,255,255,.2)', boxShadow: '0 8px 32px rgba(0,0,0,.15)', display: 'flex', flexDirection: 'column' }}>
                {isFirst ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                        {slide.emoji && <div style={{ fontSize: width * .16, marginBottom: 20, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.2))' }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.25, fontWeight: 800, color: '#fff', lineHeight: 1.15, textShadow: '0 2px 10px rgba(0,0,0,.1)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.8)', marginTop: 16 }}>{slide.subtext}</div>}
                        <CoverSwipe />
                    </div>
                ) : isLast ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                        <div style={{ width: 60, height: 60, borderRadius: 30, background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#fff', marginBottom: 20 }}>✦</div>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.8)' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 24, padding: '10px 28px', background: '#fff', color: '#764ba2', borderRadius: 30, fontSize: 13, fontWeight: 800 }}>Segui {brandName || 'Ora'}</div>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff' }}>{String(index + 1).padStart(2, '0')}</div>
                            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.2)' }} />
                        </div>
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: 'rgba(255,255,255,.8)', lineHeight: 1.6 }}>{slide.subtext}</div>}
                    </div>
                )}
            </div>
            {brandName && <div style={{ position: 'absolute', bottom: 12, left: pad * 1.2, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.7)' }}>{brandName}</div>}
            <Counter index={index} total={total} />
        </>),

        'neon-glow': B('#050510', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 50% 50%,${accent}11 0%,transparent 70%)` }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: accent, boxShadow: `0 0 20px ${accent},0 0 40px ${accent}` }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ border: `2px solid ${accent}`, padding: '8px 20px', borderRadius: 30, boxShadow: `0 0 15px ${accent}44,inset 0 0 15px ${accent}44`, color: accent, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 24 }}>New Post</div>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 16, filter: `drop-shadow(0 0 20px ${accent})` }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 900, color: '#fff', lineHeight: 1.1, textShadow: `0 0 10px ${accent},0 0 20px ${accent},0 0 40px ${accent}` }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#ccc', marginTop: 16 }}>{slide.subtext}</div>}
                    <CoverSwipe color={accent} />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ width: 80, height: 80, borderRadius: 40, border: `3px solid ${accent}`, boxShadow: `0 0 20px ${accent},inset 0 0 20px ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 20, background: accent, boxShadow: `0 0 20px ${accent}` }} />
                    </div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.2, textShadow: `0 0 10px ${accent},0 0 20px ${accent}` }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#ccc', marginTop: 12 }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 28, fontSize: 13, fontWeight: 900, color: accent, textTransform: 'uppercase', letterSpacing: 2, textShadow: `0 0 10px ${accent}` }}>{brandName || 'Follow'} →</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: width * .18, fontWeight: 900, color: 'transparent', WebkitTextStroke: `1px ${accent}`, filter: `drop-shadow(0 0 8px ${accent}66)`, lineHeight: .8, marginBottom: 16 }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: titleSize * 1.05, fontWeight: 800, color: '#fff', lineHeight: 1.25, textShadow: `0 0 10px ${accent}66,0 0 20px ${accent}44`, marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#ccc', lineHeight: 1.5, borderLeft: `2px solid ${accent}`, paddingLeft: 12, boxShadow: `-2px 0 10px ${accent}44` }}>{slide.subtext}</div>}
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        'brutalist': B('#fff', <>
            {isFirst ? (
                <div style={{ position: 'absolute', inset: pad * .6, border: '6px solid #000', background: accent, display: 'flex', flexDirection: 'column', padding: pad }}>
                    <div style={{ padding: '4px 8px', background: '#000', color: '#fff', fontSize: 12, fontWeight: 900, alignSelf: 'flex-start', border: '2px solid #000', textTransform: 'uppercase' }}>{brandName || 'LATEST'}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {slide.emoji && <div style={{ fontSize: width * .16, marginBottom: 12 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.5, fontWeight: 900, color: '#000', lineHeight: 1, textTransform: 'uppercase', letterSpacing: -2 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .55, fontWeight: 700, color: '#000', marginTop: 16, border: '2px solid #000', padding: 8, background: '#fff' }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ alignSelf: 'flex-end', fontSize: 24, fontWeight: 900, color: '#000' }}>→</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: pad * .6, border: '6px solid #000', background: '#e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 900, color: '#000', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: -1, marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, fontWeight: 700, color: '#000' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, background: '#000', color: accent, padding: '12px 32px', border: '4px solid #000', fontSize: 16, fontWeight: 900, textTransform: 'uppercase' }}>{brandName || 'FOLLOW'}</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: pad * .6, border: '6px solid #000', background: '#fff', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: pad * 1.5, borderBottom: '6px solid #000', display: 'flex' }}>
                        <div style={{ width: pad * 1.5, borderRight: '6px solid #000', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: '#000' }}>{index + 1}</div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 13, fontWeight: 900, color: '#000', textTransform: 'uppercase' }}>POINT NO. {index + 1}</div>
                        <div style={{ padding: '0 12px', borderLeft: '6px solid #000', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: '#fff' }}>{index + 1}/{total}</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 8 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.15, fontWeight: 900, color: '#000', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: -1, marginBottom: slide.subtext ? 16 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, fontWeight: 700, color: '#000' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
        </>),

        'scrapbook': B('#fdf2e9', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.08\'/%3E%3C/svg%3E")', opacity: .5 }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.2, textAlign: 'center' }}>
                    <div style={{ position: 'absolute', top: pad, left: pad, width: 80, height: 24, background: '#fef08a', transform: 'rotate(-5deg)', opacity: .8 }} />
                    <div style={{ position: 'absolute', bottom: pad * 1.5, right: pad, width: 60, height: 24, background: '#fef08a', transform: 'rotate(3deg)', opacity: .8 }} />

                    <div style={{ background: '#fff', padding: pad, borderRadius: 2, boxShadow: '2px 4px 12px rgba(0,0,0,.08)', transform: 'rotate(-2deg)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 40, height: 16, background: 'rgba(0,0,0,.1)' }} />
                        {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 12 }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.3, fontWeight: 800, color: '#1f2937', lineHeight: 1.1, fontFamily: "'Caveat',cursive" }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#4b5563', marginTop: 12, fontFamily: 'serif', fontStyle: 'italic' }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ marginTop: 24, fontSize: 13, fontWeight: 700, color: accent, fontFamily: "'Caveat',cursive", transform: 'rotate(-2deg)' }}>Scorri qui ➔</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ position: 'absolute', top: pad * 2, right: pad * 2, width: 90, height: 24, background: '#fef08a', transform: 'rotate(4deg)', opacity: .8 }} />

                    <div style={{ background: '#fff', padding: pad, borderRadius: 2, boxShadow: '2px 4px 12px rgba(0,0,0,.08)', transform: 'rotate(1deg)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 40, height: 16, background: 'rgba(0,0,0,.1)' }} />
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 800, color: '#1f2937', lineHeight: 1.2, fontFamily: "'Caveat',cursive", marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#4b5563', fontFamily: 'serif', fontStyle: 'italic' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 20, display: 'inline-block', border: '2px dashed #1f2937', padding: '8px 24px', fontSize: 14, fontWeight: 800, color: '#1f2937', fontFamily: "'Caveat',cursive", transform: 'rotate(-2deg)' }}>Segui {brandName}</div>
                    </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.2 }}>
                    <div style={{ position: 'relative', marginBottom: 20, alignSelf: 'flex-start' }}>
                        <div style={{ position: 'absolute', inset: -4, background: accent, transform: 'rotate(-3deg)' }} />
                        <div style={{ position: 'relative', fontSize: 24, fontWeight: 900, color: '#fff', padding: '0 8px', fontFamily: "'Caveat',cursive" }}>#{index}</div>
                    </div>

                    <div style={{ background: '#fff', padding: pad * .8, borderRadius: 2, boxShadow: '2px 4px 12px rgba(0,0,0,.08)', transform: index % 2 === 0 ? 'rotate(1.5deg)' : 'rotate(-1.5deg)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 40, height: 16, background: 'rgba(0,0,0,.1)' }} />
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#1f2937', lineHeight: 1.2, fontFamily: "'Caveat',cursive", marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#4b5563', fontFamily: 'serif', fontStyle: 'italic' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <div style={{ position: 'absolute', bottom: 12, right: 16, fontSize: 13, fontWeight: 700, color: '#9ca3af', fontFamily: "'Caveat',cursive" }}>{index + 1}/{total}</div>
        </>),

        'retro-vhs': B('#0a0a2a', <>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 50%),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))', backgroundSize: '100% 4px,3px 100%', pointerEvents: 'none', zIndex: 10 }} />
            <ProgressBar index={index} total={total} accent="#0ff" bg="rgba(0,255,255,.2)" />

            <div style={{ position: 'absolute', top: 20, left: 20, color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'monospace', textShadow: '2px 0 #f00,-2px 0 #0ff' }}>PLAY ►</div>
            <div style={{ position: 'absolute', top: 20, right: 20, color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'monospace' }}>SP</div>

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 16, filter: 'drop-shadow(3px 0 #f00) drop-shadow(-3px 0 #0ff)' }}>{slide.emoji}</div>}
                    <div style={{ fontSize: titleSize * 1.3, fontWeight: 900, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', fontStyle: 'italic', textShadow: '4px 0 #f00,-4px 0 #0ff' }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#fff', fontWeight: 700, fontFamily: 'monospace', marginTop: 16, textShadow: '1px 0 #f00,-1px 0 #0ff' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, fontSize: 12, color: '#fff', fontFamily: 'monospace', animation: 'blink 1s infinite' }}>{'>'} SWIPE</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.2, textTransform: 'uppercase', fontStyle: 'italic', textShadow: '4px 0 #f00,-4px 0 #0ff', marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '1px 0 #f00,-1px 0 #0ff' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 32, padding: '10px 24px', border: '3px solid #fff', color: '#fff', fontSize: 16, fontWeight: 900, textTransform: 'uppercase', fontFamily: 'monospace', textShadow: '2px 0 #f00,-2px 0 #0ff', boxShadow: '4px 0 #f00,-4px 0 #0ff' }}>FOLLOW ME</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: 24, color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '2px 0 #f00,-2px 0 #0ff', marginBottom: 12 }}>CH {String(index + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.2, textTransform: 'uppercase', fontStyle: 'italic', textShadow: '3px 0 #f00,-3px 0 #0ff', marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ fontSize: titleSize * .5, color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '1px 0 #f00,-1px 0 #0ff' }}>{slide.subtext}</div>}
                </div>
            )}

            <div style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'monospace', textShadow: '2px 0 #f00,-2px 0 #0ff' }}>0:0{index}:{index * 15}</div>
        </>),

        'comic-book': B('#fff', <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#000 1.5px,transparent 1.5px)', backgroundSize: '10px 10px', opacity: .1 }} />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: pad * .6, background: '#fef08a', border: '6px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center', boxShadow: '6px 6px 0 #000' }}>
                    {slide.emoji && <div style={{ fontSize: width * .16, marginBottom: 12 }}>{slide.emoji}</div>}
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: '#fff', transform: 'rotate(-2deg) scale(1.1)', border: '4px solid #000' }} />
                        <div style={{ position: 'relative', fontSize: titleSize * 1.4, fontWeight: 900, color: '#ff0000', lineHeight: 1.05, textTransform: 'uppercase', padding: 12, transform: 'rotate(-2deg)', textShadow: '2px 2px 0 #000' }}>{slide.text}</div>
                    </div>
                    {slide.subtext && <div style={{ background: '#fff', border: '3px solid #000', padding: '6px 12px', fontSize: titleSize * .5, fontWeight: 800, color: '#000', marginTop: 24, boxShadow: '4px 4px 0 #000' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 24, background: '#000', color: '#fff', padding: '4px 12px', fontSize: 13, fontWeight: 900, textTransform: 'uppercase' }}>Swipe ➔</div>
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: pad * .6, background: '#bfdbfe', border: '6px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center', boxShadow: '6px 6px 0 #000' }}>
                    <div style={{ background: '#fff', border: '4px solid #000', padding: 16, borderRadius: '50% 50% 50% 10%', position: 'relative', marginBottom: 24 }}>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#000', lineHeight: 1.1, textTransform: 'uppercase' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, fontWeight: 800, color: '#000', marginTop: 8 }}>{slide.subtext}</div>}
                    </div>
                    <div style={{ background: '#ff0000', border: '4px solid #000', color: '#fff', padding: '10px 24px', fontSize: 18, fontWeight: 900, textTransform: 'uppercase', boxShadow: '4px 4px 0 #000' }}>FOLLOW!</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: pad * .6, border: '6px solid #000', background: index % 2 === 0 ? '#fef08a' : '#bfdbfe', display: 'flex', flexDirection: 'column', boxShadow: '6px 6px 0 #000' }}>
                    <div style={{ background: '#fff', borderBottom: '4px solid #000', borderRight: '4px solid #000', padding: '4px 12px', fontSize: 14, fontWeight: 900, color: '#000', alignSelf: 'flex-start' }}>PART {index}</div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad }}>
                        {slide.emoji && <div style={{ fontSize: width * .1, marginBottom: 12 }}>{slide.emoji}</div>}
                        <div style={{ background: '#fff', border: '4px solid #000', padding: 16, position: 'relative', boxShadow: '4px 4px 0 #000' }}>
                            <div style={{ fontSize: titleSize * 1.05, fontWeight: 900, color: '#000', lineHeight: 1.15, textTransform: 'uppercase', marginBottom: slide.subtext ? 8 : 0 }}>{slide.text}</div>
                            {slide.subtext && <div style={{ fontSize: titleSize * .48, fontWeight: 700, color: '#000' }}>{slide.subtext}</div>}
                        </div>
                    </div>
                </div>
            )}
        </>),

        'vaporwave': B('#ffbce6', <>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#000022 0%,#ff1493 50%,#00ffff 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', backgroundImage: 'linear-gradient(90deg,#ff1493 1px,transparent 1px),linear-gradient(#ff1493 1px,transparent 1px)', backgroundSize: '30px 30px', transform: 'perspective(500px) rotateX(60deg)', transformOrigin: 'bottom' }} />
            <ProgressBar index={index} total={total} accent="#00ffff" bg="rgba(255,255,255,.2)" />

            {isFirst ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad * 1.5, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.5, fontWeight: 900, color: '#fff', lineHeight: 1.1, textTransform: 'uppercase', fontFamily: 'serif', letterSpacing: -2, textShadow: '4px 4px 0 #ff1493,-4px -4px 0 #00ffff', marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ background: '#000022', border: '2px solid #00ffff', color: '#00ffff', padding: '8px 16px', fontSize: titleSize * .45, fontWeight: 700, fontFamily: 'monospace' }}>{slide.subtext}</div>}
                    {slide.emoji && <div style={{ fontSize: width * .14, marginTop: 24, filter: 'drop-shadow(0 0 10px #00ffff)' }}>{slide.emoji}</div>}
                    <CoverSwipe color="#00ffff" />
                </div>
            ) : isLast ? (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: pad, textAlign: 'center' }}>
                    <div style={{ fontSize: titleSize * 1.2, fontWeight: 900, color: '#fff', lineHeight: 1.2, textTransform: 'uppercase', fontFamily: 'serif', textShadow: '3px 3px 0 #ff1493,-3px -3px 0 #00ffff', marginBottom: 16 }}>{slide.text}</div>
                    {slide.subtext && <div style={{ background: '#000022', color: '#00ffff', padding: '4px 12px', fontSize: titleSize * .45, fontWeight: 700, fontFamily: 'monospace' }}>{slide.subtext}</div>}
                    <div style={{ marginTop: 32, border: '3px solid #00ffff', background: '#ff1493', color: '#fff', padding: '12px 32px', fontSize: 16, fontWeight: 900, textTransform: 'uppercase', boxShadow: '6px 6px 0 #000022' }}>{brandName || 'FOLLOW'}</div>
                </div>
            ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: pad * 1.5 }}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#00ffff', fontFamily: 'monospace', textShadow: '2px 2px 0 #ff1493', marginBottom: 12 }}>FILE_{index}.exe</div>
                    <div style={{ background: 'rgba(0,0,34,.7)', border: '2px solid #00ffff', padding: 20, boxShadow: '8px 8px 0 #ff1493' }}>
                        <div style={{ fontSize: titleSize * 1.1, fontWeight: 900, color: '#fff', lineHeight: 1.2, textTransform: 'uppercase', fontFamily: 'serif', marginBottom: slide.subtext ? 12 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: '#00ffff', fontFamily: 'monospace' }}>{slide.subtext}</div>}
                    </div>
                </div>
            )}
            <Counter index={index} total={total} />
        </>),

        '3d-card': B('#0f172a', <>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%,#1e293b 0%,#0f172a 100%)' }} />

            <div style={{ position: 'absolute', inset: pad * 1.5, background: accent, borderRadius: 24, transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)', transformStyle: 'preserve-3d', boxShadow: '-20px 30px 40px rgba(0,0,0,.5), inset 0 0 0 1px rgba(255,255,255,.2)', display: 'flex', flexDirection: 'column', padding: pad }}>
                {isFirst ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'translateZ(40px)' }}>
                        {slide.emoji && <div style={{ fontSize: width * .14, marginBottom: 16, filter: 'drop-shadow(0 10px 10px rgba(0,0,0,.3))' }}>{slide.emoji}</div>}
                        <div style={{ fontSize: titleSize * 1.2, fontWeight: 800, color: '#fff', lineHeight: 1.15, textShadow: '0 4px 10px rgba(0,0,0,.3)' }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.8)', marginTop: 12 }}>{slide.subtext}</div>}
                    </div>
                ) : isLast ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'translateZ(40px)' }}>
                        <div style={{ fontSize: titleSize, fontWeight: 800, color: '#fff', lineHeight: 1.2, textShadow: '0 4px 10px rgba(0,0,0,.3)', marginBottom: 12 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.8)' }}>{slide.subtext}</div>}
                        <div style={{ marginTop: 24, background: '#fff', color: accent, padding: '10px 24px', borderRadius: 8, fontSize: 13, fontWeight: 800, boxShadow: '0 8px 20px rgba(0,0,0,.2)' }}>Seguimi</div>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', transform: 'translateZ(30px)' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 16 }}>{index}</div>
                        <div style={{ fontSize: titleSize * .95, fontWeight: 800, color: '#fff', lineHeight: 1.25, textShadow: '0 4px 10px rgba(0,0,0,.2)', marginBottom: slide.subtext ? 10 : 0 }}>{slide.text}</div>
                        {slide.subtext && <div style={{ fontSize: titleSize * .45, color: 'rgba(255,255,255,.8)' }}>{slide.subtext}</div>}
                    </div>
                )}
            </div>

            {isFirst && <CoverSwipe />}
            <Counter index={index} total={total} />
        </>),
    }
}
