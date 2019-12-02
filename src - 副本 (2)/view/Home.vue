<!--
 * @Author: your name
 * @Date: 2019-11-21 17:08:08
 * @LastEditTime: 2019-11-22 11:03:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\view\Home.vue
 -->
<template>
  <div class="home">
    <button @click="start">开始答题</button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push('/layout/question/0')
    }
  }
};
</script>

<style>
</style>