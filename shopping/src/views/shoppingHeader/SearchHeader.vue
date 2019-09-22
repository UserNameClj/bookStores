<template>
  <div>
      <van-search
        :value="value"
        focus="true"
        @clear="clearSearch"
        placeholder="请输入搜索关键词"
        use-action-slot="true"
        @search="onSearch"
        shape="round"
        background="#f2f2fe"
      ></van-search>
      <view slot="action" bind:tap="onSearch">搜索</view>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  data() {
    return {
         value:'t',
    };
  },
  components: {},
  methods: {
    clearSearch() {
      (this.value = ""), console.log(100);
    },
    onSearch() {
      console.log(100);
    }
  },
  mounted() {
      this.value = this.$store.state.count;
  },
};
</script>

<style scoped>
</style>
