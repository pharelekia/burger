<template>
    <h1>Nos burgers</h1>
    <div class="menus">
        <div v-for="x in burgers" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
            <button>+ Add</button>
        </div>
    </div>
</template>

<script>
    import b1 from '../assets/b1.png'
    import b2 from '../assets/b2.png'
    import b3 from '../assets/b3.png'
    import b4 from '../assets/b4.png'
    import b5 from '../assets/b5.png'
    import b6 from '../assets/b6.png'


    export default{
        data(){
            return{
                burgers:[
                    {
                        imgUrl: b1,
                        name: 'Classic',
                        description: 'Sandwich: Burger, Salade, Tomate, Cornichon'
                    },
                    {
                        imgUrl: b2,
                        name: 'Bacon',
                        description: 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate'
                    },
                    {
                        imgUrl: b3,
                        name: 'Big',
                        description: 'Sandwich: Double Burger, Fromage, Cornichon, Salade'
                    },
                    {
                        imgUrl: b4,
                        name: 'Chicken',
                        description: 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise'
                    },
                    {
                        imgUrl: b5,
                        name: 'Fish',
                        description: 'Sandwich: Poisson Pané, Salade, Mayonnaise, Cornichon'
                    },
                    {
                        imgUrl: b6,
                        name: 'Double steak',
                        description: 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate'
                    },
                ]
            }
        }
    }
</script>