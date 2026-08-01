import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function InteriorPageHeader({
  label,
  title,
  accent,
  backTo = '/',
  backLabel = 'Back to home',
}) {
  return (
    <>
      <header className="border-b border-white/10 bg-primary text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10">
          <Link to="/" className="flex items-center gap-3" aria-label="St Moses Hospital home">
            <img src="/logo.png" alt="St Moses Hospital" className="h-10 w-auto sm:h-12" />
          </Link>
          <Link
            to={backTo}
            className="inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-divider bg-surface px-6 py-12 sm:px-10 sm:py-16">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 sm:text-[11px]">{label}</p>
          <div className="mt-5 max-w-5xl border-l-2 border-primary pl-5 sm:pl-7">
            <h1 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {title} {accent && <span className="text-primary">{accent}</span>}
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
