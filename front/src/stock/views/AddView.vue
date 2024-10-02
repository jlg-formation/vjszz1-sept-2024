<script setup lang="ts">
import { reactive } from 'vue'
import type { NewArticle } from '../interfaces/Article'

const handleSubmit = () => {
  console.log('submit')
}

const newArticle = reactive<NewArticle>({
  name: 'Truc',
  price: 0,
  qty: 0
})
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
      </label>
      <button class="primary">
        <FontAwesomeIcon icon="fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped></style>
