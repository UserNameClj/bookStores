import Vue from "vue";
import App from "./App.vue";
import router from "vue-router"
import {
  Button,
  Icon
} from 'vant';
(function () {
  var HtmlW = '';
  var html = document.querySelector('html');
  HtmlW = html.getBoundingClientRect().width;
  html.style.fontSize = HtmlW / 16 + 'px';
})()
Vue.config.productionTip = false;
Vue.use(Button).use(Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");