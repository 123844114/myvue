/*
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-22 11:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
