<script setup lang="ts">
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <main>
    <h1>Gérer efficacement votre stock</h1>
    <RouterLink to="/stock" class="button primary">
      <span>Voir le stock</span>
      <FontAwesomeIcon :icon="faChevronRight" />
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
</style>
