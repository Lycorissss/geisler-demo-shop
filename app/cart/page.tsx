'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileNav } from '@/components/mobile-nav'
import { useCart } from '@/components/cart-provider'
import { formatIDR } from '@/lib/data'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, count } = useCart()
  const shipping = subtotal > 5000000 || subtotal === 0 ? 0 : 150000
  const total = subtotal + shipping

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <h1 className="text-2xl font-bold md:text-3xl">Keranjang Belanja</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {count > 0 ? `${count} item dalam keranjang Anda` : 'Keranjang Anda masih kosong'}
          </p>

          {items.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Keranjang masih kosong</h2>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Yuk jelajahi produk dan paket karaoke terbaik kami.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-accent px-6 font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Items */}
              <div className="lg:col-span-2">
                <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 md:p-5">
                      <Link
                        href="/products"
                        className="shrink-0 overflow-hidden rounded-xl border border-border bg-secondary"
                      >
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="h-20 w-20 object-cover md:h-24 md:w-24"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold leading-snug">{item.name}</h3>
                            {item.meta && (
                              <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground transition hover:text-destructive"
                            aria-label="Hapus item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-lg border border-border">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="flex h-9 w-9 items-center justify-center text-muted-foreground transition hover:text-foreground"
                              aria-label="Kurangi"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="flex h-9 w-9 items-center justify-center text-muted-foreground transition hover:text-foreground"
                              aria-label="Tambah"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="font-bold">{formatIDR(item.price * item.qty)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/products"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  &larr; Lanjut belanja
                </Link>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-lg font-bold">Ringkasan Pesanan</h2>

                  <div className="mt-4 flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        placeholder="Kode promo"
                        className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none focus:border-accent"
                      />
                    </div>
                    <button className="h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                      Pakai
                    </button>
                  </div>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Subtotal</dt>
                      <dd className="font-medium">{formatIDR(subtotal)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Pengiriman</dt>
                      <dd className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-success">Gratis</span>
                        ) : (
                          formatIDR(shipping)
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex items-center justify-between">
                        <dt className="font-bold">Total</dt>
                        <dd className="text-xl font-bold">{formatIDR(total)}</dd>
                      </div>
                    </div>
                  </dl>

                  <Link
                    href="/checkout"
                    className="mt-6 flex h-12 items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90"
                  >
                    Lanjut ke Pembayaran <ArrowRight className="h-4 w-4" />
                  </Link>

                  <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-success" />
                    Transaksi aman & terenkripsi
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  )
}
