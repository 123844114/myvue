<!--
 * @Author: your name
 * @Date: 2019-11-20 15:11:24
 * @LastEditTime: 2019-11-20 15:59:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\MySwiper.vue
 -->
<template>
  <div class="myswiper">
    <div class="tabbar">
      <span v-for="(item,index) in data" :key="index" @click="slideTo(index)" :class="{'active':index===activeIndex}">{{item.Linkage}}</span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionStart="callback">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in data" :key="index">
        <img :src="item.ImageUrl" @click="$router.push({path:'/list',query:{name:item.LabelName}})"/>
        <div class="txt">
          <p>{{item.LabelName}}</p>
          <p>{{item.Desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      activeIndex:0,
      swiperOption: {
        // autoplay: true
      }
    };
  },
  props: ["data"],
  components: { swiper, swiperSlide },
  mounted(){
    this.swiper=this.$refs.mySwiper.swiper    //在this上挂在swiper实例
  },
  methods:{
    callback(e){
      let {activeIndex}=this.$refs.mySwiper.swiper
      this.activeIndex=activeIndex
    },
    slideTo(index){
       this.swiper.slideTo(index)
    }
  }
};
</script>

<style scoped lang='scss'>
.tabbar {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  span.active {
    color: red;
  }
}
.swiper-container {
  height: 450px;
  overflow: hidden;
  img {
    width: 76%;
    margin-left: 10%;
    border-radius: 10px;
  }
}
.txt {
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
  color: #fff;
}
</style>