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
            <div class="min-h-screen bg-white dark:bg-stone-900 transition-colors duration-200">
        <div class="mx-auto">
            <article class="prose prose-lg max-w-none">
                <ContentRenderer 
                    v-if="page" 
                    :value="page" 
                    class="prose prose-gray max-w-none"
                />
                <div v-else class="text-center py-8">
                    <p class="text-stone-500 dark:text-stone-400">İçerik bulunamadı</p>
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>

</style>