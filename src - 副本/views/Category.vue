<!--
 * @Author: your name
 * @Date: 2019-11-20 12:16:35
 * @LastEditTime: 2019-11-21 11:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\views\Category.vue
 -->
<template>
  <div class="cate">
    <header>分类</header>
    
    <CateItem v-for="(item,index) in category" :key="index" :item="item"  :parentIndex="index"/>
    
  </div>
</template>

<script>
import CateItem from '@/components/CateItem'
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["category"])
  },
  components:{CateItem},
  activated(){
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  methods:{
    mySelect(index){

    }
  }
};
</script>

<style >
</style>