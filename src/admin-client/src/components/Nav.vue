<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/logo.png"
          alt="The CoolHandSkywalker Logo"
          rounded
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/announce' }">
        Announce
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/poll' }">
        Create Poll
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
      <!-- <b-navbar-item href="#"> Message </b-navbar-item>
              <b-navbar-dropdown label="Info">
                <b-navbar-item href="#"> About </b-navbar-item>
                <b-navbar-item href="#"> Contact </b-navbar-item>
              </b-navbar-dropdown> -->
    </template>

    <!-- <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light"> Log in </a>
              </div>
            </b-navbar-item>
          </template> -->
  </b-navbar>
</template>

<script>
export default {
  name: "navbar"
};
</script>
