import { ArrowRight } from 'lucide-react'

export function HelloBar() {
  const handleScrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-blue-violet-600 py-2 px-5 text-center relative z-50 shadow-sm">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </div>
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-white">
            Oferta Especial Disponível
          </span>
        </div>
        <button
          onClick={handleScrollToOffer}
          className="flex items-center gap-1 text-white/90 hover:text-white font-medium text-xs sm:text-sm transition-colors group"
        >
          <span className="underline underline-offset-2">Aproveitar condição exclusiva</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
