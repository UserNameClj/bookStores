<template>
  <div id="app"> 
    <shopping-header></shopping-header>
    <shopping-conten></shopping-conten>
    <shopping-footer></shopping-footer>
  </div>
</template>
<script>
import ShoppingHeader from "@/views/shoppingHeader/ShoppingHeader";
import ShoppingConten from "@/views/business/shoppingConten/ShoppingConten";
import ShoppingFooter from "@/views/shoppingFooter/ShoppingFooter";
export default {
  components: {
    ShoppingHeader,
    ShoppingConten,
    ShoppingFooter
  }
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
div,
header,
footer {
  box-sizing: border-box;
}
.float-left{
  float: left;
}
.float-right{
  float:right
}
.float-clear{
  clear: both;
}
li{
  list-style: none;
}
#app {
  display: flex;
}
</style>
