import { sleep } from '@/utils/sleep'
import type { Article } from './interfaces/Article'

const articles = [
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
]

class API {
  async retrieveAll(): Promise<Article[]> {
    await sleep(2000)
    return articles
  }
}

export const api = new API()
