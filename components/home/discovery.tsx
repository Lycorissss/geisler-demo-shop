import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { categories } from '@/lib/data'

export function Discovery() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Jelajahi Kategori
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Temukan Peralatan yang Anda Butuhkan
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-semibold text-accent hover:underline sm:block"
          >
            Lihat semua
          </Link>
        </Reveal>

        <div className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 gk-no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 50}>
              <Link
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group flex h-full w-44 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={cat.image || '/placeholder.svg'}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 40vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 p-3.5">
                  <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
