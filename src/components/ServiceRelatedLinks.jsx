import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getRelatedServices } from '../data/services.js'

export default function ServiceRelatedLinks({ service }) {
  const relatedServices = getRelatedServices(service)

  if (!relatedServices.length) return null

  return (
    <div className="grid border-t border-black/10 md:grid-cols-3">
      {relatedServices.map((related, index) => {
        const Icon = related.icon
        return (
          <Link
            key={related.slug}
            to={`/services/${related.slug}`}
            className={`group flex min-h-44 flex-col justify-between py-7 outline-none transition-colors hover:bg-black/[0.025] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset md:px-7 ${index > 0 ? 'border-t border-black/10 md:border-l md:border-t-0' : ''}`}
          >
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <div className="mt-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{related.category}</p>
              <h3 className="mt-2 text-xl font-medium leading-tight text-ink">{related.shortTitle}</h3>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
