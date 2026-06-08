export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  image: string
  badge?: string
  inStock: boolean
  short: string
}

export type Pkg = {
  id: string
  slug: string
  name: string
  segment: 'Rumahan' | 'Profesional' | 'Bisnis'
  price: number
  oldPrice?: number
  monthly: number
  image: string
  badge?: string
  includes: string[]
  rating: number
  reviews: number
}

export const categories = [
  { name: 'Paket Karaoke Lengkap', slug: 'paket', icon: 'package', image: '/package-home.png' },
  { name: 'Wireless Microphone', slug: 'microphone', icon: 'mic', image: '/product-mic.png' },
  { name: 'Speakers', slug: 'speaker', icon: 'speaker', image: '/product-speaker.png' },
  { name: 'Amplifiers', slug: 'amplifier', icon: 'amplifier', image: '/product-amplifier.png' },
  { name: 'Mixers', slug: 'mixer', icon: 'sliders', image: '/product-mixer.png' },
  { name: 'Audio Processors', slug: 'processor', icon: 'cpu', image: '/product-processor.png' },
  { name: 'Accessories', slug: 'accessories', icon: 'cable', image: '/product-accessory.png' },
] as const

export const brands = [
  'AudioPro', 'SonicWave', 'VocalMax', 'BassLine', 'ClearTone', 'StageOne', 'PureSound', 'Resonance',
]

export const trustItems = [
  { title: 'Produk Resmi', desc: 'Bergaransi distributor', icon: 'badge-check' },
  { title: 'Dukungan Garansi', desc: 'Klaim mudah & cepat', icon: 'shield-check' },
  { title: 'Pengiriman Cepat', desc: 'Ke seluruh Indonesia', icon: 'truck' },
  { title: 'Instalasi Profesional', desc: 'Tim teknisi tersertifikasi', icon: 'wrench' },
  { title: 'Konsultasi Teknis', desc: 'Gratis sebelum membeli', icon: 'headset' },
]

export const packages: Pkg[] = [
  {
    id: 'p1',
    slug: 'paket-rumahan-starter',
    name: 'Paket Karaoke Rumahan Starter',
    segment: 'Rumahan',
    price: 6500000,
    oldPrice: 7900000,
    monthly: 541000,
    image: '/package-home.png',
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 214,
    includes: ['2x Speaker Aktif 8"', '1x Amplifier 200W', '2x Wireless Microphone', '1x Mixer 4 Channel', 'Kabel & Instalasi'],
  },
  {
    id: 'p2',
    slug: 'paket-keluarga-premium',
    name: 'Paket Karaoke Keluarga Premium',
    segment: 'Rumahan',
    price: 12900000,
    oldPrice: 14500000,
    monthly: 1075000,
    image: '/package-home.png',
    badge: 'Populer',
    rating: 4.9,
    reviews: 156,
    includes: ['2x Speaker Aktif 12"', '1x Amplifier 400W', '4x Wireless Microphone', '1x Mixer 8 Channel', '1x Audio Processor', 'Instalasi Profesional'],
  },
  {
    id: 'p3',
    slug: 'paket-bisnis-profesional',
    name: 'Paket Karaoke Bisnis Profesional',
    segment: 'Profesional',
    price: 34500000,
    monthly: 2875000,
    image: '/package-pro.png',
    badge: 'B2B',
    rating: 5.0,
    reviews: 48,
    includes: ['4x Speaker PA 15"', '2x Power Amplifier', '6x Wireless Microphone', '1x Digital Mixer 16 Ch', '2x Audio Processor', 'Survey & Instalasi Lokasi'],
  },
]

