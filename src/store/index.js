import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from '@/store/modules/app'

Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  modules: {
    app,
  },
  actions: {
  },
  plugins: [
  ],
})

export default store
