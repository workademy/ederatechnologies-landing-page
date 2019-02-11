<template>
  <div class="section section-header">
    <div class="parallax filter filter-color-blue">
      <div class="image header1"></div>
      <div class="container">
        <div class="content">
          <div class="title-area">
            <h1 class="title-modern">EdEra Technologies</h1>
            <h3>We create software to support new agile educational era</h3>
            <div class="separator line-separator">♦</div>
          </div>

          <div class="button-get-started">
            <typeform :url="subscribeNewsletterTypeFormUrl" :text="'Subscribe our Newsletter!'"></typeform>
          </div>
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
      ...mapGetters(['subscribeNewsletterTypeFormUrl'])
    }
  }
</script>
<style>
  .header1 {
    background-image: url('~assets/img/header-1-min-worked.jpg')
  }
  .header2 {
    background-image: url('~assets/img/header-2.jpeg')
  }
  .office1 {
    background-image: url('~assets/img/office-1.jpeg')
  }
</style>
