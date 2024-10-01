import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Article } from './interfaces/Article'
import { api } from './api'

export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref<Article[] | undefined>(undefined)

  const refresh = async () => {
    articles.value = await api.retrieveAll()
  }

  return { articles, refresh }
})
