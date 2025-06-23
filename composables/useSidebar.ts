import { ref } from 'vue'

const isSidebarOpen = ref(false)
const isMobile = ref(false)

export const useSidebar = () => {
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  const setMobile = (mobile: boolean) => {
    isMobile.value = mobile
    if (!mobile) {
      isSidebarOpen.value = false
    }
  }

  return {
    isSidebarOpen: readonly(isSidebarOpen),
    isMobile: readonly(isMobile),
    toggleSidebar,
    openSidebar,
    closeSidebar,
    setMobile
  }
} 