export const products: Product[] = [
  { id: '1', slug: 'wireless-mic-vm-700', name: 'VocalMax VM-700 Wireless Microphone', brand: 'VocalMax', category: 'Wireless Microphone', price: 1850000, oldPrice: 2100000, rating: 4.8, reviews: 312, image: '/product-mic.png', badge: 'Best Seller', inStock: true, short: 'Microphone wireless dual channel dengan jangkauan 80 meter.' },
  { id: '2', slug: 'speaker-aktif-ap-12', name: 'AudioPro AP-12 Speaker Aktif', brand: 'AudioPro', category: 'Speakers', price: 4250000, rating: 4.7, reviews: 188, image: '/product-speaker.png', inStock: true, short: 'Speaker aktif 12 inci 400W untuk ruangan sedang hingga besar.' },
  { id: '3', slug: 'amplifier-bl-400', name: 'BassLine BL-400 Power Amplifier', brand: 'BassLine', category: 'Amplifiers', price: 3600000, oldPrice: 4100000, rating: 4.6, reviews: 142, image: '/product-amplifier.png', badge: 'Promo', inStock: true, short: 'Amplifier 2x400W stabil untuk performa karaoke maksimal.' },
  { id: '4', slug: 'mixer-st-08', name: 'StageOne ST-08 Mixer 8 Channel', brand: 'StageOne', category: 'Mixers', price: 2950000, rating: 4.7, reviews: 97, image: '/product-mixer.png', inStock: true, short: 'Mixer analog 8 channel dengan efek echo bawaan.' },
  { id: '5', slug: 'processor-ct-x1', name: 'ClearTone CT-X1 Audio Processor', brand: 'ClearTone', category: 'Audio Processors', price: 5400000, rating: 4.9, reviews: 64, image: '/product-processor.png', badge: 'Baru', inStock: true, short: 'Processor digital dengan feedback suppression & EQ presisi.' },
  { id: '6', slug: 'wireless-mic-sw-200', name: 'SonicWave SW-200 Wireless Microphone', brand: 'SonicWave', category: 'Wireless Microphone', price: 1250000, rating: 4.5, reviews: 256, image: '/product-mic.png', inStock: true, short: 'Microphone wireless terjangkau dengan kualitas suara jernih.' },
  { id: '7', slug: 'speaker-pa-pure-15', name: 'PureSound PS-15 Speaker PA', brand: 'PureSound', category: 'Speakers', price: 6800000, rating: 4.8, reviews: 73, image: '/product-speaker.png', badge: 'Best Seller', inStock: true, short: 'Speaker PA 15 inci 600W untuk venue dan acara besar.' },
  { id: '8', slug: 'mixer-digital-rs-16', name: 'Resonance RS-16 Digital Mixer', brand: 'Resonance', category: 'Mixers', price: 8900000, rating: 4.9, reviews: 41, image: '/product-mixer.png', inStock: false, short: 'Mixer digital 16 channel dengan kontrol via aplikasi.' },
  { id: '9', slug: 'amplifier-ap-800', name: 'AudioPro AP-800 Power Amplifier', brand: 'AudioPro', category: 'Amplifiers', price: 7200000, rating: 4.8, reviews: 58, image: '/product-amplifier.png', inStock: true, short: 'Amplifier kelas profesional 2x800W untuk instalasi permanen.' },
  { id: '10', slug: 'accessory-cable-kit', name: 'StageOne Cable & Stand Kit', brand: 'StageOne', category: 'Accessories', price: 650000, rating: 4.6, reviews: 134, image: '/product-accessory.png', inStock: true, short: 'Paket kabel berkualitas dan stand microphone profesional.' },
  { id: '11', slug: 'processor-pure-dx', name: 'PureSound DX Audio Processor', brand: 'PureSound', category: 'Audio Processors', price: 4100000, oldPrice: 4700000, rating: 4.7, reviews: 39, image: '/product-processor.png', badge: 'Promo', inStock: true, short: 'Processor serbaguna dengan preset karaoke instan.' },
  { id: '12', slug: 'wireless-mic-vm-900-pro', name: 'VocalMax VM-900 Pro Wireless', brand: 'VocalMax', category: 'Wireless Microphone', price: 2950000, rating: 5.0, reviews: 47, image: '/product-mic.png', badge: 'Baru', inStock: true, short: 'Microphone wireless flagship dengan true diversity receiver.' },
]

export const testimonials = [
  { name: 'Budi Santoso', role: 'Pemilik Rumah, Bandung', type: 'B2C', rating: 5, text: 'Paket rumahannya luar biasa. Instalasi rapi dan suaranya jernih. Keluarga jadi sering karaoke bareng tiap akhir pekan.' },
  { name: 'Sarah Wijaya', role: 'Manajer Kafe, Jakarta', type: 'B2B', rating: 5, text: 'Tim Geisler bantu survey lokasi dan rekomendasi sistem yang pas untuk kafe kami. Pengunjung makin betah.' },
  { name: 'Andi Pratama', role: 'Event Organizer, Surabaya', type: 'B2B', rating: 5, text: 'Sudah langganan untuk kebutuhan acara. Peralatan selalu prima dan dukungan teknisnya responsif.' },
  { name: 'Maya Lestari', role: 'Pemilik Rumah, Semarang', type: 'B2C', rating: 5, text: 'Konsultasi gratisnya sangat membantu. Saya yang awam jadi paham dan tidak salah beli.' },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Business Solutions', href: '/business' },
  { label: 'Contact', href: '/#contact' },
]

export function formatIDR(value: number) {
  return 'Rp' + value.toLocaleString('id-ID')
}
