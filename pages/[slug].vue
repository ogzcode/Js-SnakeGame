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
    <div class="max-w-4xl mx-auto p-6">
        <!-- Geri Dönüş Linki -->
        <div class="mb-6">
            <NuxtLink 
                to="/"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                tabindex="0"
                aria-label="Ana sayfaya dön"
                @keydown.enter="$router.push('/')"
            >
                <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
            </NuxtLink>
        </div>

        <!-- Content Render -->
        <article class="prose prose-lg max-w-none">
            <ContentRenderer 
                v-if="page" 
                :value="page" 
                class="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-pre:bg-gray-900 prose-pre:text-gray-100"
            />
            <div v-else class="text-center py-8">
                <p class="text-gray-500">İçerik bulunamadı</p>
            </div>
        </article>
    </div>
</template>

<style scoped>

</style>