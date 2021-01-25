<template>
  <section>
    <b-button :label="this.selectedEmoji" @click="isPickerModalActive = true" />

    <b-modal
      v-model="isPickerModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Emoji Modal"
      aria-modal
    >
      <picker :data="emojiIndex" @select="selectEmoji" />
    </b-modal>
  </section>
</template>

<script>
import data from "emoji-mart-vue-fast/data/all.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast";
import "emoji-mart-vue-fast/css/emoji-mart.css";

export default {
  name: "Emoji Picker",
  model: {
    prop: "selectedEmoji",
    event: "selectedEmoji"
  },
  props: ["selectedEmoji"],
  data() {
    return {
      isPickerModalActive: false,
      emojiIndex: new EmojiIndex(data)
    };
  },
  components: { Picker },
  methods: {
    selectEmoji($event) {
      this.isPickerModalActive = false;
      this.$emit("selectedEmoji", $event.native);
    }
  }
};
</script>
