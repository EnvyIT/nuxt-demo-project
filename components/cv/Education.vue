<template>
  <div class="educations">
    <header class="education__header">
      <div class="education__header__title">
        <h2> {{ education.school }}</h2>
      </div>
    </header>
    <hr :class="isInverted ? 'hr--white': 'hr--green'" class="hr--horizontal">
    <main class="education__content">
      <div class="education__content">
        <strong class="degree">
          {{ education.degree }}
        </strong>
        <time class="time"> {{ education.from }} - </time>
        <time class="time"> {{ education.to }}</time>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    education: {
      type: Object,
      required: true,
      id: {
        type: Number,
        required: true
      },
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      school: {
        type: String,
        required: true
      }
    },
    isInverted: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  .educations {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .time {
    font-style: italic;
    font-size: .8rem;
  }
  .hr--white {
    @include hr-gradient-horizontal($white);
  }
  .hr--green {
    @include hr-gradient-horizontal($darkcyan);
  }
  .hr--horizontal {
    width: 100%
  }
</style>
