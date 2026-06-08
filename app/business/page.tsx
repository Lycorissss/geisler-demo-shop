import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  Coffee,
  Music2,
  PartyPopper,
  ClipboardCheck,
  Wrench,
  Headset,
  BadgePercent,
  ArrowRight,
  Check,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileNav } from '@/components/mobile-nav'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Solusi Bisnis | Geisler Karaoke',
  description:
    'Solusi sound system dan karaoke untuk kafe, restoran, tempat karaoke (KTV), event organizer, dan venue komersial. Konsultasi, survey lokasi, dan instalasi profesional.',
}

const segments = [
  {
    icon: Coffee,
    title: 'Kafe & Restoran',
    desc: 'Sistem audio latar dan panggung kecil untuk menghidupkan suasana tanpa mengganggu percakapan pelanggan.',
    image: '/b2b-cafe.png',
  },
  {
    icon: Music2,
    title: 'Tempat Karaoke / KTV',
    desc: 'Paket multi-ruangan lengkap dengan speaker, mixer, dan mikrofon yang tahan penggunaan intensif.',
    image: '/b2b-room.png',
  },
  {
    icon: PartyPopper,
    title: 'Event Organizer',
    desc: 'Sistem PA bertenaga untuk acara, panggung, dan pertunjukan skala kecil hingga besar.',
    image: '/b2b-event.png',
  },
]

const steps = [
  { icon: Headset, title: 'Konsultasi', desc: 'Diskusikan kebutuhan dan anggaran Anda dengan tim ahli kami.' },
  { icon: ClipboardCheck, title: 'Survey Lokasi', desc: 'Tim kami mengukur akustik dan tata ruang lokasi Anda.' },
  { icon: BadgePercent, title: 'Penawaran', desc: 'Kami susun rekomendasi sistem dan harga khusus B2B.' },
  { icon: Wrench, title: 'Instalasi', desc: 'Pemasangan profesional, pengujian, dan pelatihan operasional.' },
]

const benefits = [
  'Harga khusus B2B & pembelian volume',
  'Survey lokasi & desain akustik gratis',
  'Garansi resmi & kontrak perawatan berkala',
  'Tim teknisi tersertifikasi di seluruh Indonesia',
  'Opsi pembayaran tempo untuk perusahaan',
  'Dukungan teknis prioritas 24/7',
]

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-sm font-medium">
                <Building2 className="h-4 w-4" /> Geisler untuk Bisnis
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-balance md:text-5xl">
                Solusi audio profesional untuk venue Anda
              </h1>
              <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/70">
                Dari kafe hingga tempat karaoke dan event berskala besar — kami
                rancang, pasang, dan rawat sistem audio yang andal untuk bisnis Anda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#consult"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 font-semibold text-accent-foreground transition hover:bg-accent/90"
                >
                  Minta Konsultasi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-primary-foreground/30 px-6 font-semibold transition hover:bg-primary-foreground/10"
                >
                  Lihat Produk
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/b2b-room.png"
                alt="Ruang karaoke profesional yang dilengkapi sistem audio Geisler"
                width={720}
                height={520}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold text-balance md:text-3xl">
                Dirancang untuk setiap jenis usaha
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Setiap bisnis punya kebutuhan akustik yang berbeda. Kami sesuaikan
                solusi dengan ruang dan tujuan Anda.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <s.icon className="h-7 w-7 text-accent" />
                    <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-balance md:text-3xl">
                  Proses kerja sama yang transparan
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Empat langkah sederhana dari konsultasi hingga sistem siap pakai.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="relative rounded-2xl border border-border bg-card p-6">
                    <span className="text-sm font-bold text-accent">
                      0{i + 1}
                    </span>
                    <s.icon className="mt-3 h-7 w-7 text-foreground" />
                    <h3 className="mt-3 font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + consult form */}
        <section id="consult" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-balance md:text-3xl">
                  Keuntungan menjadi mitra bisnis Geisler
                </h2>
                <ul className="mt-6 space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                        <Check className="h-4 w-4 text-success" />
                      </span>
                      <span className="leading-relaxed text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <form className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold">Minta Penawaran B2B</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Isi formulir dan tim kami akan menghubungi Anda dalam 1x24 jam.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nama" placeholder="Nama Anda" />
                    <Field label="Nama Bisnis" placeholder="PT / Usaha Anda" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" type="email" placeholder="email@bisnis.com" />
                    <Field label="No. Telepon" placeholder="08xx-xxxx-xxxx" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Jenis Usaha</label>
                    <select className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20">
                      <option>Kafe & Restoran</option>
                      <option>Tempat Karaoke / KTV</option>
                      <option>Event Organizer</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Kebutuhan</label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan kebutuhan audio Anda..."
                      className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <button
                    type="button"
                    className="h-12 w-full rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90"
                  >
                    Kirim Permintaan
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}
