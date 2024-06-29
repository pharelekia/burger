<script>
import { RouterLink } from 'vue-router';
import imageFond from './assets/image_fond.jpg';
import Cart from './components/Cart.vue'

export default{
    name: 'App',
    components:{
        Cart
    },
    data(){
        return{
            image: imageFond
        }
    }
}

</script>

<template>
    <div class="imageBack">
        <!-- <img :src="image" alt="burger"> -->
    </div>
    <Cart/>
   <div class="routerLink">
        <RouterLink to="/">Menus</RouterLink>
        <RouterLink to="/burgers">Burgers</RouterLink>
        <RouterLink to="/snacks">Snacks</RouterLink>
        <RouterLink to="/salades">Salades</RouterLink>
        <RouterLink to="/boissons">Boissons</RouterLink>
        <RouterLink to="/desserts">Dessert</RouterLink>
   </div>
    
    <div class="routerView">
        <RouterView></RouterView>
    </div>
</template>

<style>
    a{
        text-decoration: none;
        margin: 0 5px;
        color: gray;
        padding: 14px;
        border-radius: 10px;
    }
    a:hover,
    a.router-link-active{
        background-color: #ceccca;
        color: #000;
    }
    .routerLink{
        text-align: center;
        margin-top: 20px;
    }
    .routerView{
        width: 55%;
        margin: auto;
    }
    .imageBack img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
</style>
