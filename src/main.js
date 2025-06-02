import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/style.css'

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
script.defer = true;
document.head.appendChild(script);


createApp(App).use(store).use(router).mount('#app')
