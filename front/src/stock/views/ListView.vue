<script setup lang="ts">
import { ref } from 'vue'
import type { Article } from '../interfaces/Article'

const articles = ref<Article[]>([
  {
    id: 'a1',
    name: 'Tournevis',
    price: 3.99,
    qty: 345
  },
  {
    id: 'a2',
    name: 'Pelle',
    price: 5,
    qty: 12
  }
])

setTimeout(() => {
  articles.value.push({
    id: 'a3',
    name: 'xxx',
    price: 5,
    qty: 12
  })
}, 2000)
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir">
          <FontAwesomeIcon icon="fa-rotate-right" />
        </button>
        <RouterLink to="/stock/add" class="button" title="Ajouter">
          <FontAwesomeIcon icon="fa-plus" />
        </RouterLink>
        <button title="Supprimer">
          <FontAwesomeIcon icon="fa-trash-can" />
        </button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td class="name">{{ article.name }}</td>
            <td class="price text-right">{{ article.price }} €</td>
            <td class="qty text-right">{{ article.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
div.content {
  display: flex;
  flex-flow: column;
  gap: 3em;

  nav {
    display: flex;
    gap: 0.25rem;
  }
}
</style>
