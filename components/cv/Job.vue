<template>
  <div>
    <div class="job">
      <div class="job-desc">
        <time class="time">
          {{ job.from }}
        </time> -
        <time class="time">
          {{ job.to }}
        </time>
      </div>
      <div class="job-desc-content">
        <div class="job-desc__job-title">
          <strong>   {{ job.title }}</strong>
        </div>
        <div class="job-desc__company">
          {{ job.company }}
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
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
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';
  @import 'assets/styles/colors';

  hr {
    @include hr-gradient-horizontal($white);
    width: 100%;
  }

  .job {
    + .job {
      margin-top: $content-margin-md;
    }
  }
  .time {
    font-style: italic;
    font-size: .8rem;
  }

</style>
