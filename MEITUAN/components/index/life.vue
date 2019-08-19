<template>
  <div class="m-life">
    <el-row :gutter="10">
      <el-col :span="14"><div class="life-slider"><slider/></div></el-col>
      <el-col :span="4"><div class="life-img"><img :src="lifeImg"/></div></el-col>
      <el-col :span="6">
        <div class="life-login">
          <img class="user-img" :src="userImg"/>
          <p>Hi！ 你好</p>
          <el-button round><nuxt-link to="/register">注册</nuxt-link></el-button>
          <el-button round><nuxt-link to="/login">立即登录</nuxt-link></el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7"><div class="thehotelImg"><img :src="thehotelImg"/></div></el-col>
      <el-col :span="7"><div class="newImg"><img :src="newImg"/></div></el-col>
      <el-col :span="4"><div class="merchantsImg"><img :src="merchantsImg"/></div></el-col>
      <el-col :span="6">
        <div class="erweima">
          <img :src="erweima"/>
          <h4>美团APP手机版</h4>
          <h6><span>1元起</span> 吃喝玩乐</h6>
        </div>
      </el-col>
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
      userImg: '//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg',
      thehotelImg: 'http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png',
      newImg: 'http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg',
      merchantsImg: 'http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg',
      erweima: '//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.m-life {
  margin-left: 10px;
  margin-top: 10px;
  .life-slider {
    height: 240px;
  }
  .life-img {
    height: 240px;
    img {
      height: 100%;
    }
  }
  .life-login {
    border: solid 1px #ccc;
    box-sizing: border-box;
    height: 240px;
    text-align: center;
    .user-img {
      width:50px;
      height:50px;
      margin-top: 10px;
      border-radius:50%;
      border: solid 2px #ccc;
      -webkit-border-radius:50%;
      -moz-border-radius:50%;
    }
    p {
      font-size: 16px;
      margin: 8px 0;
    }
    .el-button {
      width: 120px !important;
      margin: 6px 0 !important;
    }
  }

  .aaa {
    background: #ccc;
  }
  .thehotelImg,.newImg,.merchantsImg {
    img {
      width: 100%;
      height: 165px;
    }
  }
  .erweima {
    width: 100%;
    height: 165px;
    text-align: center;
    color: #666;
    border: solid 1px #ccc;
    box-sizing: border-box;
    img {
      width: 95px;
      height: 95px;
      margin: 10px 0;
    }
    h4 {
      font-size: 16px;
    }
    h6 {
      font-size: 12px;
    }
    span {
      color: red;
    }
  }
}
</style>