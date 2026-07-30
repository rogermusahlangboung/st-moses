import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function Leadership() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <header className="border-b border-white/10 bg-primary text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="St Moses Hospital" className="h-10 w-auto sm:h-12" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white sm:text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-divider bg-surface px-6 py-12 sm:px-10 sm:py-16">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 sm:text-[11px]">LEADERSHIP</p>
          <div className="mt-5 max-w-4xl border-l-2 border-primary pl-5 sm:pl-7">
            <h1 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Rev. Roger Musah Langboung
            </h1>
            <p className="mt-3 text-sm italic leading-relaxed text-muted sm:text-base">
              Chief Executive Officer, St. Moses Community Hospital
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-divider bg-surface shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:sticky lg:top-24">
              <div className="aspect-[4/5] overflow-hidden bg-primary/5">
                <img
                  src="/leadership.jpg"
                  alt="Rev. Roger Musah Langboung"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="border-t border-divider p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">Chief Executive Officer</p>
                <p className="mt-3 font-sans text-xl font-semibold leading-snug text-ink">Rev. Roger Musah Langboung</p>
                <p className="mt-2 text-sm italic leading-relaxed text-muted">
                  St. Moses Community Hospital
                </p>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="mb-9 border-b border-divider pb-8">
              <p className="font-sans text-xl font-medium leading-8 text-ink sm:text-2xl sm:leading-9">
                For three decades, Rev. Roger Musah Langboung has steered St. Moses Community Hospital with a steady hand and an unwavering commitment to the wellbeing of the communities it serves. As Chief Executive Officer, he has guided the institution through sustained growth, always anchoring its direction in a simple conviction: that quality healthcare is a right, not a privilege, and that every patient who walks through the hospital's doors deserves compassion, dignity, and excellence in care.
              </p>
            </div>

            <div className="space-y-7 text-base leading-8 text-muted sm:text-[17px] sm:leading-9">
              <p>
                A reverend minister as well as a healthcare executive, Rev. Langboung brings a rare blend of pastoral compassion and administrative discipline to his leadership. He pursued his education in Toronto, Canada, an experience that shaped both his professional grounding and his broader worldview, before returning to devote his life's work to the hospital and the community around it.
              </p>

              <p>
                Under his leadership, St. Moses Community Hospital has grown into a trusted pillar of community health, known for its patient-centered culture and its dedication to service. Rev. Langboung's approach to leadership blends operational discipline with genuine empathy — he is as attentive to the experience of patients and families as he is to the strategic future of the institution.
              </p>

              <p>
                A firm believer in the power of accessible, community-rooted healthcare, Rev. Langboung continues to champion initiatives that strengthen the hospital's capacity, broaden its reach, and reinforce its mission of putting people first. His three decades at the helm reflect not only longevity, but a consistent legacy of faith, trust, service, and dedicated leadership.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-divider pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-muted">
                St. Moses Community Hospital remains committed to compassionate, accessible and patient-centred care.
              </p>
              <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:opacity-95">
                Contact St. Moses Hospital
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
