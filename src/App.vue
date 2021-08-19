<template>
  <div>
   <Home/>
  </div>
</template>
<script>
import Home from "@/components/home/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>
<style lang="scss">
@import "@/styles/scss/app.scss";
</style>
