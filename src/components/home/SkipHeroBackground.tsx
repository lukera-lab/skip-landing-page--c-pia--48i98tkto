import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SkipHeroBackgroundProps {
  isLive?: boolean
}

export function SkipHeroBackground({ isLive = false }: SkipHeroBackgroundProps) {
  useEffect(() => {
    const scriptId = 'unicorn-studio-script'

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js'
      script.async = true
      script.onload = () => {
        if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
          ;(window as any).UnicornStudio.init()
        }
      }
      document.body.appendChild(script)
    } else {
      if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
        // Initialize if script is already present but SDK hasn't started
        ;(window as any).UnicornStudio.init()
      }
    }

    return () => {
      if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
        if (typeof (window as any).UnicornStudio.destroy === 'function') {
          try {
            ;(window as any).UnicornStudio.destroy()
          } catch (e) {
            // Silently ignore cleanup errors from external SDK
          }
        }
      }
    }
  }, [])

  return (
    <div
      className={cn(
        'absolute inset-0 w-full h-full pointer-events-none z-0',
        isLive ? 'opacity-40' : 'opacity-100',
      )}
    >
      {/* Overlay to ensure text contrast and legibility */}
      <div className={cn('absolute inset-0 z-10', isLive ? 'bg-black/20' : 'bg-white/40')} />

      {/* Unicorn Studio Canvas Container */}
      <div data-us-project="pXl1vO8BvX6KzHk9U5Y7" className="w-full h-full relative z-0" />
    </div>
  )
}
