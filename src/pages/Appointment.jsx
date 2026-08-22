import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react'

const DEPARTMENTS = [
  'General OPD',
  'Maternity',
  'Eye Clinic',
  'Dental Clinic',
  'Laboratory',
  'Ultrasound',
  'Surgical',
  'Pharmacy',
  'Emergency',
]

function Field({ label, type = 'text', required, value, onChange, icon: Icon }) {
  return (
    <div>
      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">{label}{required ? ' *' : ''}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted/50" strokeWidth={1.8} />}
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={`w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors ${Icon ? 'pl-10' : ''}`} placeholder={label} />
      </div>
    </div>
  )
}

export default function Appointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', date: '', time: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.department || !form.date) return
    const subj = encodeURIComponent(`Appointment Request ${form.department}`)
    const body = encodeURIComponent(
      `New Appointment Request\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDepartment: ${form.department}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time || 'Not specified'}\n\nAdditional Notes:\n${form.message || 'None'}`
    )
    window.location.href = `mailto:rogermusahlangboung4@gmail.com?subject=${subj}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Book an Appointment</span>
        <h1 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05] tracking-tight">
          Schedule your <span className="text-primary">visit.</span>
        </h1>
        <p className="text-muted text-base mt-4 max-w-lg leading-relaxed">Fill in your details and we will confirm your appointment within 24 hours.</p>
      </div>

      <section className="py-8 sm:py-12 px-6 sm:px-10 pb-32">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-2xl p-7 sm:p-10">
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} icon={User} />
                <Field label="Email Address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} icon={Mail} />
                <Field label="Phone Number" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} icon={Phone} />
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">Department *</label>
                  <select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="">Select department</option>
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <Field label="Preferred Date" type="date" required value={form.date} onChange={(v) => setForm({ ...form, date: v })} icon={Calendar} />
                <Field label="Preferred Time" type="time" value={form.time} onChange={(v) => setForm({ ...form, time: v })} icon={Clock} />
              </div>
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2 block">Additional Notes</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-muted/50" strokeWidth={1.8} />
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="w-full bg-background border border-divider rounded-xl pl-10 pr-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Any specific concerns or requests?" />
                </div>
              </div>
            </div>

            <button type="submit" className="mt-8 btn-primary w-full bg-primary text-white hover:bg-primary-dark text-sm">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted text-xs leading-relaxed flex flex-wrap items-center justify-center gap-x-2">
              <span>Prefer to call?</span>
              <a href="tel:0243474002" className="text-primary hover:underline font-medium whitespace-nowrap">024-347-4002</a>
              <span className="text-muted/40">|</span>
              <a href="tel:0208631116" className="text-primary hover:underline font-medium whitespace-nowrap">020-863-1116</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
