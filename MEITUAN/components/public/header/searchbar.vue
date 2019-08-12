<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left"><img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt=""></el-col>
      <el-col :span="14" class="center">
        <div class="wrapper">
          <el-input v-model="search" @focus="focus" @blur="blur" @input="input" placeholder="搜索商家或地点"></el-input>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index">{{item}}</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, index) in searchList" :key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">大熊猫繁育研究基地</a>
          <a href="#">大熊猫繁育研究基地</a>
          <a href="#">大熊猫繁育研究基地</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="4" class="right">
        <ul class="security">
          <li><i class="refund"></i><p>随时退</p></li>
          <li><i class="single"></i><p>不满意</p></li>
          <li><i class="overdue"></i><p>过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: ['热门搜索', '热门搜索', '热门搜索'],
      searchList: ['搜索', '搜索', '搜索', '搜索'],
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      let self = this
      setTimeout(function() {
        self.isFocus = false
      },200)
    },
    input() {

    }
  }
}
</script>

<style lang="scss">

</style>

