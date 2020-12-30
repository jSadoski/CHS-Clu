<template>
  <div id="app" class="container is-max-desktop">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    navbar: Nav
  }
};
</script>

<style></style>
