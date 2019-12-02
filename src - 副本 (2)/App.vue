<!--
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-22 10:18:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit,
 * @FilePath: \myvue\src\App.vue
 -->
<template>
  <div class="app">
    <img src="/image/1.png" alt />
    <!-- <header>答题app</header> -->
    <router-view class="main" />
    <img src="/image/2.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body,
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
      background: #E12552;
}
header {
  height: 40px;
  line-height: 40px;
  background: #ebe9e9;
}
.main {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.app > img {
  width: 100%;
  height: 40px;
}
</style>