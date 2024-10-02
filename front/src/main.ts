import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { fontawesome } from './plugins/fontawesome'
import { widgets } from './plugins/widgets'
import router from './router'

const app = createApp(App)

app.use(widgets)
app.use(fontawesome)
app.use(createPinia())
app.use(router)

app.mount('#app')
