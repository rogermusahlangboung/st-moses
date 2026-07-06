import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-ink mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted leading-relaxed">
          <p>St Moses Hospital is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Information We Collect</h2>
          <p>We collect information you provide directly, including name, email address, phone number, and health-related information necessary for your care.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">How We Use Your Information</h2>
          <p>Your information is used solely for providing medical care, scheduling appointments, and communicating with you about your health needs.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="font-sans font-semibold text-2xl text-ink mt-10">Contact</h2>
          <p>For questions about this policy, contact us at info@stmoseshospital.com or call 0243-474002.</p>
          <p className="text-sm text-muted/60 mt-12">Last updated: July 2026</p>
        </div>
      </div>
    </div>
  )
}
