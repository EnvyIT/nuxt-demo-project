<template>
  <main class="cv-container">
    <section class="section--card">
      <h1> {{ $t('page.cv.workExperience') }}</h1>
      <work-experience-list :jobs="loadedJobs" />
    </section>
    <section class="section--card">
      <h1> {{ $t('page.cv.education') }}</h1>
      <education-list :educations="loadedEducations" />
    </section>
    <section class="section--card">
      <h1> {{ $t('page.cv.certificates') }}</h1>
      <certificate-list :certificates="loadedCertificates" />
    </section>
  </main>
</template>

<script>
import WorkExperienceList from '../../components/cv/JobList'
import EducationList from '../../components/cv/EducationList'
import { JobGetters } from '../../store/job'
import { EducationGetters } from '../../store/education'
import CertificateList from '../../components/cv/CertificateList'
import { CertificateGetters } from '../../store/certificate'

export default {
  name: 'CV',
  components: {
    CertificateList,
    EducationList,
    WorkExperienceList
  },
  computed: {
    loadedJobs () {
      return this.$store.getters[JobGetters.GET_JOBS]
    },
    loadedEducations () {
      return this.$store.getters[EducationGetters.GET_EDUCATIONS]
    },
    loadedCertificates () {
      return this.$store.getters[CertificateGetters.GET_CERTIFICATES]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';
  @import 'assets/styles/colors';

  .cv-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: $content-margin-md 0;
  }

  .section--card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: $secondary;
    color: $white;
    @include tile;
    @include tile--box-shadow;
    &:nth-child(even) {
      @include tile--inverted;
    }
  }

  @include tablet {
    .cv-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .section--card {
      flex: 1 1 40%;
      justify-content: flex-start;
      +.section--card {
        flex: 1;
      }
    }
  }

</style>
