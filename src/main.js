import Vue from 'vue'
import App from './App'
import store from './store'
import LoadScript from 'vue-plugin-load-script'

Vue.use(LoadScript)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
