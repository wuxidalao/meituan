<template>
  <div class="m-artistic">
    <div class="artistic-top">
      <div class="top-gediao">有格调</div>
      <div class="top-menu">
        <ul v-for="(item, index) in artisticList" :key="index">
          <li @mouseenter="cur=index" :class="{active:cur}">{{item.name}}<div :class="[isActive == index ? 'menu-icon' : '']"></div></li>
        </ul>
      </div>
    </div>
    <div class="artistic-main">
      <template v-for="(item, index) in artisticList[cur].child" v-show="cur">
        <nuxt-link to="/" :key="index">
          <div class="main-box">
            <img class="main-img" :src="item.img" />
            <h4 class="title">{{item.title}}</h4>
            <p class="brief">{{item.brief}}</p>
            <div class="price-district">
              <div class="price"><span>￥</span>{{item.price}}<del>门市价{{item.counterPrice}}</del></div>
              <div class="district">{{item.district}}</div>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      cur: 0,
      artisticList: [
        {
          name: '全部',
          child: [
            {
              img: '//p1.meituan.net/msmerchant/74739119ea4867c9f1aea13dbcaa1339160451.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            }
          ]
        },
        {
          name: '约会聚餐',
          child: [
            {
              img: '//p0.meituan.net/msmerchant/4e1c6aae4e6a4386633d3e3ac9da9a5d69531.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            }
          ]
        },
        {
          name: '丽人SPA',
          child: [
            {
              img: '//p1.meituan.net/bbia/17b66a4f2d34fcb25917218901e6d1e3442420.png@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            }
          ]
        },
        {
          name: '电影演出',
          child: [
            {
              img: '//p0.meituan.net/dpmerchantalbum/1348e98bbe38d63195caa91895edaa0f2181734.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/msmerchant/7e10e1205fe6bd5a7d53245459a61d9c6384935.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            }
          ]
        },
        {
          name: '品质出游',
          child: [
            {
              img: '//p1.meituan.net/msmerchant/74739119ea4867c9f1aea13dbcaa1339160451.jpg@368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            },
            {
              img: '//p0.meituan.net/merchantpic/ef2ee10dd42fb53b4c3a0c7543bb15bc82663.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
              title: '德香苑北京烤鸭（锦华万达店）',
              brief: '2人套餐，提供免费WiFi',
              price: '118',
              counterPrice: '210',
              district: '锦江区'
            }
          ]
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.m-artistic {
  width: 1190px;
  height: auto;
  margin-top: 40px;
  .artistic-top {
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: rgb(190, 164, 116);
    border-radius: 5px 5px 0 0;
    .top-gediao {
      font-size: 20px;
      color: #fff;
      margin: 0 10px;
      float: left;
    }
    .top-menu {
      color: #fff;
      cursor: pointer;
      ul {
        text-decoration: none;
        list-style: none;
      }
      li {
        float: left;
        padding: 0 5px;
        font-size: 16px;
        position: relative;
      }
      .menu-icon {
        position: absolute;
        left: 50%;
        top: 80%;
        transform: translate(-50%,-50%);
        width:0;
        height:0;
        line-height:0;
        border-width:9px;
        border-style:solid;
        border-color: transparent transparent red transparent;
      }
    }
  }
  .artistic-main {
    width: 100%;
    overflow: auto;
    border: solid 1px #ccc;
    box-sizing: border-box;
    padding: 15px;
    .main-box {
      width: 30.5%;
      margin: 15px;
      float: left;

      .main-img {
        width: 100%;
        height: 208px;
      }
      .title {
        width: 100%;
        line-height: 22px;
        font-size: 16px;
        margin: 10px 0 10px 0;
      }
      .brief {
        width: 100%;
        font-size: 12px;
        color: #999;
        line-height: 18px;
        margin-bottom: 10px;
      }
      .price-district {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .price {
          color: #BE9E4D;
          font-size: 24px;
          span {
            font-size: 12px;
          }
          del {
            color: #999;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .district {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>