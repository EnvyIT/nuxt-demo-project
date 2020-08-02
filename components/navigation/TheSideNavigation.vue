<template>
  <div v-if="show" class="sidenav">
    <div @click="close()" class="navigation-list">
      <nuxt-link
        :to="localePath('index')"
        class="navigation-list--item"
        exact
      >
        {{ $t('nav.about') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('cv')"
        class="navigation-list--item"
        exact
      >
        {{ $t('nav.cv') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('blog')"
        class="navigation-list--item"
        exact
      >
        {{ $t('nav.blog') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('contact')"
        class="navigation-list--item"
        exact
      >
        {{ $t('nav.contact') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { UIActions, UIGetters } from '../../store/ui'

export default {
  name: 'TheSideNavigation',
  computed: {
    show () {
      return this.$store.getters[UIGetters.IS_MENU_TOGGLED];
    }
  },
  methods: {
    close () {
      this.$store.dispatch(UIActions.TOGGLE_MENU);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  .sidenav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 999;
    background: linear-gradient(288deg, $white 30%, $darkblue 30%);
    padding: $content-padding-lg;
  }

  .navigation-list {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .navigation-list--item {
    text-decoration: none;
    color: $white;
    font-size: 2rem;
    margin-top: 2rem;
    &:hover, &:active,&.nuxt-link-active {
      cursor: pointer;
      font-weight: 600;
      font-size: 2.25rem;
    }
  }

</style>
