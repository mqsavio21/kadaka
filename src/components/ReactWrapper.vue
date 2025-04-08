<template>
  <div ref="reactRoot"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { createRoot } from 'react-dom/client'

const props = defineProps({
  component: {
    type: Object,
    required: true
  },
  props: {
    type: Object,
    default: () => ({})
  }
})

const reactRoot = ref(null)

onMounted(() => {
  const root = createRoot(reactRoot.value)
  root.render(props.component(props.props))
})
</script> 