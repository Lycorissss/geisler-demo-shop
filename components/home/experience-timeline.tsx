import { PackageSearch, Truck, Wrench, Mic } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: PackageSearch,
    title: 'Pilih Paket',
    desc: 'Tentukan paket atau peralatan sesuai kebutuhan dan anggaran Anda.',
  },
  {
    icon: Truck,
    title: 'Pengiriman',
    desc: 'Produk dikirim aman dan cepat ke seluruh Indonesia.',
  },
  {
    icon: Wrench,
    title: 'Instalasi',
    desc: 'Teknisi tersertifikasi memasang dan menyetel sistem Anda.',
  },
  {
    icon: Mic,
    title: 'Siap Bernyanyi',
    desc: 'Nikmati pengalaman karaoke berkualitas studio di tempat Anda.',
  },
]

export function ExperienceTimeline() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Cara Kerja
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dari Pemesanan Hingga Bernyanyi
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Horizontal line for desktop */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {/* Vertical line for mobile */}
          <div
            className="absolute bottom-10 left-[27px] top-7 w-px bg-border lg:hidden"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 lg:gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <li className="relative flex flex-row items-start gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-0">
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <step.icon className="size-6" />
                    <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm">
                      {i + 1}
                    </span>
                  </span>
                  <div className="pt-2 lg:pt-0">
                    <h3 className="text-lg font-bold text-foreground lg:mt-5">{step.title}</h3>
                    <p className="mt-2 text-pretty text-sm text-muted-foreground lg:max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
