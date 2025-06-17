<script setup lang="ts">
import Sidebar from '~/components/layout/sidebar.vue';
import TableOfContents from '~/components/layout/TableOfContents.vue';
</script>

<template>
    <div class="bg-white dark:bg-gray-900 min-h-screen flex">
        <!-- Sol Sidebar - Ana Navigasyon -->
        <div class="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0 h-full overflow-y-auto z-10">
            <Sidebar />
        </div>
        
        <!-- Ana İçerik Alanı -->
        <div class="flex-1 ml-64 mr-64">
            <main class="max-w-4xl mx-auto px-6 py-8">
                <slot />
            </main>
        </div>
        
        <!-- Sağ Sidebar - Sayfa İçi Navigasyon -->
        <div class="w-64 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 fixed right-0 top-0 h-full overflow-y-auto z-10">
            <TableOfContents />
        </div>
    </div>
</template>