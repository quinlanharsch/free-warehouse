import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import Store from 'src/store/index.js'

Store
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
