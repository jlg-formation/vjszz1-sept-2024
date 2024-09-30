<script setup lang="ts"></script>

<template>
  <main>
    <h1>Gérer efficacement votre stock</h1>
    <RouterLink to="/stock" class="button primary">Voir le stock</RouterLink>
    <button class="button primary">Voir le stock</button>
    <RouterLink to="/stock" class="button">Voir le stock</RouterLink>
    <button href="dd" class="button" disabled>Voir le stock</button>
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
