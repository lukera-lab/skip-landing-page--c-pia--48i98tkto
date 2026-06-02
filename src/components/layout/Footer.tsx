import { Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-skip-neutral-500 py-8 bg-skip-neutral-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="order-2 md:order-1">
          <p className="font-body text-body-xs text-skip-neutral-1000 text-center md:text-left">
            © {new Date().getFullYear()} Skip. Todos os direitos reservados.
          </p>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-3">
          <h2 className="font-body font-semibold text-sm text-skip-neutral-1000">Fale conosco</h2>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:duvidas@adapta.org"
              className="font-body text-body-xs text-skip-neutral-1000 hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>duvidas@adapta.org</span>
            </a>
            <a
              href="https://wa.me/5511936200023"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-xs text-skip-neutral-1000 hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Whatsapp: 55 (11) 93620-0023</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
