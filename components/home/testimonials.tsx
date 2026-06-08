'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const go = (dir: number) =>
    setActive((a) => (a + dir + testimonials.length) % testimonials.length)

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Kata Pelanggan
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dipercaya Rumah Tangga & Bisnis
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-12">
            <Quote className="size-10 text-accent/30" />
            <p className="mt-4 text-pretty text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              {testimonials[active].text}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  {testimonials[active].name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[active].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-warning text-warning" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-6 bg-accent' : 'w-2 bg-border'
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              aria-label="Berikutnya"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
