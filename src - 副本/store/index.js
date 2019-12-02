/*
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-21 10:48:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editt
 * @FilePath: \myvue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import banner from '../data/banner.json'
import category from '../data/category.json'
import list from '../data/list.json'
Vue.use(Vuex)

// 换算函数
function changeNum(a) {
  // 对a进行判断
  let falg = a.includes('万')
  if (falg) {
    return parseFloat(a) * 10000 //必须转换为数字
  } else {
    return a * 1      //必须转换为数字
  }
}


export default new Vuex.Store({
  state: {
    banner, category, list: list.Datas.FlowerList,
    selectList: []  //存放选中项
  },
  mutations: {
    sortFn(state, index) {
      if (index === 2) {//价格排序
        state.list.sort((a, b) => {
          return a.Price - b.Price
        })
      }
      if (index === 1) {//销量，将‘万’替换成*10000

        state.list.sort((a, b) => {
          return changeNum(a.Sales) - changeNum(b.Sales)
        })
      }
    },
    pushToSlectList(state, obj) { //push
      let { parentIndex, index } = obj
      state.selectList[parentIndex] = state.category[parentIndex].Content[index]
    }
  },
  actions: {
  },
  modules: {
  }
})
