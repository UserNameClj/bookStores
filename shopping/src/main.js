import Vue from "vue";
import store from './store'
import App from "./App.vue";
import router from "./router";
import Vant from 'vant';
import '../public/vant.css';
import Axios from "axios";
Vue.use(Vant);


Vue.prototype.$http=Axios
Vue.directive('test',{
  bind(el){
    el.style.color = 'red'
  }
})
Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})


;
(function () {
  var HtmlW = '';
  var html = document.querySelector('html');
  HtmlW = html.getBoundingClientRect().width;
  html.style.fontSize = HtmlW / 16 + 'px';
})()
Vue.config.productionTip = false;
Vue.directive('focus',{
  inserted:function(el){
    el.focus()
  }
})

new Vue({
  router,
  Axios,
  store,
  render: h => h(App)
}).$mount("#app");