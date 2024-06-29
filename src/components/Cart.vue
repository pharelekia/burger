<template>
  <div class="bg-gray-200 p-6 border-2">
    <h1>Cart...</h1>
    <div></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      items: "cartStore/getItems"
    })
  }
}
</script>