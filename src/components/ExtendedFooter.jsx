import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'

const COMPANY_LINKS = [
  ['About', '/about'],
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

export default function ExtendedFooter() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const existingFooter = document.querySelector('footer:not([data-extended-footer])')
    if (!existingFooter) return undefined
    const previousDisplay = existingFooter.style.display
    existingFooter.style.display = 'none'
    return () => { existingFooter.style.display = previousDisplay }
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
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social media" className="h-11 w-11 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/35 transition-colors">
                  <Icon className="h-4 w-4" />
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
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/35">Serving Pokuasi and neighbouring communities with professional, patient-centred healthcare for over 15 years.</p>
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
