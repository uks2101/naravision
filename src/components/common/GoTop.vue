<template>
  <a v-if="showBtn" class="top_btn" @click="goToTop"><img src="../../assets/images/top_arrow.png" alt="상단으로 이동"></a>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'GoTop',
  data() {
    return {
      showBtn: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollBehavior)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollBehavior)
  },
  methods: {
    goToTop() {
      $('html, body').animate({scrollTop:0}, 800)
      return false
    },
    scrollBehavior() {
      if(document.scrollingElement.scrollTop > 200) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
    }
  }
}
</script>

<style scoped>

</style>