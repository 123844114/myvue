<!--
 * @Author: your name
 * @Date: 2019-11-20 16:02:20
 * @LastEditTime: 2019-11-20 16:13:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\Item.vue
 -->
<template>
  <div class="item">
    <img :src="item.Image" />
    <div>
      <h4>{{item.Name}}</h4>
      <span>￥{{item.Price}}</span>
      <span>销量：{{item.Sales}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped lang='scss'>
.item {
  display: flex;
  border-bottom: 1px solid #af2f2f;
  padding: 10px;
  img {
    width: 100px;
  }
}
</style>