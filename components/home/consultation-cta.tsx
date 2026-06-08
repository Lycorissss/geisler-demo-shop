import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function ConsultationCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                Masih Bingung Memilih Paket Karaoke?
              </h2>
              <p className="mt-4 text-pretty text-lg text-accent-foreground/85">
                Tim ahli kami siap membantu Anda memilih sistem yang tepat sesuai
                ruangan, kebutuhan, dan anggaran. Konsultasi gratis tanpa komitmen.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/business#consult"
                  className="flex h-13 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="size-4" />
                  Konsultasi Gratis
                </Link>
                <a
                  href="tel:+622150008888"
                  className="flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  <Phone className="size-4" />
                  Hubungi Tim Kami
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
