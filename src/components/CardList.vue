<template>
  <transition-group name="list" tag="ul" class="employers-cards">
    <li v-for="user of users" :key="user.id" class="employers-cards-wrapper">
      <base-card :user="user" />
    </li>
  </transition-group>
  <div class="employers-show-more">
    <base-button v-if="showMore" @click.prevent="loadUsers"
      >Show more</base-button
    >
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import BaseButton from "@/components/BaseButton";
import { usersComputed, getUsers } from "@/services/stateful/userService";
export default {
  name: "CardList",
  components: { BaseCard, BaseButton },
  async created() {
    getUsers();
  },
  computed: {
    ...usersComputed,
  },
  methods: {
    loadUsers() {
      getUsers(true);
    },
  },
};
</script>

<style scoped></style>
