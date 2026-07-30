import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Award, Clock,
  Stethoscope, HeartPulse, Eye, Smile, Apple, Ambulance, Menu, X,
  ArrowRight, Activity, Syringe, Microscope, Baby,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Home', href: '#home', external: false },
  { label: 'About', href: '/about', external: true },
  { label: 'Services', href: '/services', external: true },
  { label: 'Leadership', href: '/leadership', external: true },
  { label: 'Contact', href: '/contact', external: true },
]

const SERVICES_FULL = [
  { icon: Stethoscope, title: 'General OPD', text: 'Comprehensive outpatient care for all ages. Routine check-ups, chronic disease management, and health screenings from expert physicians.' },
  { icon: HeartPulse, title: 'Maternity', text: 'Complete prenatal, delivery, and postnatal care. Skilled midwives and doctors support you through every stage of your journey.' },
  { icon: Eye, title: 'Eye Clinic', text: 'Complete vision care including eye exams, refraction, glaucoma screening, and treatment of eye conditions.' },
  { icon: Smile, title: 'Dental Clinic', text: 'Full-service dental care from routine cleanings to restorations and extractions. Oral health for the whole family.' },
  { icon: Apple, title: 'Dietician', text: 'Personalized nutrition counseling and dietary planning for weight management, chronic conditions, and better health.' },
  { icon: Ambulance, title: 'Emergency', text: '24/7 emergency medical response with rapid triage, stabilization, and critical care when every second counts.' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ background: scrolled ? 'rgba(11,61,145,0.95)' : 'rgba(7,20,42,0.6)', backdropFilter: 'blur(12px)', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="St Moses Hospital" className="h-12 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <Link key={link.href} to={link.href} className="nav-link text-white/80 hover:text-white">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="nav-link text-white/80 hover:text-white">
                  {link.label}
                </a>
              )
            )}
          </div>

          <Link to="/appointment" className="hidden lg:inline-flex btn-outline text-xs px-5 py-2.5">
            Book Appointment <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-white" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 left-0 right-0 bg-primary px-6 pt-6 pb-12 transition-transform duration-500 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex items-center justify-between mb-10">
            <img src="/logo.png" alt="St Moses Hospital" className="h-12 w-auto" />
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-white/10"><X className="h-5 w-5 text-white" /></button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="font-sans text-3xl font-semibold text-white py-3 border-b border-white/10">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-sans text-3xl font-semibold text-white py-3 border-b border-white/10">
                  {link.label}
                </a>
              )
            )}
          </div>
          <Link to="/appointment" onClick={() => setOpen(false)} className="mt-8 btn-primary w-full text-sm">Book Appointment <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>
      </div>
    </>
  )
}

const HERO_SLIDES = [
  '/hero.webp',
  '/opd.jpg',
  '/antenatal.jpg',
  '/surgical.jpg',
  '/ultrasound.jpg',
  '/eye.jpg',
  '/ct-scan.jpg',
  '/emergency.png',
]

