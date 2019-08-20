// users数据表：昵称、密码、邮箱
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, // 唯一索引
    require: true //  必选
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User',UserSchema)