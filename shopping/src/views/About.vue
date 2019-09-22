<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      test: "test"
    };
  },
  methods: {},
  mounted() {
    console.log(11);
  }
};
</script>
<style scoped>
.about {
  height: 1rem;
  width: 15rem;
  background-color: red;
}
</style>
