const Router = require('koa-router')
const axios = require('./utils/axios')

let router = new Router({
  prefix: '/geo'
})

// 我的位置
router.get('/getPosition', async (ctx)=> {
  let {
    status,
    data: {
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  }else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

module.exports = router