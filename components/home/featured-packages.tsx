'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, Star, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { packages, formatIDR } from '@/lib/data'
import { useCart } from '@/components/cart-provider'

export function FeaturedPackages() {
  const { add } = useCart()

  return (
    <section id="packages" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Paket Karaoke Lengkap
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solusi Siap Pakai, Tanpa Repot
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Setiap paket sudah termasuk peralatan, kabel, dan instalasi
            profesional. Tersedia opsi cicilan ringan.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.3)]">
                <div className="relative aspect-[5/4] overflow-hidden bg-secondary">
                  <Image
                    src={pkg.image || '/placeholder.svg'}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  {pkg.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-warning px-3 py-1 text-xs font-bold text-warning-foreground">
                      {pkg.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {pkg.segment}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
                  <div className="mt-1.5 flex items-center gap-1">
                    <Star className="size-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">({pkg.reviews} ulasan)</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {pkg.includes.slice(0, 4).map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        {inc}
                      </li>
                    ))}
                    {pkg.includes.length > 4 && (
                      <li className="text-sm font-medium text-accent">
                        +{pkg.includes.length - 4} item lainnya
                      </li>
                    )}
                  </ul>

                  <div className="mt-6 border-t border-border pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {formatIDR(pkg.price)}
                      </span>
                      {pkg.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatIDR(pkg.oldPrice)}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      atau cicilan {formatIDR(pkg.monthly)}/bulan
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        add({ id: pkg.id, name: pkg.name, price: pkg.price, image: pkg.image })
                      }
                      className="flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                    >
                      Tambah ke Keranjang
                    </button>
                    <Link
                      href="/products"
                      className="flex h-11 items-center justify-center gap-1 rounded-xl border border-border text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Lihat Detail
                      <ChevronRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
