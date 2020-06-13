<!--
 * @Author: your name
 * @Date: 2020-05-21 22:20:45
 * @LastEditTime: 2020-06-13 12:10:58
 * @LastEditors: jun
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\Header.vue
-->
<template>
<div class="header">
  <div class="top-list">
    <div class="content-box flex-between">
      <div class="link">
        <ul class="flex">
          <li v-for="(item, i) in topMenuList" :key="i">{{ item.name }}</li>
        </ul>
      </div>
      <div class="login-message">
        <ul class="flex" v-if="loginStatus===true">
          <li v-for="item in loginList" :key="item.id" @click="loginFun(item.id)">{{item.name}}</li>
        </ul>
        <ul class="flex" v-if="loginStatus===false">
          <li>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{loginPerson}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="b">评价晒单</el-dropdown-item>
                <el-dropdown-item command="c">我的喜欢</el-dropdown-item>
                <el-dropdown-item command="d">小米账户</el-dropdown-item>
                <el-dropdown-item command="e">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>消息通知</li>
          <li>我的订单</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="nav-list content-box flex-between">
    <div class="flex">
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
    <div class="search align-right">
      <el-input placeholder="请输入搜索内容" size="small">
        <el-button class="el-icon-search" slot="append"></el-button>
      </el-input>
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
      ],
      loginStatus: true,
      loginPerson: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let loginStatus = sessionStorage.getItem('userName');
      if (loginStatus !== null && loginStatus !== undefined) {
        this.loginStatus = false;
        this.loginPerson = loginStatus;
      }
    },
    loginFun(id) {
      if (id === '1') {
        this.$router.push('/login');
      }
    },

    handleCommand(val) {
      if (val === 'e') {
        this.loginPerson = '';
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.top-list {
  font-size: 12px;
  height: 40px;
  background-color: #333;

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
    margin-right: 30px;
    line-height: 53px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #ff6700;
    }
  }

  .search {
    line-height: 53px;
  }
}

.el-dropdown-link {
  color: #b0b0b0;
}
</style>
