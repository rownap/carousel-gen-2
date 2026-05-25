'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: 40, background: 'red', color: 'white' }}>
      <h1>FATAL PAGE ERROR</h1>
      <pre id="error-message-dump">{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}
