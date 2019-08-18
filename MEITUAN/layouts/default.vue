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
.el-header,.el-main{
    width: 1190px;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
}
.el-footer{
    width: 100%;
    padding: 0;
    margin: 50px 0 0 0;
}

.el-main {
    margin-top: 140px;
}
.el-header{
    background: #F8F8F8;
    color: #999;
    width: 100%;
    font-size: 12px;
    .m-header{
        // width: 1190px;
        margin: 0 auto;
    }
}

.layout-default{
    -webkit-font-smoothing: antialiased;
    font-family: "-apple-system",
    BlinkMacSystemFont,
    Roboto,
    "Helvetica Neue",
    "MIcrosoft YaHei",
    sans-serif !important;
    background-color: #F8F8F8;
}
</style>
