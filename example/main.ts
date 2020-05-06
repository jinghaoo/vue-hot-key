import Vue from 'vue'
import App from './App.vue'
import hotKey from 'vue-hot-key'

Vue.use(hotKey)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
