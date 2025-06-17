<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'default'
})

const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Sayfa bulunamadı'
  })
}

useSeoMeta({
  title: page.value?.title || 'Sayfa',
  ogTitle: page.value?.title || 'Sayfa',
  description: page.value?.description || 'Dokümantasyon sayfası',
  ogDescription: page.value?.description || 'Dokümantasyon sayfası',
})
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div class="max-w-4xl mx-auto p-6">
            <div class="mb-6 flex justify-between items-center">
                <NuxtLink 
                    to="/"
                    class="inline-flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 transition-colors duration-200"
                    tabindex="0"
                    aria-label="Ana sayfaya dön"
                    @keydown.enter="$router.push('/')"
                >
                    <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
                    Ana Sayfaya Dön
                </NuxtLink>
                <ThemeSwitcher />
            </div>

            <article class="prose prose-lg max-w-none">
                <ContentRenderer 
                    v-if="page" 
                    :value="page" 
                    class="prose prose-gray max-w-none"
                />
                <div v-else class="text-center py-8">
                    <p class="text-gray-500 dark:text-gray-400">İçerik bulunamadı</p>
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>

</style>