import { brands } from '@/lib/data'

export function Brands() {
  const row = [...brands, ...brands]
  return (
    <section id="brands" className="scroll-mt-20 border-y border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Dipercaya oleh brand audio profesional ternama
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex w-max animate-[gk-marquee_28s_linear_infinite] items-center gap-12">
            {row.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-xl font-bold tracking-tight text-foreground/40 transition-colors hover:text-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
