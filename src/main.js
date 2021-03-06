import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
