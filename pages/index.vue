<template>
  <main>
    <section class="about-me">
      <article class="about-me__tile">
        <header>
          <h1>{{ $t('nav.about') }}</h1>
          <div class="about-me__icon">
            <img
              src="@/assets/media/user_icon.jpeg"
              alt="Picture of the author of the page"
            >
          </div>
        </header>
        <main class="about-me__description about-me__description--center">
          <hr>
          <p>{{ $t('page.about.myNameIs') }} <strong>{{ $t('author.firstName') }}</strong>!</p>
          <p>
            {{ $t('page.about.iAm') }}
            <transition name="slide-fade" mode="out-in">
              <strong :key="getDescription">{{ getDescription }}.</strong>
            </transition>
          </p>
          <hr>
          <cite>
            {{ $t('page.about.cite') }}
          </cite>
        </main>
      </article>

      <article class="about-me__tile about-me__tile--odd">
        <header class="about-me__header">
          <div class="icon icon--border icon--border--cyan">
            <img class="img--size" src="@/assets/media/invention.svg" alt="Bulb">
          </div>
          <h2>
            {{ $t('page.about.whoAreYou') }}
          </h2>
        </header>
        <hr>
        <main class="about-me__description">
          <p>
            {{ $t('page.about.descPartOne') }}
          </p>
          <p>
            {{ $t('page.about.descPartTwo') }}
          </p>
          <p>
            {{ $t('page.about.descPartThree') }}
          </p>
        </main>
      </article>

      <article class="about-me__tile">
        <header class="about-me__header">
          <div class="icon icon--border icon--border--white">
            <img class="img--size" src="@/assets/media/rocket.svg" alt="Rocket">
          </div>
          <h2>
            {{ $t('page.about.skills.name') }}
          </h2>
        </header>
        <hr>
        <main class="about-me__description about-me__description--center">
          <ul class="about-me__list about-me__list--white">
            <li class="about-me__list__item">
              {{ $t('page.about.skills.lead') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.skills.proactive') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.skills.mentor') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.skills.empathy') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.skills.supportive') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.skills.scrumMaster') }}
            </li>
          </ul>
        </main>
      </article>

      <article class="about-me__tile about-me__tile--odd">
        <header class="about-me__header">
          <div class="icon icon--border icon--border--cyan">
            <img class="img--size" src="@/assets/media/code-alt.svg" alt="Monitor with HTML-tag symbol">
          </div>
          <h2>
            {{ $t('page.about.technologies.name') }}
          </h2>
        </header>
        <hr>
        <main class="about-me__description about-me__description--center">
          <ul class="about-me__list about-me__list--cyan">
            <li class="about-me__list__item">
              Java
            </li>
            <li class="about-me__list__item">
              C#
            </li>
            <li class="about-me__list__item">
              C++
            </li>
            <li class="about-me__list__item">
              C
            </li>
            <li class="about-me__list__item">
              SQL/PLSQL
            </li>
            <li class="about-me__list__item">
              JavaScript
            </li>
            <li class="about-me__list__item">
              TypeScript
            </li>
            <li class="about-me__list__item">
              HTML5/CSS3
            </li>
            <li class="about-me__list__item">
              Vue.js / Nuxt.js
            </li>
            <li class="about-me__list__item">
              Angular
            </li>
          </ul>
        </main>
      </article>

      <article class="about-me__tile">
        <header class="about-me__header">
          <div class="icon icon--border icon--border--white">
            <img class="img--size" src="@/assets/media/thumbs-down.svg" alt="Thumbs down">
          </div>
          <h2>
            {{ $t('page.about.dislikes.name') }}
          </h2>
        </header>
        <hr>
        <main class="about-me__description about-me__description--center">
          <ul class="about-me__list about-me__list--white">
            <li class="about-me__list__item">
              {{ $t('page.about.dislikes.negativePeople') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.dislikes.mobbing') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.dislikes.badCoffee') }}
            </li>
          </ul>
        </main>
      </article>

      <article class="about-me__tile about-me__tile--odd">
        <header class="about-me__header">
          <div class="icon icon--border icon--border--cyan">
            <img class="img--size" src="@/assets/media/thumbs-up.svg" alt="Thumbs up">
          </div>
          <h2>
            {{ $t('page.about.likes.name') }}
          </h2>
        </header>
        <hr>
        <main class="about-me__description about-me__description--center">
          <ul class="about-me__list about-me__list--cyan">
            <li class="about-me__list__item">
              {{ $t('page.about.likes.goodCoffee') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.likes.teamWork') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.likes.funAtWork') }}
            </li>
            <li class="about-me__list__item">
              {{ $t('page.about.likes.challenges') }}
            </li>
          </ul>
        </main>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      index: 0
    }
  },
  computed: {
    getDescription () {
      return this.$i18n.t('page.about.description')[this.index]
    }
  },
  created () {
    const intervalMS = 5000
    const descriptionLength = this.$i18n.t('page.about.description').length
    setInterval(() => {
      this.index = Math.floor(Math.random() * descriptionLength)
    }, intervalMS)
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  /* Vue specific css hooks for <transition></transition> */
  .slide-fade-leave-active {
    text-decoration: line-through;
    transition: all 1.75s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }

  hr {
    @include hr-gradient-horizontal($white);
    width: 100%;
  }

  cite {
    font-size: 0.75rem;
    padding: $content-padding-lg;
  }

  .about-me {
    display: flex;
    flex-direction: column;
    margin: $content-margin-md 0;
  }

  .about-me__tile {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    flex-wrap: wrap;
    justify-content: center;
    background: $secondary;
    color: $white;
    @include tile;
    @include tile--box-shadow;
    &.about-me__tile--odd {
      @include tile--inverted;
      &>hr {
        @include hr-gradient-horizontal($darkcyan);
        width: 100%;
      }
    }
  }

  .about-me__icon {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    & > img {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
    }
  }

  .about-me__description {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: flex-start;
    padding: $content-padding-md;
    width: 100%;
    height: 100%;
  }

  .about-me__description--center {
    align-items: center;
  }

  .about-me__header {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 5.5rem;
    & > hr {
      width: 100%;
    }
  }

  .about-me__list {
    padding:0;
    list-style: none;
    &>li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      +li{
        margin-top: $content-margin-md;
      }
    }
    &>li:before {
      content: '';
      display: inline-block;
      height: .75rem;
      width: .75rem;
      background-size: contain;
      margin-right: $content-margin-sm;
    }
  }
  .about-me__list--white{
    &>li:before {
      background: url('~assets/media/layers-white.svg') no-repeat;
    }
  }

  .about-me__list--cyan {
    &>li:before {
      background: url('~assets/media/layers-cyan.svg') no-repeat;
    }
  }

  @include phone {
    .about-me {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .about-me__tile {
      +.about-me__tile {
        flex: 1 1 47%;
      }
    }

  }

  @include desktop {
    .about-me__tile {
      flex: 1 1 47%;
    }
  }

  @include desktop-xl {
    .about-me__tile,
    .about-me__tile+.about-me__tile{
      flex: 1 1 28%;
    }
  }

   .icon {
     display: flex;
     flex: 1;
     flex-direction: column;
     justify-content: center;
     align-content: center;
   }

  .icon--border {
    border-radius: 50%;
    padding: $content-padding-md;
  }

  .icon--border--white {
    border: .1rem solid $white;
  }

  .icon--border--cyan {
    border: .1rem solid $darkcyan;
  }

  .img--size {
    height: 1.4rem;
    width: auto;
  }

</style>
