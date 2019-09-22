<template>
  <div>
    <swipe-goods></swipe-goods>
    <goods-list></goods-list>
  </div>
</template>

<script>
import SwipeGoods from "./SwipeComponent";
import GoodsList from "./GoodsList";
export default {
  name: "GoodsBar",
  data() {
    return {};
  },
  components: {
    SwipeGoods,
    GoodsList
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style scoped></style>
