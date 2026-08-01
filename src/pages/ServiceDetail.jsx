import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AlertTriangle, ArrowRight, ArrowUpRight, CheckCircle, Phone } from 'lucide-react'
import InteriorPageHeader from '../components/InteriorPageHeader.jsx'
import ServiceFaq from '../components/ServiceFaq.jsx'
import ServiceRelatedLinks from '../components/ServiceRelatedLinks.jsx'
import { getServiceBySlug } from '../data/services.js'

function ServiceNotFound() {
  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <InteriorPageHeader
        label="SERVICE NOT FOUND"
        title="We could not find"
        accent="that service."
        backTo="/services"
        backLabel="Back to services"
      />
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-4xl border-y border-black/10 py-14 text-center">
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted sm:text-lg">
            The service link may be outdated or incomplete. Browse the complete services directory or contact the hospital for guidance on the right department.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-white outline-none transition-all hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-black/15 px-8 text-sm font-medium text-ink outline-none transition-colors hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              Contact the hospital <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    if (!service) return undefined

    const previousTitle = document.title
    let description = document.querySelector('meta[name="description"]')
    const descriptionWasCreated = !description
    const previousDescription = description?.getAttribute('content') || ''

    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    const canonicalWasCreated = !canonical
    const previousCanonical = canonical?.getAttribute('href') || ''

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    document.title = service.seoTitle
    description.setAttribute('content', service.seoDescription)
    canonical.setAttribute('href', `${window.location.origin}/services/${service.slug}`)

    return () => {
      document.title = previousTitle

      if (descriptionWasCreated) description.remove()
      else description.setAttribute('content', previousDescription)

      if (canonicalWasCreated) canonical.remove()
      else canonical.setAttribute('href', previousCanonical)
    }
  }, [service])

  if (!service) return <ServiceNotFound />

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <InteriorPageHeader
        label={service.category.toUpperCase()}
        title={service.title}
        backTo="/services"
        backLabel="Back to services"
      />

      <section className="px-6 pt-8 sm:px-10 sm:pt-12">
        <div className="relative mx-auto aspect-[4/3] max-w-7xl overflow-hidden bg-[#e8e8e8] sm:aspect-[16/8] lg:aspect-[16/7]">
          <img
            src={service.image}
            alt={`${service.title} at St Moses Hospital`}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = '/logo.png'
              event.currentTarget.className = 'absolute inset-0 h-full w-full object-contain p-16 bg-primary'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white sm:bottom-8 sm:left-8">
            <span className="flex h-11 w-11 items-center justify-center border border-white/30 bg-black/20 backdrop-blur-md">
              <Icon className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">St Moses Hospital</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Service overview</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Clear information. Thoughtful care. Practical next steps.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl font-medium leading-9 text-ink sm:text-2xl sm:leading-10">{service.summary}</p>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-[17px] sm:leading-9">
              {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      {service.emergencyNotice && (
        <section className="bg-[#fff4f2] px-6 py-8 sm:px-10">
          <div className="mx-auto flex max-w-7xl items-start gap-4 border-y border-red-900/15 py-7 text-red-950">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0" strokeWidth={1.7} />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Urgent medical notice</p>
              <p className="mt-3 max-w-4xl text-base leading-8">{service.emergencyNotice}</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#f4f4f4] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Available support</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-5xl">What this service can include.</h2>
          </div>
          <div className="mt-12 grid border-t border-black/10 md:grid-cols-2">
            {service.servicesOffered.map((item, index) => (
              <div
                key={item.title}
                className={`py-7 md:px-8 ${index > 0 ? 'border-t border-black/10 md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index >= 2 ? 'md:border-t' : ''} md:border-black/10`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-xl font-medium text-ink sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-16 text-white sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">Who may benefit</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-5xl">Common reasons to seek this service.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              These examples are general information and do not diagnose a condition. A clinician will assess your individual symptoms and circumstances.
            </p>
          </div>
          <div className="border-t border-white/20 lg:col-span-7">
            {service.whoItMayHelp.map((item, index) => (
              <div key={item} className="flex gap-5 border-b border-white/20 py-5">
                <span className="text-xs font-medium text-white/40">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Your visit</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-5xl">What to expect.</h2>
          </div>
          <div className="mt-12 border-t border-black/10">
            {service.whatToExpect.map((step, index) => (
              <div key={step.title} className="grid gap-4 border-b border-black/10 py-7 md:grid-cols-12 md:gap-8">
                <div className="text-xs font-medium text-primary md:col-span-1">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-medium leading-7 text-ink md:col-span-4 sm:text-2xl">{step.title}</h3>
                <p className="text-sm leading-7 text-muted md:col-span-7 sm:text-base sm:leading-8">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Before you attend</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl">Preparation guidance.</h2>
            <div className="mt-9 border-t border-black/10">
              {service.preparation.map((item) => (
                <div key={item} className="flex gap-3 border-b border-black/10 py-5">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                  <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              Preparation varies by patient and procedure. Instructions from your clinician or the hospital take priority over general website guidance.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Why St Moses</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl">Care that stays connected.</h2>
            <div className="mt-9 border-t border-black/10">
              {service.whyChooseUs.map((point) => (
                <div key={point.title} className="border-b border-black/10 py-5">
                  <h3 className="text-lg font-medium text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted sm:text-base sm:leading-8">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Questions</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl">Frequently asked questions.</h2>
          </div>
          <div className="lg:col-span-8">
            <ServiceFaq items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Continue exploring</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Related services.</h2>
            </div>
            <Link to="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ServiceRelatedLinks service={service} />
        </div>
      </section>

      <section className="bg-deep px-6 py-16 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">Speak with our team</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-medium leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Get guidance on the right next step for your care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Book a consultation or call St. Moses Hospital to confirm availability, preparation instructions, and the department appropriate for your needs.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/appointment"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-9 text-sm font-medium text-ink outline-none transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-deep"
            >
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0243474002"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-9 text-sm font-medium text-white outline-none backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-deep"
            >
              <Phone className="h-4 w-4" /> 0243-474002
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
