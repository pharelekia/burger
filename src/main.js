// import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Menus from './components/Menus.vue'
import Burgers from './components/Burgers.vue'
import Snacks from './components/Snacks.vue'
import Salades from './components/Salades.vue'
import Boissons from './components/Boissons.vue'
import Desserts from './components/Desserts.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: Menus},
        {path:'/burgers', component: Burgers},
        {path:'/snacks', component: Snacks},
        {path:'/salades', component: Salades},
        {path:'/boissons', component: Boissons},
        {path:'/desserts', component: Desserts},
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
