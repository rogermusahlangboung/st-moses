import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InteriorPageHeader from '../components/InteriorPageHeader.jsx'
import { SERVICES } from '../data/services.js'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reducedMotion) return
      gsap.utils.toArray('.service-editorial-row').forEach((row) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: 'top 88%', once: true },
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        })
      })
    }, containerRef)

    const refresh = () => ScrollTrigger.refresh()
    requestAnimationFrame(refresh)
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <InteriorPageHeader label="OUR SERVICES" title="Complete care" accent="under one roof." />

      <section ref={containerRef} className="px-6 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl border-t border-black/10">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const reverse = index % 2 === 1

            return (
              <article key={service.slug} className="service-editorial-row border-b border-black/10 py-10 sm:py-14 lg:py-16">
                <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={`relative min-h-[280px] overflow-hidden bg-[#e8e8e8] sm:min-h-[380px] lg:col-span-6 lg:min-h-[520px] ${reverse ? 'lg:order-2' : ''}`}>
                    <img src={service.image} alt={service.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                      {String(index + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between py-2 lg:col-span-6 lg:py-8 ${reverse ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center border border-black/10 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">{service.category}</p>
                      <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">{service.summary}</p>
                    </div>

                    <div className="mt-10">
                      <ul className="border-y border-black/10">
                        {service.overviewBullets.map((bullet, bulletIndex) => (
                          <li key={bullet} className={`flex items-start gap-3 py-4 text-sm leading-6 text-muted ${bulletIndex > 0 ? 'border-t border-black/10' : ''}`}>
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/services/${service.slug}`}
                        aria-label={`Read more about ${service.title}`}
                        className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/15 px-7 text-sm font-medium text-ink outline-none transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                      >
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-black/10 pt-10 text-center">
          <Link to="/appointment" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark">
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
