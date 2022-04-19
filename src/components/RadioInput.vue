<template>
  <div class="radio">
    <div class="input--selection-controls__input">
      <span
        aria-hidden="true"
        class="icon"
        :class="{ 'primary--text': checked }"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="icon__svg"
          fill="none"
        >
          <circle cx="10" cy="12" r="9.5" stroke="currentColor" />
          <circle
            v-if="checked"
            cx="10"
            cy="12"
            r="5"
            fill="currentColor"
          /></svg></span
      ><input
        :aria-checked="checked"
        :id="uid"
        role="radio"
        type="radio"
        :value="value"
        v-model="$parent.value"
      />
    </div>
    <label
      :for="uid"
      class="label"
      style="left: 0px; right: auto; position: relative"
      >{{ label }}</label
    >
  </div>
</template>

<script>
import input from "@/mixins/input";
export default {
  name: "RadioInput",
  mixins: [input],
  inheritAttrs: false,
  data() {
    return {
      internalValue: false,
    };
  },
  props: {
    value: [Number, String],
    label: String,
  },
  computed: {
    checked() {
      return this.value === this.$parent.value;
    },
  },
};
</script>

<style scoped></style>
