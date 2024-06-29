<template>
  <DefaultLayout title="Nos boissons" :items="items" />
</template>

<script>
import ItemCard from "@/components/item/ItemCard.vue";
import {constants} from "@/data/index.js";
import DefaultLayout from "@/layout/ItemsLayout.vue";

export default {
  components: {DefaultLayout, ItemCard},

  computed: {
    items() {
      return constants.boissons
    }
  },
  methods: {
    addCart(x) {
      this.cart.push({
        id: x.id,
        image: x.image,
        name: x.name,
        description: x.description
      })
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
</script>
