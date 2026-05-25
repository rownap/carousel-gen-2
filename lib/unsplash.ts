const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
]

/**
 * Fetches a relevant image from Unsplash when an API key is available.
 * Without a key, returns deterministic Unsplash CDN photos that do not depend
 * on the deprecated source.unsplash.com endpoint.
 */
export async function fetchUnsplashImage(
  prompt: string,
  apiKey?: string,
  width = 1080,
  height = 1080
): Promise<string> {
  if (apiKey) {
    try {
      const q = encodeURIComponent(prompt)
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${q}&per_page=1&orientation=${height > width ? 'portrait' : 'squarish'}`,
        { headers: { Authorization: `Client-ID ${apiKey}` } }
      )
      const data = await res.json()
      if (data.results?.[0]) {
        return data.results[0].urls.regular
      }
    } catch {}
  }

  const fallback = FALLBACK_IMAGES[hash(prompt) % FALLBACK_IMAGES.length]
  return `${fallback}?auto=format&fit=crop&w=${width}&h=${height}&q=85`
}

function hash(value: string) {
  return Array.from(value).reduce((acc, char) => acc + char.charCodeAt(0), 0)
}
