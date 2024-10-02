import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Article, NewArticle } from './interfaces/Article'
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

  const add = async (newArticle: NewArticle) => {
    try {
      console.log('add newArticle: ', newArticle)
      await api.add(newArticle)
      await refresh()
    } catch (err) {
      throw new Error('Erreur Technique')
    }
  }

  const remove = async (ids: Article['id'][]) => {
    try {
      console.log('ids: ', ids)
      await api.remove(ids)
      await refresh()
    } catch (err) {
      throw new Error('Erreur Technique')
    }
  }

  return { articles, refresh, add, remove }
})
