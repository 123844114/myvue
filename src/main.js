/*
 * @Author: your name
 * @Date: 2019-11-29 13:42:38
 * @LastEditTime: 2019-11-29 13:57:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\main.js
 * component  
 * render 函数
 */
import Vue from 'vue'
import App from './App'
window.vm=new Vue({
    el:'#app',
    data:{
        msg:'helloworld'
    },//对象
    render:(a)=>a(App)
})