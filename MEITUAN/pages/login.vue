<template>
  <div class="page-login">
    <div class="login-logo">
      <a href="/"><img class="logoImg" src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt=""></a>
    </div>
    <div class="login-main">
      <div class="main-img"></div>
      <div class="main-login">
        <div class="login-type"><p>手机动态码登录<i class="iconfont">&#xe632;</i></p><p>账户登录</p></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="email">
            <el-input placeholder="请输入邮箱" v-model="ruleForm.email" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="pwd" class="marginBottom">
            <el-input placeholder="请输入密码" v-model="ruleForm.pwd" prefix-icon="el-icon-lock" type="password"></el-input>
            <a href="##" class="forgetPwd">忘记密码</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="loginBtn" @click="onSubmit">登录</el-button>
            <p>还没有账号，<a href="/register">免费注册</a></p>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-foot">
      <ul v-for="(item, index) in loginFootList" :key="index">
        <li><a href="/">{{item}}</a></li>
      </ul>
    </div>
    <p class="foot-txt">©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
  </div>
</template>

<script>
export default {
  layout: 'null',
  data() {
    return {
      ruleForm: {
        email: '',
        pwd: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      loginFootList: [
        '关于美团','关于美团','关于美团','关于美团','关于美团'
      ]
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>
<style lang="scss" scoped>
.page-login {
  width: 100%;
  margin-top: 20px;
  .login-logo {
    width: 980px;
    margin: 0 auto;
    .logoImg {
      width: 128px;
      height: 36px;
    }
  }
  .login-main{
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
      .marginBottom {
        margin-bottom: 0px;
      }
      .forgetPwd {
        margin-top: -5px;
        float: right;
      }
      .loginBtn {
        width: 100%;
      }
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
  .login-foot {
    width: 980px;
    overflow: auto;
    margin: 0 auto;
    border-top: solid 1px rgb(231, 231, 231);
    border-bottom: solid 1px rgb(231, 231, 231);
    padding: 15px 0;
    ul {
      list-style-type: none;
    }
    li {
      float: left;
      padding: 0 15px;
      line-height: 15px;
      border-left: solid 1px rgb(231, 231, 231);
      a {
        color: #666;
      }
    }
  }
  .foot-txt {
    width: 980px;
    margin: 0 auto;
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
  }
}
</style>