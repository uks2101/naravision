import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { sync } from 'vuex-router-sync'

require('../src/assets/css/common.css');
require('../src/assets/css/style.css');
require('../src/assets/css/notosanskr.css');
require('../src/assets/css/jquery.bxslider.css');


const apiUrl = 'https://api.nara.co.kr/homepage'
Vue.prototype.api = apiUrl
axios.defaults.baseURL = apiUrl
Vue.prototype.$axios = axios

Vue.config.productionTip = false
sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
