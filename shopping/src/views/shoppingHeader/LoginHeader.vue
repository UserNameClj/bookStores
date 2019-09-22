<template>
  <div class="login-top">
    <div class="back-call arrow-left float-left">
      <van-icon name="arrow-left" />
    </div>
    <div class="app-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
  data() {
    return {
      title: "monkey商城"
    };
  },
  components: {},
};
</script>

<style scoped>
.app-title {
  line-height: 2.5rem;
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}
</style>
