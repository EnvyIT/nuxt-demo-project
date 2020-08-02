<template>
  <header id="main-header">
    <nav id="main-navigation">
      <nuxt-link to="/" exact>
        <the-logo class="brand__logo" />
      </nuxt-link>
      <div class="navigation-list">
        <nuxt-link :to="localePath('index')" class="navigation-list__item" exact>
          {{ $t('nav.about') }}
        </nuxt-link>
        <nuxt-link :to="localePath('cv')" class="navigation-list__item" exact>
          {{ $t('nav.cv') }}
        </nuxt-link>
        <nuxt-link :to="localePath('blog') " class="navigation-list__item" exact>
          {{ $t('nav.blog') }}
        </nuxt-link>
        <div class="cta-wrapper">
          <nuxt-link :to="localePath('contact')" tag="button" class="button button--primary navigation__item--cta" exact>
            {{ $t('nav.contact') }}
          </nuxt-link>
        </div>
      </div>
      <the-burger-toggle class="burger__menu" />
    </nav>
  </header>
</template>

<script>
import TheLogo from './TheLogo'
import TheBurgerToggle from './TheBurgerToggle'

export default {
  name: 'TheNavigationBar',
  components: {
    TheLogo,
    TheBurgerToggle
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  #main-navigation {
    background: $banner-gradient;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }

  .burger__menu {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navigation-list {
    display: none;
  }

  .navigation-list__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 0 $content-margin-md;
    color: $white;
    text-decoration: none;
    transition: font-size 450ms ease-in, font-weight 450ms ease-in;
    &.nuxt-link-active, &:active, &:hover {
      font-size: 1.2rem;
      font-weight: 600;
    }
    &:focus{
      outline: none;
    }
  }
  .cta-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .navigation__item--cta {
    margin: 0 $content-margin-md;
  }

  @include phone {
    .navigation-list {
      display: flex;
      align-content: center;
      height: inherit;
    }
    .burger__menu {
      display: none;
    }
  }

</style>
