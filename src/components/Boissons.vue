<template>
    <h1>Nos boissons</h1>
    <div class="menus">
        <div v-for="x in boissons" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
        </div>
    </div>
</template>

<script>
    import bo1 from '../assets/bo1.png'
    import bo2 from '../assets/bo2.png'
    import bo3 from '../assets/bo3.png'
    import bo4 from '../assets/bo4.png'
    import bo5 from '../assets/bo5.png'
    import bo6 from '../assets/bo6.png'
    export default{
        data(){
            return{
                boissons:[
                    {
                        imgUrl: bo1,
                        name: 'Coca-cola',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                    {
                        imgUrl: bo2,
                        name: 'Coca-cola-light',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                    {
                        imgUrl: bo3,
                        name: 'Coca-cola-zero',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                    {
                        imgUrl: bo4,
                        name: 'Fanta',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                    {
                        imgUrl: bo5,
                        name: 'Sprite',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                    {
                        imgUrl: bo6,
                        name: 'Nestea',
                        description: 'Au choix: Petit, Moyen ou Grand'
                    },
                ]
            }
        }
    }
</script>