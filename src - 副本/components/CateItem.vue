<!--
 * @Author: your name
 * @Date: 2019-11-20 16:47:58
 * @LastEditTime: 2019-11-21 10:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\CateItem.vue
 -->
<template>
  <div class="cateitem">
    <h4>{{item.Subject}}{{parentIndex}}</h4>
    <div class="itm">
      <div
        class="small"
        v-for="(v,i) in item.Content"
        :key="i"
        :class="[{'border':item.Layout==='border'},{'active':currentIndex===i}]"
        @click="selectFn(i)"
      >
        <img :src="v.Icon" alt v-if="v.Icon" />
        <span>{{v.Label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["item",'parentIndex'],
  data(){
    return {
      currentIndex:null
    }
  },
  computed: {
  },
  methods: {
  ...mapMutations(['pushToSlectList']),
   selectFn(index){
     this.currentIndex=index
     this.pushToSlectList({parentIndex:this.parentIndex,index})
   }
  }
};
</script>

<style scoped lang='scss'>
.border {
  border: 1px solid #333;
  img {
    width: 20% !important;
  }
}
.cateitem {
  width: 100%;
  display: flex;
  flex-direction: column;
  .itm {
    display: flex;
    flex-wrap: wrap;
    .small {
      width: 25%;
      text-align: center;
      img {
        width: 90%;
      }
      &.active {
        border: 1px solid red;
      }
    }
  }
}
</style>