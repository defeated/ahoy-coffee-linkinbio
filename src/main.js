import { createApp } from 'vue'
import App from './components/App.vue'
import './main.css'
import {
  GlobeAltIcon, DocumentTextIcon, CameraIcon, CreditCardIcon
} from '@heroicons/vue/outline'

const app = createApp(App)
app.component('GlobeAltIcon', GlobeAltIcon)
app.component('DocumentTextIcon', DocumentTextIcon)
app.component('CameraIcon', CameraIcon)
app.component('CreditCardIcon', CreditCardIcon)
app.mount('#app')
