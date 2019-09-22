<template>
  <div class="top-tool-bar">
    <login-header></login-header>
    <search-header></search-header>
  </div>
</template>

<script>
import LoginHeader from "./LoginHeader";
import SearchHeader from "./SearchHeader"
export default {
  name: "ShoppingHeader",
  data() {
    return {
      msg: "商城头部",
     
    };
  },
  components: {
    LoginHeader,
    SearchHeader
  },
  methods: {

  },
  computed: {
    currenRoute(){
      console.log(this.$router.path)
      return 100
    }
  },

};
</script>

<style scoped>
.top-tool-bar {
  height: 2.5rem;
  width: 100vw;
  line-height: 2.5rem;
  padding: 0 0.6rem;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
