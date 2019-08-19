export default {
  // mongo 连接地址
  dbs: 'mongodb://127.0.0.1:27017/student',
  // redis 地址和端口
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  // qq邮箱配置
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1943551716@qq.com'
    },
    get pass() {
      return 'vgghaqsojuhoegdh' // 授权码
    }
  },
  // 生成邮箱验证码
  get code() {
    return ()=> {
      return Math.random().toString(16).slice(2,6).toUpperCase()
    }
  },
  // 定义验证码过期时间rules，1小时
  get expire() {
    return ()=> {
      return new Date().getTime()+60*60*1000 //过期时间
    }
  }
}