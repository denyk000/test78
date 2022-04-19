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
        <base-button class="signup">Sign up</base-button>
      </div>
    </div>
  </section>
  <div class="container">
    <section class="employers" ref="employers">
      <h1>
        Working with
        <wbr />
        GET request
      </h1>
      <card-list :key="listKey" />
    </section>
    <section class="signup">
      <h1>
        Working with
        <wbr />
        POST request
      </h1>
      <register-form @change="scrollToSection" />
    </section>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import CardList from "@/components/CardList";
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "TheMain",
  components: { BaseButton, CardList, RegisterForm },
  data() {
    return {
      listKey: 0,
    };
  },
  methods: {
    scrollToSection(userId) {
      this.listKey = userId;
      this.$refs.employers?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped></style>
