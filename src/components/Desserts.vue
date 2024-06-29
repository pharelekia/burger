<template>
    <h1>Nos desserts</h1>
    <div class="menus">
        <div v-for="x in desserts" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
        </div>
    </div>
</template>

<script>
    import d1 from '../assets/d1.png'
    import d2 from '../assets/d2.png'
    import d3 from '../assets/d3.png'
    import d4 from '../assets/d4.png'
    import d5 from '../assets/d5.png'
    export default{
        data(){
            return{
                desserts:[
                    {
                        imgUrl: d1,
                        name: 'Fondant au chocolat',
                        description: 'Au choix: Chocolat Blanc ou au lait'
                    },
                    {
                        imgUrl: d2,
                        name: 'Muffin',
                        description: 'Au choix: Au fruits ou au chocolat'
                    },
                    {
                        imgUrl: d3,
                        name: 'Beignet',
                        description: 'Au choix: Au chocolat ou à la vanille'
                    },
                    {
                        imgUrl: d4,
                        name: 'Milkshake',
                        description: 'Au choix: Fraise, Vanille ou Chocolat'
                    },
                    {
                        imgUrl: d5,
                        name: 'Sundae',
                        description: 'Au choix: Fraise, Caramel ou Chocolat'
                    },
                ]
            }
        }
    }
</script>