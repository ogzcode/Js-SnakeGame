<template>
      <div class="border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
    <!-- Tab Headers -->
          <div class="flex border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
          activeTab === tab.id
            ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-stone-900'
            : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
            <div class="p-4 bg-white dark:bg-stone-900">
      <div v-if="activeTab === 'preview'" class="preview-content">
        <slot name="preview">
          <p class="text-stone-500 dark:text-stone-400">Preview content will appear here</p>
        </slot>
      </div>
      
      <div v-if="activeTab === 'code'" class="code-content">
        <slot name="code">
          <pre class="bg-stone-100 dark:bg-stone-800 p-4 rounded text-sm overflow-x-auto"><code>{{ codeContent }}</code></pre>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  id: string
  label: string
}

interface Props {
  codeContent?: string
}

const props = withDefaults(defineProps<Props>(), {
  codeContent: ''
})

const activeTab = ref('preview')

const tabs: Tab[] = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' }
]
</script> 