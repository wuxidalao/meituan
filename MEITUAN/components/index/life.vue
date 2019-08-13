<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14"><slider class="life-banner"/></el-col>
      <el-col :span="4">
        <div class="life-img"><img :src="lifeImg"/></div>
      </el-col>
      <el-col :span="6">
        <div class="life-login">
          <img class="user-img" :src="userImg"/>
          <p>Hi！ 你好</p>
          <el-button round>注册</el-button>
          <el-button round>立即登录</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="m-life-bottom">
      <el-col :span="7">1</el-col>
      <el-col :span="7">2</el-col>
      <el-col :span="4">3</el-col>
      <el-col :span="6">4</el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  },
  data() {
    return {
      lifeImg: 'http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg',
      userImg: '//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.m-life {
  height: 240px;
  width: 950px;
  .m-life-bottom {
    margin-top: 10px;
    .el-col {
      margin-left: 10px;
      background: #ccc;
    }
  }
  .life-banner {
    margin-left: 12px;
  }
  .life-img {
    width: 150px;
    height: 100%;
    background: #ccc;
    margin: 0 10px;
    img {
      width: 150px;
    }
  }
  .life-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 210px;
    margin: 0 10px;
    padding: 15px;
    border: solid 1px #ccc;
    .user-img {
      width:50px;
      height:50px;
      border-radius:50%;
      border: solid 2px #ccc;
      -webkit-border-radius:50%;
      -moz-border-radius:50%;
    }
    p {
      font-size: 16px;
      margin: 10px 0;
    }
    .el-button {
      width: 120px !important;
      margin: 6px 0 !important;
    }
  }
}
</style>