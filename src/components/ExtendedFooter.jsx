import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const COMPANY_LINKS = [
  ['About', '/about'],
  ['Leadership', '/leadership'],
  ['Our Services', '/services'],
  ['Book Appointment', '/appointment'],
  ['Contact', '/contact'],
  ['Privacy Policy', '/privacy'],
  ['Terms of Use', '/terms'],
]

const SERVICE_LINKS = [
  'General OPD',
  'Antenatal & Maternity',
  'Dental Clinic',
  'Eye Clinic',
  'Laboratory Services',
  'Ultrasound & X-Ray',
  'CT Scan',
  'Dietitian and Dietetic',
  'Emergency Response',
]

function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.8l.42-3.2H13.5V7.75c0-.93.26-1.56 1.62-1.56H16.85V3.32A23.6 23.6 0 0 0 14.33 3C11.84 3 10.14 4.52 10.14 7.3v2.5H7.33V13h2.81v8h3.36Z" />
    </svg>
  )
}

function LinkedinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.46 8.33H3.15V21h3.31V8.33ZM4.8 3A1.93 1.93 0 1 0 4.8 6.86 1.93 1.93 0 0 0 4.8 3ZM21 13.74c0-3.81-2.03-5.58-4.74-5.58-2.18 0-3.16 1.2-3.71 2.04V8.33H9.24V21h3.31v-6.27c0-1.65.31-3.25 2.36-3.25 2.02 0 2.05 1.89 2.05 3.36V21H21v-7.26Z" />
    </svg>
  )
}

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.89-6.39L6.48 21H3.36l7.25-8.29L2.96 3h6.4l4.42 5.84L18.9 3Zm-1.1 16.2h1.72L8.42 4.7H6.57L17.8 19.2Z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'X', Icon: XIcon },
]

export default function ExtendedFooter() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const existingFooter = document.querySelector('footer:not([data-extended-footer])')
    const previousDisplay = existingFooter?.style.display
    if (existingFooter) existingFooter.style.display = 'none'

    const insertedLinks = []
    const aboutLinks = Array.from(document.querySelectorAll('a[href="/about"]'))

    aboutLinks.forEach((aboutLink) => {
      const isDesktopNavigation = aboutLink.classList.contains('nav-link')
      const isMobileNavigation = aboutLink.classList.contains('text-3xl')
      if (!isDesktopNavigation && !isMobileNavigation) return

      const navigationContainer = aboutLink.parentElement
      if (!navigationContainer || navigationContainer.querySelector('a[href="/leadership"]')) return

      const leadershipLink = document.createElement('a')
      leadershipLink.href = '/leadership'
      leadershipLink.textContent = 'Leadership'
      leadershipLink.className = aboutLink.className

      if (isMobileNavigation) {
        leadershipLink.addEventListener('click', () => {
          const closeButton = document.querySelector('button[aria-label="Open menu"]')
          closeButton?.blur()
        })
      }

      aboutLink.insertAdjacentElement('afterend', leadershipLink)
      insertedLinks.push(leadershipLink)
    })

    return () => {
      if (existingFooter) existingFooter.style.display = previousDisplay
      insertedLinks.forEach((link) => link.remove())
    }
  }, [])

  const subscribe = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    window.location.href = `mailto:info@stmoseshospital.com?subject=${encodeURIComponent('Newsletter subscription')}&body=${encodeURIComponent(`Please add ${email.trim()} to the St Moses Hospital newsletter.`)}`
  }

  return (
    <footer data-extended-footer className="bg-primary text-white border-t border-white/10 px-6 sm:px-10 pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-3 inline-flex items-center justify-center">
              <img src="/logo.png" alt="St Moses Hospital" className="h-14 w-auto" />
            </div>
            <p className="mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-white/60">
              St Moses Hospital provides compassionate, dependable healthcare for individuals and families in Pokuasi and surrounding communities. Your health remains our commitment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  title={label}
                  className="h-11 w-11 rounded-xl border border-white/15 flex items-center justify-center text-white/65 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans font-semibold text-base text-white mb-6">Hospital</h3>
            <div className="flex flex-col gap-4">
              {COMPANY_LINKS.map(([label, href]) => (
                <Link key={href} to={href} className="text-sm text-white/55 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans font-semibold text-base text-white mb-6">Services</h3>
            <div className="flex flex-col gap-4">
              {SERVICE_LINKS.map((service) => (
                <Link key={service} to="/services" className="text-sm text-white/55 hover:text-white transition-colors">{service}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans font-semibold text-base text-white mb-6">Get in touch</h3>
            <div className="space-y-5 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span>Off Nsawam-Accra Road, opposite Fraga Oil, Pokuasi, Ghana</span>
              </div>
              <a href="tel:0243474002" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-white shrink-0" />
                <span>0243-474002</span>
              </a>
              <a href="mailto:info@stmoseshospital.com" className="flex items-start gap-3 hover:text-white transition-colors break-all">
                <Mail className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span>info@stmoseshospital.com</span>
              </a>
            </div>

            <form onSubmit={subscribe} className="mt-8">
              <label htmlFor="footer-email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 block mb-3">Health updates</label>
              <div className="flex gap-2">
                <input id="footer-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Newsletter email" className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white/40" />
                <button type="submit" aria-label="Join newsletter" className="h-12 w-12 shrink-0 rounded-xl bg-white text-primary flex items-center justify-center hover:bg-white/90 transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-sm text-white/55">© 2026 St Moses Hospital. All rights reserved.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/35">Serving Pokuasi and neighbouring communities with professional, patient-centred healthcare for over 23 years.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
