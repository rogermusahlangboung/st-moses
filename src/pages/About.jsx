import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ShieldCheck, Award, Clock, Stethoscope, Activity } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
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
      gsap.from('.about-fade', { scrollTrigger: { trigger: featuresRef.current, start: 'top 85%', once: true }, y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 })
    }, featuresRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const el = pillarsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">About St Moses</span>
        <h1 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-tight max-w-3xl">
          Quality healthcare for
          <span className="block text-primary">everyone.</span>
        </h1>
      </div>

      <section ref={featuresRef} className="py-8 sm:py-12 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden border border-divider">
            {CARDS.map((c, i) => (
              <div key={i} className="about-fade bg-surface p-8 sm:p-10">
                <c.Icon className="h-6 w-6 text-primary mb-5" strokeWidth={1.8} />
                <h3 className="font-sans font-semibold text-lg text-ink mb-2">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-surface border-y border-divider">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Our Identity</span>
          </div>

          <div className="mb-16">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-primary mb-4 tracking-tight">VISION</h2>
            <p className="text-ink text-base sm:text-lg leading-relaxed max-w-3xl">
              THE ST. MOSES COMMUNITY HOSPITAL WILL BE RECOGNIZED AS A PLACE WHERE PEOPLE WANT TO WORK, PHYSICIANS WANT TO PRACTICE AND PATIENTS WANT TO COME FOR THEIR HEALTHCARE NEEDS.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-primary mb-4 tracking-tight">MISSION</h2>
            <p className="text-ink text-base sm:text-lg leading-relaxed max-w-3xl">
              TO EXEMPLIFY OUR CHRISTIAN HERITAGE OF COMPASSION BY PROVIDING QUALITY HEALTHCARE SERVICES WITH UNRELENTING ATTENTION TO CLINICAL EXCELLENCE TO ENHANCE THE HEALTH OF THE COMMUNITY AND GIVE HOPE TO THE WEAK.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-primary mb-8 tracking-tight">VALUES</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-5">
                <h3 className="font-sans font-semibold text-base text-ink mb-1">Dignity & Reverence</h3>
                <p className="text-muted text-sm leading-relaxed">Safeguarded by recognizing every life as a gift from God, so each individual is inherently valued.</p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="font-sans font-semibold text-base text-ink mb-1">Trust</h3>
                <p className="text-muted text-sm leading-relaxed">Honest and open communication with patients and among staff.</p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="font-sans font-semibold text-base text-ink mb-1">Cooperation</h3>
                <p className="text-muted text-sm leading-relaxed">Between patients and staff in order to realize our motto: "Quality Healthcare, Our Passion!!"</p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="font-sans font-semibold text-base text-ink mb-1">Integrity</h3>
                <p className="text-muted text-sm leading-relaxed">Honesty, fairness and self-scrutiny in all our endeavours as a means to assure confidentiality and privacy.</p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="font-sans font-semibold text-base text-ink mb-1">Heritage</h3>
                <p className="text-muted text-sm leading-relaxed">Inspired by the leadership attributes of Moses, we will lead the community to a quality healthy lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={pillarsRef} className="py-24 sm:py-32 px-6 sm:px-10 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">By the Numbers</span>
              <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mt-4 leading-[1.05] tracking-tight">
                The numbers behind <span className="text-primary-dark">the trust.</span>
              </h2>
            </div>
            <p className="text-white/40 text-base max-w-md lg:text-right">Three numbers that define how we care. Not marketing. Just what we deliver, every time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {PILLARS.map((p, i) => (
              <div key={i} style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }} className={`bg-primary/50 p-8 sm:p-10 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-baseline gap-1 leading-none mb-4">
                  <span className="font-sans font-bold text-[7rem] sm:text-[8rem] leading-[0.85] text-white tabular-nums tracking-tight">
                    <CountUp target={p.target} duration={1800 + i * 200} />
                  </span>
                  <span className="font-sans font-semibold text-3xl sm:text-4xl text-primary-dark">{p.suffix}</span>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">{p.label}</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Why Trust Us</span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-tight">More than a hospital.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BADGES.map(({ Icon, title, text }, i) => (
              <div key={i} className="bg-surface border border-divider rounded-2xl p-6">
                <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.8} />
                <h3 className="font-sans font-semibold text-base text-ink mb-1.5">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center pb-20">
        <Link to="/appointment" className="btn-primary bg-primary text-white hover:bg-primary-dark text-sm px-8 py-4">
          Book an Appointment <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
