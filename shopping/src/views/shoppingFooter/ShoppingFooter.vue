<template>
<div class="foot-tool-bar">
    {{msg}}
</div>
</template>

<script>
 export default {
name:"ShoppingFooter",
   data () {
     return {
         msg:'脚部工具栏'
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.foot-tool-bar {
  width: 100vw;
  position: fixed;
  bottom: 0px;
  height: 3.125rem;
  background: green;
  z-index: 999;
}
 
</style>
