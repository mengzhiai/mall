<!--
 * @Author: your name
 * @Date: 2020-05-21 22:06:59
 * @LastEditTime: 2020-06-08 00:37:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\Home.vue
--> 
<template>
<div class="home">
  <header-compontent></header-compontent>
  <div class="containers">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import headerCompontent from '@/components/common/Header'
export default {
  name: 'Home',
  components: {
    headerCompontent
  },
  data() {
    return {

    }
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      this.axios.get('/api').then(res => {

      })
    }
  }
}
</script>
