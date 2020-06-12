import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueWindowSize from 'vue-window-size';

// FULLPAGE
import 'fullpage.js/vendors/scrolloverflow'
import '@/plugins/fullpage.scrollHorizontally.min.js'
import VueFullPage from 'vue-fullpage.js'



Vue.use(VueFullPage)
Vue.use(VueWindowSize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
