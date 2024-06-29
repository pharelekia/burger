<template>
   <div class="bloc-modal" v-if="revele">
        <div class="overlay"></div>
        <div class="modal">
            <button @click="toggleModal">X</button>
            <h1>Les modals...</h1>
            <img :src="foodImage" width="100" height="100px"/>
            <p>{{ foodName }}</p>
            <p>{{ foodDesc }}</p>
        </div>
   </div>
</template>

<script>
    export default{
        props: ['revele', 'toggleModal','foodName', 'foodDesc', 'foodImage']
    }
</script>

<style scoped>
    /* .bloc-modal{
        position: absolute;
        top: 50px;
        left: 150px;
        right: 0;
        bottom: 50px;
        width: 80%;
        background-color: #f5f4f2;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    } */
</style>