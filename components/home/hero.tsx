'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronRight, MessageCircle, ArrowDown } from 'lucide-react'

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset * 0.25}px) scale(1.1)` }}
      >
        <Image
          src="/hero-karaoke.png"
          alt="Ruang karaoke premium dengan peralatan audio profesional"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-success" />
            Distributor Resmi Peralatan Karaoke
          </span>
          <h1
            className="mt-6 animate-fade-up text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Upgrade Pengalaman Karaoke Anda
          </h1>
          <p
            className="mt-5 animate-fade-up text-pretty text-lg leading-relaxed text-white/75"
            style={{ animationDelay: '160ms' }}
          >
            Dari Paket Rumahan Hingga Solusi Karaoke Profesional. Peralatan
            audio berkualitas dengan instalasi dan konsultasi gratis.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <Link
              href="#packages"
              className="group flex h-13 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Lihat Paket Karaoke
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/business#consult"
              className="flex h-13 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-4" />
              Konsultasi Gratis
            </Link>
          </div>

          <dl
            className="mt-12 grid max-w-md animate-fade-up grid-cols-3 gap-6"
            style={{ animationDelay: '320ms' }}
          >
            {[
              { v: '10rb+', l: 'Pelanggan Puas' },
              { v: '4.9/5', l: 'Rating Ulasan' },
              { v: '34', l: 'Kota Terjangkau' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-white">{s.v}</dt>
                <dd className="mt-1 text-xs text-white/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/50 lg:block">
        <ArrowDown className="size-5" />
      </div>
    </section>
  )
}
