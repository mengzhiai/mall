<!--
 * @Author: jun
 * @Date: 2020-06-08 00:36:47
 * @LastEditors: jun
 * @LastEditTime: 2020-06-15 01:28:52
 * @FilePath: \mall\src\views\homePage\homePage.vue
 * @Description: 
--> 

<template>
<div>
  <div class="content-box">
    <div class="menu-box flex-between">
      <div class="side-menu">
        <ul>
          <li class="flex-between" v-for="item in menuList" :key="item.id">
            <span>{{item.name}}</span>
            <span><i class="el-icon-arrow-right"></i></span>
          </li>
        </ul>
      </div>
      <div class="main">
        <el-carousel trigger="click" height="420px">
          <el-carousel-item v-for="item in bannerList" :key="item.bannerId">
            <!-- <h3 class="small">{{ item }}</h3>
             -->
             <img v-lazy="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="sub-page flex-between">
      <div class="show">
        <ul class="flex-center">
          <li v-for="(item, i) in iconList" :key="i">
            <img :src="item.icon" alt="">
            <div class="txt">{{item.txt}}</div>
          </li>
        </ul>
      </div>
      <div class="new flex-end">
        <div v-for="(item,i) in subList" :key="i">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="all">
    <div class="content-box">
      <div class="common-title">
        <div class="name">手机</div>
        <div class="more">
          查看全部
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="phone">
        <div class="side">
          <img :src="sideImg" alt />
        </div>
        <div class="page flex-between-wrap">
          <div class="item" v-for="(item,i) in productArr" :key="i" @click="productDetail(item.productId)">
            <div class="top-txt" v-if="item.isNew==1">新品</div>
            <div class="cen-img">
              <img v-lazy="item.imgUrl" alt />
            </div>
            <div class="describe">{{item.productName}}</div>
            <div class="detail">{{item.description}}</div>
            <div class="price">{{item.originalPrice}}元</div>
          </div>
        </div>
      </div>
      <div class="common-img">
        <img src="@/assets/img/tv.jpg" alt />
      </div>
      <div class="common-title">家电</div>
      <div class="electric common-wrap flex-between-wrap">
        <div class="item" v-for="(item,i) in electricList" :key="i">
          <div class="top-txt" v-if="item.isNew==1">新品</div>
          <div class="cen-img">
            <img v-lazy="item.imgUrl" alt />
          </div>
          <div class="name">{{item.productName}}</div>
          <div class="detail">{{item.description}}</div>
          <div class="price"><span class="present-price">{{item.presentPrice}}元</span><span class="original-price" v-if="item.originalPrice!==null">{{item.originalPrice}}元</span></div>
        </div>
      </div>
      <div class="smart">
        <div class="common-title">
          <div class="name">智能</div>
          <div class="more">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="smart-lsit common-wrap flex-between-wrap">
          <div class="item" v-for="item in smartList" :key="item.id">
            <div class="top-txt" v-if="item.isNew==1">新品</div>
            <div class="cen-img">
              <img v-lazy="item.imgUrl" alt />
            </div>
            <div class="name">{{item.productName}}</div>
            <div class="detail">{{item.description}}</div>
            <div class="price"><span class="present-price">{{item.presentPrice}}元</span><span class="original-price" v-if="item.originalPrice!==null">{{item.originalPrice}}元</span></div>
          </div>
        </div>
      </div>
      <div class="accessories">
        <div class="common-title">
          <div class="name">配件</div>
          <div class="more">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="accessories-list common-wrap flex-between-wrap">
          <div class="item" v-for="item in accessoriesList" :key="item.id">
            <div class="top-txt" v-if="item.isNew==1">新品</div>
            <div class="cen-img">
              <img v-lazy="item.imgUrl" alt />
            </div>
            <div class="name">{{item.productName}}</div>
            <div class="detail">{{item.description}}</div>
            <div class="price"><span class="present-price">{{item.presentPrice}}元</span><span class="original-price" v-if="item.originalPrice!==null">{{item.originalPrice}}元</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{
          name: '手机 电话卡'
        },
        {
          name: '电视 盒子'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        },
        {
          name: '手机 电话卡'
        }
      ],
      bannerList: [],
      subList: [{
          imgUrl: 'https://picsum.photos/170'
        },
        {
          imgUrl: 'https://picsum.photos/170'
        },
        {
          imgUrl: 'https://picsum.photos/170'
        }
      ],
      iconList: [{
          icon: require('../../assets/icon/ico1.png'),
          txt: '小米秒杀'
        },
        {
          icon: require('../../assets/icon/ico2.png'),
          txt: '企业团购'
        },
        {
          icon: require('../../assets/icon/ico3.png'),
          txt: 'F码通道'
        },
        {
          icon: require('../../assets/icon/ico4.png'),
          txt: '米粉卡'
        },
        {
          icon: require('../../assets/icon/ico5.png'),
          txt: '以旧换新'
        },
        {
          icon: require('../../assets/icon/ico6.png'),
          txt: '话费充值'
        }
      ],

      productArr: [],
      sideImg: require("@/assets/img/xm9.jpg"),
      electricList: [],
      smartList: [],
      accessoriesList: []
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.post('/api/product/menuList').then(res=>{
        if(res.data.status === 1){
          this.bannerList = res.data.banner;
        }
      })
      this.axios.post('/api/product/product').then(res => {
        if (res.data.status === 1) {
          // this.productArr = res.data.data;
          let data = res.data.data;
          data.forEach(item => {
            if (item.productType === 'phone') {
              this.productArr.push(item);
            } else if (item.productType === 'appliances') {
              this.electricList.push(item);
            } else if (item.productType === 'smart') {
              this.smartList.push(item);
            } else if(item.productType === 'accessories'){
              this.accessoriesList.push(item);
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-box {
  .side-menu {
    width: 230px;
    height: 420px;
    background-color: rgba(105, 101, 101, .6);

    ul {
      li {
        padding: 0 30px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        font-weight: bold;

        &:hover {
          cursor: pointer;
          background-color: #ff6700;
        }
      }
    }
  }

  .main {
    width: calc(100% - 230px);
    img{
      width: 100%;
      height: 420px;
    }
  }
}

.sub-page {
  margin: 15px 0;

  .show {
    width: 230px;
    height: 170px;
    background-color: #5f5750;
    position: relative;

    .flex-center {
      flex-direction: row;
      flex-wrap: wrap;

      li {
        width: calc(100% / 3);
        text-align: center;
        height: 85px;
        color: #757575;
        padding-top: 18px;
        font-size: 14px;
        cursor: pointer;
        opacity: .7;

        &:hover {
          opacity: 1;
        }

        img {
          width: 24px;
          height: 24px;
          margin: 0 auto 4px;
        }

        .txt {
          color: #fff;
          font-size: 12px;
          padding-top: 5px;
        }
      }

      li+li {
        border: 1px solid #665e57;
      }
    }
  }

  .new {
    width: calc(100% - 230px);

    div {
      width: calc(100% / 3 - 15px);
      margin-left: 15px;

      img {
        width: 100%;
        height: 170px;
      }
    }
  }
}

.common-img {
  margin: 30px 0;

  img {
    width: 100%;
  }
}

.common-title {
  text-align: left;
  padding: 30px 0 20px;
  display: flex;
  justify-content: space-between;

  .name {
    font-size: 20px;
    font-weight: 900;
  }

  .more {
    &:hover {
      color: #ff6700;
      cursor: pointer;
    }
  }
}

.all {
  width: 100%;
  background-color: #f5f5f5;
}

.phone {
  display: grid;
  grid-gap: 0 15px;
  justify-content: space-between;
  grid-template-columns: 240px repeat(1, 1fr);

  .side {
    img {
      width: 100%;
    }
  }

  .page {
    .item {
      width: calc(100% / 4 - 10px);
      margin-bottom: 15px;
      cursor: pointer;
      text-align: center;
      background-color: #fff;
      position: relative;
      transition: all 0.2s linear;

      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }

      .top-txt {
        position: absolute;
        left: 0;
        right: 0;
        width: 60px;
        height: 25px;
        line-height: 25px;
        margin: 0 auto;
        color: #fff;
        background-color: #83c44e;
      }

      .cen-img {
        margin: 20px 0;

        img {
          width: 160px;
          height: 160px;
        }
      }

      .describe {
        color: #333;
        font-size: 16px;
      }

      .detail {
        color: #b0b0b0;
        font-size: 12px;
        line-height: 30px;
      }

      .price {
        color: #ff6700;
      }
    }
  }
}

.common-wrap {
  .item {
    width: calc(100% / 5 - 10px);
    background-color: #fff;
    margin-bottom: 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s linear;
    position: relative;

    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }

    .top-txt {
      position: absolute;
      left: 0;
      right: 0;
      width: 60px;
      height: 25px;
      line-height: 25px;
      margin: 0 auto;
      color: #fff;
      background-color: #83c44e;
    }

    .cen-img {
      margin: 10px 0;

      img {
        width: 100%;
      }
    }

    .name {
      margin: 10px 0;
    }

    .detail {
      color: #b0b0b0;
      padding: 0 10px;
      font-size: 12px;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
      white-space: nowrap;
    }

    .price {
      margin: 15px 0;
    }

    .present-price {
      color: #ff6700;
    }

    .original-price {
      color: #ccc;
      margin-left: 10px;
      text-decoration: line-through;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  // line-height: 420px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
