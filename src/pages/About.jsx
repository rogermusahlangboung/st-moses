import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, Clock, Stethoscope, Activity } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InteriorPageHeader from '../components/InteriorPageHeader.jsx'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  { Icon: Stethoscope, title: 'Expert Physicians', text: 'Our team of experienced doctors provides thorough diagnosis and personalized care for every patient.' },
  { Icon: Activity, title: 'Modern Diagnostics', text: 'State-of-the-art laboratory, ultrasound, X-ray, and CT scan equipment for accurate diagnosis.' },
  { Icon: Clock, title: '24/7 Availability', text: 'Round-the-clock emergency services and extended hours for outpatient consultations.' },
]

const PILLARS = [
  { target: 15, suffix: '+', label: 'Years of service', desc: 'A decade and a half of compassionate healthcare in the Pokuasi community.' },
  { target: 24, suffix: '/7', label: 'Emergency care', desc: 'Round-the-clock emergency services. Our doors are always open.' },
  { target: 100, suffix: '%', label: 'Dedicated to you', desc: 'Fully licensed and certified. We meet the highest standards of care.' },
]

const BADGES = [
  { Icon: ShieldCheck, title: 'Licensed & Certified', text: 'Fully licensed private healthcare facility meeting all regulatory standards.' },
  { Icon: Award, title: '15+ Years of Service', text: 'Over 15 years serving the Pokuasi community with quality healthcare.' },
  { Icon: Clock, title: '24/7 Patient Care', text: 'Emergency services available around the clock, every day of the year.' },
]

const VALUES = [
  { title: 'Dignity & Reverence', text: 'Safeguarded by recognizing every life as a gift from God, so each individual is inherently valued.' },
  { title: 'Trust', text: 'Honest and open communication with patients and among staff.' },
  { title: 'Cooperation', text: 'Between patients and staff in order to realize our motto: "Quality Healthcare, Our Passion!!"' },
  { title: 'Integrity', text: 'Honesty, fairness and self-scrutiny in all our endeavours as a means to assure confidentiality and privacy.' },
  { title: 'Heritage', text: 'Inspired by the leadership attributes of Moses, we will lead the community to a quality healthy lifestyle.' },
]

function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(target * eased))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(target)
          }
          requestAnimationFrame(animate)
        }
      })
    }, { threshold: 0.35 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

export default function About() {
  const featuresRef = useRef(null)
  const pillarsRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from('.about-fade', {
        scrollTrigger: { trigger: featuresRef.current, start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
      })
    }, featuresRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const el = pillarsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <InteriorPageHeader label="ABOUT ST MOSES" title="Quality healthcare for" accent="everyone." />

      <section className="border-b border-black/10 px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Our Story</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Serving Pokuasi with compassion since 2009.
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-muted lg:col-span-7 lg:pt-10 sm:text-lg sm:leading-9">
            <p>
              St Moses Hospital was founded on a simple belief: that everyone deserves access to quality healthcare regardless of their circumstances. Located off the Nsawam-Accra Road opposite Fraga Oil in Pokuasi, we have grown from a small clinic into a fully licensed private hospital serving thousands of patients each year.
            </p>
            <p>
              Over the past 15 years, we have built a reputation for compassionate, professional care. Our team of dedicated doctors, nurses, and support staff work around the clock to ensure every patient receives the attention and treatment they deserve. From routine check-ups to emergency interventions, we are here for our community every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl border-y border-black/10">
          <div className="grid md:grid-cols-3">
            {CARDS.map((card, index) => (
              <article key={card.title} className={`about-fade py-10 md:px-8 ${index > 0 ? 'border-t border-black/10 md:border-l md:border-t-0' : ''}`}>
                <card.Icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                <h3 className="mt-6 text-xl font-medium tracking-[-0.025em]">{card.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f4f4] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Our Identity</p>
              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl">Guided by faith. Defined by care.</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                Our identity is rooted in our Christian heritage and a steadfast commitment to clinical excellence. These principles guide every decision we make and every patient we serve.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-black/15 py-9">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Vision</p>
                <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.02em] sm:text-2xl sm:leading-9">
                  THE ST. MOSES COMMUNITY HOSPITAL WILL BE RECOGNIZED AS A PLACE WHERE PEOPLE WANT TO WORK, PHYSICIANS WANT TO PRACTICE AND PATIENTS WANT TO COME FOR THEIR HEALTHCARE NEEDS.
                </p>
              </div>
              <div className="border-t border-black/15 py-9">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Mission</p>
                <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.02em] sm:text-2xl sm:leading-9">
                  TO EXEMPLIFY OUR CHRISTIAN HERITAGE OF COMPASSION BY PROVIDING QUALITY HEALTHCARE SERVICES WITH UNRELENTING ATTENTION TO CLINICAL EXCELLENCE TO ENHANCE THE HEALTH OF THE COMMUNITY AND GIVE HOPE TO THE WEAK.
                </p>
              </div>
              <div className="border-y border-black/15 py-9">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Values</p>
                <div className="mt-7 grid sm:grid-cols-2">
                  {VALUES.map((value, index) => (
                    <div key={value.title} className={`py-6 sm:px-6 ${index > 0 ? 'border-t border-black/10 sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l sm:border-black/10' : ''} ${index >= 2 ? 'sm:border-t sm:border-black/10' : ''}`}>
                      <h3 className="text-base font-medium">{value.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{value.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={pillarsRef} className="overflow-hidden bg-primary px-6 py-20 text-white sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className={`grid gap-8 transition-all duration-1000 lg:grid-cols-12 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">By the Numbers</p>
              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">The numbers behind the trust.</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/60 lg:col-span-7 lg:justify-self-end lg:pt-8">Three numbers that define how we care. Not marketing. Just what we deliver, every time.</p>
          </div>

          <div className="mt-14 grid border-y border-white/20 md:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <article key={pillar.label} className={`py-10 md:px-8 ${index > 0 ? 'border-t border-white/20 md:border-l md:border-t-0' : ''}`}>
                <div className="text-6xl font-medium tracking-[-0.05em] sm:text-7xl">
                  <CountUp target={pillar.target} duration={1800 + index * 200} />{pillar.suffix}
                </div>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">{pillar.label}</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Why Trust Us</p>
              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl">More than a hospital.</h2>
            </div>
            <div className="border-y border-black/10 lg:col-span-8">
              {BADGES.map(({ Icon, title, text }, index) => (
                <article key={title} className={`grid gap-5 py-8 sm:grid-cols-[48px_1fr] ${index > 0 ? 'border-t border-black/10' : ''}`}>
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em]">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-black/10 pt-10 text-center">
            <Link to="/appointment" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
