<template>
  <div class="education-list">
    <education
      :key="education.id"
      v-for="education in educations"
      :education="education"
    />
  </div>
</template>

<script>
import Education from './Education'

export default {
  name: 'EducationList',
  components: {
    Education
  },
  props: {
    educations: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.education-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
