<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useArticleStore } from '../article.store'
import type { NewArticle } from '../interfaces/Article'

const errorMsg = ref('')
const isAdding = ref(false)

const articleStore = useArticleStore()

const router = useRouter()

const handleSubmit = async () => {
  try {
    console.log('submit')
    isAdding.value = true
    errorMsg.value = ''
    await articleStore.add(newArticle)
    await router.replace('/stock')
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isAdding.value = false
  }
}

const setError = (message: string) => {
  errorMsg.value = message
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
    <form>
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" v-focus />
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
      <AsyncButton
        icon="fa-plus"
        :action="handleSubmit"
        @error="setError($event)"
        @start="setError('')"
        class="primary"
      >
        Ajouter
      </AsyncButton>
    </form>
  </main>
</template>

<style scoped></style>
