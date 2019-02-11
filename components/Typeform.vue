<template>
  <a
    class="typeform-share button--primary"
    href="#"
    data-mode="drawer_right"
    @click="onTypeFormClick">{{ text }}</a>
</template>
<script>
  import * as typeformEmbed from '@typeform/embed'

  export default {
    props: ['url', 'text'],
    data() {
      return {
        popup: null
      }
    },
    created() {
      this.popup = typeformEmbed.makePopup(this.url, {
        mode: 'drawer_right',
        hideHeaders: true,
        hideFooter: true
      })
    },
    methods: {
      onTypeFormClick() {
        this.popup.open()
      }
    }
  }
</script>
