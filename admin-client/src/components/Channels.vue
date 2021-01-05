<template>
  <section class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Channels
        </p>
      </header>
      <div class="card-content">
        <b-menu>
          <b-menu-list
            v-for="category in channeltree"
            :key="category.id"
            v-bind:label="category.name"
          >
            <b-menu-item
              v-for="channel in category.channels"
              :key="channel.id"
              :label="channel.name"
              v-on:click="onChannelClick(channel)"
              icon="pound"
            >
            </b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "channels",
  props: ["selectedChannel"],
  data() {
    return {
      channels: null,
      channeltree: []
    };
  },
  methods: {
    onChannelClick(channelID) {
      this.selectedChannel = channelID;
      this.$emit("changeChannel", channelID);
    }
  },
  mounted() {
    this.$http
      .get("/channels")
      .then(response => {
        this.channels = response.data;
        let categories = this.channels.filter(
          channel => channel.type == "category"
        );

        categories.forEach(category => {
          category.channels = this.channels.filter(
            channel => channel.parentID == category.id
          );
          this.channeltree.push(category);
        });
      })
      .catch(err =>
        console.log(
          `${err}: Couldn't connect to ${process.env.VUE_APP_API_SERVER}`
        )
      );
  }
};
</script>
