<template>
    <!-- <div v-for="item in cart">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
    </div> -->
    <h1>Menu burger</h1>
    <div class="menus">
        <div v-for="x in menus" key="id" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
            <button @click="addCart(x)">+ Add</button>
        </div>
    </div>
    <!-- <Modal :revele="revele" :toggleModal="toggleModal"
        v-for="x in menus"
        :foodImage="x.imgUrl"
        :foodName="x.name"
        :foodDesc="x.description"
    /> -->
</template>

<script>
    import m1 from '../assets/m1.png'
    import m2 from '../assets/m2.png'
    import m3 from '../assets/m3.png'
    import m4 from '../assets/m4.png'
    import m5 from '../assets/m5.png'
    import m6 from '../assets/m6.png'

    // import Modal from './Modal.vue'
    
    export default{
        // name: 'Menus',
        // components:{
        //     Cart
        // },
        data(){
            return{
                // revele: false,
                cart: [],
                menus:[
                    {   id: 1,
                        imgUrl: m1,
                        name: 'Menu classic',
                        description: 'Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson'
                    },
                    {   id: 2,
                        imgUrl: m2,
                        name: 'Menu bacon',
                        description: 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson'
                    },
                    {   id: 3,
                        imgUrl: m3,
                        name: 'Menu big',
                        description: 'Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson'
                    },
                    {   id: 4,
                        imgUrl: m4,
                        name: 'Menu chicken',
                        description: 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson'
                    },
                    {   id: 4,
                        imgUrl: m5,
                        name: 'Menu fish',
                        description: 'Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson'
                    },
                    {   id: 5,
                        imgUrl: m6,
                        name: 'Menu double steak',
                        description: 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson'
                    },
                ]
            }
        },
        methods:{
            addCart(x){
                this.cart.push({
                    id: x.id,
                    image: x.image,
                    name: x.name,
                    description: x.description
                })
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        }
        // methods:{
        //     toggleModal(){
        //         this.revele = !this.revele
        //     }
        // }
    }
</script>

<style>
    h1{
        text-align: center;
    }
    .menus{
        display: grid;
        grid-template-columns: 270px 270px 270px;
        grid-template-rows: 450px 450px 450px;  
        gap: 10px;
    }
    .menusDiv{
        background-color: #f5f4f2;
        border-radius: 20px;

    }
    .menusDiv img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        margin: auto;
        background-color: #fff;
        border-radius: 10px;

    }
    .menusDiv button{
        width: 250px;
        padding: 15px;
        display: block;
        margin: auto;
        background-color: #fff;
        border: none;
        border-radius: 50px;
        cursor: pointer;
    }
    .menusImg{
        width: 250px;
        height: 250px;
        margin: 10px auto;
    }
</style>
