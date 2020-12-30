<template>
  <section class="section">
    <b-field label="Send this message:">
      <b-input maxlength="2000" type="textarea" v-model="message"></b-input>
    </b-field>
    <channels
      :selectedChannel="this.selectedChannel"
      v-on:changeChannel="selectedChannel = $event"
    />
    <section class="section">
      <b-button type="is-primary" expanded @click="send()">Send</b-button>
    </section>
  </section>
</template>

<script>
import axios from "axios";
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
      const channelID = this.selectedChannel;
      axios.post(`http://${window.location.hostname}:4000/message`, {
        message: this.message,
        channel: channelID
      });
    }
  }
};
</script>
