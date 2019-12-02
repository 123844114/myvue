<!--
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-21 10:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editmy
 * @FilePath: \myvue\src\views\My.vue
 -->
<template>
  <div class="my">
    <h1>我的</h1>
    {{selectList}}
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name:'my',
  computed:{
    ...mapState(['selectList'])
  }
}
</script>
