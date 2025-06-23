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
    <div class="bg-white dark:bg-gray-900 sticky top-0 z-30">
        <div class="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 border border-t-0 border-dashed border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-4">
                    <button
                        class="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        aria-label="Open/Close menu"
                        tabindex="0"
                        @click="handleMenuClick"
                        @keydown="handleMenuKeyDown"
                    >
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    <div class="font-semibold text-gray-900 dark:text-white">
                        Documentation
                    </div>
                </div>
                
                <div class="flex items-center space-x-4">
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    </div>
</template>