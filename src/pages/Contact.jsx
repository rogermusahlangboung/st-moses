import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import InteriorPageHeader from '../components/InteriorPageHeader.jsx'

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div className="border-b border-black/15 py-5">
      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        {label}{required ? ' *' : ''}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent py-1 text-base text-ink outline-none placeholder:text-muted/40"
        placeholder={label}
      />
    </div>
  )
}

const CONTACT_ITEMS = [
  { Icon: Phone, label: 'Call us', value: '024-347-4002', href: 'tel:0243474002' },
  { Icon: Phone, label: 'Alternate', value: '020-863-1116', href: 'tel:0208631116' },
  { Icon: Phone, label: 'Alternate', value: '024-435-8900', href: 'tel:0244358900' },
  { Icon: Mail, label: 'Email us', value: 'info@stmoseshospital.com', href: 'mailto:info@stmoseshospital.com' },
  { Icon: MapPin, label: 'Location', value: 'Off Nsawam-Accra Rd, Opp Fraga Oil, Pokuasi' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.zip}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:info@stmoseshospital.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <InteriorPageHeader label="CONTACT" title="How can" accent="we help?" />

      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Get in touch</p>
            <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Tell us how we can support you.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-muted">
              Share your details and we will get back to you as soon as possible to discuss your health needs.
            </p>

            <div className="mt-12 border-y border-black/10">
              {CONTACT_ITEMS.map(({ Icon, label, value, href }, index) => {
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{label}</span>
                      <span className="mt-1 block text-base font-medium leading-6 text-ink">{value}</span>
                    </div>
                  </>
                )

                const className = `grid grid-cols-[28px_1fr] gap-4 py-6 ${index > 0 ? 'border-t border-black/10' : ''}`
                return href ? (
                  <a key={`${label}-${value}`} href={href} className={`${className} transition-opacity hover:opacity-65`}>
                    {content}
                  </a>
                ) : (
                  <div key={`${label}-${value}`} className={className}>{content}</div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-black/15">
              <p className="py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Send a message</p>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 sm:gap-x-8">
                  <Field label="Name" required value={form.name} onChange={(value) => setForm({ ...form, name: value })} />
                  <Field label="Email" type="email" required value={form.email} onChange={(value) => setForm({ ...form, email: value })} />
                  <Field label="Phone" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} />
                  <Field label="Location" value={form.zip} onChange={(value) => setForm({ ...form, zip: value })} />
                </div>

                <div className="border-b border-black/15 py-5">
                  <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    rows={7}
                    className="w-full resize-none bg-transparent text-base leading-8 text-ink outline-none placeholder:text-muted/40"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f4f4] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary lg:col-span-3">Visit St Moses</p>
          <p className="max-w-3xl text-2xl font-medium leading-9 tracking-[-0.025em] lg:col-span-9 sm:text-3xl sm:leading-10">
            Off Nsawam-Accra Road, opposite Fraga Oil, Pokuasi, Ghana.
          </p>
        </div>
      </section>
    </main>
  )
}
