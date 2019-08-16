<template>
  <div class="page-login">
    <div class="logoBox">
      <a href="/"><img class="logoImg" src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt=""></a>
    </div>
    <div class="main-box">
      <div class="main-img"></div>
      <div class="main-login">
        <div class="login-type"><a href="##">手机动态码登录<i class="iconfont">&#xe632;</i></a><p>账户登录</p></div>
        <el-input
          placeholder="请输入内容"
          >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
}
</script>
<style lang="scss" scoped>
.page-login {
  width: 100%;
  margin-top: 20px;
  .logoBox {
    width: 980px;
    margin: 0 auto;
    .logoImg {
      width: 128px;
      height: 36px;
    }
  }
  .main-box{
    width: 900px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .main-img {
      width: 480px;
      height: 370px;
      background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg) no-repeat;
    }
    .main-login {
      width: 270px;
      margin-right: 50px;
      font-size: 14px;
      color: #666;
      .login-type {
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
        a {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
}
</style>