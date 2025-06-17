export interface TocItem {
  id: string
  text: string
  level: number
  anchor: string
}

export const useToc = (containerSelector: string = 'main') => {
  const tocItems = ref<TocItem[]>([])
  const activeSection = ref<string>('')
  let mutationObserver: MutationObserver | null = null

  const extractToc = () => {
    setTimeout(() => {
      const container = document.querySelector(containerSelector)
      if (!container) {
        console.warn(`Container with selector "${containerSelector}" not found`)
        return
      }
      
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const items: TocItem[] = []

      headings.forEach((heading, index) => {
        const text = heading.textContent?.trim() || ''
        const level = parseInt(heading.tagName.substring(1))
        const id = heading.id || slugify(text)
        
        if (!heading.id) {
          heading.id = id
        }

        items.push({
          id: id,
          text: text,
          level: level,
          anchor: `#${id}`
        })
      })

      tocItems.value = items
    }, 100)
  }

  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const updateActiveSection = () => {
    const container = document.querySelector(containerSelector)
    if (!container) return
    
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const scrollPosition = window.scrollY + 100

    let currentSection = ''
    
    headings.forEach((heading) => {
      const element = heading as HTMLElement
      if (element.offsetTop <= scrollPosition) {
        currentSection = element.id
      }
    })

    activeSection.value = currentSection
  }

  const initializeScrollSpy = () => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()
  }

  const cleanupScrollSpy = () => {
    window.removeEventListener('scroll', updateActiveSection)
  }

  const setupMutationObserver = () => {
    if (mutationObserver) {
      mutationObserver.disconnect()
    }

    const container = document.querySelector(containerSelector)
    if (!container) return

    mutationObserver = new MutationObserver((mutations) => {
      const hasContentChanges = mutations.some(mutation => 
        mutation.type === 'childList' && 
        mutation.addedNodes.length > 0
      )
      
      if (hasContentChanges) {
        extractToc()
      }
    })

    mutationObserver.observe(container, {
      childList: true,
      subtree: true
    })
  }

  const route = useRoute()
  
  const initializeToc = () => {
    nextTick(() => {
      extractToc()
      initializeScrollSpy()
      setupMutationObserver()
    })
  }

  watch(() => route.path, () => {
    cleanupScrollSpy()
    tocItems.value = []
    activeSection.value = ''
    initializeToc()
  }, { immediate: false })

  onMounted(() => {
    initializeToc()
  })

  onUnmounted(() => {
    cleanupScrollSpy()
    if (mutationObserver) {
      mutationObserver.disconnect()
    }
  })

  return {
    tocItems,
    activeSection,
    extractToc,
    scrollToSection,
    initializeScrollSpy,
    cleanupScrollSpy
  }
}