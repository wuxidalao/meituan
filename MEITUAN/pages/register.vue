<template>
  <div class="page-register">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
        <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
        <span class="status">{{statusMsg}}</span>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" maxlength="4"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="cpwd">
        <el-input v-model="ruleForm.cpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">同意以下协议并注册</el-button>
        <div class="error">{{error}}</div>
        <a class="f1" href="https://www.meituan.com/about/terms">《美团网用户协议》</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const CryptoJS = require('crypto-js')
export default {
  layout: 'blank',
  data() {
    var validatorPwd = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('请重新输入密码'))
      }else if(value!== this.ruleForm.pwd){
        callback(new Error('两次密码不一样'))
      }else{
        callback()
      }
    };
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        email: '',
        code: '',
        pwd: '',
        cpwd: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        cpwd: [
          { required: true, message: '请再次输入', trigger: 'blur' },
          { validator: validatorPwd, trigger:'blur'}
        ],
      }
    };
  },
  methods: {
    sendMsg() {
      const self = this
      let namePass
      let emailPass

      if(self.timerid){
        return false
      }

      this.$refs['ruleForm'].validateField('name', (valid) => {
        namePass = valid
      })
      self.statusMsg = ''

      if(namePass) {
        return false
      }

      this.$refs['ruleForm'].validateField('email', (valid) => {
        emailPass = valid
      })

      if(!namePass && !emailPass) {
        self.$axios.post('/users/verify', {
          username: encodeURIComponent(self.ruleForm.name),
          email: self.ruleForm.email
        }).then(({status, data}) => {
          if(status === 200 && data && data.code === 0) {
            let count = 60
            self.statusMsg = `验证码已发送，剩余${count--}秒`
            self.timerid = setInterval(function(){
              self.statusMsg = `验证码已发送，剩余${count--}秒`
              if(count === 0) {
                clearInterval(self.timerid)
                self.statusMsg = ''
              }
            },1000)
          }else {
            self.statusMsg = data.msg
          }
        })
      }
    },
    register() {
      let self = this
      this.$refs['ruleForm'].validate((valid) => {
        if(valid) {
          self.$axios.post('/users/singnup', {
            username: window.encodeURIComponent(self.ruleForm.name),
            password: CryptoJS.MD5(self.ruleForm.pwd).toString(),
            email: self.ruleForm.email,
            code: self.ruleForm.code
          }).then((status, data) => {
            if(status === 200) {
              if(data && data.code === 0) {
                location.href = '/login'
              }else {
                self.error = data.msg
              }
            }else{
              self.error = `服务器出错，错误码：${status}`
            }
            setTimeout(function(){
              self.error = ''
            },3000)
          })
        }
      })
    }
  } 
}
</script>

<style lang="scss" scoped>
.page-register {
  width: 980px;
  margin: 0 auto;
  margin-top: 50px;
  .el-input {
    width: 260px;
  }
  .f1 {
    color: orange;
  }
}
</style>