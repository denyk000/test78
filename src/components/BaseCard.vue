<template>
  <div class="card">
    <div class="card-photo">
      <img
        :src="photo"
        :alt="user.name"
        :title="user.name"
        @error="getPhotoCover"
        loading="lazy"
      />
    </div>
    <div class="card-fullname">
      <span v-tippy="{ content: user.name }">{{ user.name }}</span>
    </div>
    <div class="card-info">
      <div>{{ user.position }}</div>
      <div>
        <a :href="`mailto:${user.email}`" v-tippy="{ content: user.email }">{{
          user.email
        }}</a>
      </div>
      <div>
        <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-tippy";
export default {
  name: "BaseCard",
  directives: {
    tippy: directive,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.user.photo,
    };
  },
  methods: {
    getPhotoCover() {
      this.photo = "photo-cover.svg";
    },
  },
};
</script>

<style scoped></style>
