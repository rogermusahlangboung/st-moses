# Service Detail Pages Design

## Summary

Create a dedicated page for every hospital service currently listed on `/services`. Each service entry on the overview page will include a prominent **Read More** action that opens a detailed, patient-friendly page. All detail pages will share one reusable Tesla-inspired editorial layout, use the existing hospital visual system, and remain easy to maintain through a central data source.

## Goals

- Give every listed service its own accessible URL.
- Provide substantially more useful content than the overview page.
- Keep the visual language consistent with the redesigned Leadership, About, Services, and Contact pages.
- Avoid duplicating page structure across 15 separate React components.
- Preserve fast loading, responsive behavior, and simple maintenance.
- Provide clear appointment and telephone calls to action on every page.

## Non-goals

- No online diagnosis, symptom checker, treatment recommendation engine, or patient portal.
- No unsupported clinical claims, guaranteed outcomes, prices, doctor schedules, or procedure availability.
- No CMS, database, or new backend service.
- No separate bespoke visual layout for each service.
- No changes to the existing appointment submission flow beyond linking to it.

## Routes

The application will add a dynamic React Router route:

`/services/:slug`

Supported slugs:

1. `/services/opd`
2. `/services/laboratory-services`
3. `/services/maternity-care`
4. `/services/surgical-operations`
5. `/services/ultrasound-services`
6. `/services/gynaecological-clinic`
7. `/services/dental-clinic`
8. `/services/pharmacy`
9. `/services/x-ray`
10. `/services/eye-clinic`
11. `/services/family-planning`
12. `/services/ct-scan`
13. `/services/fertility-clinic`
14. `/services/dietitian`
15. `/services/emergency-response`

Unknown slugs will render a dedicated service-not-found state with links back to `/services` and `/contact`.

## Information Architecture

Create one source-of-truth module:

`src/data/services.js`

Each service object will include:

- `slug`
- `title`
- `shortTitle`
- `category`
- `summary`
- `image`
- `iconKey`
- `intro`
- `servicesOffered`
- `whoItMayHelp`
- `whatToExpect`
- `preparation`
- `whyChooseUs`
- `faqs`
- `relatedSlugs`
- `seoTitle`
- `seoDescription`
- `emergencyNotice` when relevant

The Services overview page and the Service Detail page will both read from this module. This prevents route labels, images, summaries, and page content from drifting out of sync.

## Page Template

Create one reusable component:

`src/pages/ServiceDetail.jsx`

The component will read `slug` from `useParams()`, locate the matching service record, and render the following sections.

### 1. Interior header

- Existing St. Moses interior-page navigation treatment.
- Back link to `/services`.
- Small uppercase service category label.
- Large service title with restrained Tesla-inspired typography.

### 2. Hero image

- Full-width service image with a controlled editorial crop.
- Minimal overlay only where needed for contrast.
- No rounded card container.
- Responsive fixed aspect ratios to limit layout shift.

### 3. Overview

- Large introductory statement.
- Supporting paragraphs that explain the department in plain language.
- Optional emergency notice for Emergency Response.

### 4. Services offered

- Flat, divider-based list rather than rounded cards.
- Each item contains a short heading and explanatory sentence.

### 5. Who the service may help

- Patient-friendly examples of common reasons someone may be referred or may seek the service.
- Written as general information, not diagnosis advice.

### 6. What to expect

- Step-by-step visit flow from arrival through consultation, examination, testing, treatment planning, or referral.
- Numbered editorial rows with clear headings.

### 7. Preparation guidance

- Practical preparation notes where appropriate.
- Explicit instruction to follow hospital or clinician directions when those differ.
- Services with no special preparation will state that clearly.

### 8. Why choose St. Moses

- Three concise trust points using flat columns and subtle dividers.
- No claims that cannot be supported by the current hospital information.

### 9. Frequently asked questions

- Accessible accordion using native buttons.
- Keyboard operable.
- Correct `aria-expanded` and associated panel IDs.
- Only one or multiple panels may be open; implementation may choose multiple-open behavior for simplicity.

### 10. Related services

- Two or three related service links from `relatedSlugs`.
- Compact editorial list with image thumbnails or text-only rows depending on available space.

### 11. Final CTA

- Large pill-shaped **Book an Appointment** button.
- Frosted-glass telephone button linking to `tel:0243474002`.
- Emergency page additionally emphasizes calling the hospital directly.

## Services Overview Changes

Update `src/pages/Services.jsx` so every service row includes a visible **Read More** link pointing to `/services/${service.slug}`.

The action will:

- Use the current editorial style.
- Remain visible on mobile and desktop.
- Include an arrow icon.
- Have a clear focus state.
- Preserve the existing appointment CTA at the bottom of the overview page.

The current local service array in `Services.jsx` will be removed and replaced with imports from `src/data/services.js`.

## Content Requirements

Each service page will contain substantial content, generally:

