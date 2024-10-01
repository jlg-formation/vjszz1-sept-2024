import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Article } from './interfaces/Article'
import { api } from './apiClient'

export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref<Article[] | undefined>(undefined)

  const refresh = async () => {
    try {
      articles.value = await api.retrieveAll()
    } catch (err) {
      console.log('err: ', err)
      throw new Error('Erreur Technique')
    }
  }

  return { articles, refresh }
})
