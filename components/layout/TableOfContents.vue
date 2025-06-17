<script setup lang="ts">
import type { TocItem } from '~/composables/useToc'

const { tocItems, activeSection, scrollToSection } = useToc('main')
const route = useRoute()

const handleSectionClick = (anchor: string, event: Event) => {
  event.preventDefault()
  scrollToSection(anchor)
}

const handleKeyDown = (anchor: string, event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    scrollToSection(anchor)
  }
}

const isActive = (id: string): boolean => {
  return activeSection.value === id
}

const getIndentClass = (level: number): string => {
  const indentMap: Record<number, string> = {
    1: 'pl-0',
    2: 'pl-3',
    3: 'pl-6',
    4: 'pl-9',
    5: 'pl-12',
    6: 'pl-15'
  }
  return indentMap[level] || 'pl-0'
}

watch(() => route.path, () => {
  nextTick(() => {
  })
})
</script>

<template>
  <div class="p-6">    
    <nav v-if="tocItems.length > 0" class="space-y-1">
      <a
        v-for="item in tocItems"
        :key="item.id"
        :href="item.anchor"
        :class="[
          'block text-sm transition-colors duration-200 py-1 px-2 rounded',
          getIndentClass(item.level),
          isActive(item.id) 
            ? 'text-blue-600 bg-blue-50 font-medium border-l-2 border-blue-600' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        ]"
        :aria-label="`${item.text} bölümüne git`"
        tabindex="0"
        @click="handleSectionClick(item.anchor, $event)"
        @keydown="handleKeyDown(item.anchor, $event)"
      >
        {{ item.text }}
      </a>
    </nav>
  </div>
</template> 