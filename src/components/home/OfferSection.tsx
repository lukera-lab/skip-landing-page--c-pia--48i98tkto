import { Check, Shield, ArrowRight, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LeadCaptureModal } from './LeadCaptureModal'

export function OfferSection({
  directCheckout = false,
  ctaText = 'Quero Fazer Parte',
}: {
  directCheckout?: boolean
  ctaText?: string
}) {
  const handleDirectCheckout = (plan: string) => {
    window.location.href = `https://go.adapta.org/checkout/${plan}`
  }

  return (
    <section
      id="offer"
      className="w-full py-12 md:py-32 px-5 bg-white relative z-10 border-t border-skip-neutral-1350/50"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-2 md:mb-3 block">
            Lançamento
          </span>
          <h2 className="font-heading text-[28px] md:text-[40px] leading-[1.1] font-semibold text-skip-neutral-100 tracking-[-0.02em]">
            Oferta Exclusiva
          </h2>
        </div>

        <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Skip Basic Card */}
          <div className="bg-white rounded-[20px] border border-skip-neutral-1350 shadow-elevation p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-lg w-full h-full">
            {/* Header */}
            <h2 className="font-heading text-h4 font-semibold text-skip-neutral-300 mb-1">
              Skip Basic
            </h2>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-heading text-[40px] leading-none font-bold text-skip-neutral-300">
                R$ 249
              </span>
              <span className="font-heading text-xl font-bold text-skip-neutral-300">/mês</span>
            </div>
            <p className="font-body text-body-xs text-skip-neutral-800 mb-6">cobrado anualmente</p>

            <ul className="flex flex-col gap-2 mb-6">
              <li className="font-body text-body-s text-skip-neutral-700">01 licença</li>
              <li className="font-body text-body-s text-skip-neutral-700">800 créditos mensais</li>
            </ul>

            <Separator className="bg-skip-neutral-1350 mb-6" />

            {/* Incluso */}
            <div className="mb-8 flex-1">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-4">
                Incluso
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Projetos ilimitados',
                  'Baixar código-fonte',
                  'Gerenciar versões',
                  'Integração com Banco de Dados (Supabase)',
                  'Remover badge do Skip',
                  'Suporte por e-mail',
                  '4 Cursos: Planilha em App, Sistema de RH, Plataforma de Cursos e CRM',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-violet-600 shrink-0" />
                    <span className="font-body text-body-s text-skip-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col items-center gap-3 w-full pt-6">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                {directCheckout ? (
                  <Button
                    onClick={() => handleDirectCheckout('skip-basic-home')}
                    className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <LeadCaptureModal plan="skip-basic-home">
                    <Button className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto">
                      {ctaText}
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </Button>
                  </LeadCaptureModal>
                )}
              </div>
              <div className="flex items-center gap-3 text-skip-neutral-900 mt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    30 dias de garantia
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-skip-neutral-1100" />
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    Compra segura
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skip Gold Card */}
          <div className="bg-white rounded-[20px] border border-blue-violet-200 shadow-[0_8px_30px_rgba(79,70,229,0.08)] p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-xl w-full h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand" />

            {/* Header */}
            <h2 className="font-heading text-h4 font-semibold text-skip-neutral-300 mb-1 mt-1">
              Skip Gold
            </h2>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-heading text-[40px] leading-none font-bold text-skip-neutral-300">
                R$ 12.000
              </span>
              <span className="font-heading text-xl font-bold text-skip-neutral-300">/ano</span>
            </div>
            <p className="font-body text-body-xs text-skip-neutral-800 mb-6">cobrado anualmente</p>

            <ul className="flex flex-col gap-2 mb-6">
              <li className="font-body text-body-s text-skip-neutral-700">05 licenças</li>
              <li className="font-body text-body-s text-skip-neutral-700">
                4.000 Créditos Mensais
              </li>
              <li className="font-body text-body-s text-skip-neutral-700">
                Live Deploy: 01 Call Mensal
              </li>
              <li className="font-body text-body-s text-skip-neutral-700">SLA: 3 dias*</li>
            </ul>

            <Separator className="bg-skip-neutral-1350 mb-6" />

            {/* Incluso */}
            <div className="mb-6 flex-1">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-4">
                Incluso
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Projetos ilimitados',
                  'Baixar código-fonte',
                  'Gerenciar versões',
                  'Integração com Banco de dados (Supabase)',
                  'Remover badge do Skip',
                  'Domínios e metadados personalizados',
                  'Acesso exclusivo ao grupo Beta',
                  'Suporte Standard',
                  '4 Cursos: Planilha em App, Sistema de RH, Plataforma de Cursos e CRM',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-violet-600 shrink-0" />
                    <span className="font-body text-body-s text-skip-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col items-center gap-3 w-full pt-6">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-30 group-hover:opacity-50 transition duration-500" />
                {directCheckout ? (
                  <Button
                    onClick={() => handleDirectCheckout('skip-gold-home')}
                    className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <LeadCaptureModal plan="skip-gold-home">
                    <Button className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]">
                      {ctaText}
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </Button>
                  </LeadCaptureModal>
                )}
              </div>
              <div className="flex items-center gap-3 text-skip-neutral-900 mt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    30 dias de garantia
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-skip-neutral-1100" />
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    Compra segura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
