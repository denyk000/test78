<template>
  <div
    class="text-field"
    :class="{
      'input--is-dirty': modelValue,
      'input--is-focused': hasFocus,
      'input--has-state': !isValid,
      'error--text': !isValid,
      'primary--text': hasFocus && isValid,
    }"
  >
    <div class="input__control">
      <div class="input__slot">
        <fieldset aria-hidden="true">
          <legend :style="labelStyle">
            <span ref="helper" class="legend-helper">{{ label }}</span>
          </legend>
        </fieldset>
        <div class="text-field__slot">
          <label
            :for="uid"
            class="input-label"
            :class="{
              'input-label--active': hasFocus || modelValue,
              'primary--text': hasFocus && isValid,
              'error--text': !isValid,
            }"
            >{{ label }}</label
          ><input
            :id="uid"
            @focus="togleFocus"
            @blur="togleFocus"
            type="text"
            v-model.trim="computedValue"
            :maxlength="maxlength"
            :placeholder="placeholder"
          />
        </div>
      </div>
      <div class="text-field__details" :class="{ 'error--text': !isValid }">
        <div class="input-messages">
          <div class="input-messages__message" v-if="message">
            {{ message }}
          </div>
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
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: String,
    message: String,
    maxlength: {
      type: [Number, String],
      String,
      default: 255,
      validator(value) {
        return !Number.isNaN(Number(value));
      },
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      hasFocus: false,
    };
  },
  mounted() {
    this.setLabelStyle();
  },
  methods: {
    setLabelStyle() {},
    togleFocus(e) {
      this.hasFocus = e.type === "focus";
      if (this.validateOnBlur && !this.hasFocus) {
        this.validate();
      }
      this.$nextTick(() => this.setLabelStyle());
    },
  },
  computed: {
    isValid() {
      return !this.message;
    },
    labelStyle() {
      const width = this.$refs.helper?.getBoundingClientRect().width + 1 + "px";
      return (this.hasFocus || this.modelValue) && this.label
        ? { width }
        : { width: 0 };
    },
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped></style>
