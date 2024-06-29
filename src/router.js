import Menus from "@/components/Menus.vue";
import Burgers from "@/components/Burgers.vue";
import Snacks from "@/components/Snacks.vue";
import Salades from "@/components/Salades.vue";
import Boissons from "@/components/Boissons.vue";
import Desserts from "@/components/Desserts.vue";

export const routes = [
    {path:'/', component: Menus},
    {path:'/burgers', component: Burgers},
    {path:'/snacks', component: Snacks},
    {path:'/salades', component: Salades},
    {path:'/boissons', component: Boissons},
    {path:'/desserts', component: Desserts},
]