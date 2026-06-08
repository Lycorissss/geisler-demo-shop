'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, Headset, ShoppingCart, User } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

const items = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Produk', href: '/products', icon: LayoutGrid },
  { label: 'Konsultasi', href: '/business', icon: Headset },
  { label: 'Keranjang', href: '/cart', icon: ShoppingCart, isCart: true },
  { label: 'Akun', href: '/login', icon: User },
]

export function MobileNav() {
  const pathname = usePathname()
  const { count } = useCart()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      aria-label="Navigasi bawah"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-1 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
        {items.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <li key={item.label} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors',
                  active ? 'text-accent' : 'text-muted-foreground',
                )}
              >
                <span className="relative">
                  <Icon className="size-5" />
                  {item.isCart && count > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex size-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-accent-foreground">
                      {count}
                    </span>
                  )}
                </span>
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
