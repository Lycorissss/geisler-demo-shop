import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Promotions() {
  return (
    <section id="promotions" className="scroll-mt-20 bg-background pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-primary p-8 text-white sm:p-10">
              <div>
                <span className="inline-block rounded-full bg-warning px-3 py-1 text-xs font-bold text-warning-foreground">
                  Promo Spesial
                </span>
                <h3 className="mt-4 text-balance text-2xl font-bold sm:text-3xl">
                  Diskon Hingga 20% untuk Paket Karaoke Rumahan
                </h3>
                <p className="mt-3 max-w-md text-pretty text-white/70">
                  Lengkapi rumah Anda dengan sistem karaoke berkualitas. Gratis
                  instalasi untuk pembelian paket bulan ini.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Belanja Sekarang
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-secondary p-8">
              <div>
                <span className="inline-block rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground">
                  Khusus Bisnis
                </span>
                <h3 className="mt-4 text-balance text-xl font-bold text-foreground">
                  Penawaran B2B & Pembelian Volume
                </h3>
                <p className="mt-3 text-pretty text-sm text-muted-foreground">
                  Harga khusus, invoice resmi, dan dukungan teknis prioritas
                  untuk kebutuhan usaha.
                </p>
              </div>
              <Link
                href="/business"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Ajukan Penawaran
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
