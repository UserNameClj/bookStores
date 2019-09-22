import Vue from "vue";
import Router from "vue-router";
const Login = () => import("./views/login/Login.vue");
const GoodsBar = () =>
  import("./views/business/shoppingConten/homeContens/GoodsBar.vue");
const ChatBar = () =>
  import("./views/business/shoppingConten/chatConten/ChatBar.vue");
const ShoppingCarBar = () =>
  import("./views/business/shoppingConten/shoppingCarContens/ShoppingBar.vue");
const UserBar = () =>
  import("./views/business/shoppingConten/userConten/UserBar.vue");

Vue.use(Router);
const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "GoodsBar",
    component: GoodsBar,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/chat",
    name: "ChatBar",
    component: ChatBar
  },
  {
    path: "/shopping_car",
    name: "ShoppingCarBar",
    component: ShoppingCarBar
  },
  {
    path: "/user",
    name: "UserBar",
    component: UserBar
  }
];

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
