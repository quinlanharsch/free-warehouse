import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
