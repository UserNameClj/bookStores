<template>
  <div class="shop-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div v-for="(item, index) in list" class="shop-list">
        <van-card
          :key="item"
          :num="index"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  components: {},
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= 999) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.shop-list {
  margin: 2.5rem 0px;
}
</style>
