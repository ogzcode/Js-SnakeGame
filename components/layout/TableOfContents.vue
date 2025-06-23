<script setup lang="ts">
import type { TocItem } from '~/composables/useToc'

const { tocItems, activeSection, scrollToSection } = useToc('main')
const route = useRoute()

const emit = defineEmits<{
  closeToc: []
}>()

const handleSectionClick = (anchor: string, event: Event) => {
  event.preventDefault()
  scrollToSection(anchor)
  emit('closeToc')
}

const handleKeyDown = (anchor: string, event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    scrollToSection(anchor)
    emit('closeToc')
  }
}

const isActive = (id: string): boolean => {
  return activeSection.value === id
}

const getIndentClass = (level: number): string => {
  const indentMap: Record<number, string> = {
    1: 'pl-2',
    2: 'pl-4',
    3: 'pl-6',
    4: 'pl-8',
    5: 'pl-10',
    6: 'pl-12'
  }
  return indentMap[level] || 'pl-0'
}

watch(() => route.path, () => {
  nextTick(() => {
  })
})
</script>

<template>
  <div class="p-4 lg:p-6">
    <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Table of Contents
    </h3>
    
    <nav v-if="tocItems.length > 0" class="space-y-1 border-l border-gray-200 dark:border-gray-700">
      <a
        v-for="item in tocItems"
        :key="item.id"
        :href="item.anchor"
        :class="[
          'block text-sm py-1 -ml-px border-l-2 transition-colors duration-200',
          getIndentClass(item.level),
          isActive(item.id) 
            ? 'text-pink-500 dark:text-pink-400 border-pink-500 dark:border-pink-400 font-medium' 
            : 'text-gray-500 dark:text-gray-400 border-transparent hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
        ]"
        :aria-label="`Go to ${item.text}`"
        tabindex="0"
        @click="handleSectionClick(item.anchor, $event)"
        @keydown="handleKeyDown(item.anchor, $event)"
      >
        {{ item.text }}
      </a>
    </nav>
    
    <div v-else class="text-sm text-gray-500 dark:text-gray-400">
      No headings found in this page.
    </div>
  </div>
</template> 