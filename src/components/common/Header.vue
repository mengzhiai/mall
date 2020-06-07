<!--
 * @Author: your name
 * @Date: 2020-05-21 22:20:45
 * @LastEditTime: 2020-06-07 16:55:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\Header.vue
-->
<template>
<div class="header">
  <div class="content-box top-list flex-between">
    <div class="link">
      <ul class="flex">
        <li v-for="(item, i) in topMenuList" :key="i">{{ item.name }}</li>
      </ul>
    </div>
    <div class="login-message">
      <ul class="flex">
        <li v-for="item in loginList" :key="item.id" @click="loginFun(item.id)">{{item.name}}</li>
      </ul>
    </div>
  </div>
  <div class="nav-list content-box flex">
    <div class="logo">
      <a href="/">
        <img src="@/assets/logo.png" alt />
      </a>
    </div>
    <div class="menu-list">
      <ul class="flex">
        <li v-for="(item, i) in navList" :key="i">{{item.name}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      topMenuList: [{
          name: "小米商城",
        },
        {
          name: "MIUI",
        },
        {
          name: "IoT",
        },
        {
          name: "云服务",
        },
        {
          name: "金融",
        },
        {
          name: "有品",
        },
        {
          name: "小爱开放平台",
        },
        {
          name: "企业团购",
        },
        {
          name: "资质证照",
        },
        {
          name: "协议规则",
        },
      ],
      loginList: [{
          id: '1',
          name: '登录'
        },
        {
          id: '2',
          name: '注册'
        },
        {
          id: '3',
          name: '消息通知'
        }
      ],
      navList: [{
          name: '小米手机'
        },
        {
          name: 'Redmi 红米'
        },
        {
          name: '电视'
        },
        {
          name: '笔记本'
        },
        {
          name: '家电'
        },
        {
          name: '路由器'
        },
        {
          name: '智能硬件'
        },
        {
          name: '服务'
        },
        {
          name: '社区'
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      /* this.axios.get('/api/users').then(res => {
        console.log(res.data.data);
        // this.navList = res.data.data;
      }) */
    },
    loginFun(id){
      if(id === '1'){
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  background-color: #333;
}

.top-list {
  font-size: 12px;

  ul {
    li {
      margin-right: 15px;
      line-height: 40px;
      color: #b0b0b0;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
}

.nav-list {
  margin: 20px auto;

  .menu-list {
    margin-left: 100px;
  }

  li {
    margin-right: 20px;
    line-height: 53px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
