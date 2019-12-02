<!--
 * @Author: your name
 * @Date: 2019-11-21 17:09:42
 * @LastEditTime: 2019-11-22 15:11:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\view\layout\End.vue
 -->
<template>
  <div class="end">恭喜您，共答对{{count}}道题</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
computed:{
  ...mapState(['count'])
}
}
</script>

<style>

</style>