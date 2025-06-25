<script setup lang="ts">

const { toggleSidebar, isMobile } = useSidebar()

const handleMenuClick = () => {
    toggleSidebar()
}

const handleMenuKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleMenuClick()
    }
}
</script>

<template>
    <div class="bg-white dark:bg-stone-900 sticky top-0 z-30">
        <div class="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200 dark:border-stone-700">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-4">
                    <button
                        class="w-8 h-8 flex items-center justify-center md:hidden rounded-md text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors duration-200"
                        aria-label="Open/Close menu" tabindex="0" @click="handleMenuClick" @keydown="handleMenuKeyDown">
                        <Icon name="heroicons:bars-3" style="width: 20px; height: 20px;" />
                    </button>

                    <div class="font-semibold text-stone-900 dark:text-white">
                        <NuxtLink to="/" class="flex items-center gap-2">
                            <img src="/logo.png" alt="Logo" class="h-8 w-8" />
                            <span class="text-2xl font-bold">Docs</span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    </div>
</template>