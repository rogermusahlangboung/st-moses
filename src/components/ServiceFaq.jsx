import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ServiceFaq({ items = [] }) {
  const baseId = useId()
  const [openItems, setOpenItems] = useState(() => new Set())

  if (!items.length) return null

  const toggleItem = (index) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="border-t border-black/10">
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={item.question} className="border-b border-black/10">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
              className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              <span className="text-base font-medium leading-6 text-ink sm:text-lg">{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                strokeWidth={1.8}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10 text-sm leading-7 text-muted sm:text-base sm:leading-8"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
