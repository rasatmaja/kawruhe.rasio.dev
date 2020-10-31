<template>
  <img
    v-scroll-observer:animation-up
    class="absolute p-5 covid-icon-absolute"
    src="~assets/img/covid/virus.svg"
    loading="lazy"
    alt="COVID-19 Virus"
    :style="styles"
  >
</template>

<style>
  .covid-icon-absolute{
    z-index: -1;
  }
</style>
<script>
export default {
  props: {
    probsTop: { type: String, default: 'auto' },
    probsBottom: { type: String, default: 'auto' },
    probsRight: { type: String, default: 'auto' },
    probsLeft: { type: String, default: 'auto' },
    probsSize: { type: String, default: '10em' }
  },
  data () {
    return {
      styles: {
        top: this.probsTop,
        bottom: this.probsBottom,
        right: this.probsRight,
        left: this.probsLeft,
        'max-width': this.probsSize
      }
    }
  }
}
</script>
