<template>
  <el-container class="layou-default">
    <el-header>
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <my-foot/>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFoot from '@/components/public/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFoot
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
</style>
