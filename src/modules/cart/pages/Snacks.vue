<template>
  <DefaultLayout title="Nos snacks" :items="items" />
</template>

<script>
    import s1 from '../../../assets/s1.png'
    import s2 from '../../../assets/s2.png'
    import s3 from '../../../assets/s3.png'
    import s4 from '../../../assets/s4.png'
    import s5 from '../../../assets/s5.png'
    import ItemCard from "@/components/item/ItemCard.vue";
    import DefaultLayout from "@/layout/ItemsLayout.vue";
    import {constants} from "@/data/index.js";
    export default{
      components: {DefaultLayout, ItemCard},
      computed: {
        items() {
          return constants.snacks
        }
      },
    }
</script>