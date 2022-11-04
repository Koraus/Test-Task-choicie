<template>
  <div class="b-test">
    <nav-bar :colorMode="'dark'"></nav-bar>
    <p>Hov to use</p>
    <b-container fluid="xl" class="red h400">
      <p class="h2">container</p>
      <b-row class="blue" id="w">
        <p class="h2">ряд</p>
        <b-col class="green h200" md="5" sm="12">
          <div class="content h-50"><p class="h2">контент</p></div>
        </b-col>
        <b-col class="green h200" md="1" sm="0"> </b-col>
        <b-col class="green h200" md="6" sm="12">
          <div class="content"><p class="h2">контент</p></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  created: function () {},
  components: { NavBar },
  computed: {},
};
</script>

<style lang="scss" scoped>
.red {
  background: rgb(166, 69, 69);
}

.green {
  background: rgb(6, 148, 105);
}

.blue {
  background: rgb(34, 42, 148);
}

.h400 {
  min-height: 400px;
}

.h200 {
  min-height: 200px;
}

.content {
  background: rgb(106, 66, 104);
  width: 100%;
  min-height: 40px;
}

.header-cols {
}
</style>
