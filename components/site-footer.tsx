import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle, AtSign } from 'lucide-react'

const columns = [
  {
    title: 'Perusahaan',
    links: ['Tentang Kami', 'Karier', 'Blog & Tips', 'Mitra Bisnis', 'Liputan Media'],
  },
  {
    title: 'Layanan Pelanggan',
    links: ['Pusat Bantuan', 'Cara Pemesanan', 'Lacak Pesanan', 'Pengembalian', 'Klaim Garansi'],
  },
  {
    title: 'Kebijakan',
    links: ['Syarat & Ketentuan', 'Kebijakan Privasi', 'Kebijakan Pengiriman', 'Kebijakan Garansi'],
  },
]

const contact = [
  { icon: Phone, text: '+62 21 5000 8888' },
  { icon: Mail, text: 'halo@geislerkaraoke.id' },
  { icon: MapPin, text: 'Jl. Audio Raya No. 88, Jakarta Pusat' },
  { icon: Clock, text: 'Senin–Sabtu, 09.00–18.00 WIB' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/60">
              Spesialis peralatan dan paket karaoke profesional untuk rumah dan
              bisnis di seluruh Indonesia. Produk resmi, bergaransi, dengan
              dukungan instalasi penuh.
            </p>
            <div className="mt-6 flex gap-3">
              {[AtSign, MessageCircle, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent"
                  aria-label="Media sosial"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3">
              {contact.map((c) => (
                <li key={c.text} className="flex items-start gap-2.5 text-sm text-white/60">
                  <c.icon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            {'\u00A9'} {new Date().getFullYear()} Geisler Karaoke. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>Metode pembayaran:</span>
            <div className="flex gap-1.5">
              {['VISA', 'MC', 'BCA', 'QRIS', 'OVO'].map((m) => (
                <span
                  key={m}
                  className="rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/70"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
