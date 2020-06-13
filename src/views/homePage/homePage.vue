<!--
 * @Author: jun
 * @Date: 2020-06-08 00:36:47
 * @LastEditors: jun
 * @LastEditTime: 2020-06-14 01:17:46
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
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
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
        <div class="page">
          <div class="item" v-for="(item,i) in productArr" :key="i" @click="productDetail(item.productId)">
            <div class="top-txt" v-if="item.isNew==1">新品</div>
            <div class="cen-img">
              <img :src="item.imgUrl" alt />
            </div>
            <div class="describe">{{item.describe}}</div>
            <div class="detail">{{item.detail}}</div>
            <div class="price">{{item.price}}元</div>
          </div>
        </div>
      </div>
      <div class="common-img">
        <img src="@/assets/img/tv.jpg" alt />
      </div>
      <div class="common-title">家电</div>
      <div class="electric">
        <div class="item" v-for="(item,i) in electric" :key="i">
          <div class="top-txt" v-if="item.isNew==1">新品</div>
          <div class="cen-img">
            <img :src="item.img" alt />
          </div>
          <div class="name">{{item.productName}}</div>
          <div class="detail">{{item.productDescription}}</div>
          <div class="price">{{item.productPrice}}元</div>
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

      productArr: [{
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          imgUrl: 'https://picsum.photos/160/160',
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        }
      ],
      sideImg: require("@/assets/img/xm9.jpg"),
      electric: [{
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          productName: "米家互联网洗烘一体机10kg",
          productPrice: 2499
        }
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.post('/api/product/product').then(res => {

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

        img {
          width: 22px;
          height: 22px;
        }

        .txt {
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;

    .item {
      cursor: pointer;
      text-align: center;
      background-color: #fff;
      transition: all 0.2s linear;

      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }

      .top-txt {
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
        line-height: 30px;
      }

      .price {
        color: #ff6700;
      }
    }
  }
}

.electric {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  .item {
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }

    .top-txt {
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

    .price {
      color: #ff6700;
      margin: 15px 0;
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
