import { X, Check, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ANTES_POINTS = [
  'Erros Manuais Constantes',
  'Complexidade (múltiplas abas e arquivos)',
  'Ruptura por falta de previsão',
]

const DEPOIS_POINTS = [
  'Automação Elimina Erros Manuais',
  'Rastreabilidade Completa (logs)',
  'Alertas e relatórios em Tempo Real',
]

export function InventoryAntes() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup - Dynamic AI Animation */}
      <div className="h-[280px] w-full border border-skip-neutral-1350 rounded-lg bg-skip-neutral-1450/50 p-4 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-w-[400px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="6"
                flood-color="#0F172A"
                flood-opacity="0.05"
              />
            </filter>
            <filter id="shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="15"
                flood-color="#0F172A"
                flood-opacity="0.08"
              />
            </filter>
            <linearGradient id="shimmer-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
              <stop offset="50%" stop-color="#ffffff" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
            </linearGradient>
            <clipPath id="shimmer-clip">
              <rect x="40" y="120" width="320" height="140" rx="16" />
            </clipPath>
          </defs>
          <style>
            {`
              .ai-inv-group { animation: ai-inv-float-svg 6s ease-in-out infinite; }
              .ai-inv-typing { animation: ai-inv-typing-bar 6s ease-in-out infinite; }
              .ai-inv-cursor { animation: ai-inv-cursor-move 6s ease-in-out infinite; }
              .ai-inv-cursor-inner { animation: ai-inv-cursor-blink 0.8s step-end infinite; }
              .ai-inv-btn { animation: ai-inv-btn-click 6s ease-in-out infinite; transform-origin: 340px 75px; }
              .ai-inv-btn-glow { animation: ai-inv-btn-glow 6s ease-out infinite; transform-origin: 340px 75px; fill: #4F46E5; }
              .ai-inv-bubble { animation: ai-inv-bubble-appear 6s ease-out infinite; }
              .ai-inv-skel-1 { animation: ai-inv-skeleton-1 6s ease-out infinite; fill: #E2E8F0; }
              .ai-inv-skel-2 { animation: ai-inv-skeleton-2 6s ease-out infinite; fill: #E2E8F0; }
              .ai-inv-skel-3 { animation: ai-inv-skeleton-3 6s ease-out infinite; fill: #E2E8F0; }
              .ai-inv-shimmer { animation: ai-inv-shimmer-effect 6s ease-out infinite; }

              @keyframes ai-inv-float-svg {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
              @keyframes ai-inv-typing-bar {
                0%, 5% { width: 0px; }
                30%, 85% { width: 220px; }
                95%, 100% { width: 0px; }
              }
              @keyframes ai-inv-cursor-move {
                0%, 5% { transform: translateX(0px); }
                30%, 85% { transform: translateX(225px); }
                95%, 100% { transform: translateX(0px); }
              }
              @keyframes ai-inv-cursor-blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
              @keyframes ai-inv-btn-click {
                0%, 28% { transform: scale(1); fill: #94A3B8; }
                32% { transform: scale(0.9); fill: #4F46E5; }
                36%, 85% { transform: scale(1); fill: #4F46E5; }
                95%, 100% { transform: scale(1); fill: #94A3B8; }
              }
              @keyframes ai-inv-btn-glow {
                0%, 32% { opacity: 0; transform: scale(1); }
                36% { opacity: 0.4; transform: scale(1.2); }
                50%, 100% { opacity: 0; transform: scale(1.6); }
              }
              @keyframes ai-inv-bubble-appear {
                0%, 35% { opacity: 0; transform: translateY(15px); }
                45%, 85% { opacity: 1; transform: translateY(0); }
                95%, 100% { opacity: 0; transform: translateY(15px); }
              }
              @keyframes ai-inv-skeleton-1 {
                0%, 45% { width: 0px; }
                55%, 85% { width: 280px; }
                95%, 100% { width: 0px; }
              }
              @keyframes ai-inv-skeleton-2 {
                0%, 50% { width: 0px; }
                60%, 85% { width: 210px; }
                95%, 100% { width: 0px; }
              }
              @keyframes ai-inv-skeleton-3 {
                0%, 55% { width: 0px; }
                65%, 85% { width: 252px; }
                95%, 100% { width: 0px; }
              }
              @keyframes ai-inv-shimmer-effect {
                0%, 60% { transform: translateX(-150px); opacity: 0; }
                65% { opacity: 1; }
                75% { transform: translateX(350px); opacity: 0; }
                100% { transform: translateX(-150px); opacity: 0; }
              }
            `}
          </style>

          <g className="ai-inv-group">
            {/* Prompt Input */}
            <rect
              x="40"
              y="50"
              width="320"
              height="50"
              rx="25"
              fill="#ffffff"
              filter="url(#shadow-sm)"
            />

            {/* Typing Bar Background */}
            <rect x="60" y="71" width="220" height="8" rx="4" fill="#F1F5F9" />
            {/* Animated Typing Bar */}
            <rect x="60" y="71" height="8" rx="4" className="ai-inv-typing" />

            {/* Cursor */}
            <g className="ai-inv-cursor">
              <rect
                x="60"
                y="67"
                width="2"
                height="16"
                fill="#4F46E5"
                className="ai-inv-cursor-inner"
              />
            </g>

            {/* Action Button Glow */}
            <circle cx="340" cy="75" r="14" className="ai-inv-btn-glow" />

            {/* Action Button & Icon */}
            <circle cx="340" cy="75" r="14" className="ai-inv-btn" />
            <path
              d="M 340 68 L 334 74 L 338 74 L 338 82 L 342 82 L 342 74 L 346 74 Z"
              fill="#ffffff"
            />

            {/* AI Response Bubble */}
            <g className="ai-inv-bubble">
              <rect
                x="40"
                y="120"
                width="320"
                height="140"
                rx="16"
                fill="#ffffff"
                filter="url(#shadow-lg)"
              />

              {/* AI Brand / Header */}
              <circle cx="60" cy="140" r="10" fill="#4F46E5" opacity="0.1" />
              <circle cx="60" cy="140" r="5" fill="#4F46E5" />
              <rect x="80" y="136" width="60" height="8" rx="4" fill="#CBD5E1" />

              {/* Skeleton Lines */}
              <g transform="translate(60, 160)">
                <rect x="0" y="0" width="280" height="10" rx="5" fill="#F1F5F9" />
                <rect x="0" y="0" height="10" rx="5" className="ai-inv-skel-1" />

                <rect x="0" y="24" width="280" height="10" rx="5" fill="#F1F5F9" />
                <rect x="0" y="24" height="10" rx="5" className="ai-inv-skel-2" />

                <rect x="0" y="48" width="280" height="10" rx="5" fill="#F1F5F9" />
                <rect x="0" y="48" height="10" rx="5" className="ai-inv-skel-3" />

                <rect x="0" y="72" width="280" height="10" rx="5" fill="#F1F5F9" />
                <rect x="0" y="72" height="10" rx="5" className="ai-inv-skel-1" />
              </g>

              {/* Shimmer Sweep */}
              <g clip-path="url(#shimmer-clip)">
                <rect
                  x="40"
                  y="120"
                  width="100"
                  height="140"
                  fill="url(#shimmer-grad)"
                  className="ai-inv-shimmer"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-mono-xs uppercase text-blue-violet-600 text-[10px] tracking-wider font-semibold font-mono">
            Processo Padrão
          </span>
          <h3 className="text-lg md:text-xl leading-[1.1] font-heading font-semibold text-skip-neutral-100">
            Controle de Inventário em Planilhas
          </h3>
        </div>
        <ul className="space-y-3">
          {ANTES_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-red-50 p-1 shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-sm text-skip-neutral-900 leading-[1.3]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Sparkline({ data }: { data: number[] }) {
  const min = Math.min(...data),
    range = Math.max(...data) - min || 1
  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 36},${12 - ((d - min) / range) * 12}`)
    .join(' ')
  return (
    <svg width="36" height="12" className="overflow-visible">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="text-blue-violet-400"
      />
    </svg>
  )
}

const DEPOIS_ROWS = [
  {
    prod: 'Parafuso Sextavado',
    est: '12',
    max: '50',
    status: 'Repor',
    badge: 'bg-[#FEF2F2] text-red-700 border-red-100',
    sparkline: [20, 18, 15, 14, 12],
  },
  {
    prod: 'Porca M8',
    est: '145',
    max: '150',
    status: 'Atenção',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    sparkline: [150, 148, 147, 146, 145],
  },
  {
    prod: 'Arruela Lisa',
    est: '890',
    max: '200',
    status: 'Saudável',
    badge: 'bg-green-50 text-green-700 border-green-100',
    sparkline: [850, 860, 875, 880, 890],
  },
]

export function InventoryDepois() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup */}
      <div className="h-[280px] w-full rounded-xl border border-blue-violet-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="flex-1 bg-gradient-to-b from-white to-blue-violet-50 p-3 sm:p-4 flex flex-col gap-4 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm">
              <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                Itens
              </span>
              <span className="text-lg font-semibold text-skip-neutral-400">247</span>
            </div>
            <div className="bg-[#FEF2F2] rounded-lg p-2.5 flex flex-col border border-red-100 shadow-sm">
              <span className="text-[10px] text-red-600 uppercase tracking-wider font-medium flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Alertas
              </span>
              <span className="text-lg font-semibold text-red-700">3</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm">
              <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                Rupturas
              </span>
              <span className="text-lg font-semibold text-skip-neutral-400">0</span>
            </div>
          </div>
          <div className="text-[11px] w-full border border-skip-neutral-1350 rounded-lg overflow-x-auto shadow-sm flex-1 bg-white flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
                <thead>
                  <tr className="bg-skip-neutral-1450 border-b border-skip-neutral-1350 text-skip-neutral-600 sticky top-0 z-10">
                    <th className="p-2.5 font-medium">Produto</th>
                    <th className="p-2.5 font-medium text-right">Estoque</th>
                    <th className="p-2.5 font-medium text-center">Status</th>
                    <th className="p-2.5 font-medium text-right">Tendência</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-skip-neutral-500">
                  {DEPOIS_ROWS.map((r, i) => (
                    <tr key={i} className="border-b border-skip-neutral-1350 last:border-0">
                      <td className="p-2.5 font-medium text-skip-neutral-400">{r.prod}</td>
                      <td className="p-2.5 text-right">
                        {r.est} <span className="text-skip-neutral-800">/ {r.max}</span>
                      </td>
                      <td className="p-2.5 text-center">
                        <Badge
                          variant="outline"
                          className={`text-[9px] h-5 px-2 font-medium ${r.badge}`}
                        >
                          {r.status}
                        </Badge>
                      </td>
                      <td className="p-2.5 flex justify-end items-center h-full">
                        <Sparkline data={r.sparkline} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-mono-xs uppercase text-blue-violet-600 text-[10px] tracking-wider font-semibold font-mono">
            Sistema Skip
          </span>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-skip-neutral-100">
            Inventory OS
          </h3>
        </div>
        <ul className="space-y-3">
          {DEPOIS_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-blue-violet-50 p-1 shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-blue-violet-400" />
              </div>
              <span className="text-sm text-skip-neutral-900 leading-[1.3]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
