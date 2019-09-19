<template>
    <div class="conten-zoom">
      {{msg}}
    </div>
</template>

<script>
 export default {
name:"ShoppingConten",
   data () {
     return {
       msg:'商城内容'
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.conten-zoom {
  width: 100vw;
  flex: 1;
  margin: 2.5rem 0 3.125rem 0;
  height: calc(100vh - 2.5rem - 3.125rem);
  background-color: yellow;
  overflow: auto;
}
 
</style>
