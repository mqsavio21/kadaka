<script setup>
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const emit = defineEmits(['loading-complete'])

// Preload the logo image
const preloadImage = () => {
  const img = new Image()
  img.src = '/images/kadakalogo.png'
}

onMounted(() => {
  preloadImage()
  setTimeout(() => {
    isLoading.value = false
    emit('loading-complete')
  }, 2000) // Show loading screen for 2 seconds
})
</script>

<template>
  <Transition name="fade">
    <div 
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a1512] via-[#3d2f25] to-[#1a1512] animate-gradient-x"></div>
      
      <!-- Logo container -->
      <div class="relative z-10 flex flex-col items-center">
        <img 
          src="/images/kadakalogo.png" 
          alt="Kadaka Logo" 
          class="w-32 sm:w-40 md:w-48 h-auto animate-pulse"
          loading="eager"
          fetchpriority="high"
        />
        <div class="mt-4 text-[#d4a574] text-lg sm:text-xl font-serif animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
  background-size: 200% 200%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 