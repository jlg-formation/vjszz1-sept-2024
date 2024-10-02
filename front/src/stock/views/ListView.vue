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

const handleDeleteSelected = async () => {
  try {
    await articleStore.remove([...selectedArticles.value])
    selectedArticles.value.clear()
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
      return
    }
    errorMsg.value = 'Erreur inconnue'
  }
}

const handleRefresh = async () => {
  await articleStore.refresh()
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <AsyncButton title="Rafraîchir" icon="fa-rotate-right" :action="handleRefresh" />
        <RouterLink to="/stock/add" class="button" title="Ajouter">
          <FontAwesomeIcon icon="fa-plus" />
        </RouterLink>
        <button
          title="Supprimer"
          v-show="selectedArticles.size > 0"
          @click="handleDeleteSelected()"
        >
          <FontAwesomeIcon icon="fa-trash-can" />
        </button>
      </nav>
      <div class="error">
        <strong>{{ errorMsg }}</strong>
      </div>
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

  nav {
    display: flex;
    gap: 0.25rem;
  }

  div.error {
    height: 3em;
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
