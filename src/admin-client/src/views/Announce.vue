<template>
  <section class="section">
    <b-field label="Send this message:">
      <b-input maxlength="2000" type="textarea" v-model="message"></b-input>
    </b-field>
    <channels v-model="selectedChannel" />
    <section class="section">
      <b-button type="is-primary" expanded @click="send()">Send</b-button>
    </section>
  </section>
</template>

<script>
import Channels from "../components/Channels.vue";

export default {
  name: "Announce",
  data() {
    return {
      message: null,
      selectedChannel: null
    };
  },
  components: { Channels },
  methods: {
    send: function() {
      this.$http.post("/message", {
        message: this.message,
        channel: this.selectedChannel.id
      });
    }
  }
};
</script>
