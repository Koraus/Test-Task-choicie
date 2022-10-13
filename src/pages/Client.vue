<template>
  <div class="client">
    <nav-bar :colorMode="'dark'"></nav-bar>
    client
  </div>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  export default {
    components: {NavBar}
  }
</script>
<style lang="scss" scoped>
  .client{
    padding-top:40px;
  }
</style>