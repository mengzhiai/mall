/*
 * @Author: your name
 * @Date: 2020-05-21 22:06:59
 * @LastEditTime: 2020-06-14 02:13:53
 * @LastEditors: jun
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios'

import VueLazyLoad from 'vue-lazyload'  //引入
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/loading.gif')
})

/* Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
}) */
/* 引入全局样式 */
import './style/common.scss'
Vue.config.productionTip = false
Vue.prototype.axios = axios;

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
