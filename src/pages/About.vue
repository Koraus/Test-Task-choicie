<template>
  <div class="about">
    <nav-bar :colorMode="'dark'"></nav-bar>
    about
  </div>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  export default {
    name: 'About',
    components: {NavBar}
  }
</script>

<style lang="scss" scoped>
  .about{
    padding-top:40px;
  }
</style>