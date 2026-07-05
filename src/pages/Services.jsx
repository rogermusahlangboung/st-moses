import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Stethoscope, FlaskConical, HeartPulse, Scissors, Radio, Smile, Pill, Eye, Ambulance, Users, Baby, ScanLine, UserCheck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ALL_SERVICES = [
  { icon: Stethoscope, title: 'Out-Patient Department (OPD)', text: 'Comprehensive outpatient care with expert physicians for diagnosis, treatment, and routine medical consultations.', image: 'https://images.pexels.com/photos/5452298/pexels-photo-5452298.jpeg?w=1200' },
  { icon: FlaskConical, title: 'Laboratory Services', text: 'Full-service diagnostic laboratory with modern equipment for blood tests, urine analysis, and clinical pathology.', image: 'https://images.pexels.com/photos/5452224/pexels-photo-5452224.jpeg?w=1200' },
  { icon: HeartPulse, title: 'Antenatal, Delivery & Postnatal Services', text: 'Complete maternal care from pregnancy through delivery and postpartum support in a safe, nurturing environment.', image: 'https://images.pexels.com/photos/7578811/pexels-photo-7578811.jpeg?w=1200' },
  { icon: Scissors, title: 'Surgical Operations', text: 'State-of-the-art surgical procedures performed by experienced surgeons in sterile, modern operating theatres.', image: 'https://images.pexels.com/photos/5452224/pexels-photo-5452224.jpeg?w=1200' },
  { icon: Radio, title: 'Ultrasound Services', text: 'Advanced diagnostic ultrasound imaging for abdominal, obstetric, gynecological, and soft tissue examinations.', image: 'https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?w=1200' },
  { icon: UserCheck, title: 'Gynaecological Clinic', text: 'Specialized women\'s health services including routine exams, screenings, and treatment of gynecological conditions.', image: 'https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?w=1200' },
  { icon: Smile, title: 'Dental Clinic', text: 'Full-service dental care including cleanings, restorations, extractions, and oral health education.', image: 'https://images.pexels.com/photos/5452298/pexels-photo-5452298.jpeg?w=1200' },
  { icon: Pill, title: 'Pharmacy', text: 'Well-stocked pharmacy providing prescribed medications, over-the-counter drugs, and professional pharmaceutical advice.', image: 'https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?w=1200' },
  { icon: ScanLine, title: 'X-Ray Unit', text: 'Digital X-ray imaging for accurate diagnosis of fractures, chest conditions, and other internal structures.', image: 'https://images.pexels.com/photos/5452224/pexels-photo-5452224.jpeg?w=1200' },
  { icon: Eye, title: 'Eye Clinic', text: 'Complete vision care including eye exams, refraction, treatment of eye diseases, and optical services.', image: 'https://images.pexels.com/photos/19963167/pexels-photo-19963167.jpeg?w=1200' },
  { icon: Users, title: 'Family Planning', text: 'Confidential family planning services including counseling, contraception, and reproductive health education.', image: 'https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?w=1200' },
  { icon: ScanLine, title: 'CT Scan', text: 'Computed tomography imaging for detailed cross-sectional views of the body for precise diagnosis.', image: 'https://images.pexels.com/photos/5452298/pexels-photo-5452298.jpeg?w=1200' },
  { icon: Baby, title: 'Fertility Clinic', text: 'Specialized fertility assessments, treatments, and support for individuals and couples on their family-building journey.', image: 'https://images.pexels.com/photos/7578811/pexels-photo-7578811.jpeg?w=1200' },
  { icon: Ambulance, title: 'Emergency Response', text: '24/7 emergency medical services with rapid response, triage, stabilization, and critical care when every minute counts.', image: 'https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?w=1200' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.svc-sticky-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-10 lift-on-hover group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back to Home
        </Link>

        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Our Services</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
            Complete care,
            <span className="block font-serif italic font-medium text-primary-dark">under one roof.</span>
          </h1>
        </div>
      </div>

      <section ref={containerRef} className="relative px-4 sm:px-6 py-8">
        <div className="space-y-8 pb-32">
          {ALL_SERVICES.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <article
                key={idx}
                className="svc-sticky-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
              >
                <div className="grid lg:grid-cols-5 gap-0 min-h-[55vh] lg:min-h-[65vh]">
                  <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                        Service {String(idx + 1).padStart(2, '0')} of {String(ALL_SERVICES.length).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                        St Moses Hospital
                      </span>
                    </div>

                    <div className="my-10">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                      {svc.text}
                    </p>
                  </div>

                  <div className="lg:col-span-2 relative overflow-hidden min-h-[250px] lg:min-h-full bg-deep">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                    <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                      {svc.title}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 text-center pb-16">
          <Link
            to="/#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-primary/30"
          >
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
