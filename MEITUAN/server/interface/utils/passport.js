// koa-passport是koa的一个中间件，
// 它实际上只是对passport的一个封装。
// 利用koa-passport可以简便的实现登录注册功能，
// 不但包括本地验证，还有很多提供第三方登录的模块可以使用。

// passport-local用于使用用户名和密码进行身份验证的Passport策略

const passport = require('koa-passport')
const LocalStrategy = require('passport-local')
const UserModel = require('../../dbs/models/users')

// 登录验证
passport.use(new LocalStrategy(
  async function(username,password,done){
    const where = {
      username
    }
    const result = await UserModel.findOne(where)
    if (result !== null) {
      if(result.password === password){
        return done(null, result)
      }else {
        return done(null, false, '密码错误')
      }
    }else {
      return done(null, false, '用户不存在')
    }
  }
))

// cookie 序列化
passport.serializeUser(function(user,done){
  done(null,user)
})
// 反序列化
passport.deserializeUser(function(user, done) {
  return done(null,user)
})

module.exports = passport