'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Package,
  Heart,
  MapPin,
  User,
  LogOut,
  ChevronRight,
  Headset,
  Clock,
  CheckCircle2,
  Truck,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileNav } from '@/components/mobile-nav'
import { formatIDR } from '@/lib/data'
import { cn } from '@/lib/utils'

const tabs = [
  { key: 'orders', label: 'Pesanan', icon: Package },
  { key: 'wishlist', label: 'Wishlist', icon: Heart },
  { key: 'address', label: 'Alamat', icon: MapPin },
  { key: 'profile', label: 'Profil', icon: User },
] as const

const orders = [
  {
    id: 'GK-204881',
    date: '2 Jun 2026',
    status: 'Dikirim',
    statusIcon: Truck,
    items: 'Paket Karaoke Rumahan Starter',
    total: 6500000,
  },
  {
    id: 'GK-198332',
    date: '18 Mei 2026',
    status: 'Selesai',
    statusIcon: CheckCircle2,
    items: 'VocalMax VM-700 Wireless Microphone (2)',
    total: 3700000,
  },
  {
    id: 'GK-187210',
    date: '3 Apr 2026',
    status: 'Diproses',
    statusIcon: Clock,
    items: 'StageOne Cable & Stand Kit',
    total: 650000,
  },
]

export default function AccountPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]['key']>('orders')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          {/* Greeting */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              BS
            </div>
            <div>
              <h1 className="text-xl font-bold md:text-2xl">Halo, Budi Santoso</h1>
              <p className="text-sm text-muted-foreground">Member sejak 2024 &middot; budi@email.com</p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <nav className="overflow-hidden rounded-2xl border border-border bg-card">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={cn(
                      'flex w-full items-center gap-3 border-b border-border px-4 py-3.5 text-sm font-medium transition last:border-b-0',
                      tab === t.key
                        ? 'bg-accent/5 text-accent'
                        : 'text-foreground hover:bg-secondary',
                    )}
                  >
                    <t.icon className="h-5 w-5" />
                    {t.label}
                    <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
                <Link
                  href="/"
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium text-destructive transition hover:bg-secondary"
                >
                  <LogOut className="h-5 w-5" />
                  Keluar
                </Link>
              </nav>

              <div className="mt-4 rounded-2xl border border-border bg-primary p-5 text-primary-foreground">
                <Headset className="h-6 w-6" />
                <h3 className="mt-3 font-bold">Butuh bantuan?</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Tim support kami siap membantu Anda 24/7.
                </p>
                <button className="mt-4 h-10 w-full rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition hover:bg-accent/90">
                  Hubungi Kami
                </button>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              {tab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Riwayat Pesanan</h2>
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="font-semibold">#{o.id}</p>
                          <p className="text-xs text-muted-foreground">{o.date}</p>
                        </div>
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
                            o.status === 'Selesai'
                              ? 'bg-success/10 text-success'
                              : o.status === 'Dikirim'
                                ? 'bg-accent/10 text-accent'
                                : 'bg-warning/15 text-warning',
                          )}
                        >
                          <o.statusIcon className="h-3.5 w-3.5" />
                          {o.status}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                        <p className="text-sm text-muted-foreground">{o.items}</p>
                        <p className="font-bold">{formatIDR(o.total)}</p>
                      </div>
                      <div className="mt-4 flex gap-3">
                        <button className="h-9 rounded-lg border border-border px-4 text-sm font-medium transition hover:bg-secondary">
                          Lacak Pesanan
                        </button>
                        <button className="h-9 rounded-lg bg-secondary px-4 text-sm font-medium transition hover:bg-muted">
                          Beli Lagi
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'wishlist' && (
                <EmptyState
                  icon={Heart}
                  title="Wishlist Anda kosong"
                  desc="Simpan produk favorit Anda untuk dibeli nanti."
                  cta="Jelajahi Produk"
                />
              )}

              {tab === 'address' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Alamat Tersimpan</h2>
                    <button className="h-9 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90">
                      + Tambah Alamat
                    </button>
                  </div>
                  <div className="rounded-2xl border border-accent bg-accent/5 p-5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                        Utama
                      </span>
                      <span className="font-semibold">Rumah</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Budi Santoso &middot; 0812-3456-7890
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Jl. Merdeka No. 45, Coblong, Bandung, Jawa Barat 40132
                    </p>
                  </div>
                </div>
              )}

              {tab === 'profile' && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-lg font-bold">Informasi Profil</h2>
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ProfileField label="Nama Lengkap" value="Budi Santoso" />
                      <ProfileField label="Email" value="budi@email.com" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ProfileField label="No. Telepon" value="0812-3456-7890" />
                      <ProfileField label="Tipe Akun" value="Personal" />
                    </div>
                    <button className="h-11 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90">
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}

function EmptyState({
  icon: Icon,
  title,
  desc,
  cta,
}: {
  icon: React.ElementType
  title: string
  desc: string
  cta: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">{desc}</p>
      <Link
        href="/products"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-accent px-6 font-semibold text-accent-foreground transition hover:bg-accent/90"
      >
        {cta}
      </Link>
    </div>
  )
}
