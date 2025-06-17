<script setup lang="ts">
definePageMeta({
  layout: 'home'
})

const { data: navigation } = await useAsyncData('content', () => queryCollection('content').all())
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div class="max-w-4xl mx-auto p-6">
            <div class="mb-8 flex justify-between items-start">
                <div>
                    <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Ana Sayfa</h1>
                    <p class="text-lg text-gray-600 dark:text-gray-300">
                        Hoş geldiniz! Aşağıda mevcut dokümantasyon sayfalarını bulabilirsiniz.
                    </p>
                </div>
                <ThemeSwitcher />
            </div>

            <div class="space-y-4">
                <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Mevcut Sayfalar</h2>
                <div class="grid gap-4">
                    <div v-for="page in navigation" :key="page?.path"
                        class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:shadow-gray-800/20 transition-shadow duration-200 bg-white dark:bg-gray-800">
                        <NuxtLink :to="page.path" class="block group" tabindex="0"
                            :aria-label="`${page.title || page.path} sayfasına git`"
                            @keydown.enter="$router.push(page.path)">
                            <h3 class="text-xl font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 mb-2">
                                {{ page.title || page.path }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                {{ page.description || 'Bu sayfa hakkında açıklama mevcut değil.' }}
                            </p>
                            <span class="inline-block mt-2 text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                Sayfayı görüntüle →
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
