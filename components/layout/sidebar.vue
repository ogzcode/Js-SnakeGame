<script setup lang="ts">
const { data: navigation } = await useAsyncData('sidebar-content', () => queryCollection('content').all())
const { closeSidebar } = useSidebar()
const route = useRoute()

const groupedContent = computed(() => {
  if (!navigation.value) return []

  const groups: Record<string, any[]> = {}

  navigation.value.forEach((page: any) => {
    const pathParts = page.path.split('/')
    const folderName = pathParts.length > 1 ? pathParts[1] : 'Home'

    let displayName = folderName
    switch (folderName) {
      case 'get-started':
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

  const groupDetails = Object.keys(groups).map(groupName => {
    const pages = groups[groupName]

    pages.sort((a, b) => {
      const orderA = a.meta?.order ?? 999
      const orderB = b.meta?.order ?? 999
      if (orderA !== orderB) {
        return orderA - orderB
      }
      return (a.title || a.path).localeCompare(b.title || b.path)
    })

    const groupOrder = pages.length > 0 ? (pages[0].meta?.order ?? 999) : 999

    return {
      name: groupName,
      order: groupOrder,
      pages: pages
    }
  })

  groupDetails.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order
    }
    return a.name.localeCompare(b.name)
  })

  return groupDetails
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

const isActive = (path: string): boolean => {
  return route.path === path
}
</script>

<template>
    <div class="h-full border-r border-stone-200 dark:border-stone-700">
        <div class="p-4">
            <div v-if="navigation && navigation.length > 0">
                <div v-for="(group, index) in groupedContent" :key="group.name" class="mb-6">
                    <h3 class="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
                        {{ group.name }}
                    </h3>
                    <nav class="space-y-1 border-l border-stone-200 dark:border-stone-700">
                        <NuxtLink 
                            v-for="page in group.pages" 
                            :key="page.path"
                            :to="page.path" 
                            :class="[
                                'block text-sm py-2 pl-4 -ml-px border-l-2 transition-colors duration-200',
                                isActive(page.path) 
                                    ? 'text-pink-500 dark:text-pink-400 border-pink-500 dark:border-pink-400 font-medium' 
                                    : 'text-stone-700 dark:text-stone-300 border-transparent hover:border-stone-400 dark:hover:border-stone-500 hover:text-stone-900 dark:hover:text-white'
                            ]"
                            tabindex="0"
                            :aria-label="`${page.title || page.path} sayfasına git`"
                            @click="handleLinkClick"
                            @keydown="handleLinkKeyDown(page.path, $event)"
                        >
                            <span class="truncate">{{ page.title || page.path }}</span>
                        </NuxtLink>
                    </nav>
                    <!-- Grup ayırıcı çizgi (son grup değilse) -->
                    <div v-if="index < groupedContent.length - 1" class="mt-6 border-b border-stone-200 dark:border-stone-700"></div>
                </div>
            </div>

            <div v-else class="mb-6">
                <h3 class="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">Content</h3>
                <p class="text-sm text-stone-500 dark:text-stone-400 px-3 py-2">No content found.</p>
            </div>
        </div>
    </div>
</template>