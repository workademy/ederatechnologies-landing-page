<template>
  <div class="section section-small section-get-started">
    <div class="parallax filter">
      <div class="image office1">
      </div>
      <div class="container">
        <div class="title-area">
          <h2 class="text-white">Do you want to talk to us?</h2>
          <div class="separator line-separator">♦</div>
          <p class="description">We want online education to be personalised, agile, accessible, inclusive and just AWESOME!</p>
        </div>

        <div class="button-get-started">
          <typeform :url="contactFormTypeFormUrl" :text="'Contact Us!'"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Typeform from '~/components/Typeform'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Typeform
    },
    computed: {
      ...mapGetters(['contactFormTypeFormUrl'])
    }
  }
</script>
<style>
  .office1 {
    background-image: url('~assets/img/office-1.jpg')
  }
</style>
