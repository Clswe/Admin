<template>
  <div
    id="app"
    :class="{'theme-dark': dark}"
  >
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import "@assets/sass/boot.scss";
</style>
