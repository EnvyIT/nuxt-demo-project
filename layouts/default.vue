<template>
  <div id="main-container">
    <a id="skip-nav-en" v-if="isLocaleEN" href="#main-content"> Skip Navigation </a>
    <a id="skip-nav-de" v-else href="#main-content"> Navigation überspringen </a>
    <the-navigation-bar />
    <the-side-navigation
      :show="displaySidenav"
    />
    <div id="main-content">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheNavigationBar from '../components/navigation/TheNavigationBar'
import TheFooter from '../components/footer/TheFooter'
import TheSideNavigation from '../components/navigation/TheSideNavigation'
import { UIGetters } from '../store/ui'

export default {
  components: {
    TheNavigationBar,
    TheSideNavigation,
    TheFooter
  },
  data () {
    return {
      displaySidenav: false,
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        'name': 'Michael Eder',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Traun',
          'addressRegion': 'OÖ',
          'postalCode': '4050',
          'streetAddress': 'M\u00FChlenstra\u00DFe 8'
        },
        'disambiguatingDescription': 'An Austrian Fullstack Software Developer',
        'email': 'mailto:michael.ederit@gmail.com',
        'telephone': '+43699 196 71 873',
        'url': 'https://envy-it.com',
        'description': 'Michael Eder is an Austrian Fullstack Software Developer',
        'mainEntityOfPage': 'Personal Developer Homepage of Michael Eder',
        'image': '/_nuxt/assets/media/user_icon.jpeg',
        'jobTitle': 'Software Engineer'
      }
    };
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
      bodyAttrs: {
        style: this.isMenuOpen ? ['overflow: hidden'] : ['overflow: auto']
      }
    };
  },
  computed: {
    isLocaleEN () {
      return this.$i18n.locale === 'en';
    },
    isMenuOpen () {
      return this.$store.getters[UIGetters.IS_MENU_TOGGLED];
    }
  }
}
</script>

<style lang="scss" scoped>

  #skip-nav-en,
  #skip-nav-de{
    visibility: hidden;
    position: absolute;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
