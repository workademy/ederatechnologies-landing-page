<template>
  <div>
    <nav-bar />
    <header-tagline />
    <what-we-do />
    <who-we-are />
    <partners />
    <pre-footer />
    <footer-component />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
import HeaderTagline from '~/components/HeaderTagline.vue'
import WhatWeDo from '~/components/WhatWeDo.vue'
import WhoWeAre from '~/components/WhoWeAre.vue'
import Typeform from '~/components/Typeform.vue'
import Partners from '~/components/Partners.vue'
import PreFooter from '~/components/PreFooter.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import SubscribeNewsletterAction from '~/components/SubscribeNewsletterAction.vue'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['init'])
  },
  components: {
    Logo,
    Typeform,
    SubscribeNewsletterAction,
    NavBar,
    HeaderTagline,
    WhatWeDo,
    WhoWeAre,
    Partners,
    PreFooter,
    FooterComponent
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
  .header1 {
    background-image: url('~assets/img/header-1.jpeg')
  }
  .header2 {
    background-image: url('~assets/img/header-2.jpeg')
  }
  .office1 {
    background-image: url('~assets/img/office-1.jpeg')
  }
</style>
