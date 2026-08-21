import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { usePageSeo } from '../seo.js'

export default function Leadership() {
  usePageSeo('/leadership')

  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10">
          <Link to="/" aria-label="St Moses Hospital home">
            <img src="/logo.png" alt="St Moses Hospital" className="h-10 w-auto sm:h-12" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-black/55 transition-colors hover:text-black sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <section className="border-b border-black/10 px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Leadership</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="max-w-5xl font-sans text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-6xl lg:text-7xl">
                Rev. Roger Musah Langboung
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-1">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg">
                Chief Executive Officer, St. Moses Community Hospital
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative overflow-hidden bg-[#f2f2f2] lg:col-span-7">
            <img
              src="/leadership.jpg"
              alt="Rev. Roger Musah Langboung"
              className="block h-auto w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-6 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">Chief Executive Officer</p>
              <p className="mt-3 max-w-3xl text-2xl font-medium leading-tight sm:text-4xl">Rev. Roger Musah Langboung</p>
              <p className="mt-2 text-sm text-white/70 sm:text-base">St. Moses Community Hospital</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="border-t border-black/15 pt-7 text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-black sm:text-3xl sm:leading-[1.4]">
              For three decades, Rev. Roger Musah Langboung has steered St. Moses Community Hospital with a steady hand and an unwavering commitment to the wellbeing of the communities it serves. As Chief Executive Officer, he has guided the institution through sustained growth, always anchoring its direction in a simple conviction: that quality healthcare is a right, not a privilege, and that every patient who walks through the hospital's doors deserves compassion, dignity, and excellence in care.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="border-t border-black pt-5 lg:sticky lg:top-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">Leadership profile</p>
              <p className="mt-4 max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] text-black sm:text-3xl">
                Faith, Service and Disciplined Leadership.
              </p>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="grid gap-9 border-t border-black/10 pt-9 text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
              <p>
                A reverend minister as well as a healthcare executive, Rev. Langboung brings a rare blend of pastoral compassion and administrative discipline to his leadership. He pursued his education in Toronto, Canada, an experience that shaped both his professional grounding and his broader worldview, before returning to devote his life's work to the hospital and the community around it.
              </p>

              <p>
                Beyond hospital administration, Rev. Langboung is the Founder of St. Moses University College of Health — an extension of his vision to build not just a hospital, but a sustainable ecosystem for healthcare in Ghana. Through the University College, he is investing in the next generation of health professionals, ensuring that community-rooted, ethical, and competent care continues far beyond the walls of St. Moses.
              </p>

              <p>
                Under his leadership, St. Moses Community Hospital has grown into a trusted pillar of community health, known for its patient-centered culture and its dedication to service. Rev. Langboung's approach to leadership blends operational discipline with genuine empathy — he is as attentive to the experience of patients and families as he is to the strategic future of the institution.
              </p>

              <p>
                A firm believer in the power of accessible, community-rooted healthcare and education, Rev. Langboung continues to champion initiatives that strengthen capacity, broaden reach, and reinforce a single mission: putting people first. His three decades at the helm reflect not only longevity, but a consistent legacy of faith, trust, service, and dedicated leadership.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f4f4f4] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">St. Moses Community Hospital</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] text-black sm:text-5xl">
              Compassionate, accessible and patient-centred care.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-black px-8 text-sm font-medium text-white transition-all hover:bg-black/80 sm:w-auto sm:min-w-64"
          >
            Contact St. Moses Hospital
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
