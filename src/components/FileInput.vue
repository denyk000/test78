<template>
  <div
    class="input text-field file-input"
    :class="{
      'input--has-state': message,
      'input--is-dirty': file,
      'error--text': message,
      'primary--text': !message,
    }"
  >
    <div class="input__control">
      <div class="input__slot" @click="$refs.input.click()">
        <div class="input__prepend-inner">
          <div>Upload</div>
        </div>
        <fieldset aria-hidden="true"></fieldset>
        <div class="text-field__slot">
          <div class="file-input__text file-input__text--placeholder">
            <span>{{ filename }}</span>
          </div>
          <label :for="uid" class="label">{{ label }}</label>
          <input
            :id="uid"
            ref="input"
            accept=".jpg,.jpeg"
            class="file-upload-input"
            name="file"
            type="file"
            @change="onChangeInputFile"
          />
        </div>
      </div>
      <div class="text-field__details" :class="{ 'error--text': message }">
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
  name: "FileInput",
  mixins: [input],
  emits: ["update:modelValue"],
  props: {
    label: String,
    placeholder: String,
    required: Boolean,
    message: String,
    modelValue: File,
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    onChangeInputFile(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.file = files[0] ?? null;
      this.$emit("update:modelValue", this.file);
    },
  },
  computed: {
    filename() {
      return this.file?.name ?? this.placeholder;
    },
  },
  watch: {
    modelValue(file) {
      this.file = file;
    },
  },
};
</script>

<style scoped></style>
