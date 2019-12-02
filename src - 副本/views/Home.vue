<!--
 * @Author: your name
 * @Date: 2019-11-20 10:44:47
 * @LastEditTime: 2019-11-20 15:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\views\Home.vue
 -->
<template>
  <div class="home">
    <header>花礼网</header>
    <img class='top' :src="banner.TopPic"/>
    <MySwiper :data="banner.BannerList"/>
  </div>
</template>

<script>
import MySwiper from "@/components/MySwiper";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['banner'])
  },
  components: { MySwiper }
};
</script>

<style scoped lang='scss'>
.top{
  width: 100%
}
</style>