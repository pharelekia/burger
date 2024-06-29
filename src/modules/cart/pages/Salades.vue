<template>
  <DefaultLayout title="Nos salades" :items="items"/>
</template>

<script>
import ItemCard from "@/components/item/ItemCard.vue";
import DefaultLayout from "@/layout/ItemsLayout.vue";
import {constants} from "@/data/index.js";

export default {
  components: {DefaultLayout, ItemCard},
  computed: {
    items() {
      return constants.salades
    }
  },
}
</script>