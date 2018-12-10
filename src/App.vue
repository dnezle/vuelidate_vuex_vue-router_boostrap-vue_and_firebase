<template>
  <div id="app" class="container">
    <b-nav>
      <b-nav-item to="/" exact>Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    isActive() {
      return true;
    }
  },
  created() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>

<style scope>
a.nav-link.active {
  color: white;
  background-color: blue !important;
}
</style>
