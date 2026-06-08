'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/data'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !transparent || scrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          solid
            ? 'border-b border-border bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={cn(
                'flex size-9 items-center justify-center rounded-lg transition-colors lg:hidden',
                solid ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10',
              )}
              aria-label="Buka menu"
            >
              <Menu className="size-5" />
            </button>
            <Logo invert={!solid} />
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  solid
                    ? 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    : 'text-white/80 hover:bg-white/10 hover:text-white',
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                'flex size-9 items-center justify-center rounded-lg transition-colors',
                solid ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10',
              )}
              aria-label="Cari produk"
            >
              <Search className="size-5" />
            </button>
            <Link
              href="/login"
              className={cn(
                'hidden size-9 items-center justify-center rounded-lg transition-colors sm:flex',
                solid ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10',
              )}
              aria-label="Akun"
            >
              <User className="size-5" />
            </Link>
            <Link
              href="/cart"
              className={cn(
                'relative flex size-9 items-center justify-center rounded-lg transition-colors',
                solid ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10',
              )}
              aria-label={`Keranjang, ${count} item`}
            >
              <ShoppingCart className="size-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex size-4.5 min-w-4.5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border bg-background px-4 py-3 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-xl border border-border bg-muted px-3">
              <Search className="size-4 text-muted-foreground" />
              <input
                autoFocus
                type="search"
                placeholder="Cari microphone, speaker, paket karaoke..."
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed header on non-transparent pages */}
      {!transparent && <div className="h-16" aria-hidden="true" />}

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300',
            menuOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-muted"
              aria-label="Tutup menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border p-4">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
            >
              Masuk / Daftar
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
