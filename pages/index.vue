<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        EdEra Technologies
      </h1>
      <h2 class="subtitle">
        We build software to support education, learning, and development.
      </h2>
      <div class="links">
        <c-t-a :corporate="true" />
        <c-t-a :educational="true" />
        <c-t-a :individual="true" />
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CTA from '~/components/CTA.vue'

export default {
  components: {
    Logo,
    CTA
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
