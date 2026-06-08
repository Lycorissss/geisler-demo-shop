'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  addItem: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  remove: (id: string) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  updateQty: (id: string, qty: number) => void
  clear: () => void
  count: number
  subtotal: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('gk-cart')
      if (raw) setItems(JSON.parse(raw))
    } catch {}
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) localStorage.setItem('gk-cart', JSON.stringify(items))
  }, [items, ready])

  const add: CartContextType['add'] = (item, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === item.id)
      if (found) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { ...item, qty }]
    })
  }
  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))
  const setQty = (id: string, qty: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)))
  const clear = () => setItems([])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        addItem: add,
        remove,
        removeItem: remove,
        setQty,
        updateQty: setQty,
        clear,
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
