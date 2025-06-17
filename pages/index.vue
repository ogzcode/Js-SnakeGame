<script setup lang="ts">
definePageMeta({
  layout: 'home'
})

const { data: navigation } = await useAsyncData('content', () => queryCollection('content').all())
</script>

<template>
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-8">Ana Sayfa</h1>
        <p class="text-lg text-gray-600 mb-8">
            Hoş geldiniz! Aşağıda mevcut dokümantasyon sayfalarını bulabilirsiniz.
        </p>

        <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Mevcut Sayfalar</h2>
            <div class="grid gap-4">
                <div v-for="page in navigation" :key="page?.path"
                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <NuxtLink :to="page.path" class="block group" tabindex="0"
                        :aria-label="`${page.title || page.path} sayfasına git`"
                        @keydown.enter="$router.push(page.path)">
                        <h3 class="text-xl font-medium text-blue-600 group-hover:text-blue-800 mb-2">
                            {{ page.title || page.path }}
                        </h3>
                        <p class="text-gray-600">
                            {{ page.description || 'Bu sayfa hakkında açıklama mevcut değil.' }}
                        </p>
                        <span class="inline-block mt-2 text-sm text-blue-500 group-hover:text-blue-700">
                            Sayfayı görüntüle →
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
