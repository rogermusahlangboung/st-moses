import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { replaceLegacyBranding } from './brand.config.js'

function hospitalBrandingPlugin() {
  return {
    name: 'st-moses-community-hospital-branding',
    enforce: 'pre',
    transform(code, id) {
      const cleanId = id.split('?')[0]
      if (cleanId.includes('/node_modules/')) return null
      if (!/\.[cm]?[jt]sx?$/.test(cleanId)) return null

      const updatedCode = replaceLegacyBranding(code)
      if (updatedCode === code) return null

      return { code: updatedCode, map: null }
    },
    transformIndexHtml(html) {
      return replaceLegacyBranding(html)
    },
  }
}

export default defineConfig({
  plugins: [hospitalBrandingPlugin(), react()],
  server: { port: 5173, open: true },
})
