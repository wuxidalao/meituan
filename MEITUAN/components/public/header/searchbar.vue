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
.m-header{
  .m-header-searchbar {
      height: 157px;
      padding: 20px 20px;
      background: #fff;
      align-items: start;
      box-sizing: border-box;
      .left {
        width: 280px;
        padding-top: 15px;
        img {
          width: 126px;
          height: 46px;
        }
      }
      .center {
        flex: 1;
        width: auto;
        .wrapper {
          margin-top: 16px;
          border: 1px solid #13D1BE;
          border-radius: 4px;
          width: 552px;
          box-sizing: border-box;
          position: relative;
          white-space: nowrap;
          .el-input {
            width: 462px;
          }
          input {
            border: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .el-button {
            width: 88px;
            border: none;
            background: #13D1BE;
            font-size: 16px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            vertical-align: -1px;
            i {
              font-weight: bold;
            }
          }
          .hotPlace,
          .searchList {
            position: absolute;
            top: 42px;
            left: 0;
            background: #fff;
            padding: 10px;
            font-size: 12px;
            width: 462px;
            box-sizing: border-box;
            border: 1px solid #E5E5E5;
            border-top: none;
            z-index: 999;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;

            dt {
              color: #999;
              font-weight: bold;
            }

            dd {
              display: inline-block;
              color: #666;
              margin-right: 10px;
              margin-bottom: 3px;
              margin-top: 5px;
              cursor: pointer;

              &:hover {
                background: #F8F8F8;
                color: #31BBAC;
              }
            }

            &.searchList {
              padding: 0;
              margin: 0;
              dd {
                margin: 0;
                padding: 3px 10px;
                display: block;
                line-height: 1.6;
              }
            }
          }
        }

        .suggest {
          width: 552px;
          overflow: hidden;
          padding-left: 16px;
          line-height: 1;
          margin-top: 8px;
          height: 14px;

          a {
            color: #999;
            margin-right: 10px;
            margin-bottom: 3px;
            display: inline-block;
            font-size: 12px;

            &:hover {
              color: #31BBAC;
            }
          }
        }

        .nav {
          list-style: none;
          display: flex;
          margin-top: 25px;

          li {
            font-weight: 700;
            font-size: 16px;
            margin: 0 20px;
            cursor: pointer;
            position: relative;

            a {
              color: #222;

              &:hover {
                color: #f04d4e;
              }

              &.takeout:hover {
                color: #fbc700;
              }

              &.apartment:hover {
                color: #FDC411;
              }

              &.business:hover {
                color: #31BBAC;
              }
            }
          }
        }
      }

      .right {
        text-align: right;
        padding-top: 15px;

        .security {
          li {
            display: inline-block;
            text-align: center;
            padding: 0 5px;
          }

          i {
            font-style: normal;

            &:after {
              font-family: iconfont;
              font-size: 36px;
              color: #13D1BE;
            }
          }

          .refund {
            &:after {
              content: '\e65f';
            }
          }

          .single {
            &:after {
              content: '\e652';
            }
          }

          .overdue {
            &:after {
              content: '\e65e';
            }
          }

          .txt {
            color: #999;
            font-size: 12px;
            line-height: 1;
            margin: 0;
            text-align: center;
          }
        }
      }
    }
}

</style>

