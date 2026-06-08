import { SiteHeader } from '@/components/site-header'
import { MobileNav } from '@/components/mobile-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { Discovery } from '@/components/home/discovery'
import { FeaturedPackages } from '@/components/home/featured-packages'
import { BusinessSolutions } from '@/components/home/business-solutions'
import { ExperienceTimeline } from '@/components/home/experience-timeline'
import { BestSellers } from '@/components/home/best-sellers'
import { Promotions } from '@/components/home/promotions'
import { Brands } from '@/components/home/brands'
import { Testimonials } from '@/components/home/testimonials'
import { ConsultationCta } from '@/components/home/consultation-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader transparent />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <TrustBar />
        <Discovery />
        <FeaturedPackages />
        <BusinessSolutions />
        <ExperienceTimeline />
        <BestSellers />
        <Promotions />
        <Brands />
        <Testimonials />
        <ConsultationCta />
      </main>
      <SiteFooter />
      <MobileNav />
    </>
  )
}
