<template>
  <button
    @click="handleToggle"
    @keydown.enter="handleToggle"
    @keydown.space.prevent="handleToggle"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    tabindex="0"
    class="relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-stone-800 dark:border-stone-600 dark:hover:bg-stone-700"
  >
    <Icon 
      v-if="isDark" 
      name="heroicons:sun" 
      class="w-6 h-6 text-yellow-500"
      style="width: 20px; height: 20px;"
    />
    <Icon 
      v-else 
      name="heroicons:moon" 
      class="w-6 h-6 text-stone-600 dark:text-stone-300"
      style="width: 20px; height: 20px;"
    />
  </button>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()

const handleToggle = () => {
  toggleTheme()
}
</script> 