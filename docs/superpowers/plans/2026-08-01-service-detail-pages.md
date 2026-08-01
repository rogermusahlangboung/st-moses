# Service Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a visible Read More link to every service and provide a substantial detail page for all 15 services at `/services/:slug`.

**Architecture:** Consolidate service summaries, long-form content, images, icons, SEO metadata, FAQs, and related-service links in `src/data/services.js`. Render the overview and one reusable dynamic detail page from that source. Register a React Router parameter route and handle invalid service slugs gracefully.

**Tech Stack:** React 19, React Router DOM 7, Vite 8, Tailwind CSS 3, Lucide React.

## Global Constraints

- Exactly 15 service slugs.
- One reusable editorial detail-page template, not 15 duplicated components.
- No new runtime dependency or backend.
- Preserve `/appointment` and `tel:0243474002` actions.
- Patient-friendly information only; no diagnosis, dosage, guaranteed outcomes, unsupported pricing, schedules, statistics, or equipment claims.
- Responsive, keyboard accessible, and reduced-motion friendly.
- Invalid slugs render a useful not-found state.
- `npm run build` must pass.

---

### Task 1: Create the central service data source

**Files:**
- Create: `src/data/services.js`

- [ ] Export `SERVICES`, an ordered array with records for OPD, Laboratory, Maternity, Surgery, Ultrasound, Gynaecology, Dental, Pharmacy, X-Ray, Eye Clinic, Family Planning, CT Scan, Fertility, Dietitian, and Emergency Response.
- [ ] Give each record a unique slug, title, image, Lucide icon, summary, overview paragraphs, services offered, suitable patient-use examples, visit steps, preparation notes, trust points, FAQs, related slugs, and SEO text.
- [ ] Export `getServiceBySlug(slug)` and `getRelatedServices(service)` helpers.
- [ ] Ensure related slugs resolve and no service links to itself.
- [ ] Commit with `feat: add service detail content model`.

### Task 2: Build reusable FAQ and related-service components

**Files:**
- Create: `src/components/ServiceFaq.jsx`
- Create: `src/components/ServiceRelatedLinks.jsx`

- [ ] Implement a native-button FAQ accordion with `aria-expanded`, stable panel IDs, visible focus styles, and multiple-open behaviour.
- [ ] Implement related-service rows using records returned by `getRelatedServices`.
- [ ] Keep both components flat and divider-based rather than card-heavy.
- [ ] Commit with `feat: add service detail supporting components`.

### Task 3: Build the dynamic service detail page

**Files:**
- Create: `src/pages/ServiceDetail.jsx`

- [ ] Read `slug` with `useParams()` and resolve it through `getServiceBySlug`.
- [ ] Scroll to the top on slug changes.
- [ ] Update `document.title`, meta description, and canonical path; restore previous metadata during cleanup.
- [ ] Render a Tesla-inspired editorial page with: interior header, large hero image, overview, services offered, who it may help, what to expect, preparation, why choose St. Moses, FAQs, related services, and final appointment/phone CTA.
- [ ] Add an urgent-care notice on the Emergency Response page.
- [ ] Render a service-not-found page with links to `/services` and `/contact` for invalid slugs.
- [ ] Commit with `feat: add dynamic service detail page`.

### Task 4: Add Read More actions to the Services overview

**Files:**
- Modify: `src/pages/Services.jsx`

- [ ] Remove the duplicated local service array and import `SERVICES` from `src/data/services.js`.
- [ ] Preserve the alternating editorial layout and existing imagery.
- [ ] Add a clearly visible `Read More` link to `/services/${service.slug}` on every service row.
- [ ] Include an arrow icon, 44px minimum target, visible focus treatment, and mobile/desktop visibility.
- [ ] Keep the bottom appointment CTA unchanged.
- [ ] Commit with `feat: link services to detail pages`.

### Task 5: Register routing and verify production behaviour

**Files:**
- Modify: `src/main.jsx`

- [ ] Import `ServiceDetail`.
- [ ] Register `<Route path="/services/:slug" element={<ServiceDetail />} />` after `/services`.
- [ ] Verify all 15 URLs resolve and an unknown slug renders the fallback.
- [ ] Verify direct page navigation is compatible with the existing SPA fallback deployment.
- [ ] Run `npm clean-install` and `npm run build`.
- [ ] Fix any build errors without weakening the accepted design.
- [ ] Commit with `feat: register service detail routes`.

### Task 6: Final review

- [ ] Check every overview Read More link maps to the correct title and image.
- [ ] Check mobile, tablet, laptop, and wide desktop layouts.
- [ ] Check keyboard FAQ interaction, focus states, phone links, appointment links, and related-service links.
- [ ] Confirm no horizontal overflow and no generic rounded-card grid dominates the pages.
- [ ] Confirm the production build passes before reporting completion.
