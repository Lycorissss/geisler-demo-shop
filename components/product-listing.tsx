'use client'

import { useMemo, useState } from 'react'
import { SlidersHorizontal, ArrowUpDown, X, Star, ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { products, categories, brands, formatIDR } from '@/lib/data'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'popular', label: 'Paling Populer' },
  { value: 'price-asc', label: 'Harga Terendah' },
  { value: 'price-desc', label: 'Harga Tertinggi' },
  { value: 'rating', label: 'Rating Tertinggi' },
]

const priceRanges = [
  { label: 'Di bawah Rp1jt', min: 0, max: 1000000 },
  { label: 'Rp1jt – Rp3jt', min: 1000000, max: 3000000 },
  { label: 'Rp3jt – Rp6jt', min: 3000000, max: 6000000 },
  { label: 'Di atas Rp6jt', min: 6000000, max: Infinity },
]

export function ProductListing({ initialCategory }: { initialCategory?: string }) {
  const [selectedCats, setSelectedCats] = useState<string[]>(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceIdx, setPriceIdx] = useState<number | null>(null)
  const [minRating, setMinRating] = useState(0)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState('popular')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const toggle = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false
      if (priceIdx !== null) {
        const r = priceRanges[priceIdx]
        if (p.price < r.min || p.price > r.max) return false
      }
      if (minRating && p.rating < minRating) return false
      if (inStockOnly && !p.inStock) return false
      return true
    })
    list = [...list].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return b.reviews - a.reviews
    })
    return list
  }, [selectedCats, selectedBrands, priceIdx, minRating, inStockOnly, sort])

  const activeCount =
    selectedCats.length +
    selectedBrands.length +
    (priceIdx !== null ? 1 : 0) +
    (minRating ? 1 : 0) +
    (inStockOnly ? 1 : 0)

  const clearAll = () => {
    setSelectedCats([])
    setSelectedBrands([])
    setPriceIdx(null)
    setMinRating(0)
    setInStockOnly(false)
  }

  const Filters = (
    <div className="space-y-7">
      <FilterGroup title="Kategori">
        {categories
          .filter((c) => c.slug !== 'paket')
          .map((c) => (
            <Checkbox
              key={c.name}
              checked={selectedCats.includes(c.name)}
              onChange={() => toggle(selectedCats, setSelectedCats, c.name)}
              label={c.name}
            />
          ))}
      </FilterGroup>

      <FilterGroup title="Brand">
        {brands.map((b) => (
          <Checkbox
            key={b}
            checked={selectedBrands.includes(b)}
            onChange={() => toggle(selectedBrands, setSelectedBrands, b)}
            label={b}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Harga">
        {priceRanges.map((r, i) => (
          <Radio
            key={r.label}
            checked={priceIdx === i}
            onChange={() => setPriceIdx(priceIdx === i ? null : i)}
            label={r.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Rating Minimum">
        {[4, 4.5].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setMinRating(minRating === r ? 0 : r)}
            className={cn(
              'flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors',
              minRating === r
                ? 'border-accent bg-accent/5 text-foreground'
                : 'border-border text-muted-foreground hover:bg-muted',
            )}
          >
            <Star className="size-4 fill-warning text-warning" />
            {r} ke atas
          </button>
        ))}
      </FilterGroup>

      <FilterGroup title="Ketersediaan">
        <Checkbox
          checked={inStockOnly}
          onChange={() => setInStockOnly((v) => !v)}
          label="Hanya yang tersedia"
        />
      </FilterGroup>
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Semua Produk
        </h1>
        <p className="text-sm text-muted-foreground">
          {filtered.length} produk ditemukan
        </p>
      </div>

      <div className="mt-6 flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-20">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Filter</span>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  Reset ({activeCount})
                </button>
              )}
            </div>
            {Filters}
          </div>
        </aside>

        <div className="flex-1">
          {/* Sort - desktop */}
          <div className="mb-5 hidden items-center justify-end lg:flex">
            <SortSelect sort={sort} setSort={setSort} open={sortOpen} setOpen={setSortOpen} />
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="font-semibold text-foreground">Tidak ada produk cocok</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coba ubah atau reset filter Anda.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile sticky buttons */}
      <div className="fixed inset-x-0 bottom-16 z-40 flex gap-2 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-semibold text-foreground"
        >
          <SlidersHorizontal className="size-4" />
          Filter
          {activeCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
              {activeCount}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setSortOpen((v) => !v)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-semibold text-foreground"
        >
          <ArrowUpDown className="size-4" />
          Urutkan
        </button>
      </div>

      {/* Mobile sort sheet */}
      {sortOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setSortOpen(false)}>
          <div className="absolute inset-0 bg-primary/40" />
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-background p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-3 text-sm font-semibold text-foreground">Urutkan</p>
            {sortOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  setSort(o.value)
                  setSortOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm',
                  sort === o.value ? 'bg-accent/10 font-semibold text-accent' : 'text-foreground',
                )}
              >
                {o.label}
                {sort === o.value && <span className="size-2 rounded-full bg-accent" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-primary/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-semibold text-foreground">Filter</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex size-9 items-center justify-center rounded-lg hover:bg-muted"
                aria-label="Tutup filter"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">{Filters}</div>
            <div className="flex gap-2 border-t border-border p-4">
              <button
                type="button"
                onClick={clearAll}
                className="flex-1 rounded-xl border border-border py-3 text-sm font-semibold text-foreground"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex-[2] rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
              >
                Lihat {filtered.length} Produk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SortSelect({
  sort,
  setSort,
  open,
  setOpen,
}: {
  sort: string
  setSort: (v: string) => void
  open: boolean
  setOpen: (v: boolean) => void
}) {
  const current = sortOptions.find((o) => o.value === sort)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
      >
        <ArrowUpDown className="size-4" />
        {current?.label}
        <ChevronDown className="size-4" />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          {sortOptions.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => {
                setSort(o.value)
                setOpen(false)
              }}
              className={cn(
                'block w-full px-4 py-2.5 text-left text-sm hover:bg-muted',
                sort === o.value ? 'font-semibold text-accent' : 'text-foreground',
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: () => void
  label: string
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
      <span
        className={cn(
          'flex size-4.5 items-center justify-center rounded border transition-colors',
          checked ? 'border-accent bg-accent text-accent-foreground' : 'border-border',
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="size-3" fill="none">
            <path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="hover:text-foreground">{label}</span>
    </label>
  )
}

function Radio({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: () => void
  label: string
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
      <span
        className={cn(
          'flex size-4.5 items-center justify-center rounded-full border transition-colors',
          checked ? 'border-accent' : 'border-border',
        )}
      >
        {checked && <span className="size-2.5 rounded-full bg-accent" />}
      </span>
      <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
      <span className="hover:text-foreground">{label}</span>
    </label>
  )
}
