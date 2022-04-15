<template>
  <div class="wrapper">
    <the-header />
    <div class="wrapper-content">
      <the-main />
    </div>
  </div>
</template>

<script>
import TheMain from "@/components/TheMain";
import TheHeader from "@/components/TheHeader";

export default {
  name: "App",
  components: {
    TheMain,
    TheHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
