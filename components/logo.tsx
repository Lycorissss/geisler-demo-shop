import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="Geisler Karaoke beranda"
    >
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground',
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"
            fill="currentColor"
          />
          <path
            d="M6 11a6 6 0 0 0 12 0M12 17v4M8.5 21h7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-base font-bold tracking-tight',
            invert ? 'text-white' : 'text-foreground',
          )}
        >
          Geisler
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.2em]',
            invert ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Karaoke
        </span>
      </span>
    </Link>
  )
}
