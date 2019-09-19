<template>
 <div class="top-tool-bar">
     {{msg}}
 </div>
</template>

<script>
 export default {
name:"ShoppingHeader",
   data () {
     return {
         msg:'商城头部'
     }
   },
   components: {

   }
 }
</script>

<style scoped>

 .top-tool-bar {
  height: 2.5rem;
  width: 100vw;
  background: red;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
