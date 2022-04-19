<template>
  <section class="greetings">
    <div class="container">
      <div class="greetings-content">
        <h1>
          Test assignment
          <wbr />
          for front-end
          <wbr />
          developer
        </h1>
        <p class="definition">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <base-button class="signup" link="#signup">Sign up</base-button>
      </div>
    </div>
  </section>
  <div class="container">
    <section class="employers" ref="employers" id="users">
      <h1>
        Working with
        <wbr />
        GET request
      </h1>
      <card-list :key="listKey" />
    </section>
    <section class="signup" id="signup">
      <h1>
        <template v-if="!listKey">
          Working with
          <wbr />
          POST request
        </template>
        <template v-else>User successfully registered</template>
      </h1>
      <transition name="fade" mode="out-in">
        <register-form v-if="!listKey" @change="showSuccess" />
        <div v-else class="signup-success">
          <img
            class="success-image"
            src="../../public/success-image.svg"
            alt="User successfully registered"
          />
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import BaseButton from "@/components/BaseButton";
const CardList = defineAsyncComponent(() => import("@/components/CardList"));
const RegisterForm = defineAsyncComponent(() =>
  import("@/components/RegisterForm")
);
export default {
  name: "TheMain",
  components: { BaseButton, CardList, RegisterForm },
  data() {
    return {
      listKey: 0,
    };
  },
  methods: {
    showSuccess(userId) {
      this.listKey = userId;
      setTimeout(
        () =>
          this.$refs.employers?.scrollIntoView({
            block: "start",
            behavior: "smooth",
          }),
        5000
      );
    },
  },
};
</script>

<style scoped></style>
