'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  CreditCard,
  Wallet,
  Building,
  Truck,
  ShieldCheck,
  Check,
  MapPin,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileNav } from '@/components/mobile-nav'
import { useCart } from '@/components/cart-provider'
import { formatIDR } from '@/lib/data'
import { cn } from '@/lib/utils'

const payments = [
  { key: 'transfer', label: 'Transfer Bank', desc: 'BCA, Mandiri, BNI, BRI', icon: Building },
  { key: 'ewallet', label: 'E-Wallet', desc: 'GoPay, OVO, DANA, ShopeePay', icon: Wallet },
  { key: 'card', label: 'Kartu Kredit / Debit', desc: 'Visa, Mastercard', icon: CreditCard },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clear } = useCart()
  const [payment, setPayment] = useState('transfer')
  const [done, setDone] = useState(false)
  const shipping = subtotal > 5000000 || subtotal === 0 ? 0 : 150000
  const total = subtotal + shipping

  function placeOrder() {
    setDone(true)
    clear()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (done) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center px-4 py-20">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <Check className="h-10 w-10 text-success" />
            </div>
            <h1 className="mt-6 text-2xl font-bold">Pesanan Berhasil!</h1>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Terima kasih telah berbelanja di Geisler Karaoke. Kami telah mengirim
              detail pesanan dan instruksi pembayaran ke email Anda.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card p-4 text-left text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nomor Pesanan</span>
                <span className="font-semibold">#GK-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/account"
                className="flex h-12 items-center justify-center rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                Lihat Pesanan Saya
              </Link>
              <Link
                href="/products"
                className="flex h-12 items-center justify-center rounded-xl border border-border font-semibold transition hover:bg-secondary"
              >
                Lanjut Belanja
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
        <MobileNav />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <h1 className="text-2xl font-bold md:text-3xl">Checkout</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {/* Shipping */}
              <section className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-bold">Alamat Pengiriman</h2>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nama Lengkap" placeholder="Nama penerima" />
                    <Field label="No. Telepon" placeholder="08xx-xxxx-xxxx" />
                  </div>
                  <Field label="Alamat Lengkap" placeholder="Jalan, nomor rumah, RT/RW" />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Kota" placeholder="Kota" />
                    <Field label="Provinsi" placeholder="Provinsi" />
                    <Field label="Kode Pos" placeholder="40xxx" />
                  </div>
                </div>
              </section>

              {/* Shipping method */}
              <section className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-bold">Metode Pengiriman</h2>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { label: 'Reguler (3-5 hari)', price: shipping },
                    { label: 'Instalasi & Antar (1-2 hari)', price: 350000 },
                  ].map((m, i) => (
                    <label
                      key={m.label}
                      className={cn(
                        'flex cursor-pointer items-center justify-between rounded-xl border p-4 transition',
                        i === 0 ? 'border-accent bg-accent/5' : 'border-border',
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="ship"
                          defaultChecked={i === 0}
                          className="h-4 w-4 accent-accent"
                        />
                        <span className="text-sm font-medium">{m.label}</span>
                      </div>
                      <span className="text-sm font-semibold">
                        {m.price === 0 ? 'Gratis' : formatIDR(m.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Payment */}
              <section className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-bold">Metode Pembayaran</h2>
                </div>
                <div className="mt-5 space-y-3">
                  {payments.map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPayment(p.key)}
                      className={cn(
                        'flex w-full items-center gap-4 rounded-xl border p-4 text-left transition',
                        payment === p.key ? 'border-accent bg-accent/5' : 'border-border hover:border-muted-foreground',
                      )}
                    >
                      <p.icon
                        className={cn(
                          'h-6 w-6',
                          payment === p.key ? 'text-accent' : 'text-muted-foreground',
                        )}
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{p.label}</p>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                      </div>
                      <span
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full border',
                          payment === p.key ? 'border-accent bg-accent' : 'border-border',
                        )}
                      >
                        {payment === p.key && <Check className="h-3 w-3 text-accent-foreground" />}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold">Pesanan Anda</h2>
                <div className="mt-4 space-y-3">
                  {items.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      Keranjang kosong.{' '}
                      <Link href="/products" className="text-accent hover:underline">
                        Belanja dulu
                      </Link>
                    </p>
                  )}
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 object-cover"
                        />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          {item.qty}
                        </span>
                      </div>
                      <p className="flex-1 truncate text-sm font-medium">{item.name}</p>
                      <span className="text-sm font-semibold">
                        {formatIDR(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>

                <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Subtotal</dt>
                    <dd className="font-medium">{formatIDR(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pengiriman</dt>
                    <dd className="font-medium">
                      {shipping === 0 ? <span className="text-success">Gratis</span> : formatIDR(shipping)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <dt className="font-bold">Total</dt>
                    <dd className="text-xl font-bold">{formatIDR(total)}</dd>
                  </div>
                </dl>

                <button
                  onClick={placeOrder}
                  disabled={items.length === 0}
                  className="mt-6 h-12 w-full rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Buat Pesanan
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-success" />
                  Pembayaran aman & terenkripsi
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  )
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}
