import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function Leadership() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <section className="relative overflow-hidden bg-primary px-6 pb-16 pt-28 text-white sm:px-10 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/10" />
        <div className="relative mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">LEADERSHIP</p>
          <h1 className="mt-4 max-w-4xl font-sans text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Rev. Roger Musah Langboung
          </h1>
          <p className="mt-5 max-w-2xl text-base italic text-white/65 sm:text-lg">
            Chief Executive Officer, St. Moses Community Hospital
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-divider bg-surface shadow-sm">
              <div className="aspect-[4/5] overflow-hidden bg-primary/5">
                <img
                  src="/leadership.jpg"
                  alt="Rev. Roger Musah Langboung"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-divider p-6 sm:p-7">
                <p className="font-sans text-xl font-semibold text-ink">Rev. Roger Musah Langboung</p>
                <p className="mt-2 text-sm italic leading-relaxed text-muted">
                  Chief Executive Officer, St. Moses Community Hospital
                </p>
              </div>
            </div>
          </div>

          <article className="lg:col-span-7">
            <div className="space-y-7 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>
                For three decades, Rev. Roger Musah Langboung has steered St. Moses Community Hospital with a steady hand and an unwavering commitment to the wellbeing of the communities it serves. As Chief Executive Officer, he has guided the institution through sustained growth, always anchoring its direction in a simple conviction: that quality healthcare is a right, not a privilege, and that every patient who walks through the hospital's doors deserves compassion, dignity, and excellence in care.
              </p>

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

            <div className="mt-12 border-t border-divider pt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
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
