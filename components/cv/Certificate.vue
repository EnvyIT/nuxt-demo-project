<template>
  <div class="certifications">
    <header class="certification__header">
      <div class="certification__header__title">
        <strong> {{ certificate.title }}</strong>
      </div>
    </header>
    <hr>
    <main class="certification__content">
      <div class="certification__content">
        <p class="degree">
          {{ certificate.issuer }} <time class="time"> - {{ certificate.issuedOn }} </time>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Certificate',
  props: {
    certificate: {
      type: Object,
      required: true,
      id: {
        type: Number,
        required: true
      },
      issuedOn: {
        type: String,
        required: true
      },
      issuer: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  hr {
    @include hr-gradient-horizontal($white);
    width: 100%;
  }

  .degree {
    font-style: italic;
  }
  .time {
    font-style: italic;
    font-size: .8rem;
  }
</style>
