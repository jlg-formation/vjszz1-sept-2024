<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../article.store'
import { useRouter } from 'vue-router'

const errorMsg = ref('')

const articleStore = useArticleStore()

const router = useRouter()

const handleSubmit = async () => {
  try {
    console.log('submit')
    errorMsg.value = ''
    await articleStore.add(newArticle)
    router.replace('/stock')
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
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
      <div class="error">
        <strong>{{ errorMsg }}</strong>
      </div>
      <button class="primary">
        <FontAwesomeIcon icon="fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped></style>
