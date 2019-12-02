<!--
 * @Author: your name
 * @Date: 2019-11-21 17:08:50
 * @LastEditTime: 2019-11-22 15:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<>
 * @FilePath: \myvue\src\view\Question.vue
 -->
<template>
  <div class="question">
    <div class="card" v-if="list.length">
      <h4>问题:{{currentIndex+1}} {{list[currentIndex].question}}</h4>
      <p v-for="(item,index) in list[currentIndex].answer" :key="index" @click="answerFn(item)">
        <span
          v-if="item.only==true||item.type===list[currentIndex].ok&&list[currentIndex].flag!==null"
        >√</span>
        <span v-if="item.only===false">×</span>
        {{item.type}}.{{item.title}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false,
      currentIndex: 0
    };
  },
  watch: {
    $route: {
      handler(n, o) {
        console.log(n.params.index);
        this.currentIndex = n.params.index * 1;
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapMutations(["addCount"]),
    answerFn(item) {
      //判卷是否已作答
      if (this.list[this.currentIndex].flag !== null) {
        return;
      }

      if (item.type === this.list[this.currentIndex].ok) {
        //答对了
        item.only = true; //设置该题的样式
        this.addCount(); //总计+1
        this.list[this.currentIndex].flag = true; //设置tab的样式
      } else {
        item.only = false; //设置该题的样式
        this.list[this.currentIndex].flag = false; //设置tab的样式
      }
      //跳转下一题页面
      setTimeout(() => {
        // 当this.currentIndex<4的时候this.currentIndex++，跳
        // 否则 跳end
        if (this.currentIndex < 4) {
          this.currentIndex++;
          this.$router.push("/layout/question/" + this.currentIndex);
        } else {
          this.$router.push("/layout/end");
        }
      }, 500);
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  padding-top: 70px;
  padding-left: 30px;
  width: 300px;
  height: 380px;
  background: url("./9.png") no-repeat 0 0;
  background-size: 100%;
  margin: 0 auto;
  color: #ca0d0d;
  p {
    line-height: 30px;
  }
}
</style>