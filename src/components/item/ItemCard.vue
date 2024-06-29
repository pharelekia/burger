<script>
import {mapMutations} from "vuex";

export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true
    },
  },

  emits: ['on-Add'],
  methods: {
    ...mapMutations({
      addToCart: "cartStore/SET_ITEM"
    }),
    addCart(item) {
      this.addToCart(item)
      this.$emit('on-Add', item)
    }
  },
}
</script>

<template>
  <div   class="menusDiv">
    <p class="menusImg"><img :src="item?.imgUrl" alt=""></p>
    <h2>{{ item?.name }}</h2>
    <p>{{ item?.description }}</p>
    <button @click="addCart(item)">+ Add</button>
  </div>
</template>