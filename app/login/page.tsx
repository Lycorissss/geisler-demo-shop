'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [showPass, setShowPass] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push('/account')
  }

  return (
    <div className="flex min-h-screen flex-col bg-secondary md:flex-row">
      {/* Brand panel */}
      <div className="relative hidden bg-primary text-primary-foreground md:flex md:w-1/2 md:flex-col md:justify-between md:p-12">
        <Logo invert />
        <div>
          <h2 className="text-3xl font-bold leading-tight text-balance">
            Hidupkan setiap momen dengan suara terbaik.
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-primary-foreground/70">
            Bergabunglah dengan ribuan keluarga dan bisnis di Indonesia yang
            mempercayakan kebutuhan audio mereka kepada Geisler.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/50">
          &copy; {new Date().getFullYear()} Geisler Karaoke. Semua hak dilindungi.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-4 py-10 md:px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 md:hidden">
            <Logo />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h1 className="text-2xl font-bold">
              {mode === 'login' ? 'Masuk ke akun Anda' : 'Buat akun baru'}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {mode === 'login'
                ? 'Selamat datang kembali di Geisler Karaoke.'
                : 'Daftar untuk pengalaman belanja yang lebih cepat.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {mode === 'register' && (
                <InputField
                  icon={User}
                  label="Nama Lengkap"
                  placeholder="Nama Anda"
                />
              )}
              <InputField
                icon={Mail}
                label="Email"
                type="email"
                placeholder="email@contoh.com"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium">Kata Sandi</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-10 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    aria-label={showPass ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {mode === 'login' && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="h-4 w-4 rounded border-input accent-accent" />
                    Ingat saya
                  </label>
                  <button type="button" className="font-medium text-accent hover:underline">
                    Lupa sandi?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                {mode === 'login' ? 'Masuk' : 'Daftar'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {mode === 'login' ? 'Belum punya akun? ' : 'Sudah punya akun? '}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="font-semibold text-accent hover:underline"
              >
                {mode === 'login' ? 'Daftar sekarang' : 'Masuk di sini'}
              </button>
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              &larr; Kembali ke beranda
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function InputField({
  icon: Icon,
  label,
  type = 'text',
  placeholder,
}: {
  icon: React.ElementType
  label: string
  type?: string
  placeholder: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
    </div>
  )
}
