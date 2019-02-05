<template>
  <a
    class="typeform-share button--primary"
    href="#"
    data-mode="drawer_right"
    @click="onTypeFormClick">{{ text }}</a>
</template>
<script>
  import { mapGetters } from 'vuex'
  import * as typeformEmbed from '@typeform/embed'
  export default {
    props: ['corporate', 'educational', 'individual'],
    computed: {
      ...mapGetters(['corporateTypeFormUrl', 'educationalInstitutionsTypeFormUrl', 'individualTypeFormUrl']),
      text () {
        if (this.corporate) {
          return 'I represent an HR or a Learning department'
        } else if (this.educational) {
          return 'I represent an educational institution'
        } else {
          return 'I am a trainer/coach/consultant'
        }
      }
    },
    data () {
      return {
        popup: null
      }
    },
    created () {
      let url = this.corporate ? this.corporateTypeFormUrl : this.educational ? this.educationalInstitutionsTypeFormUrl : this.individualTypeFormUrl
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
