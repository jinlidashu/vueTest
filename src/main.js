import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './stylus/liang-ui.styl'
import './stylus/element.styl'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
