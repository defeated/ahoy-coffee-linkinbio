import { createApp } from 'vue'
import App from '@/components/App.vue'
import '@/main.css'
import {
  ShoppingCartIcon, DocumentTextIcon, CameraIcon, CreditCardIcon, NewspaperIcon
} from '@heroicons/vue/outline'

const app = createApp(App)
app.component('ShoppingCartIcon', ShoppingCartIcon)
app.component('DocumentTextIcon', DocumentTextIcon)
app.component('CameraIcon', CameraIcon)
app.component('CreditCardIcon', CreditCardIcon)
app.component('NewspaperIcon', NewspaperIcon)
app.mount('#app')
