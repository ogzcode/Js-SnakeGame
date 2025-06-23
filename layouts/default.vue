<script setup lang="ts">
import Sidebar from '~/components/layout/Sidebar.vue';
import TableOfContents from '~/components/layout/TableOfContents.vue';
import Topbar from '~/components/layout/Topbar.vue';

const { isSidebarOpen, isMobile, closeSidebar, setMobile } = useSidebar()

const checkMobile = () => {
  if (process.client) {
    const mobile = window.innerWidth < 768
    setMobile(mobile)
  }
}

const handleResize = () => {
  checkMobile()
}

const handleOverlayClick = () => {
  closeSidebar()
}

const handleOverlayKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeSidebar()
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
    <div class="bg-white dark:bg-gray-900 min-h-screen">
        <Topbar />
        
        <div 
            v-if="isMobile && isSidebarOpen"
            class="fixed inset-0 bg-black/50 z-20 md:hidden"
            aria-label="Menüyü kapatmak için tıklayın"
            tabindex="0"
            @click="handleOverlayClick"
            @keydown="handleOverlayKeyDown"
        ></div>
        

        
        <div class="max-w-7xl mx-auto flex relative">
            <div 
                :class="[
                    'bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out',
                    'md:w-64 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto md:shrink-0 md:translate-x-0',
                    'md:relative md:z-auto',
                    'fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-30 overflow-y-auto sidebar-mobile',
                    isMobile && isSidebarOpen ? 'translate-x-0' : isMobile ? '-translate-x-full' : 'translate-x-0'
                ]"
            >
                <Sidebar />
            </div>

            <div class="flex-1 min-w-0">
                <main class="max-w-4xl mx-auto px-6 py-8">
                    <slot />
                </main>
            </div>

            <div class="hidden xl:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto shrink-0">
                <TableOfContents />
            </div>
        </div>
        

    </div>
</template>