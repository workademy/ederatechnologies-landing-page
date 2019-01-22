<template>
  <a
    class="typeform-share button--green"
    href="#"
    data-mode="drawer_right"
    @click="onTypeFormClick">{{ text }}</a>
</template>
<script>
  import { mapGetters } from 'vuex'
  import * as typeformEmbed from '@typeform/embed'
  export default {
    props: ['corporate', 'educational'],
    computed: {
      ...mapGetters(['corporateTypeFormUrl', 'educationalInstitutionsTypeFormUrl']),
      text () {
        if (this.corporate) {
          return 'I represent an HR or a Learning department'
        } else {
          return 'I represent an educational institution'
        }
      }
    },
    data () {
      return {
        popup: null
      }
    },
    created () {
      let url = this.corporate ? this.corporateTypeFormUrl : this.educationalInstitutionsTypeFormUrl
      this.popup = typeformEmbed.makePopup(url, {
        mode: 'drawer_right',
        hideHeaders: true,
        hideFooter: true
      })
    },
    methods: {
      onTypeFormClick () {
        this.popup.open()
      }
    }
  }
</script>
