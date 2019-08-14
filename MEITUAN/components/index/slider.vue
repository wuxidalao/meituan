<template>
    <div class="m-slider">
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
       { url : 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'},
       { url : 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'},
       { url : 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.m-slider {
  height: 100%;
  width: 100%;
  .img {
    height: 240px;
    width: 100%;
  }
}

</style>