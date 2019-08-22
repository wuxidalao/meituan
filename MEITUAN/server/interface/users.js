const Router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const User = require('../dbs/models/users')
const Passport = require('./utils/passport')
const axios = require('./utils/axios')
const Email = require('../dbs/config')

let router = new Router({
  prefix: '/users'
})

// 获取redis的客户端
let Store = new Redis().client

// 1.注册接口
router.post('/signup', async (ctx)=> {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body

  // 验证验证码
  if(code){
    // Store.hget返回哈希表中指定字段的值（真实验证码、过期时间）
    const saveCode = await Store.hget(`nodemail:${username}`,'code')
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
    
    // 判断验证码是否 正确（不为空、没过期） 已填写
    if(code === saveCode) {
      if(new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    }else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  }else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  // 用户名是否已存在
  let user = await User.find({
    username
  })
  if(user.length){
    ctx.body = {
      code: -1,
      msg: '用户名已存在'
    }
    return
  }

  // 写入数据库
  let nuser = await User.create({
    username,
    password,
    email
  })

  // 注册成功跳转登录
  if(nuser){
    let res = await axios.post('/users/signin',{
      username,
      password
    })
    if(res.data && res.data.code === 0){
      ctx.body = {
        code: 0,
        msg: '注册成功！',
        user: res.data.user
      }
    }else{
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  }else{
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})
// 2.登录接口
router.post('/signin', async (ctx,next)=>{
  return Passport.authenticate('local', function(err,user,info,status){
    if(err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    }else{
      if(user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      }else{
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx,next)
})
// 3.发送验证码 的接口
router.post('/verify', async (ctx,next) =>{
  const username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`,'expire') // 过期时间

  console.log(ctx.request.body)
  console.log('当前时间:', new Date().getTime())
  console.log('过期时间：', saveExpire)

  // 检验已存在的验证码是否过期，以限制用户频繁发送验证码
  if(saveExpire && new Date().getTime() - saveExpire < 0){
    ctx.body = {
      code: -1,
      msg: '操作频繁，1分钟后重试'
    }
    return false
  }

  // QQ邮箱smtp服务权限校验
  const transporter = nodeMailer.createTransport({
    /**
     *  端口465和587用于电子邮件客户端到电子邮件服务器通信 - 发送电子邮件。
     *  端口465用于smtps SSL加密在任何SMTP级别通信之前自动启动。
     *  端口587用于msa
     */
    host: Email.smtp.host,
    port: 587,
    secure: false,  // 为true时监听465端口，为false时监听其他端口
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  // 邮箱需要接收的信息
  const ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  // 邮箱需要显示的信息
  const mailOptions = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: '测试美团网注册码',
    html: `您正在注册美团网，您的注册码是${ko.code}`
  }
  // 执行发送邮件
  await transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      return console.log('err')
    }else{
      Store.hmset(`nodemail:${ko.suer}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})

// 4.退出 的接口
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()){
    ctx.body = {
      code: 0
    }
  }else {
    ctx.body = {
      code: -1
    }
  }
})

// 5. 获取用户名 的接口
router.get('/getUser', async (ctx, next) => {
  if(ctx.isAuthenticated()){
    const {username, email} = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  }else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

module.exports = router