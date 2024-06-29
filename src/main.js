import './assets/css/tailwind.css'
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import {routes} from "@/router.js";
import store from "@/store.js";


const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
