import { sleep } from '@/utils/sleep'
import type { Article, NewArticle } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async add(newArticle: NewArticle): Promise<void> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newArticle),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.status >= 400) {
      throw new Error('Erreur Technique')
    }
  }

  async retrieveAll(): Promise<Article[]> {
    await sleep(300)
    const response = await fetch(url)
    const articles: Article[] = await response.json()
    return articles
  }
}

export const api = new API()
