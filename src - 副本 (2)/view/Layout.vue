<!--
 * @Author: your name
 * @Date: 2019-11-21 17:09:21
 * @LastEditTime: 2019-11-22 11:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editi
 * @FilePath: \myvue\src\view\Layout.vue
 -->
<template>
  <div class="layout">
    <TabBar/>
    <router-view  class="layout-main"/>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
import {mapState,mapActions} from 'vuex'
export default {
 components:{TabBar},
 created(){
   this.getList()
 },
 methods:{
   ...mapActions(['getList'])
 }
}
</script>

<style scoped lang='scss'>
.layout-main{
  flex: 1;
  overflow: hidden;
}
</style>