<template>
  <div class="m-user">
    <!-- 已登录 -->
    <template v-if="user">
      欢迎您，<span class="username">{{user}}</span>
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <!-- 未登录 -->
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">立即注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  }
}
</script>

<style lang="scss">

</style>

