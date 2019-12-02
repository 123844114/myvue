<!--
 * @Author: your name
 * @Date: 2019-11-22 09:24:58
 * @LastEditTime: 2019-11-22 11:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\TabBar.vue
 -->
<template>
  <div class="tabbar">
    <p v-for='(item,index) in list' :key='index'>{{item.name}}
      <span v-if="item.flag">√</span>
      <span v-if="item.flag===false">x</span>
       </p>
  </div>
</template>

<script>
import{mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['list'])
  }
};
</script>

<style scoped lang='scss'>
.tabbar {
  line-height: 40px;
  display: flex;
  p {
    flex: 1;
    text-align: center;
    border: 1px solid red;
    margin: 10px;
    background: #ece4db;
  }
}
</style>