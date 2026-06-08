import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileNav } from '@/components/mobile-nav'
import { ProductListing } from '@/components/product-listing'

export const metadata = {
  title: 'Semua Produk | Geisler Karaoke',
  description:
    'Jelajahi koleksi lengkap peralatan karaoke dan sound system profesional Geisler — speaker, amplifier, mixer, mikrofon, dan paket lengkap.',
}

function Listing({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  return <ProductListing initialCategory={searchParams.category} />
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <Suspense fallback={null}>
          <Listing searchParams={params} />
        </Suspense>
      </main>
      <SiteFooter />
      <MobileNav />
    </div>
  )
}
