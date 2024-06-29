<template>
  <div class="bg-gray-200 p-6 border-2">
    <div class="mx-auto max-w-screen-md w-full">
      <div class="inline-flex justify-between items-center w-full">
        <h1>Panier</h1>
        <p class="font-bold text-xl">{{total}}$</p>
      </div>
      <div v-if="items && items.length > 0" class="mt-4 grid grid-cols-2 gap-4">
        <div v-for="(item, index) in items" :key="item.name" class="bg-white p-3 shadow rounded-md">
          <p class="text-gray-500">{{item.name}} ({{item.price}})</p>

          <button type="button" class="text-red-500" @click.prevent="handleDeleteItem(index)">Remove</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    ...mapGetters({
      items: "cartStore/getItems",
      total: "cartStore/getTotal"
    })
  },

  methods: {
    ...mapMutations({
      removeItemFormCart:"cartStore/REMOVE_ITEM"
    }),

    handleDeleteItem(index){
      this.removeItemFormCart(index)
    }
  },
}
</script>