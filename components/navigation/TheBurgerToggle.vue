<template>
  <div @click="toggle($event)" class="drawer-toggle">
    <div ref="topBar" :style="topBarStyle" class="bar" />
    <div ref="midBar" :style="midBarStyle" class="bar" />
    <div ref="bottomBar" :style="bottomBarStyle" class="bar" />
  </div>
</template>

<script>
import { UIActions, UIGetters } from '../../store/ui'

export default {
  name: 'TheBurgerToggle',
  computed: {
    topBarStyle () {
      return this.$store.getters[UIGetters.GET_MENU].topBarStyle;
    },
    midBarStyle () {
      return this.$store.getters[UIGetters.GET_MENU].midBarStyle;
    },
    bottomBarStyle () {
      return this.$store.getters[UIGetters.GET_MENU].bottomBarStyle;
    }
  },
  methods: {
    toggle () {
      this.$store.dispatch(UIActions.TOGGLE_MENU);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  .drawer-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.5rem;
    width: 2rem;
    margin-right: 1rem;
    cursor: pointer;
    z-index: 1000; /* must be greater than sidenav z-index which is 999*/
  }

  .bar {
    flex: 0 1 auto;
    background: $white;
    width: 90%;
    height: 2px;
    transition: all 350ms ease;
  }

  @include phone {
    .drawer-toggle {
      display: none;
    }
  }

</style>
