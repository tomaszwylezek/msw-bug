import Vue from 'vue'
import App from './App.vue'
import {worker} from './msw'

Vue.config.productionTip = false


worker.start()

new Vue({
  render: h => h(App),
}).$mount('#app')
