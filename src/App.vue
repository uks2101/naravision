<template>
  <div id="app">
    <div class="wrap">
      <AppHeader />
      <router-view />
      <AppFooter />
      <GoTop />
    </div>
  </div>
</template>

<script>
import AppHeader from './views/common/AppHeader.vue'
import AppFooter from './views/common/AppFooter.vue'
import GoTop from './components/common/GoTop.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    GoTop
  }
}
</script>

<style>

</style>
