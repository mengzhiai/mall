<!--
 * @Date: 2020-10-19 23:41:48
 * @LastEditors: jun
 * @LastEditTime: 2020-10-19 23:46:19
 * @FilePath: \mall\src\views\homePage\test.vue
-->
<template>
  <div>
testfdsafsda
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let arr = [
          {
            name: 'a'
          },
          {
            name: 'b'
          }
        ]
        this.$store.commit('saveList', arr)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>