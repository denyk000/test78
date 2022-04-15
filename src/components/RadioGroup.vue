<template>
  <slot></slot>
</template>
<script>
export default {
  name: "RadioGroup",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      value: this.modelValue,
    };
  },
  watch: {
    value() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>
