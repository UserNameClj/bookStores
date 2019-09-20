import Vue from "vue";
import Router from "vue-router";
const Login = () => import("./views/login/Login.vue");

Vue.use(Router);
const routes = [{
  path: "/Login",
  name: "Login",
  component: Login
}]

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});