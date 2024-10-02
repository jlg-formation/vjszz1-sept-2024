<script setup lang="ts">
const handleSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" />
      </label>
      <button class="primary">
        <FontAwesomeIcon icon="fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped></style>