- 2–4 overview paragraphs.
- 4–8 service or procedure items.
- 4–7 patient-use examples.
- 4–6 visit-expectation steps.
- 3–6 preparation notes.
- 3 trust points.
- 4–6 FAQs.
- 2–3 related services.

Content must be:

- Clear and readable for the general public.
- Specific enough to be useful but not framed as individualized medical advice.
- Free of guarantees, unsupported statistics, and unsupported equipment claims.
- Consistent with services already shown on the St. Moses website.
- Written in Ghanaian/British English conventions where natural, including terms such as counselling and personalised.

## Medical Safety and Accuracy Boundaries

- Pages will describe general purposes, common workflows, and preparation guidance.
- Pages will not tell visitors that they have a condition.
- Pages will not recommend medication doses or self-treatment.
- Pages will not imply every listed examination or procedure is always available.
- Preparation sections will advise patients to confirm instructions with the hospital.
- Emergency content will direct users with urgent or life-threatening symptoms to call emergency services or the hospital immediately rather than rely on website information.

## SEO and Metadata

Each service record will provide a unique title and description.

The detail page will update:

- `document.title`
- The page meta description, creating it if it does not already exist
- Canonical path when practical within the current client-rendered architecture

Page titles will follow this pattern:

`<Service Name> | St Moses Hospital Pokuasi`

Descriptions will be concise, service-specific, and avoid keyword stuffing.

## Accessibility

- One `h1` per detail page.
- Logical heading order.
- Descriptive image alt text.
- Visible keyboard focus states.
- Minimum 44px interactive targets.
- FAQ controls use semantic buttons and ARIA relationships.
- Sufficient colour contrast on image overlays and glass controls.
- Reduced-motion preferences disable nonessential entrance animations.

## Responsive Behaviour

### Mobile

- Single-column layout.
- Hero image above content.
- Full-width CTAs.
- Generous side padding without card-like framing.
- FAQ rows remain easy to tap.

### Tablet

- Wider text measure and occasional two-column lists.
- Related services may use two columns.

### Desktop

- Large editorial hero.
- Two-column content where it improves scanning.
- Sticky local section index may be added only if it remains simple and does not interfere with the page header; it is not required for the first implementation.

## Component Boundaries

- `src/data/services.js`: all service content and route metadata.
- `src/pages/ServiceDetail.jsx`: route lookup and page composition.
- `src/components/ServiceFaq.jsx`: reusable accessible FAQ accordion.
- `src/components/ServiceRelatedLinks.jsx`: related-service navigation.
- `src/pages/Services.jsx`: overview presentation and Read More actions.
- `src/main.jsx`: dynamic service route registration.

Each component should have one clear responsibility and must not duplicate the service data.

## Error Handling

- Unknown slug: render a service-not-found section rather than crashing or showing a blank screen.
- Missing optional arrays: omit the relevant section cleanly.
- Missing image: use the hospital logo or a neutral service placeholder while preserving layout dimensions.
- Invalid related slug: skip that related item.
- Metadata update failure must not block page rendering.

## Performance

- Detail-page images use `loading="eager"` for the main hero and `loading="lazy"` for related thumbnails.
- Images receive explicit dimensions or aspect-ratio containers to reduce layout shift.
- One reusable page component prevents 15 duplicate component bundles.
- No new runtime dependency is required.
- Service data remains static and tree-shakeable.

## Testing and Verification

### Route verification

- Every supported slug renders the correct title, image, and content.
- Invalid slug renders the not-found state.
- Browser refresh on a detail URL works under the existing deployment configuration or is documented if the host requires SPA fallback rules.

### Interaction verification

- Every Services-page Read More link opens the correct route.
- Appointment links point to `/appointment`.
- Telephone links point to `tel:0243474002`.
- FAQ controls work with pointer and keyboard input.
- Related-service links resolve correctly.

### Visual verification

- Mobile, tablet, laptop, and wide-desktop layouts are checked.
- No horizontal overflow.
- No rounded generic card grid replaces the editorial system.
- Text line lengths remain readable.
- Hero images crop acceptably at all breakpoints.

### Build verification

Run:

```bash
npm clean-install
npm run build
```

The production build must complete without missing exports, invalid imports, or route errors.

## Deployment Consideration

Because the project uses `BrowserRouter`, the production host must serve `index.html` for direct requests to `/services/<slug>`. Existing SPA fallback configuration should be verified before deployment. This work will not switch the application to hash-based routing.

## Acceptance Criteria

The feature is complete when:

1. All 15 services have working detail URLs.
2. Every overview entry has a Read More action.
3. All pages use one consistent reusable editorial template.
4. Each service page contains the approved sections and substantial patient-friendly content.
5. Invalid service URLs fail gracefully.
6. The pages are responsive and keyboard accessible.
7. Metadata changes per service.
8. The existing appointment and phone actions work.
9. The production build passes.
10. No new backend or third-party dependency is introduced.
