<template>
  <div id="header">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          <img src="Logo.svg" alt="logo" />
        </div>
        <div class="header-buttons">
          <base-button>Users</base-button>
          <base-button>Sign up</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "TheHeader",
  components: { BaseButton },
};
</script>
<style lang="sass"></style>
