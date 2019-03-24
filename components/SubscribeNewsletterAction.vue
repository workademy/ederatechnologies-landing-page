<template>
  <div class="input-group">
    <input v-model="email"  type="email" class="form-control"placeholder="Introduce your email">
    <span class="input-group-btn">
      <button @click="onClick" class="btn btn-default" type="button">Subscribe to newsletter</button>
    </span>
  </div><!-- /input-group -->
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        email: ''
      }
    },
    methods: {
      ...mapActions(['subscribeNewsletter']),
      onClick () {
        this.subscribeNewsletter(this.email)
      }
    }
  }
</script>
