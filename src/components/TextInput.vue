<template>
  <div
    class="input--is-label-active text-field"
    :class="{
      'input--is-dirty': value,
      'input--is-focused': focus,
      'input--has-state': rule,
      'error--text': rule,
      'primary--text': focus && !rule,
    }"
  >
    <div class="input__control">
      <div class="input__slot">
        <fieldset aria-hidden="true">
          <legend :style="labelStyle">
            <span class="legend-helper">{{ label }}</span>
          </legend>
        </fieldset>
        <div class="text-field__slot">
          <label
            :for="uid"
            class="input-label"
            :class="{
              'input-label--active': focus || value,
              'primary--text': focus && !rule,
            }"
            >{{ label }}</label
          ><input
            :id="uid"
            @focus="togleFocus"
            @blur="togleFocus"
            type="text"
            v-model.trim="computedValue"
          />
        </div>
      </div>
      <div class="text-field__details" :class="{ 'error--text': rule }">
        <div class="input-messages">
          <div class="input-messages__message" v-if="rule">{{ rule }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import input from "@/mixins/input";
export default {
  name: "TextInput",
  mixins: [input],
  props: ["value", "label"],
  emits: ["update:value"],
  data() {
    return {
      focus: false,
      labelStyle: null,
      message: "Error text",
    };
  },
  mounted() {
    this.setLabelStyle();
  },
  methods: {
    setLabelStyle() {
      const label = this.$el.getElementsByClassName("legend-helper")[0];
      const width = label.getBoundingClientRect().width + 1 + "px";
      this.labelStyle =
        (this.focus || this.value) && this.label ? { width } : { width: 0 };
    },
    togleFocus(e) {
      this.focus = e.type === "focus";
      this.$nextTick(() => this.setLabelStyle());
    },
  },
  computed: {
    rule() {
      return this.value && this.value?.length < 10 ? "Error text" : "";
    },
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
};
</script>

<style scoped></style>
