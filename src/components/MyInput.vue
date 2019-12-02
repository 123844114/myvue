<!--
 * @Author: your name
 * @Date: 2019-11-30 12:04:02
 * @LastEditTime: 2019-11-30 12:08:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\MyInput.vue
 -->
<template>
  <input type='text' placeholder="输入内容" @input="$emit('input',$event.target.value)"/>
</template>

<script>
export default {

}
</script>

<style>

</style>