<template>
<div class="foot-tool-bar">
  <ul >
    <li v-for="(nav,index) in navOptions" :key="index" class="nav-list float-left">
      <van-icon :name="nav.icon" size='1.4rem' v-if="nav.info" :info="nav.info"/>
      <van-icon :name="nav.icon" size='1.4rem' v-else />
      <router-link :to="nav.route" tag="button" :class="nav.close" >{{nav.label}}</router-link>
    </li>
    <li class="float-clear"></li>
  </ul>
</div>
</template>

<script>
 export default {
name:"ShoppingFooter",
   data () {
     return {
         msg:'脚部工具栏',
         navOptions:[
           {label:'首页',icon:'wap-home-o',route:'/home'},
           {label:'客服',icon:'chat-o',route:'/chat' ,info:'100+'},
           {label:'购物车',icon:'cart-o',route:'/shopping_car',info:80},
           {label:'用户',icon:'user-o',route:'/user'}
         ]
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.foot-tool-bar {
  width: 100vw;
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  text-align: center;
  box-shadow:  0 0 10px 0 hsla(0,6%,58%,.6);
  z-index: 999;
}
.nav-list{
  padding: .4rem 0 .15rem 0;
  width: 25vw;
}
.nav-list button{
  background-color: #fff;
  font-size: .75rem;
  display: block;
  outline: none;
  border: none;
  margin: auto;
}
 
</style>
