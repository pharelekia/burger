<template>
    <div>
        <h1>Cart...</h1>
        <div>{{ getData }}</div>
    </div>
</template>

<script>
    export default{
        computed:{
            getData(){
                localStorage.getItem('cart')
            }
        }
    }
</script>

<style scoped>
    div{
        width: 50%;
        margin: auto;
        border: 1px solid red;
    }
</style>