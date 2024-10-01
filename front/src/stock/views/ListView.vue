<script setup lang="ts">
import { useArticleStore } from '../article.store'

const articleStore = useArticleStore()
articleStore.refresh()
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
          <tr v-if="articleStore.articles === undefined">
            <td colspan="3">Loading...</td>
          </tr>
          <tr v-else v-for="article in articleStore.articles" :key="article.id">
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
