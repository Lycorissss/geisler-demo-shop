'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, Plus, Check } from 'lucide-react'
import { useState } from 'react'
import { type Product, formatIDR } from '@/lib/data'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

const badgeColor: Record<string, string> = {
  'Best Seller': 'bg-warning text-warning-foreground',
  Promo: 'bg-destructive/90 text-white',
  Baru: 'bg-accent text-accent-foreground',
  Populer: 'bg-success text-success-foreground',
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  const onAdd = () => {
    add({ id: product.id, name: product.name, price: product.price, image: product.image })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)]">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={cn(
                'rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide',
                badgeColor[product.badge] ?? 'bg-primary text-primary-foreground',
              )}
            >
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
              Stok Habis
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setWished((v) => !v)}
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
          aria-label="Tambah ke wishlist"
        >
          <Heart className={cn('size-4', wished && 'fill-destructive text-destructive')} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-3.5">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {product.brand}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground hover:text-accent"
        >
          {product.name}
        </Link>

        <div className="mt-1.5 flex items-center gap-1">
          <Star className="size-3.5 fill-warning text-warning" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-foreground">{formatIDR(product.price)}</span>
          </div>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatIDR(product.oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onAdd}
          disabled={!product.inStock}
          className={cn(
            'mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50',
            added
              ? 'bg-success text-success-foreground'
              : 'bg-primary text-primary-foreground hover:bg-accent',
          )}
        >
          {added ? (
            <>
              <Check className="size-4" /> Ditambahkan
            </>
          ) : (
            <>
              <Plus className="size-4" /> Keranjang
            </>
          )}
        </button>
      </div>
    </div>
  )
}
