<!--
 * @Author: your name
 * @Date: 2019-11-20 14:09:36
 * @LastEditTime: 2019-11-20 16:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\views\List.vue
 -->
<template>
  <div class="list">
    <header>{{$route.query.name}}</header>
    <p class="tabbar">
      <span
        v-for="(item,index) in tabs"
        :class="{'active':currentIndex===index}"
        :key="index"
        @click="tabFn(index)"
      >{{item}}</span>
    </p>
    <Item v-for="(item,index) in list" :item="item" :key="index" />
  </div>
</template>

<script>
import Item from "@/components/Item";
import { mapState, mapMutations } from "vuex";
export default {
  components: { Item },
  data() {
    return {
      currentIndex: 0,
      tabs: ["综合", "销量", "价格", "最新"]
    };
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapMutations(['sortFn']),
    tabFn(index) {
      this.currentIndex = index;
      this.sortFn(index)
    }
  }
};
</script>

<style scoped lang='scss'>
.tabbar {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  span {
    flex: 1;
    text-align: center;
    &.active {
      color: red;
    }
  }
}
</style>