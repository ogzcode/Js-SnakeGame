<script setup lang="ts">
const { data: navigation } = await useAsyncData('sidebar-content', () => queryCollection('content').all())
const { closeSidebar } = useSidebar()

const groupedContent = computed(() => {
  if (!navigation.value) return {}
  
  const groups: Record<string, any[]> = {}
  
  navigation.value.forEach((page: any) => {
    const pathParts = page.path.split('/')
    const folderName = pathParts.length > 1 ? pathParts[1] : 'Home'
    
    let displayName = folderName
    switch (folderName) {
      case 'getting-startted':
        displayName = 'Getting Started'
        break
      case 'api':
        displayName = 'API'
        break
      default:
        displayName = page.meta?.category || folderName
    }
    
    if (!groups[displayName]) {
      groups[displayName] = []
    }
    groups[displayName].push(page)
  })
  
  Object.keys(groups).forEach(groupName => {
    groups[groupName].sort((a, b) => {
      const orderA = a.meta?.order ?? 999
      const orderB = b.meta?.order ?? 999
      
      if (orderA !== orderB) {
        return orderA - orderB
      }
      
      return (a.title || a.path).localeCompare(b.title || b.path)
    })
  })
  
  return groups
})

const handleLinkClick = () => {
  closeSidebar()
}

const handleLinkKeyDown = (path: string, event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    navigateTo(path)
    closeSidebar()
  }
}
</script>

<template>
    <div class="h-full border-r border-gray-200 dark:border-gray-700">
        <div class="p-4">
            <div class="mb-6">
                <NuxtLink 
                    to="/" 
                    class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    tabindex="0"
                    aria-label="Go to home"
                    @click="handleLinkClick"
                    @keydown="handleLinkKeyDown('/', $event)"
                >
                    <span class="mr-2">🏠</span>
                    Home
                </NuxtLink>
            </div>

            <div v-if="navigation && navigation.length > 0">
                <div v-for="(pages, groupName) in groupedContent" :key="groupName" class="mb-6">
                    <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        {{ groupName }}
                    </h3>
                    <ul class="space-y-1">
                        <li v-for="page in pages" :key="page.path">
                            <NuxtLink 
                                :to="page.path" 
                                class="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                                tabindex="0"
                                :aria-label="`${page.title || page.path} sayfasına git`"
                                @click="handleLinkClick"
                                @keydown="handleLinkKeyDown(page.path, $event)"
                            >
                                <span class="mr-2">📄</span>
                                <span class="truncate">{{ page.title || page.path }}</span>
                                <svg class="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div v-else class="mb-6">
                <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Content</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 px-3 py-2">No content found.</p>
            </div>
        </div>
    </div>
</template>