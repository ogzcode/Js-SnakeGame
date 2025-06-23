<script setup lang="ts">
import { navigateTo } from 'nuxt/app'

definePageMeta({
  layout: 'home'
})

const handleGetStarted = () => {
  navigateTo('/getting-startted/getting-started')
    }

const handleGetStartedKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    navigateTo('/getting-startted/getting-started')
  }
}
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div class="max-w-6xl mx-auto p-6">
            <div class="flex justify-end mb-8">
                <ThemeSwitcher />
            </div>

            <div class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Doc Name <span class="text-blue-600 dark:text-blue-400">Center</span>
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Doc Name Center is a documentation center for Doc Name. It is a platform for storing and sharing documentation for Doc Name.    
                </p>
                
                <button 
                    @click="handleGetStarted"
                    @keydown="handleGetStartedKeyDown"
                    class="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    tabindex="0"
                    aria-label="Get Started"
                >
                    <span class="mr-2">🚀</span>
                    Get Started
                </button>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">📚</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Easy Navigation</h3>
                    <p class="text-gray-600 dark:text-gray-300">Dynamic sidebar and table of contents for quick navigation</p>
                </div>
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">🎨</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Modern Design</h3>
                    <p class="text-gray-600 dark:text-gray-300">Responsive and dark mode supported interface</p>
                </div>
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">⚡</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Quick Search</h3>
                    <p class="text-gray-600 dark:text-gray-300">Quick search and filtering in content</p>
                </div>
            </div>
        </div>
    </div>
</template>
