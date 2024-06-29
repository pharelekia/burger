import Menus from "@/modules/cart/pages/Menus.vue";
import Burgers from "@/modules/cart/pages/Burgers.vue";
import Snacks from "@/modules/cart/pages/Snacks.vue";
import Salades from "@/modules/cart/pages/Salades.vue";
import Boissons from "@/modules/cart/pages/Boissons.vue";
import Desserts from "@/modules/cart/pages/Desserts.vue";

export const routes = [
    {path:'/', component: Menus},
    {path:'/burgers', component: Burgers},
    {path:'/snacks', component: Snacks},
    {path:'/salades', component: Salades},
    {path:'/boissons', component: Boissons},
    {path:'/desserts', component: Desserts},
]