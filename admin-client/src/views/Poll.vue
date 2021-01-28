<template>
  <section class="section">
    <b-field label="Poll Question:">
      <b-input
        maxlength="200"
        type="textarea"
        v-model="question"
        placeholder="Who should be next in Smash?"
      ></b-input>
    </b-field>
    <div class="card">
      <div class="card-header-title">Options</div>
      <div class="card-content">
        <section>
          <b-field
            v-for="option in options"
            :key="option.id"
            :label="(options.indexOf(option) + 1).toString()"
            label-position="on-border"
          >
            <p class="control"><emoji-button v-model="option.emoji" /></p>
            <b-input
              v-model="option.text"
              placeholder="Kratos"
              expanded
            ></b-input>
            <p class="control">
              <b-button
                class="button"
                icon-left="minus"
                @click="removeOption(option)"
              ></b-button>
            </p>
          </b-field>
          <b-button icon-left="plus" @click="createOption()"
            >Add Option</b-button
          >
        </section>
      </div>
    </div>
    <channels v-model="selectedChannel" />
    <section class="section">
      <b-button type="is-primary" expanded @click="send()">Send</b-button>
    </section>
  </section>
</template>

<script>
import Channels from "../components/Channels.vue";
import EmojiButton from "../components/EmojiButton.vue";

export default {
  name: "Polls",
  data() {
    return {
      question: null,
      options: [this.optionModel(), this.optionModel()],
      selectedChannel: null
    };
  },
  components: { EmojiButton, Channels },
  methods: {
    optionModel: function() {
      return { text: "", emoji: "😀" };
    },
    createOption() {
      this.options.push(this.optionModel());
    },
    removeOption(option) {
      this.options = this.options.filter(function(ele) {
        return ele != option;
      });
    },
    send() {
      this.$http.post("/message", {
        message: this.compiledMessage,
        channel: this.selectedChannel.id
      });
    }
  },
  computed: {
    compiledMessage: function() {
      let message = "***New Poll!***\n";
      message += `**${this.question}**`; // Question line
      message += "\n\n"; // Break
      this.options.forEach(option => {
        message += `${option.emoji}: ${option.text}`;
        message += "\n"; // Break
      }); // Add Options
      message += "\n\n"; // Break
      message += "*Respond with the corresponding emoji to vote!*";

      return message;
    }
  }
};
</script>
