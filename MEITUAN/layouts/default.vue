<template>
  <el-container class="layou-default">
    <el-header>
      <my-header/>
    </el-header>
    <el-main><nuxt/></el-main>
    <el-footer>foot</el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
</style>
