<template>
  <DefaultLayout title="Nos desserts" :items="items" />
</template>

<script>
    import d1 from '../../../assets/d1.png'
    import d2 from '../../../assets/d2.png'
    import d3 from '../../../assets/d3.png'
    import d4 from '../../../assets/d4.png'
    import d5 from '../../../assets/d5.png'
    import ItemCard from "@/components/item/ItemCard.vue";
    import {constants} from "@/data/index.js";
    import DefaultLayout from "@/layout/ItemsLayout.vue";
    export default{
      components: {DefaultLayout, ItemCard},
      computed: {
        items() {
          return constants.desserts
        }
      },
    }
</script>