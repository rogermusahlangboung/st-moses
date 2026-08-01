import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Stethoscope, FlaskConical, HeartPulse, Scissors, Radio, Smile, Pill, Eye, Ambulance, Users, Baby, ScanLine, UserCheck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InteriorPageHeader from '../components/InteriorPageHeader.jsx'

gsap.registerPlugin(ScrollTrigger)

const ALL_SERVICES = [
  { icon: Stethoscope, title: 'Out-Patient Department (OPD)', text: 'Comprehensive outpatient care with expert physicians for diagnosis, treatment, and routine medical consultations.', image: '/opd.jpg', bullets: ['Routine check-ups and chronic disease management', 'Health screenings and vaccinations', 'Referrals to specialist departments as needed'] },
  { icon: FlaskConical, title: 'Laboratory Services', text: 'Full-service diagnostic laboratory with modern equipment for blood tests, urine analysis, and clinical pathology.', image: '/lab.jpg', bullets: ['Clinical chemistry and hematology panels', 'Microbiology and parasitology testing', 'Rapid test results with digital reporting'] },
  { icon: HeartPulse, title: 'Antenatal, Delivery & Postnatal Services', text: 'Complete maternal care from pregnancy through delivery and postpartum support in a safe, nurturing environment.', image: '/antenatal.jpg', bullets: ['Regular prenatal check-ups and ultrasound monitoring', 'Skilled delivery attendance and emergency obstetric care', 'Newborn care, immunization, and breastfeeding support'] },
  { icon: Scissors, title: 'Surgical Operations', text: 'State-of-the-art surgical procedures performed by experienced surgeons in sterile, modern operating theatres.', image: '/surgical.jpg', bullets: ['General and minor surgical procedures', 'Pre-operative assessment and post-operative care', 'Sterile theatre environment with modern equipment'] },
  { icon: Radio, title: 'Ultrasound Services', text: 'Advanced diagnostic ultrasound imaging for abdominal, obstetric, gynecological, and soft tissue examinations.', image: '/ultrasound.jpg', bullets: ['Obstetric scans for pregnancy monitoring', 'Abdominal and pelvic ultrasound imaging', 'Soft tissue and vascular assessments'] },
  { icon: UserCheck, title: 'Gynaecological Clinic', text: 'Specialized women\'s health services including routine exams, screenings, and treatment of gynecological conditions.', image: '/gynaecology.jpg', bullets: ['Well-woman exams and cervical cancer screening', 'Menstrual disorder evaluation and treatment', 'Menopause management and counseling'] },
  { icon: Smile, title: 'Dental Clinic', text: 'Full-service dental care including cleanings, restorations, extractions, and oral health education.', image: '/dental.avif', bullets: ['Routine dental cleanings and examinations', 'Fillings, extractions, and restorations', 'Oral health education and preventive care'] },
  { icon: Pill, title: 'Pharmacy', text: 'Well-stocked pharmacy providing prescribed medications, over-the-counter drugs, and professional pharmaceutical advice.', image: '/pharmacy.jpg', bullets: ['Wide range of prescription and OTC medications', 'Professional medication counseling', 'Reliable supply chain with quality-assured products'] },
  { icon: ScanLine, title: 'X-Ray Unit', text: 'Digital X-ray imaging for accurate diagnosis of fractures, chest conditions, and other internal structures.', image: '/xray.jpg', bullets: ['Chest and skeletal X-ray imaging', 'Abdominal and sinus X-ray examinations', 'Digital results with quick turnaround'] },
  { icon: Eye, title: 'Eye Clinic', text: 'Complete vision care including eye exams, refraction, treatment of eye diseases, and optical services.', image: '/eye.jpg', bullets: ['Comprehensive eye examinations and refraction', 'Glaucoma and cataract screening', 'Treatment of eye infections and injuries'] },
  { icon: Users, title: 'Family Planning', text: 'Confidential family planning services including counseling, contraception, and reproductive health education.', image: '/family-planning.webp', bullets: ['Contraceptive counseling and provision', 'Fertility awareness and reproductive health education', 'Confidential and non-judgmental consultations'] },
  { icon: ScanLine, title: 'CT Scan', text: 'Computed tomography imaging for detailed cross-sectional views of the body for precise diagnosis.', image: '/ct-scan.jpg', bullets: ['Head, chest, abdominal and pelvic CT scans', 'Contrast-enhanced imaging when clinically indicated', 'Advanced multi-slice scanner for detailed results'] },
  { icon: Baby, title: 'Fertility Clinic', text: 'Specialized fertility assessments, treatments, and support for individuals and couples on their family-building journey.', image: '/fertility.jpg', bullets: ['Fertility assessment and diagnostic testing', 'Ovulation monitoring and cycle tracking', 'Counselling and treatment planning'] },
  { icon: HeartPulse, title: 'Dietitian and Dietetic', text: 'Professional nutrition assessment, dietary counselling, and personalised meal planning to support recovery, disease management, and long-term wellbeing.', image: '/dietician.jpg', bullets: ['Individual nutrition assessment and dietary counselling', 'Personalised meal plans for medical and wellness goals', 'Nutrition support for diabetes, hypertension, weight management, and recovery'] },
  { icon: Ambulance, title: 'Emergency Response', text: '24/7 emergency medical services with rapid response, triage, stabilization, and critical care when every minute counts.', image: '/emergency.png', bullets: ['24-hour emergency reception and triage', 'Accident and injury management', 'Stabilization and referral coordination'] },
]

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
          {ALL_SERVICES.map((service, index) => {
            const Icon = service.icon
            const reverse = index % 2 === 1
            return (
              <article key={service.title} className="service-editorial-row border-b border-black/10 py-10 sm:py-14 lg:py-16">
                <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={`relative min-h-[280px] overflow-hidden bg-[#e8e8e8] sm:min-h-[380px] lg:col-span-6 lg:min-h-[520px] ${reverse ? 'lg:order-2' : ''}`}>
                    <img src={service.image} alt={service.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                      {String(index + 1).padStart(2, '0')} / {String(ALL_SERVICES.length).padStart(2, '0')}
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between py-2 lg:col-span-6 lg:py-8 ${reverse ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center border border-black/10 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <h2 className="mt-7 max-w-2xl text-3xl font-medium leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">{service.text}</p>
                    </div>

                    <ul className="mt-10 border-y border-black/10">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bullet} className={`flex items-start gap-3 py-4 text-sm leading-6 text-muted ${bulletIndex > 0 ? 'border-t border-black/10' : ''}`}>
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
