import test from 'node:test'
import assert from 'node:assert/strict'
import { PAGE_SEO, SITE_URL } from '../src/seo.js'

test('SEO configuration uses the production site and exposes the requested sitelink pages', () => {
  assert.equal(SITE_URL, 'https://www.stmosescommunityhospital.com')
  assert.deepEqual(Object.keys(PAGE_SEO), ['/', '/services', '/leadership', '/contact'])

  for (const path of ['/services', '/leadership', '/contact']) {
    assert.equal(PAGE_SEO[path].canonical, `${SITE_URL}${path}`)
    assert.ok(PAGE_SEO[path].title.length > 20)
    assert.ok(PAGE_SEO[path].description.length > 70)
  }
})
