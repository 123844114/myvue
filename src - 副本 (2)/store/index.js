/*
 * @Author: your name
 * @Date: 2019-11-21 17:11:19
 * @LastEditTime: 2019-11-22 11:53:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\store\index.js
 */
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        list:[],
        count:0
    },
    mutations:{
        setList(state,payload){
            state.list=payload
        },
        addCount(state){
            state.count++
        }
    },
    actions: {
        getList({commit}) {
            axios.get('/list').then(({data})=>{
                commit('setList',data)
            })
         }
    }
})
window.store = store
export default store