import { cn } from '@/lib/utils'

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Fale sobre seu processo interno',
      description:
        'Escolha um processo da sua empresa que deseja melhorar e conte para o Skip como ele funciona hoje.',
    },
    {
      number: '02',
      title: 'Deixe o Skip Trabalhar',
      description:
        'O Skip vai mapear seu processo e criar um Sistema Interno completo para melhorar sua operação.',
    },
    {
      number: '03',
      title: 'Receba seu Sistema Pronto para usar',
      description:
        'Após seus feedbacks, o sistema é entregue 100% pronto: banco de dados, login, URL própria, SSL e hospedagem otimizada.',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 px-5 bg-white relative z-10">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-2 md:mb-3">
            COMO FUNCIONA
          </span>
          <h2 className="font-heading text-[28px] md:text-[40px] leading-[1.1] font-semibold text-skip-neutral-100 mb-4 tracking-[-0.02em]">
            Como o Skip funciona?
          </h2>
          <p className="font-body text-base md:text-lg text-skip-neutral-800 leading-[1.3] max-w-[600px]">
            Mande sua ideia. Receba seu Skip. Compartilhe com seu time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col border rounded-[20px] p-[28px] shadow-sm transition-shadow duration-300',
                index === 2
                  ? 'bg-gradient-to-br from-blue-violet-600 to-indigo-900 border-transparent hover:shadow-md hover:shadow-blue-violet-600/30'
                  : 'bg-white border-skip-neutral-1350 hover:shadow-md',
              )}
            >
              <span
                className={cn(
                  'font-mono text-2xl md:text-3xl font-semibold mb-4 block',
                  index === 2 ? 'text-white/90' : 'text-blue-violet-600',
                )}
              >
                {step.number}
              </span>
              <h3
                className={cn(
                  'font-heading text-lg md:text-xl font-semibold mb-3 leading-[1.2]',
                  index === 2 ? 'text-white' : 'text-skip-neutral-300',
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  'font-body text-sm md:text-base leading-[1.4]',
                  index === 2 ? 'text-white/80' : 'text-skip-neutral-800',
                )}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
