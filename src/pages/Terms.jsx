import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-ink mb-8">Terms &amp; Conditions</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted leading-relaxed">
          <p>By accessing and using the St Moses Hospital website and services, you agree to comply with these terms and conditions.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Medical Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Appointments &amp; Services</h2>
          <p>Appointment scheduling is subject to availability. We reserve the right to reschedule or cancel appointments when necessary.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Liability</h2>
          <p>St Moses Hospital shall not be liable for any damages arising from the use of this website or the inability to access its services.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Changes</h2>
          <p>We reserve the right to modify these terms at any time. Changes take effect immediately upon posting.</p>
          <p className="text-sm text-muted/60 mt-12">Last updated: July 2026</p>
        </div>
      </div>
    </div>
  )
}
