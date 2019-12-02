<!--
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-21 10:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editk
 * @FilePath: \myvue\src\App.vue
 -->
<template>
  <div class="app">
    <keep-alive exclude="my">
      <router-view class="main" />
    </keep-alive>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "@/components/MyFooter";
export default {
  components: { MyFooter }
};
</script>

<style scoped lang='scss'>
.app{
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow-y:auto
  }
}
</style>