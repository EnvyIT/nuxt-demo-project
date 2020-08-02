<template>
  <img
    class="logo"
    src="@/assets/media/Logo.svg"
    alt="Abstract M as Logo"
  >
</template>

<script>
export default {
  name: 'TheLogo'
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';

  .logo {
    position: relative;
    top: 0.65rem;
    width: 4rem;
    height: 4rem;
    @include animation-fade-in;
  }

</style>
