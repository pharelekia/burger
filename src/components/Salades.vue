<template>
    <h1>Nos salades</h1>
    <div class="menus">
        <div v-for="x in salades" class="menusDiv">
            <p class="menusImg"><img :src="x.imgUrl"></p>
            <h2>{{ x.name }}</h2>
            <p>{{ x.description }}</p>
        </div>
    </div>
</template>

<script>
     import sa1 from '../assets/sa1.png'
    import sa2 from '../assets/sa2.png'
    import sa3 from '../assets/sa3.png'
    import sa4 from '../assets/sa4.png'
    import sa5 from '../assets/sa5.png'
    export default{
        data(){
            return{
                salades:[
                    {
                        imgUrl: sa1,
                        name: 'Cesar poulet pane',
                        description: 'Poulet Pané, Salade, Tomate et la fameuse sauce César'
                    },
                    {
                        imgUrl: sa2,
                        name: 'Cesar poulet grille',
                        description: "Poulet Grillé, Salade, Tomate et la fameuse sauce César"
                    },
                    {
                        imgUrl: sa3,
                        name: 'Salade light',
                        description: 'Salade, Tomate, Concombre, Maïs et Vinaigre balsamique'
                    },
                    {
                        imgUrl: sa4,
                        name: 'Poulet pane',
                        description: 'Poulet Pané, Salade, Tomate et la sauce de votre choix'
                    },
                    {
                        imgUrl: sa5,
                        name: 'Poulet grille',
                        description: 'Poulet Grillé, Salade, Tomate et la sauce de votre choix'
                    },
                ]
            }
        }
    }
</script>