import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Headset,
} from 'lucide-react'
import { trustItems } from '@/lib/data'

const icons = {
  'badge-check': BadgeCheck,
  'shield-check': ShieldCheck,
  truck: Truck,
  wrench: Wrench,
  headset: Headset,
} as const

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-px overflow-hidden md:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <li
                key={item.title}
                className="flex items-center gap-3 py-5 lg:justify-center"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
