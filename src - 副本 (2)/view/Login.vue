<!--
 * @Author: your name
 * @Date: 2019-11-22 09:16:31
 * @LastEditTime: 2019-11-22 11:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\view\Login.vue
 -->
<template>
  <div class="login">
    {{$route.query}}
    <p>
      <input type="text" v-model="user" />
    </p>
    <p>
      <input type="password" v-model="pwd" />
    </p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      if (this.user.trim() && this.pwd.trim()) {
        localStorage.user = this.user;
      }
    }
  }
};
</script>

<style>
</style>