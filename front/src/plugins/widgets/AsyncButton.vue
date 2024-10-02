<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const isDoing = ref(false)

const props = defineProps<{
  title: string
  icon: FontAwesomeIconProps['icon']
  action: () => Promise<void>
}>()

const handleAction = async () => {
  console.log('start action')
  isDoing.value = true
  await props.action()
  console.log('finished action')
  isDoing.value = false
}
</script>

<template>
  <button :title="props.title" @click="handleAction()" :disabled="isDoing">
    <FontAwesomeIcon :icon="isDoing ? 'fa-circle-notch' : props.icon" :spin="isDoing" />
  </button>
</template>
