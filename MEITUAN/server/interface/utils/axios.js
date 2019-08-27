const axios = require('axios')
// 创建接口实例
 const instance = axios.create({
   baseURL: `http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`, // process.env.HOST地址||localhost地址:process.env.PORT端口||3000端口
   timeout: 1000, // 超时1秒返回错误
   headers: {
    
   }
 })

module.exports = instance