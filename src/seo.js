import { useEffect } from 'react'

export const SITE_URL = 'https://www.stmosescommunityhospital.com'

export const PAGE_SEO = {
  '/': {
    title: 'St Moses Community Hospital — Your Health, Our Commitment',
    description: 'St Moses Community Hospital provides compassionate, dependable healthcare in Pokuase, Ghana, including general OPD, maternity, diagnostics, specialist clinics and emergency care.',
  },
  '/services': {
    title: 'Healthcare Services | St Moses Community Hospital',
    description: 'Explore healthcare services at St Moses Community Hospital in Pokuase, Ghana, including General OPD, Maternity, Eye Clinic, Dental, Dietician, diagnostics and Emergency care.',
  },
  '/leadership': {
    title: 'Leadership | St Moses Community Hospital',
    description: 'Meet the leadership of St Moses Community Hospital and learn about Rev. Roger Musah Langboung, Chief Executive Officer and his vision for community healthcare.',
  },
  '/contact': {
    title: 'Contact St Moses Community Hospital | Pokuase, Ghana',
    description: 'Contact St Moses Community Hospital in Pokuase, Ghana for appointments, healthcare enquiries, directions and general information.',
  },
}

function setMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', url)
}

export function applyPageSeo(pathname) {
  const page = PAGE_SEO[pathname] || PAGE_SEO['/']
  const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

  document.title = page.title
  setMeta('description', page.description)
  setProperty('og:title', page.title)
  setProperty('og:description', page.description)
  setProperty('og:url', canonical)
  setProperty('og:type', 'website')
  setProperty('og:site_name', 'St Moses Community Hospital')
  setProperty('og:image', `${SITE_URL}/logo.png`)
  setMeta('twitter:title', page.title)
  setMeta('twitter:description', page.description)
  setMeta('twitter:card', 'summary')
  setMeta('twitter:image', `${SITE_URL}/logo.png`)
  setCanonical(canonical)
}

export function usePageSeo(pathname) {
  useEffect(() => {
    applyPageSeo(pathname)
  }, [pathname])
}
