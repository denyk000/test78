<template>
  <div class="register-form">
    <form action="">
      <text-input label="Your name" v-model:value="form.name" />
      <text-input label="Email" v-model:value="form.email" />
      <text-input label="Phone" v-model:value="form.phone" />
      <div class="radio-group" style="margin-top: -7px">
        <p>Select your position</p>
        <radio-group v-model="form.position">
          <radio-input
            v-for="pos in positions"
            :value="pos.id"
            :key="pos.id"
            :label="pos.name"
          />
        </radio-group>
      </div>
      <base-button @click.prevent="singUp">Sing up</base-button>
    </form>
  </div>
</template>

<script>
import RadioGroup from "@/components/RadioGroup";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import BaseButton from "@/components/BaseButton";
import api from "@/api";
export default {
  name: "RegisterForm",
  components: { TextInput, RadioInput, RadioGroup, BaseButton },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        position: "",
      },
      positions: [],
    };
  },
  async created() {
    const p = await api.getPositions();

    this.positions = p?.positions || [];
    console.log(p);
  },
  methods: {
    singUp() {
      console.log("click singUp");
    },
  },
};
</script>

<style scoped></style>
