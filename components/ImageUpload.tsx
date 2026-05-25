'use client'
import { useState, useRef, useCallback } from 'react'

interface Props {
    value?: string          // current image data URL or URL
    onImageChange: (dataUrl: string | undefined) => void
    onPromptChange?: (prompt: string) => void
    prompt?: string
    showAiGenerate?: boolean
    accentColor?: string
}

export function ImageUpload({ value, onImageChange, onPromptChange, prompt = '', showAiGenerate = false, accentColor = '#6366f1' }: Props) {
    const [dragActive, setDragActive] = useState(false)
    const [urlInput, setUrlInput] = useState('')
    const [tab, setTab] = useState<'upload' | 'url' | 'ai'>('upload')
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFile = useCallback((file: File) => {
        if (!file.type.startsWith('image/')) return
        const reader = new FileReader()
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string
            onImageChange(dataUrl)
        }
        reader.readAsDataURL(file)
    }, [onImageChange])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setDragActive(false)
        const file = e.dataTransfer.files[0]
        if (file) handleFile(file)
    }, [handleFile])

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setDragActive(true)
    }, [])

    const s = {
        tab: (active: boolean): React.CSSProperties => ({
            flex: 1, padding: '6px 8px', borderRadius: 6, border: 'none', cursor: 'pointer',
            fontSize: 10, fontWeight: 600, transition: 'all .2s',
            background: active ? accentColor : 'var(--bg)',
            color: active ? '#fff' : 'var(--muted)',
        }),
        input: {
            width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 6, color: 'var(--text)', fontSize: 11, padding: '7px 10px', outline: 'none',
            fontFamily: "'Satoshi', sans-serif",
        } as React.CSSProperties,
    }

    return (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Preview */}
            {value && (
                <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
                    <img src={value} alt="Preview" style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 8 }} />
                    <button
                        onClick={() => onImageChange(undefined)}
                        style={{
                            position: 'absolute', top: 4, right: 4, width: 20, height: 20,
                            background: 'rgba(0,0,0,.7)', border: 'none', borderRadius: '50%',
                            color: '#fff', fontSize: 12, cursor: 'pointer', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                        }}
                    >×</button>
                </div>
            )}

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 4 }}>
                <button onClick={() => setTab('upload')} style={s.tab(tab === 'upload')}>📁 Upload</button>
                <button onClick={() => setTab('url')} style={s.tab(tab === 'url')}>🔗 URL</button>
                {showAiGenerate && <button onClick={() => setTab('ai')} style={s.tab(tab === 'ai')}>🤖 AI</button>}
            </div>

            {/* Upload tab */}
            {tab === 'upload' && (
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={() => setDragActive(false)}
                    onClick={() => fileRef.current?.click()}
                    style={{
                        border: `2px dashed ${dragActive ? accentColor : 'var(--border2)'}`,
                        borderRadius: 8, padding: '16px 12px', textAlign: 'center', cursor: 'pointer',
                        background: dragActive ? `${accentColor}10` : 'transparent',
                        transition: 'all .2s',
                    }}
                >
                    <div style={{ fontSize: 22, marginBottom: 4 }}>📷</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                        Trascina qui o <span style={{ color: accentColor, fontWeight: 600 }}>sfoglia</span>
                    </div>
                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                        style={{ display: 'none' }}
                    />
                </div>
            )}

            {/* URL tab */}
            {tab === 'url' && (
                <div style={{ display: 'flex', gap: 6 }}>
                    <input
                        placeholder="https://example.com/image.jpg"
                        value={urlInput}
                        onChange={e => setUrlInput(e.target.value)}
                        style={{ ...s.input, flex: 1 }}
                    />
                    <button
                        onClick={() => { if (urlInput.trim()) onImageChange(urlInput.trim()) }}
                        style={{
                            background: accentColor, border: 'none', borderRadius: 6,
                            color: '#fff', padding: '6px 12px', fontSize: 10, fontWeight: 600,
                            cursor: 'pointer', whiteSpace: 'nowrap',
                        }}
                    >Usa</button>
                </div>
            )}

            {/* AI prompt tab */}
            {tab === 'ai' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <input
                        placeholder="Descrivi l'immagine da generare..."
                        value={prompt}
                        onChange={e => onPromptChange?.(e.target.value)}
                        style={s.input}
                    />
                    <div style={{ fontSize: 9, color: 'var(--muted)' }}>
                        🔑 Richiede API key nell&apos;abbonamento PRO. L&apos;immagine viene generata automaticamente.
                    </div>
                </div>
            )}
        </div>
    )
}
