export const BRAND_NAME = 'St Moses Community Hospital'
export const LOCATION_NAME = 'Pokuase'

export const BRAND_DESCRIPTION =
  `St Moses Community Hospital provides compassionate, dependable healthcare in ${LOCATION_NAME}, Ghana, including general OPD, maternity, diagnostics, specialist clinics and emergency care.`

export const BRAND_IMAGE = '/logo.png'

const BRAND_TOKEN = '__ST_MOSES_COMMUNITY_HOSPITAL__'

export function replaceLegacyBranding(value) {
  if (typeof value !== 'string') return value

  return value
    .replace(/St\.? Moses Community Hospital/gi, BRAND_TOKEN)
    .replace(/St\.? Moses Hospital/gi, BRAND_TOKEN)
    .replace(/\bSt\.? Moses\b/gi, BRAND_TOKEN)
    .replace(/\bPokuasi\b/gi, LOCATION_NAME)
    .split(BRAND_TOKEN)
    .join(BRAND_NAME)
}
