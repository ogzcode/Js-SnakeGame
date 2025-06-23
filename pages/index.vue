<script setup lang="ts">
import { navigateTo, useAsyncData } from 'nuxt/app'

definePageMeta({
  layout: 'home'
})

const { data: navigation } = await useAsyncData('content', () => queryCollection('content').all())

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
            <!-- Theme Switcher -->
            <div class="flex justify-end mb-8">
                <ThemeSwitcher />
            </div>

            <!-- Hero Section -->
            <div class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Dokümantasyon <span class="text-blue-600 dark:text-blue-400">Merkezi</span>
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Modern ve kullanıcı dostu dokümantasyon sistemi. Tüm bilgilere kolayca erişin ve projelerinizi hızlandırın.
                </p>
                
                <!-- Başla Butonu -->
                <button 
                    @click="handleGetStarted"
                    @keydown="handleGetStartedKeyDown"
                    class="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    tabindex="0"
                    aria-label="Başlangıç rehberine git"
                >
                    <span class="mr-2">🚀</span>
                    Başla
                </button>
            </div>

            <!-- Özellikler -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">📚</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Kolay Navigasyon</h3>
                    <p class="text-gray-600 dark:text-gray-300">Dinamik sidebar ve içindekiler tablosu ile hızlı gezinti</p>
                </div>
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">🎨</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Modern Tasarım</h3>
                    <p class="text-gray-600 dark:text-gray-300">Responsive ve karanlık mod destekli arayüz</p>
                </div>
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="text-4xl mb-4">⚡</div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Hızlı Arama</h3>
                    <p class="text-gray-600 dark:text-gray-300">İçeriklerde hızlı arama ve filtreleme</p>
                </div>
            </div>

            <!-- Mevcut Sayfalar -->
            <div class="space-y-4">
                <h2 class="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8 text-center">Mevcut Dokümantasyon</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="page in navigation" :key="page?.path"
                        class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-200 bg-white dark:bg-gray-800 hover:-translate-y-1">
                        <NuxtLink :to="page.path" class="block group" tabindex="0"
                            :aria-label="`${page.title || page.path} sayfasına git`"
                            @keydown.enter="$router.push(page.path)">
                            <div class="flex items-start justify-between mb-3">
                                <span class="text-2xl">📄</span>
                                <span class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                                    {{ page.meta?.category || 'Genel' }}
                                </span>
                            </div>
                            <h3 class="text-xl font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 mb-2">
                                {{ page.title || page.path }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                {{ page.description || 'Bu sayfa hakkında açıklama mevcut değil.' }}
                            </p>
                            <span class="inline-flex items-center text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                Sayfayı görüntüle 
                                <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
