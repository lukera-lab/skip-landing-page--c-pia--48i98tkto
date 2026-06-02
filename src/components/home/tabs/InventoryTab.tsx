import { X, Check } from 'lucide-react'

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

export function InventoryDepois() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup - Dynamic Generation Animation */}
      <div className="h-[280px] w-full rounded-xl border border-blue-violet-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="flex-1 bg-gradient-to-b from-white to-blue-violet-50 flex items-center justify-center overflow-hidden relative p-4">
          <svg
            viewBox="0 0 600 450"
            className="w-full h-full max-w-[600px] overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="8"
                  flood-color="#0F172A"
                  flood-opacity="0.06"
                />
              </filter>
              <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="4"
                  flood-color="#4F46E5"
                  flood-opacity="0.6"
                />
              </filter>
              <filter id="scanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="4"
                  flood-color="#4F46E5"
                  flood-opacity="0.3"
                />
              </filter>
              <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#4F46E5" stop-opacity="0" />
                <stop offset="100%" stop-color="#4F46E5" stop-opacity="0.15" />
              </linearGradient>
              <clipPath id="canvasClip">
                <rect x="40" y="140" width="520" height="270" rx="16" />
              </clipPath>
            </defs>
            <style>
              {`
                .uig-float-group { animation: uig-floatGroup 6s ease-in-out infinite; }
                .uig-sparkle { animation: uig-sparkleSpin 2.5s linear infinite; transform-origin: 0px 0px; }
                .uig-progress-track { stroke-dasharray: 320; animation: uig-trackProgress 6s linear infinite; }
                .uig-node-1 { animation: uig-node-1 6s ease-out infinite; transform-origin: 140px 100px; }
                .uig-node-2 { animation: uig-node-2 6s ease-out infinite; transform-origin: 220px 100px; }
                .uig-node-3 { animation: uig-node-3 6s ease-out infinite; transform-origin: 300px 100px; }
                .uig-node-4 { animation: uig-node-4 6s ease-out infinite; transform-origin: 380px 100px; }
                .uig-node-5 { animation: uig-node-5 6s ease-out infinite; transform-origin: 460px 100px; }
                .uig-scan-line { animation: uig-scanSweep 6s linear infinite; }
                .uig-step-1 { animation: uig-step-1 6s ease-out infinite; }
                .uig-step-2 { animation: uig-step-2 6s ease-out infinite; }
                .uig-step-3 { animation: uig-step-3 6s ease-out infinite; }

                @keyframes uig-floatGroup {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes uig-sparkleSpin {
                  0% { transform: rotate(0deg) scale(0.8); opacity: 0.7; }
                  50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
                  100% { transform: rotate(360deg) scale(0.8); opacity: 0.7; }
                }
                @keyframes uig-trackProgress {
                  0%, 9% { stroke-dashoffset: 320; opacity: 0; }
                  10% { stroke-dashoffset: 320; opacity: 1; }
                  80%, 85% { stroke-dashoffset: 0; opacity: 1; }
                  88%, 100% { stroke-dashoffset: 0; opacity: 0; }
                }
                @keyframes uig-node-1 {
                  0%, 9% { transform: scale(0); opacity: 0; }
                  12%, 85% { transform: scale(1); opacity: 1; }
                  88%, 100% { transform: scale(0); opacity: 0; }
                }
                @keyframes uig-node-2 {
                  0%, 26% { transform: scale(0); opacity: 0; }
                  29%, 85% { transform: scale(1); opacity: 1; }
                  88%, 100% { transform: scale(0); opacity: 0; }
                }
                @keyframes uig-node-3 {
                  0%, 43% { transform: scale(0); opacity: 0; }
                  46%, 85% { transform: scale(1); opacity: 1; }
                  88%, 100% { transform: scale(0); opacity: 0; }
                }
                @keyframes uig-node-4 {
                  0%, 61% { transform: scale(0); opacity: 0; }
                  64%, 85% { transform: scale(1); opacity: 1; }
                  88%, 100% { transform: scale(0); opacity: 0; }
                }
                @keyframes uig-node-5 {
                  0%, 78% { transform: scale(0); opacity: 0; }
                  81%, 85% { transform: scale(1); opacity: 1; }
                  88%, 100% { transform: scale(0); opacity: 0; }
                }
                @keyframes uig-scanSweep {
                  0%, 9% { transform: translateY(140px); opacity: 0; }
                  10% { transform: translateY(140px); opacity: 1; }
                  80%, 85% { transform: translateY(410px); opacity: 1; }
                  88%, 100% { transform: translateY(410px); opacity: 0; }
                }
                @keyframes uig-step-1 {
                  0%, 14% { opacity: 0; transform: translateY(10px); }
                  19%, 85% { opacity: 1; transform: translateY(0); }
                  88%, 100% { opacity: 0; transform: translateY(10px); }
                }
                @keyframes uig-step-2 {
                  0%, 35% { opacity: 0; transform: translateY(10px); }
                  40%, 85% { opacity: 1; transform: translateY(0); }
                  88%, 100% { opacity: 0; transform: translateY(10px); }
                }
                @keyframes uig-step-3 {
                  0%, 43% { opacity: 0; transform: translateY(10px); }
                  48%, 85% { opacity: 1; transform: translateY(0); }
                  88%, 100% { opacity: 0; transform: translateY(10px); }
                }
              `}
            </style>

            <g className="uig-float-group">
              {/* Progress Track */}
              <path
                d="M 140 100 L 460 100"
                stroke="#E2E8F0"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M 140 100 L 460 100"
                stroke="#4F46E5"
                stroke-width="4"
                stroke-linecap="round"
                className="uig-progress-track"
              />

              {/* Base Nodes */}
              <circle cx="140" cy="100" r="8" fill="#E2E8F0" />
              <circle cx="220" cy="100" r="8" fill="#E2E8F0" />
              <circle cx="300" cy="100" r="8" fill="#E2E8F0" />
              <circle cx="380" cy="100" r="8" fill="#E2E8F0" />
              <circle cx="460" cy="100" r="8" fill="#E2E8F0" />

              {/* Active Nodes */}
              <circle
                cx="140"
                cy="100"
                r="8"
                fill="#4F46E5"
                className="uig-node-1"
                filter="url(#nodeGlow)"
              />
              <circle
                cx="220"
                cy="100"
                r="8"
                fill="#4F46E5"
                className="uig-node-2"
                filter="url(#nodeGlow)"
              />
              <circle
                cx="300"
                cy="100"
                r="8"
                fill="#4F46E5"
                className="uig-node-3"
                filter="url(#nodeGlow)"
              />
              <circle
                cx="380"
                cy="100"
                r="8"
                fill="#4F46E5"
                className="uig-node-4"
                filter="url(#nodeGlow)"
              />
              <circle
                cx="460"
                cy="100"
                r="8"
                fill="#4F46E5"
                className="uig-node-5"
                filter="url(#nodeGlow)"
              />

              {/* AI Indicator Pill */}
              <g transform="translate(300, 40)">
                <rect
                  x="-84"
                  y="-20"
                  width="168"
                  height="40"
                  rx="20"
                  fill="#ffffff"
                  filter="url(#softShadow)"
                />
                <g transform="translate(-60, 0)">
                  <g className="uig-sparkle">
                    <path
                      d="M 0 -8 C 1 -3 3 -1 8 0 C 3 1 1 3 0 8 C -1 3 -3 1 -8 0 C -3 -1 -1 -3 0 -8 Z"
                      fill="#4F46E5"
                    />
                  </g>
                </g>
                <text
                  x="-40"
                  y="4"
                  font-family="monospace"
                  font-size="13"
                  font-weight="600"
                  fill="#4F46E5"
                  letter-spacing="1"
                >
                  GENERATING UI
                </text>
              </g>

              {/* Canvas Background */}
              <rect
                x="40"
                y="140"
                width="520"
                height="270"
                rx="16"
                fill="#ffffff"
                filter="url(#softShadow)"
              />

              {/* Masked Elements */}
              <g clip-path="url(#canvasClip)">
                {/* Step 1: Banner */}
                <g className="uig-step-1">
                  <rect x="60" y="160" width="480" height="40" rx="6" fill="#F1F5F9" />
                  <rect x="76" y="172" width="16" height="16" rx="4" fill="#4F46E5" opacity="0.2" />
                  <rect x="100" y="176" width="80" height="8" rx="4" fill="#CBD5E1" />
                  <rect x="424" y="172" width="56" height="16" rx="4" fill="#E2E8F0" />
                  <rect x="488" y="172" width="36" height="16" rx="4" fill="#E2E8F0" />
                </g>

                {/* Step 2: Left Column */}
                <g className="uig-step-2">
                  <rect
                    x="60"
                    y="216"
                    width="120"
                    height="174"
                    rx="6"
                    fill="#F8FAFC"
                    stroke="#E2E8F0"
                    stroke-width="1"
                  />
                  <rect x="76" y="232" width="60" height="6" rx="3" fill="#94A3B8" />
                  <rect x="76" y="252" width="88" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="76" y="268" width="70" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="76" y="284" width="80" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="76" y="300" width="50" height="6" rx="3" fill="#E2E8F0" />

                  <rect x="76" y="330" width="60" height="6" rx="3" fill="#94A3B8" />
                  <rect x="76" y="350" width="88" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="76" y="366" width="40" height="6" rx="3" fill="#E2E8F0" />
                </g>

                {/* Step 3: Right Column */}
                <g className="uig-step-3">
                  <rect
                    x="196"
                    y="216"
                    width="344"
                    height="174"
                    rx="6"
                    fill="#ffffff"
                    stroke="#E2E8F0"
                    stroke-width="1"
                    filter="url(#softShadow)"
                  />
                  <rect x="196" y="216" width="344" height="32" rx="6" fill="#F1F5F9" />
                  <rect x="216" y="228" width="40" height="6" rx="3" fill="#94A3B8" />
                  <rect x="320" y="228" width="60" height="6" rx="3" fill="#94A3B8" />
                  <rect x="420" y="228" width="40" height="6" rx="3" fill="#94A3B8" />
                  <rect x="480" y="228" width="40" height="6" rx="3" fill="#94A3B8" />

                  {[0, 32, 64, 96].map((offset, i) => (
                    <g key={i} transform={`translate(0, ${256 + offset})`}>
                      <rect
                        x="216"
                        y="0"
                        width={40 + ((i * 10) % 30)}
                        height="6"
                        rx="3"
                        fill="#CBD5E1"
                      />
                      <rect
                        x="320"
                        y="0"
                        width={60 + ((i * 20) % 40)}
                        height="6"
                        rx="3"
                        fill="#E2E8F0"
                      />
                      <rect
                        x="420"
                        y="-2"
                        width="30"
                        height="10"
                        rx="5"
                        fill={['#4F46E5', '#10B981', '#F59E0B', '#4F46E5'][i]}
                        opacity="0.1"
                      />
                      <rect
                        x="425"
                        y="0"
                        width="20"
                        height="6"
                        rx="3"
                        fill={['#4F46E5', '#10B981', '#F59E0B', '#4F46E5'][i]}
                        opacity="0.6"
                      />
                      <rect
                        x="480"
                        y="0"
                        width={30 + ((i * 5) % 20)}
                        height="6"
                        rx="3"
                        fill="#E2E8F0"
                      />
                      {i < 3 && <path d="M 196 16 L 540 16" stroke="#F1F5F9" stroke-width="1" />}
                    </g>
                  ))}
                </g>

                {/* Scan Sweep Line */}
                <g className="uig-scan-line">
                  <rect x="40" y="-60" width="520" height="60" fill="url(#scanGradient)" />
                  <rect
                    x="40"
                    y="0"
                    width="520"
                    height="2"
                    fill="#4F46E5"
                    filter="url(#scanGlow)"
                  />
                </g>
              </g>
            </g>
          </svg>
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
