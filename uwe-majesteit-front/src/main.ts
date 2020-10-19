import App from './App.vue'

import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

import {
  BootstrapVue, BootstrapVueIcons
}
from 'bootstrap-vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
