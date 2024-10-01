<script setup lang="ts"></script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form>
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
