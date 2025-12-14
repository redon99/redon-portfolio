// components/HeartLike.tsx
'use client'
import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

export function HeartLike() {
  const [likes, setLikes] = useState<number | null>(null)
  const [hasLiked, setHasLiked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const liked = localStorage.getItem('liked')
    setHasLiked(!!liked)

    fetch('/api/like')
      .then(res => res.json())
      .then(data => setLikes(data.likes))
      .finally(() => setLoading(false))
  }, [])

  const handleLike = async () => {
    if (hasLiked) return
    setLikes(prev => (prev ?? 0) + 1)
    setHasLiked(true)
    localStorage.setItem('liked', 'true')

    const res = await fetch('/api/like', { method: 'POST' })
    const data = await res.json()
    setLikes(data.likes)
  }

  return (
    <button
      type='button'
      className='flex flex-col items-center gap-1 pb-2 opacity-80 hover:opacity-100 transition'
      onClick={handleLike}
      disabled={loading}
    >
      <Heart
        className={`w-6 h-6 cursor-pointer transition-transform ${
          hasLiked
            ? 'text-pink-500 fill-pink-500 scale-110'
            : 'text-pink-500 hover:scale-110'
        }`}
      />
      <span className='text-sm'>{loading ? '—' : likes}</span>
    </button>
  )
}
