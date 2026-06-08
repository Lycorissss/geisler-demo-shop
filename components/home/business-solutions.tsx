import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const solutions = [
  {
    title: 'Cafe & Restaurant',
    desc: 'Sistem audio latar dan live music yang menyatu dengan suasana tempat usaha Anda.',
    image: '/b2b-cafe.png',
  },
  {
    title: 'Private Karaoke Room',
    desc: 'Paket lengkap ruang KTV dengan akustik optimal dan kontrol mudah.',
    image: '/b2b-room.png',
  },
  {
    title: 'Event Organizer',
    desc: 'Peralatan kelas panggung untuk acara skala kecil hingga besar.',
    image: '/b2b-event.png',
  },
]

export function BusinessSolutions() {
  return (
    <section id="business" className="scroll-mt-20 bg-primary py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Solusi Bisnis (B2B)
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Dirancang untuk Kebutuhan Usaha Anda
            </h2>
            <p className="mt-4 text-pretty text-white/70">
              Tim kami membantu survey lokasi, perencanaan akustik, hingga
              instalasi dan perawatan berkala untuk bisnis Anda.
            </p>
          </div>
          <Link
            href="/business"
            className="shrink-0 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Pelajari Solusi B2B
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link
                href="/business"
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl"
              >
                <Image
                  src={s.image || '/placeholder.svg'}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
