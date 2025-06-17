import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  },
  markdown: {
    anchorLinks: {
      depth: 6,
      exclude: []
    }
  }
})
