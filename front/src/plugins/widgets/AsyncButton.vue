<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const isDoing = ref(false)

const props = defineProps<{
  title?: string
  icon: FontAwesomeIconProps['icon']
  action: () => Promise<void>
}>()

const emit = defineEmits<{
  (e: 'error', message: string): void
  (e: 'start'): void
}>()

const handleAction = async () => {
  try {
    console.log('start action')
    emit('start')
    isDoing.value = true
    await props.action()
    console.log('finished action')
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      emit('error', err.message)
    }
  } finally {
    isDoing.value = false
  }
}
</script>

<template>
  <button :title="props.title" @click.prevent="handleAction()" :disabled="isDoing">
    <FontAwesomeIcon :icon="isDoing ? 'fa-circle-notch' : props.icon" :spin="isDoing" />
    <slot></slot>
  </button>
</template>
