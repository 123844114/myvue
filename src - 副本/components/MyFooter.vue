<!--
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-20 14:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\HelloWorld.vue
 -->

<template>
  <footer>
    <router-link to="/home">首页</router-link>
    <router-link to="/category">分类</router-link>
    <router-link to="/my">我的</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
footer {
  height: 60px;
  line-height: 60px;
  background: pink;
  display: flex;
  justify-content: space-around;
  a {
    flex: 1;
    text-align: center;
    color: #000;
    &.router-link-active {
      background: red;
    }
  }
}
</style>