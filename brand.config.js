export const BRAND_NAME = 'St Moses Community Hospital'

export const BRAND_DESCRIPTION =
  'St Moses Community Hospital provides compassionate, dependable healthcare in Pokuasi, Ghana, including general OPD, maternity, diagnostics, specialist clinics and emergency care.'

export const BRAND_IMAGE = '/logo.png'

const LEGACY_BRAND_NAMES = ['St. Moses Hospital', 'St Moses Hospital']

export function replaceLegacyBranding(value) {
  if (typeof value !== 'string') return value

  return LEGACY_BRAND_NAMES.reduce(
    (updatedValue, legacyName) => updatedValue.split(legacyName).join(BRAND_NAME),
    value,
  )
}
