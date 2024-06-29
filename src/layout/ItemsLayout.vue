<template>
  <div class="mt-8">
    <h1 class="pb-4 font-bold text-2xl">{{ title }}</h1>
    <div class="menus">
      <ItemCard @onAdd="handleClick(item.name)" v-for="item in items" key="id" :item="item"/>
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/item/ItemCard.vue";
import itemCard from "@/components/item/ItemCard.vue";

export default {
  computed: {
    itemCard() {
      return itemCard
    }
  },
  components: {ItemCard},
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: [],
      required: true
    },
  },

  methods: {
    handleClick(name) {
      //not important
      console.log(name)
    }
  },
}
</script>
