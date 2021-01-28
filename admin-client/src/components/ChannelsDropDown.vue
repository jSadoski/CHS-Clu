<template>
  <section class="section">
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          label="Click me!"
          type="is-primary"
          :icon-right="active ? 'menu-up' : 'menu-down'"
        />
      </template>

      <b-dropdown-item
        aria-role="listitem"
        v-for="channel in category.channels"
        :key="channel.id"
        >{{ channel.name }}</b-dropdown-item
      >
    </b-dropdown>
  </section>
</template>

<script>
export default {
  name: "channels",
  model: {
    prop: "selectedChannel",
    event: "changeChannel"
  },
  props: ["selectedChannel"],
  data() {
    return {
      channels: null,
      channeltree: []
    };
  },
  methods: {
    onChannelClick(channel) {
      this.selectedChannel = channel;
      this.$emit("changeChannel", channel);
    }
  },
  mounted() {
    this.$http
      .get("/channels")
      .then(response => {
        this.channels = response.data.cache;
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
