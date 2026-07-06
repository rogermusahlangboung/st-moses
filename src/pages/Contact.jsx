import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">{label}{required ? ' *' : ''}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors" placeholder={label} />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subj = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.zip}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:info@stmoseshospital.com?subject=${subj}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Contact</span>
        <h1 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-tight max-w-3xl">
          How can <span className="text-primary">we help?</span>
        </h1>
      </div>

      <section className="py-8 sm:py-12 px-6 sm:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-muted text-base leading-relaxed max-w-md">Share your details and we will get back to you as soon as possible to discuss your health needs.</p>

              <div className="mt-10 space-y-5">
                <a href="tel:0243474002" className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></span>
                  <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Call us</span><span className="font-sans font-medium text-ink">0243-474002</span></span>
                </a>
                <a href="tel:0208631116" className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></span>
                  <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Alternate</span><span className="font-sans font-medium text-ink">020-8631116</span></span>
                </a>
                <a href="tel:0244358900" className="flex items-center gap-4 group">
                  <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></span>
                  <span><span className="block font-mono text-[9px] uppercase tracking-widest text-muted">Alternate</span><span className="font-sans font-medium text-ink">0244-358900</span></span>
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
    </div>
  )
}
