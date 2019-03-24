<template>
  <nav class="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
    <!-- if you want to keep the navbar hidden you can add this class to the navbar "navbar-burger"-->
    <div class="container">
      <div class="navbar-header">
        <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a href="#" class="navbar-brand">
          <logo />
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right navbar-uppercase">
          <li>
            <a href="#whatwedo">What We Do?</a>
          </li>
          <li>
            <a href="#whoweare">Who Are We?</a>
          </li>
          <li>
            <typeform :url="contactFormTypeFormUrl" :text="'Contact Us!'"></typeform>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import SubscribeNewsletterAction from '~/components/SubscribeNewsletterAction.vue'
  import Typeform from '~/components/Typeform.vue'

  import { mapGetters } from 'vuex'
  export default {
    components: {
      Logo,
      SubscribeNewsletterAction,
      Typeform
    },
    computed: {
      ...mapGetters(['contactFormTypeFormUrl'])
    }
  }
</script>
