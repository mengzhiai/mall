/*
 * @Author: your name
 * @Date: 2020-05-21 22:06:59
 * @LastEditTime: 2020-05-21 22:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入全局样式 */
import './style/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
