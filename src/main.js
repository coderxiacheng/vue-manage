import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router/index'
import store from './store/index'
import http from 'axios'
import '../api/mock.js'

import './assets/less/index.less'
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
