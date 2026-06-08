import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/data'

export function BestSellers() {
  const featured = products.slice(0, 8)
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Paling Laris
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Produk Favorit Pelanggan
            </h2>
          </div>
          <Link
            href="/products"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Semua produk
            <ChevronRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 50} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
