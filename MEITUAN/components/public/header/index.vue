<template>
  <div class="m-header">
    <el-row>
      <el-col><top-bar/></el-col>
    </el-row>
    <el-row>
      <el-col><search-bar/></el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from './topbar/topbar'
import searchBar from './searchbar'

export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang="scss">
.m-header{
  @at-root .layout-default{
    .el-header{
      .m-header {
        width: 100%;
      }
    }
  }
  >.el-row:nth-child(1){
    width: 1190px;
    margin: 0 auto;
    z-index: 9999;
    height: 40px;
    line-height: 40px;
  }
  >.el-row:nth-child(2){
    background: #fff;
    .search-panel{
      width: 1190px;
      margin: 0 auto;
    }
  }
  >.el-main {
    overflow: unset;
  }
}

</style>

