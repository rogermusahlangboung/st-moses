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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-fade', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15, delay: 0.3 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSlide((p) => (p + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-deep">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => (
          <img key={src} src={src} alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="hero-fade font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6 block">St Moses Hospital, Pokuasi</span>
          <h1 className="hero-fade font-sans font-semibold text-white leading-[0.95] tracking-tight">
            <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">Your health,</span>
            <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl mt-1 sm:mt-2">our commitment.</span>
          </h1>
          <p className="hero-fade text-white/50 text-base sm:text-lg mt-8 max-w-xl mx-auto leading-relaxed">
            15 years of compassionate healthcare in Pokuasi. General OPD, Maternity, Eye Clinic, Dental, Dietician. All under one roof.
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
    { target: 15, suffix: '+', label: 'Years of service', desc: 'A decade and a half of compassionate healthcare in the Pokuasi community. Thousands of patients served.' },
    { target: 24, suffix: '/7', label: 'Emergency care', desc: 'Round-the-clock emergency services. Our doors are always open, every day of the year.' },
    { target: 100, suffix: '%', label: 'Dedicated to you', desc: 'Fully licensed and certified. We meet the highest standards of care, every single time.' },
  ]

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 sm:px-10 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">By the Numbers</span>
            <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mt-4 leading-[1.05] tracking-tight">
              The numbers behind <span className="text-primary">the trust.</span>
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-md lg:text-right">Three numbers that define how we care. Not marketing. Just what we deliver, every time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {pillars.map((p, i) => (
            <div key={i} style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }} className={`bg-primary/50 p-8 sm:p-10 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-baseline gap-1 leading-none mb-4">
                <span className="font-sans font-bold text-[7rem] sm:text-[8rem] md:text-[5rem] lg:text-[8rem] leading-[0.85] text-white tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-sans font-semibold text-3xl sm:text-4xl text-primary">{p.suffix}</span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">{p.label}</p>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
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

  const steps = [
    { num: '01', title: 'Consultation & Diagnosis', tagline: 'We listen first.', text: 'We take time to hear your concerns, review your medical history, and conduct a thorough physical assessment. Our doctors explain findings in plain language so you understand your health. No hidden fees, only transparent advice before we proceed.', image: '/gen-consult.jpg', alt: 'Doctor consulting with patient' },
    { num: '02', title: 'Personalized Treatment', tagline: 'Carefully planned.', text: 'We design a treatment plan tailored to your specific health needs, lifestyle, and goals. Whether it is medication, therapy, or a procedure, we walk you through every option so you can make informed decisions about your care.', image: '/hero11.webp', alt: 'Medical team reviewing treatment plan' },
    { num: '03', title: 'Care & Follow-up', tagline: 'We stay with you.', text: 'Our commitment does not end when you leave the consultation room. We provide ongoing support, schedule follow-up appointments, and monitor your progress to ensure you recover fully and stay healthy.', image: '/care-followup.webp', alt: 'Hospital exterior' },
  ]

  return (
    <section ref={containerRef} className="relative px-4 sm:px-6 py-10 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto mb-8 sm:mb-16 px-2 sm:px-10">
        <span className="section-label">How We Care</span>
        <h2 className="section-title mt-4">Three steps. <span className="text-primary">Complete care.</span></h2>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {steps.map((step, idx) => (
          <article key={idx} className="protocol-card sticky top-14 sm:top-20 lg:top-28 mx-auto max-w-6xl bg-surface border border-divider rounded-2xl overflow-hidden shadow-sm"
            style={{ willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            <div className="grid lg:grid-cols-5 gap-0 min-h-[45vh] sm:min-h-[55vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-14 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{step.num} / {step.title}</span>
                <div className="my-6 sm:my-12">
                  <span className="font-sans font-bold text-[5rem] sm:text-[7rem] lg:text-[10rem] leading-none text-black/[0.04] -mb-4 block select-none">{step.num}</span>
                  <h3 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl text-ink leading-[1.02] tracking-tight">{step.title}</h3>
                  <p className="font-sans text-primary text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 font-medium">{step.tagline}</p>
                </div>
                <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>
              <div className="lg:col-span-2 relative overflow-hidden min-h-[180px] sm:min-h-[250px] lg:min-h-full bg-primary">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.65)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/10" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', { scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true }, y: 20, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 px-6 sm:px-10 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Everything We Do</span>
            <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] tracking-tight">Complete care, <span className="text-primary">under one roof.</span></h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed">We provide a full range of medical services for patients of all ages. From routine checkups to specialist care.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile bg-primary/50 p-7 sm:p-9 hover:bg-white/[0.03] transition-colors duration-300">
                <div className="flex items-start justify-between mb-5">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg sm:text-xl mb-2 text-white">{svc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary bg-white text-ink hover:bg-white/90 text-sm px-7 py-3.5">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustSignals() {
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

  const badges = [
    { Icon: ShieldCheck, title: 'Licensed & Certified', text: 'Fully licensed private healthcare facility meeting all regulatory standards set by the Ghana Health Service.' },
    { Icon: Award, title: '15+ Years of Service', text: 'Over 15 years serving the Pokuasi community with compassionate, quality healthcare you can count on.' },
    { Icon: Clock, title: '24/7 Patient Care', text: 'Emergency services available around the clock, every day of the year. We never close our doors.' },
  ]

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 sm:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Why Trust Us</span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-tight">More than a hospital.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {badges.map(({ Icon, title, text }, i) => (
            <div key={i} style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }} className={`bg-surface border border-divider rounded-2xl p-6 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-sans font-semibold text-base text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subj = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.zip}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:info@stmoseshospital.com?subject=${subj}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="section-label">Contact</span>
            <h2 className="section-title mt-4">How can <span className="text-primary">we help?</span></h2>
            <p className="text-muted text-base mt-6 leading-relaxed max-w-md">Share your details and we will get back to you as soon as possible to discuss your health needs.</p>

            <div className="mt-10 space-y-5">
              <a href="tel:0243474002" className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></span>
                <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Call us</span><span className="font-sans font-medium text-ink">0243-474002</span></span>
              </a>
              <a href="mailto:info@stmoseshospital.com" className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="h-4 w-4 text-primary" /></span>
                <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Email us</span><span className="font-sans font-medium text-ink">info@stmoseshospital.com</span></span>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><MapPin className="h-4 w-4 text-primary" /></span>
                <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Location</span><span className="font-sans font-medium text-ink">Off Nsawam-Accra Rd, Opp Fraga Oil, Pokuasi</span></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-2xl p-7 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <Field label="Location" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
              </div>
              <div className="mt-5">
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="mt-6 btn-primary w-full bg-primary text-white hover:bg-primary-dark text-sm">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">{label}{required ? ' *' : ''}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors" placeholder={label} />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-white/40 py-12 sm:py-16 px-6 sm:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div className="bg-white rounded-xl p-2 inline-flex items-center justify-center">
            <img src="/logo.png" alt="St Moses Hospital" className="h-11 w-auto" />
          </div>
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-x-5 gap-y-2">
            <a href="#home" className="font-sans text-xs uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors">Home</a>
            <Link to="/about" className="font-sans text-xs uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors">About</Link>
            <Link to="/services" className="font-sans text-xs uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors">Services</Link>
            <Link to="/contact" className="font-sans text-xs uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors">Contact</Link>
            <Link to="/appointment" className="font-sans text-xs uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors">Appointment</Link>
          </div>
        </div>
        <div className="h-px bg-white/5 mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <p>© 2026 St Moses Hospital. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="w-full sm:w-auto text-white/30">Off Nsawam-Accra Rd, Opp Fraga Oil, Pokuasi</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Pillars />
      <Protocol />
      <ServicesGrid />
      <TrustSignals />
      <ContactForm />
      <Footer />
    </div>
  )
}
