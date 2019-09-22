<template>
  <div class="foot-tool-bar">
    <ul>
      <router-link
        class="nav-list float-left"
        tag="li"
        @touchstart.native="changRouter(index)"
        v-for="(nav, index) in navOptions"
        :class="{ acive: isAcive === index }"
        :key="index"
        :to="nav.route"
      >
        <van-icon
          :name="nav.icon"
          size="1.4rem"
          v-if="nav.info"
          :info="nav.info"
        />
        <van-icon :name="nav.icon" size="1.4rem" v-else />
        <div class="nav-label">{{ nav.label }}</div>
      </router-link>
      <li class="float-clear"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingFooter",
  data() {
    return {
      msg: "脚部工具栏",
      navOptions: [
        { label: "首页", icon: "wap-home-o", route: "/home" },
        { label: "客服", icon: "chat-o", route: "/chat", info: "100+" },
        { label: "购物车", icon: "cart-o", route: "/shopping_car", info: 80 },
        { label: "用户", icon: "user-o", route: "/user" }
      ],
      isAcive: 0
    };
  },
  components: {},
  methods: {
    changRouter(i) {
      this.isAcive = i;
      if (i === 3) {
        this.$store.dispatch("getShowHeader", true);
      } else {
        this.$store.dispatch("getShowHeader", false);
      }
    }
  }
};
</script>

<style scoped>
.foot-tool-bar {
  width: 100vw;
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  text-align: center;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  z-index: 999;
}
.nav-list {
  padding: 0.4rem 0 0.15rem 0;
  width: 25vw;
}
.nav-list .nav-label {
  font-size: 0.75rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.nav-list.float-left.acive {
  color: #33dd99;
}
</style>
