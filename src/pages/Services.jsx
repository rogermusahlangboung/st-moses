import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Stethoscope, FlaskConical, HeartPulse, Scissors, Radio, Smile, Pill, Eye, Ambulance, Users, Baby, ScanLine, UserCheck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ALL_SERVICES = [
  { icon: Stethoscope, title: 'Out-Patient Department (OPD)', text: 'Comprehensive outpatient care with expert physicians for diagnosis, treatment, and routine medical consultations.', image: '/opd.jpg' },
  { icon: FlaskConical, title: 'Laboratory Services', text: 'Full-service diagnostic laboratory with modern equipment for blood tests, urine analysis, and clinical pathology.', image: '/lab.jpg' },
  { icon: HeartPulse, title: 'Antenatal, Delivery & Postnatal Services', text: 'Complete maternal care from pregnancy through delivery and postpartum support in a safe, nurturing environment.', image: '/antenatal.jpg' },
  { icon: Scissors, title: 'Surgical Operations', text: 'State-of-the-art surgical procedures performed by experienced surgeons in sterile, modern operating theatres.', image: '/surgical.jpg' },
  { icon: Radio, title: 'Ultrasound Services', text: 'Advanced diagnostic ultrasound imaging for abdominal, obstetric, gynecological, and soft tissue examinations.', image: '/ultrasound.jpg' },
  { icon: UserCheck, title: 'Gynaecological Clinic', text: 'Specialized women\'s health services including routine exams, screenings, and treatment of gynecological conditions.', image: '/gynaecology.jpg' },
  { icon: Smile, title: 'Dental Clinic', text: 'Full-service dental care including cleanings, restorations, extractions, and oral health education.', image: '/dental.avif' },
  { icon: Pill, title: 'Pharmacy', text: 'Well-stocked pharmacy providing prescribed medications, over-the-counter drugs, and professional pharmaceutical advice.', image: '/pharmacy.jpg' },
  { icon: ScanLine, title: 'X-Ray Unit', text: 'Digital X-ray imaging for accurate diagnosis of fractures, chest conditions, and other internal structures.', image: '/xray.jpg' },
  { icon: Eye, title: 'Eye Clinic', text: 'Complete vision care including eye exams, refraction, treatment of eye diseases, and optical services.', image: '/eye.jpg' },
  { icon: Users, title: 'Family Planning', text: 'Confidential family planning services including counseling, contraception, and reproductive health education.', image: '/family-planning.webp' },
  { icon: ScanLine, title: 'CT Scan', text: 'Computed tomography imaging for detailed cross-sectional views of the body for precise diagnosis.', image: '/ct-scan.jpg' },
  { icon: Baby, title: 'Fertility Clinic', text: 'Specialized fertility assessments, treatments, and support for individuals and couples on their family-building journey.', image: '/fertility.jpg' },
  { icon: Ambulance, title: 'Emergency Response', text: '24/7 emergency medical services with rapid response, triage, stabilization, and critical care when every minute counts.', image: '/emergency.png' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.svc-sticky-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.fromTo(card,
          { filter: 'blur(0px) saturate(1)', opacity: 1, scale: 1 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top top+=80',
              endTrigger: cards[cards.length - 1],
              end: 'top top+=100',
              scrub: 0.5,
            },
            filter: 'blur(6px) saturate(0.7)',
            opacity: 0.5,
            scale: 0.92,
            ease: 'none',
          }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-4 sm:pb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back
        </Link>

        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Our Services</span>
          <h1 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-tight max-w-3xl">
            Complete care
            <span className="block text-primary">under one roof.</span>
          </h1>
        </div>
      </div>

      <section ref={containerRef} className="relative px-2 sm:px-6 py-4 sm:py-8">
        <div className="space-y-6 sm:space-y-8 pb-24 sm:pb-32">
          {ALL_SERVICES.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <article
                key={idx}
                className="svc-sticky-card sticky top-14 sm:top-20 lg:top-28 mx-auto max-w-6xl bg-surface border border-divider rounded-2xl overflow-hidden shadow-sm"
                style={{ willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="grid lg:grid-cols-5 gap-0 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[65vh]">
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-14 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        Service {String(idx + 1).padStart(2, '0')} of {String(ALL_SERVICES.length).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                        St Moses
                      </span>
                    </div>

                    <div className="my-6 sm:my-10">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                        <Icon className="h-5 w-5 sm:h-5 sm:w-5 text-primary" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-sans font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink leading-[1.02] tracking-tight">
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                      {svc.text}
                    </p>
                  </div>

                  <div className="lg:col-span-2 relative overflow-hidden min-h-[180px] sm:min-h-[220px] lg:min-h-full bg-primary">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'brightness(0.7)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-deep/10" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full pl-2.5 pr-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 text-center pb-16">
          <Link
            to="/appointment"
            className="btn-primary bg-primary text-white hover:bg-primary-dark text-sm px-8 py-4"
          >
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
