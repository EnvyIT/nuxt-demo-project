<template>
  <div>
    <job
      :key="job.id"
      v-for="job in jobs"
      :job="job"
    />
  </div>
</template>

<script>
import Job from './Job'

export default {
  name: 'JobList',
  components: {
    Job
  },
  props: {
    jobs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
