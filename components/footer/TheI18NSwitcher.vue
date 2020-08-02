<template>
  <div class="locale-links">
    <nuxt-link
      v-for="locale in allLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="locale-link"
      exact
    >
      {{ locale.code | toUpperCase }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheI18NSwitcher',
  computed: {
    allLocales () {
      return this.$i18n.locales;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  .locale-links{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .locale-link {
    font-size: .75rem;
    font-style: italic;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: $darkcyan;
    padding: 0 $content-margin-md;
    &:hover,&:active,&.nuxt-link-active {
      color: $white;
    }
    &:focus{
      outline: none;
    }
    +.locale-link{
      border-left: 0.1rem $darkcyan solid;
    }
  }
</style>
