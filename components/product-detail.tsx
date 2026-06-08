'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Wrench,
  Headset,
  ChevronRight,
  Heart,
} from 'lucide-react'
import type { Product } from '@/lib/data'
import { products, formatIDR } from '@/lib/data'
import { ProductCard } from '@/components/product-card'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

const tabs = ['Deskripsi', 'Spesifikasi', 'Ulasan'] as const

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState<(typeof tabs)[number]>('Deskripsi')
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  const gallery = [product.image, product.image, product.image]
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4)
  const relatedList = related.length ? related : fallbackRelated

  const specs = [
    { label: 'Brand', value: product.brand },
    { label: 'Kategori', value: product.category },
    { label: 'Daya Output', value: '400W RMS' },
    { label: 'Konektivitas', value: 'XLR, TRS, Bluetooth' },
    { label: 'Garansi', value: '1 Tahun Resmi' },
    { label: 'Berat', value: '8.5 kg' },
  ]

  function handleAdd() {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        meta: product.brand,
      },
      qty,
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/products" className="hover:text-foreground">
          Produk
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="truncate text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
            <Image
              src={gallery[activeImg] || '/placeholder.svg'}
              alt={product.name}
              width={700}
              height={700}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  'overflow-hidden rounded-xl border bg-secondary transition',
                  activeImg === i ? 'border-accent ring-2 ring-accent/30' : 'border-border',
                )}
                aria-label={`Lihat gambar ${i + 1}`}
              >
                <Image
                  src={g || '/placeholder.svg'}
                  alt=""
                  width={90}
                  height={90}
                  className="aspect-square w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          {product.badge && (
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {product.badge}
            </span>
          )}
          <h1 className="text-2xl font-bold leading-tight text-balance md:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{product.brand}</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < Math.round(product.rating)
                      ? 'fill-warning text-warning'
                      : 'text-border',
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews} ulasan)
            </span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-bold text-foreground">
              {formatIDR(product.price)}
            </span>
            {product.oldPrice && (
              <span className="mb-1 text-base text-muted-foreground line-through">
                {formatIDR(product.oldPrice)}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            atau cicilan mulai {formatIDR(Math.round(product.price / 12))}/bln
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">{product.short}</p>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium',
                product.inStock
                  ? 'bg-success/10 text-success'
                  : 'bg-muted text-muted-foreground',
              )}
            >
              <span
                className={cn(
                  'h-2 w-2 rounded-full',
                  product.inStock ? 'bg-success' : 'bg-muted-foreground',
                )}
              />
              {product.inStock ? 'Stok Tersedia' : 'Stok Habis'}
            </span>
          </div>

          {/* Quantity + actions */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-xl border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-12 w-12 items-center justify-center text-muted-foreground transition hover:text-foreground"
                aria-label="Kurangi jumlah"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-12 w-12 items-center justify-center text-muted-foreground transition hover:text-foreground"
                aria-label="Tambah jumlah"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className={cn(
                'flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-6 font-semibold text-accent-foreground transition disabled:cursor-not-allowed disabled:opacity-50',
                added ? 'bg-success' : 'bg-accent hover:bg-accent/90',
              )}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" /> Ditambahkan
                </>
              ) : (
                'Tambah ke Keranjang'
              )}
            </button>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition hover:text-accent"
              aria-label="Tambah ke wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <Link
            href="/checkout"
            className="mt-3 flex h-12 items-center justify-center rounded-xl border border-primary font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Beli Sekarang
          </Link>

          {/* Trust mini */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: 'Garansi Resmi' },
              { icon: Truck, label: 'Kirim Cepat' },
              { icon: Wrench, label: 'Instalasi Pro' },
              { icon: Headset, label: 'Support 24/7' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <t.icon className="h-6 w-6 text-accent" />
                <span className="text-xs font-medium text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="flex gap-1 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'relative px-4 py-3 text-sm font-semibold transition',
                tab === t ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {t}
              {tab === t && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>
        <div className="py-6">
          {tab === 'Deskripsi' && (
            <div className="max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {product.name} dirancang untuk memberikan pengalaman audio terbaik
                di kelasnya. Cocok untuk penggunaan rumahan maupun komersial, produk
                ini menghadirkan kualitas suara jernih dengan ketahanan tinggi.
              </p>
              <p>
                Setiap unit telah melalui pengujian ketat dan dilengkapi garansi
                resmi distributor. Tim teknisi Geisler siap membantu instalasi serta
                memberikan konsultasi gratis agar sistem audio Anda bekerja optimal.
              </p>
            </div>
          )}
          {tab === 'Spesifikasi' && (
            <div className="max-w-2xl overflow-hidden rounded-xl border border-border">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 text-sm',
                    i % 2 === 0 ? 'bg-secondary' : 'bg-card',
                  )}
                >
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'Ulasan' && (
            <div className="max-w-3xl space-y-5">
              {[
                { name: 'Rian H.', text: 'Kualitas suara mantap, sesuai deskripsi. Pengiriman cepat.' },
                { name: 'Dewi K.', text: 'Sudah dipakai 2 bulan, awet dan jernih. Recommended!' },
              ].map((r) => (
                <div key={r.name} className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{r.name}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">Produk Terkait</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {relatedList.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
