<!--
 * @Author: your name
 * @Date: 2019-11-29 13:50:04
 * @LastEditTime: 2019-11-30 12:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\App.vue
 -->
<template>
  <div class="app">
    <h3>任务列表{{aaa}}</h3>
    <p>
      <input type="text" v-model="txt" v-on:keydown="addFn" />
      <button @click="searchFn">搜索</button>
    </p>
    <p>
      总任务书:{{list.length}}
      已完成:{{many}}
      <label>
        <input type="checkbox" v-model="done" value='已完成' /> 已完成
      </label>
      <label>
        <input type="checkbox" v-model="done" value='未完成'/> 未完成
      </label>
    </p>
    <ul>
      <li v-for="(item ,index ) in copyList" :key="index">
        <input type="checkbox" v-model="item.checkflag" @change="singleCheck" />
        {{index+1}}、
        <span v-if="!item.flag">{{item.name}}</span>
        <input type="text" v-else v-model="item.name" @blur="editSave(item.id)" />
        <button @click="editBtn(item.id)">编辑</button>
        <button @click="delBtn(item.id)">删除</button>
        <!-- <button class="red" v-if='!item.status'>未完成</button>
        <button class="green" v-else>已完成</button>-->
        <button
          :class="item.status==='已完成'?'green':'red'"
          @click="ediFn(item.id)"
        >{{item.status==='已完成'?'已完成':'未完成'}}</button>
      </li>
    </ul>
    <p>
      <label>
        <input type="checkbox" v-model="checkAll" @change="checkAllFn" /> 全选
      </label>
    </p>
    <MyInput v-model="aaa"/>
  </div>
</template>

<script>
import MyInput from './components/MyInput'
export default {
  components:{MyInput},
  data() {
    return {
      aaa:"",
      txt: "",
      checkAll: false,
      done: [],
      list: [
        { name: "吃饭", flag: false, id: 0, checkflag: false, status: '未完成' }
      ],
      // copyList: [] //深拷贝
    };
  },
  computed: {
    // 计算属性：放的是函数,返回值是数据，直接在页面调用数据。数据会根据data中的数据改变而改变；computed中的变量不可以再次在data中定义
    many() {
      return this.list.filter(item => item.status).length;
    },
    copyList(){
      if(this.done.length===0||this.done.length===2){
        return this.list
      }else{
      return  this.list.filter(item=>item.status===this.done[0])
      }
    }
  },
  created() {
    // this.copyList = JSON.parse(JSON.stringify(this.list));
  },
  methods: {
    /**
     * 新增方法
     * 回车事件  push一个新对象
     */
    addFn(e) {
      if (e.keyCode === 13) {
        let obj = {
          //准备对象
          name: this.txt,
          flag: false,
          flags: false,
          id: new Date() * 1,
          checkflag: false,
          status: '未完成'
        };
        this.list.push(obj); //增加
        //改变copyList
        // this.copyList = JSON.parse(JSON.stringify(this.list));
        this.txt = ""; // 清空
      }
    },
    editBtn(id) {
      this.list.find(item => item.id === id).flag = true;
    },
    editSave(id) {
      this.list.find(item => item.id === id).flag = false;
    },
    /**
     * 删除
     * 通过id查找下标
     * splice(index,1) 改变原数组
     */
    delBtn(id) {
      let index = this.list.findIndex(item => item.id === id);
      this.list.splice(index, 1);
      //改变copyList
      // this.copyList = JSON.parse(JSON.stringify(this.list));
    },
    /**
     * 单选功能
     * 关联全选
     * every
     */
    singleCheck() {
      this.checkAll = this.list.every(item => item.checkflag);
    },
    /**
     * 全选按钮
     *
     * 关联单选--单选与全选状态一致
     */
    checkAllFn() {
      this.list.forEach(item => (item.checkflag = this.checkAll));
    },
    /**
     * 模糊查询
     * 判断list中的每一项的name是否包含txt
     *
     */
    searchFn() {
      this.list = this.list.filter(item => item.name.includes(this.txt));
    },
    /**
     * 改变状态
     */
    ediFn(id) {
      this.list.find(item => item.id === id).status = '已完成';
      //改变copyList
      // this.copyList = JSON.parse(JSON.stringify(this.list));
    }
  }
};
</script>

<style scoped lang='scss'>
.red {
  background: red;
}
.green {
  background: green;
}
</style>