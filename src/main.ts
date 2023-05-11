import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
