/*
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-20 14:10:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settingscons
 * @FilePath: \myvue\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Home = () => import('../views/Home')
const Category = () => import('../views/Category')
const My = () => import('../views/My')
const List = () => import('../views/List')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