function Hero() {
  const heroRef = useRef(null)
  const [slide, setSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-fade', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15, delay: 0.3 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => {
        setPreviousSlide(current)
        return (current + 1) % HERO_SLIDES.length
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-deep">
      <div className="absolute inset-0 overflow-hidden">
        {HERO_SLIDES.map((src, i) => {
          const isActive = i === slide
          const isPrevious = i === previousSlide
          const positionClass = isActive
            ? 'translate-x-0 z-20'
            : isPrevious
              ? '-translate-x-full z-10'
              : 'translate-x-full z-0'

          return (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover will-change-transform transition-transform duration-[1200ms] ease-in-out motion-reduce:transition-none ${positionClass}`}
            />
          )
        })}
      </div>

      <div className="relative z-30 flex min-h-[100dvh] flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="hero-fade font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6 block">St Moses Hospital, Pokuasi</span>
          <h1 className="hero-fade font-sans font-semibold text-white leading-[0.95] tracking-tight">
            <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">Your health,</span>
            <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl mt-1 sm:mt-2">our commitment.</span>
          </h1>
          <p className="hero-fade text-white/50 text-base sm:text-lg mt-8 max-w-xl mx-auto leading-relaxed">
            23 years of compassionate healthcare in Pokuasi. General OPD, Maternity, Eye Clinic, Dental, Dietician. All under one roof.
          </p>
          <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="btn-primary bg-white text-ink hover:bg-white/90 px-8 py-4 text-sm">Book Appointment <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:0243474002" className="btn-outline text-sm px-8 py-4">0243-474002</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
          <div className="h-6 w-px bg-white/15" />
        </div>
      </div>
    </section>
  )
}

function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-fade', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true }, y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    { icon: Stethoscope, title: 'Expert Physicians', text: 'Our team of experienced Ghanaian and international doctors provides thorough diagnosis and personalized care for every patient who walks through our doors.' },
    { icon: Activity, title: 'Modern Diagnostics', text: 'State-of-the-art laboratory, ultrasound, X-ray, and CT scan equipment for fast and accurate diagnosis you can trust.' },
    { icon: Clock, title: '24/7 Availability', text: 'Round-the-clock emergency services and extended hours for outpatient consultations. We are always here when you need us.' },
  ]

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="feature-fade max-w-2xl mb-16">
          <span className="section-label">About St Moses</span>
          <h2 className="section-title mt-4">Quality healthcare for <span className="text-primary">everyone.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden border border-divider">
          {cards.map((c, i) => (
            <div key={i} className="feature-fade bg-surface p-8 sm:p-10">
              <c.icon className="h-6 w-6 text-primary mb-5" strokeWidth={1.8} />
              <h3 className="font-sans font-semibold text-lg text-ink mb-2">{c.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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

function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    { target: 23, suffix: '+', label: 'Years of service', desc: 'More than two decades of compassionate healthcare in the Pokuasi community. Thousands of patients served.' },
    { target: 24, suffix: '/7', label: 'Emergency care', desc: 'Round-the-clock emergency services. Our doors are always open, every day of the year.' },
    { target: 100, suffix: '%', label: 'Dedicated to you', desc: 'Fully licensed and certified. We meet the highest standards of care, every single time.' },
  ]

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 sm:px-10 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Our commitment</span>
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">Healthcare built on trust.</h2>
          </div>
          <p className="max-w-md text-white/60 text-sm leading-relaxed">Every number represents a person, a family, and a story of care. We remain committed to delivering dependable healthcare with compassion and excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
          {pillars.map((p, i) => (
            <div key={p.label} className={`py-10 md:px-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-white/15' : ''}`}>
              <div className="font-sans text-5xl sm:text-6xl font-semibold tracking-tight"><CountUp target={p.target} />{p.suffix}</div>
              <div className="mt-3 text-base font-semibold">{p.label}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-fade', { scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }, y: 20, opacity: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 px-6 sm:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="service-fade flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our services</span>
            <h2 className="section-title mt-4">Complete care, <span className="text-primary">close to home.</span></h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View all services <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_FULL.map((s) => (
            <div key={s.title} className="service-fade group rounded-2xl border border-divider bg-surface p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans font-semibold text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  const items = [
    { icon: ShieldCheck, title: 'Licensed & certified', text: 'We operate under Ghana Health Service standards and maintain strict clinical protocols.' },
    { icon: Award, title: '23+ years of service', text: 'A trusted healthcare partner serving Pokuasi and neighbouring communities since 2003.' },
    { icon: Clock, title: 'Always available', text: 'Emergency support and extended outpatient hours whenever you need care.' },
  ]

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Why choose us</span>
          <h2 className="section-title mt-4">Care you can <span className="text-primary">depend on.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-divider bg-surface p-8">
              <item.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
              <h3 className="mt-5 font-sans text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Diagnostics() {
  const diagnostics = [
    { icon: Microscope, title: 'Laboratory', text: 'Reliable testing and timely results for effective diagnosis and treatment.' },
    { icon: Syringe, title: 'Ultrasound & imaging', text: 'Modern imaging support for maternity, general diagnostics, and specialist care.' },
    { icon: Baby, title: 'Maternal care', text: 'Support through antenatal care, delivery, and postnatal follow-up.' },
  ]

  return (
    <section className="bg-deep px-6 py-24 text-white sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Modern diagnostics</span>
            <h2 className="mt-4 font-sans text-4xl font-semibold leading-tight sm:text-5xl">Clear answers. Better decisions.</h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">Our diagnostic services support faster, more accurate clinical decisions so patients receive the right care without unnecessary delay.</p>
          </div>
          <div className="grid gap-4">
            {diagnostics.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <div className="flex gap-4">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center"><item.icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">We are here for you</span>
        <h2 className="mx-auto mt-5 max-w-3xl font-sans text-4xl font-semibold leading-tight sm:text-5xl">Professional healthcare, whenever you need it.</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">Book a consultation or speak with our team for guidance on the right service for you and your family.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-primary">Book Appointment <ArrowUpRight className="h-4 w-4" /></Link>
          <a href="tel:0243474002" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white"><Phone className="h-4 w-4" /> Call 0243-474002</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-deep px-6 py-10 text-white sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img src="/logo.png" alt="St Moses Hospital" className="h-12 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">Compassionate healthcare in Pokuasi, serving individuals and families with dignity, professionalism, and care.</p>
        </div>
        <div className="space-y-3 text-sm text-white/55">
          <a href="tel:0243474002" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> 0243-474002</a>
          <a href="mailto:info@stmoseshospital.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> info@stmoseshospital.com</a>
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Off Nsawam-Accra Road, opposite Fraga Oil, Pokuasi</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pillars />
      <Services />
      <Trust />
      <Diagnostics />
      <CTA />
      <Footer />
    </div>
  )
}