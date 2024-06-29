<template>
    <h1>Nos snacks</h1>
    <div class="menus">
        <div v-for="x in snacks" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
        </div>
    </div>
</template>

<script>
    import s1 from '../assets/s1.png'
    import s2 from '../assets/s2.png'
    import s3 from '../assets/s3.png'
    import s4 from '../assets/s4.png'
    import s5 from '../assets/s5.png'
    export default{
        data(){
            return{
                snacks:[
                    {
                        imgUrl: s1,
                        name: 'Frites',
                        description: 'Pommes de terre frites'
                    },
                    {
                        imgUrl: s2,
                        name: 'Onion rings',
                        description: "Rondelles d'oignon frits"
                    },
                    {
                        imgUrl: s3,
                        name: 'Nuggets',
                        description: 'Nuggets de poulet frits'
                    },
                    {
                        imgUrl: s4,
                        name: 'Nuggets fromage',
                        description: 'Nuggets de fromage frits'
                    },
                    {
                        imgUrl: s5,
                        name: 'Ailes de poulet',
                        description: 'Ailes de poulet Barbecue'
                    },
                ]
            }
        }
    }
</script>