<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useArticleStore } from '../article.store'
import type { Article } from '../interfaces/Article'

const errorMsg = ref('')
const selectedArticles = ref(new Set<Article['id']>())

const articleStore = useArticleStore()
onMounted(async () => {
  if (articleStore.articles !== undefined) {
    return
  }
  try {
    await articleStore.refresh()
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
      return
    }
    errorMsg.value = 'Erreur inconnue'
  }
})

const handleSelect = (article: Article) => {
  selectedArticles.value.delete(article.id) || selectedArticles.value.add(article.id)
}
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
        <button title="Supprimer" v-show="selectedArticles.size > 0">
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
            <td colspan="3">
              <div v-if="errorMsg === ''" class="loading">
                <FontAwesomeIcon icon="fa-circle-notch" :spin="true" />
                <span>Loading...</span>
              </div>
              <div v-else class="error">
                <strong>{{ errorMsg }}</strong>
              </div>
            </td>
          </tr>
          <tr
            v-else
            v-for="article in articleStore.articles"
            :key="article.id"
            @click="handleSelect(article)"
            :class="{ selected: selectedArticles.has(article.id) }"
          >
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

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.error {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
