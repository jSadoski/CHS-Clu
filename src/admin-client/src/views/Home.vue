<template>
  <section class="section">
    <b-menu>
      <b-menu-list label="Main Menu">
        <b-menu-item
          tag="router-link"
          to="/announce"
          label="Make an Announcement"
          icon="bullhorn-outline"
        >
        </b-menu-item>
        <b-menu-item
          tag="router-link"
          to="/poll"
          label="Create a Poll"
          icon="poll-box-outline"
        >
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>
