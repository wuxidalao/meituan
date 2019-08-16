<template>
  <div class="layou-blank">
    <div class="header-box">
      <div class="header">
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em>已有美团账号</em>
          <a href="/login"><el-button type="primary" size="small">登录</el-button></a>
        </span>
      </div>
    </div>
    <nuxt/>
    <div class="foot">©meituan.com  京ICP证070791号  京公网安备11010502025545号</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
  border-bottom: solid 2px #ccc;
  .header {
  height: 60px;
  width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
    .site-logo {
      width: 128px;
      height: 36px;
      background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png) no-repeat;
      background-size: contain;
    }
    .login {
      em {
        margin-right: 10px;
        color: #ccc;
      }
    }
  }
}
.foot {
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 16px;
  color: #ccc;
  text-align: center;
  margin-top: 80px;
  border-top: solid 1px #ccc;
}

</style>