<template>
  <div id="header">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          <img
            :src="require('@/assets/images/Logo.svg')"
            alt="logo"
            width="104"
            height="26"
          />
        </div>
        <div class="header-buttons">
          <base-button link="#users">Users</base-button>
          <base-button link="#signup">Sign up</base-button>
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
