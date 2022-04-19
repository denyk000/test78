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
    <div class="card-fullname">{{ user.name }}</div>
    <div class="card-info">
      <div>{{ user.position }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
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
