<template>
  <div>
    <form :id="uid" class="register-form" :ref="uid" :name="uid">
      <text-input
        v-model="v$.fields.name.$model"
        :message="v$.fields.name.$errors[0]?.$message"
        label="Your name"
        maxlength="60"
        :disabled="pending"
      />
      <text-input
        v-model="v$.fields.email.$model"
        :message="v$.fields.email.$errors[0]?.$message"
        label="Email"
        maxlength="100"
        :disabled="pending"
      />
      <text-input
        v-model="v$.fields.phone.$model"
        label="Phone"
        maxlength="13"
        :message="v$.fields.phone.$errors[0]?.$message"
        placeholder="(+)380XXXXXXXXX"
        :disabled="pending"
      />
      <div class="radio-group">
        <p>Select your position</p>
        <radio-group v-model="v$.fields.position_id.$model">
          <radio-input
            v-for="pos in positions"
            :value="pos.id"
            :key="pos.id"
            :label="pos.name"
            :disabled="pending"
          />
        </radio-group>
      </div>
      <file-input
        placeholder="Upload your photo"
        v-model="v$.fields.photo.$model"
        :message="v$.fields.photo.$errors[0]?.$message"
      />
      <div style="text-align: center">
        <base-button @click.prevent="singUp" :disabled="v$.$invalid || pending"
          >Sign up</base-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import input from "@/mixins/input";
import RadioGroup from "@/components/RadioGroup";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import BaseButton from "@/components/BaseButton";
import FileInput from "@/components/FileInput";
import { getPositions } from "@/api";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { registerUser, fields } from "@/services/stateful/userService";

const EMAIL_REGEX =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const PHONE_REGEX = /^[+]{0,1}380([0-9]{9})$/;
const checkImgSize = async function (file) {
  const _URL = window.URL || window.webkitURL;
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = _URL.createObjectURL(file);
  });

  const { width, height } = await promise;

  return width > 70 && height > 70;
};
export default {
  name: "RegisterForm",
  components: { TextInput, RadioInput, RadioGroup, BaseButton, FileInput },
  mixins: [input],
  emits: ["change"],
  data() {
    return {
      v$: useVuelidate(),
      positions: [],
      fields: fields(),
      pending: false,
    };
  },
  validations() {
    return {
      fields: {
        name: { required, minLength: minLength(2) },
        email: {
          required,
          regex: helpers.withMessage(
            "The email must be a valid email address.",
            helpers.regex(EMAIL_REGEX)
          ),
        },
        phone: {
          required,
          regex: helpers.withMessage(
            "Phone format is incorrect.",
            helpers.regex(PHONE_REGEX)
          ),
        },
        position_id: { required },
        photo: {
          maxFileSize: helpers.withMessage(
            "The photo may not be greater than 5 Mbytes.",
            (file) => file.size < 5_242_880
          ),
          minImageSize: helpers.withMessage(
            "Minimum image size is 70x70px.",
            helpers.withAsync(checkImgSize)
          ),
        },
      },
    };
  },
  async created() {
    this.positions = await getPositions();
  },
  methods: {
    reset() {
      this.v$.$reset();
      this.fields = fields();
      document.forms[this.uid].reset();
    },
    getFormData() {
      const formData = new FormData();
      for (const fieldKey in this.fields) {
        formData.append(fieldKey, this.fields[fieldKey]);
      }
      return formData;
    },
    async singUp() {
      this.pending = true;

      const result = await registerUser(this.getFormData());
      if (result?.success) {
        this.reset();
        this.$emit("change", result.user_id);
      } else if (result?.message) {
        alert(result.message);
      }
      this.pending = false;
    },
  },
};
</script>

<style scoped></style>
