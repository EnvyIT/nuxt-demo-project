<template>
  <div class="certificate-list">
    <certificate
      :key="certificate.id"
      v-for="certificate in certificates"
      :certificate="certificate"
    />
  </div>
</template>

<script>
import Certificate from './Certificate'

export default {
  name: 'CertificateList',
  components: {
    Certificate
  },
  props: {
    certificates: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
