<template>
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel height="240px">
        <el-carousel-item v-for="(item, index) in sliderList" :key="index">
          <h3 class="small"><img class="img" :src="item.url"/></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  data() {
    return {
      sliderList: [
       { url : 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'},
       { url : 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'},
       { url : 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .img {
    width: 550px;
    height: 240px;
  }
  .el-carousel__arrow {
    background-color: rgba(31,45,61,.8) !important;
  }

</style>