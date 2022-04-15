<template>
  <ul class="employers-cards">
    <li v-for="user of users" :key="user.id" class="employers-cards-wrapper">
      <base-card :user="user" />
    </li>
  </ul>
  <div class="employers-show-more">
    <base-button>Show more</base-button>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import api from "@/api";
import BaseButton from "@/components/BaseButton";
export default {
  name: "CardList",
  components: { BaseCard, BaseButton },
  data() {
    return {
      users: api.users?.users,
    };
  },
  created() {
    //console.log(this.users);
  },
};
</script>

<style scoped></style>
