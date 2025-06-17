<script setup lang="ts">
// Content collection'dan navigation verilerini al
const { data: navigation } = await useAsyncData('sidebar-content', () => queryCollection('content').all())
</script>

<template>
    <div class="h-full bg-gray-50">
        <!-- Logo/Brand Area -->
        <div class="p-6 border-b border-gray-200">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span class="text-white text-sm font-bold">📚</span>
                </div>
                <span class="text-lg font-semibold text-gray-900">Dokümantasyon</span>
            </div>
        </div>

        <!-- Navigation Menu -->
        <div class="p-4">
            <!-- Ana Sayfa -->
            <div class="mb-6">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Ana Menü</h3>
                <ul class="space-y-1">
                    <li>
                        <NuxtLink 
                            to="/" 
                            class="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            tabindex="0"
                            aria-label="Ana sayfaya git"
                            @keydown.enter="$router.push('/')"
                        >
                            🏠 Ana Sayfa
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- İçerikler Section -->
            <div class="mb-6" v-if="navigation && navigation.length > 0">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">İçerikler</h3>
                <ul class="space-y-1">
                    <li v-for="page in navigation" :key="page.path">
                        <NuxtLink 
                            :to="page.path" 
                            class="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            tabindex="0"
                            :aria-label="`${page.title || page.path} sayfasına git`"
                            @keydown.enter="$router.push(page.path)"
                        >
                            <span class="mr-2">📄</span>
                            {{ page.title || page.path }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Boş durumda gösterilecek -->
            <div v-else class="mb-6">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">İçerikler</h3>
                <p class="text-sm text-gray-500 px-3 py-2">Henüz içerik bulunmuyor.</p>
            </div>
        </div>
    </div>
</template>