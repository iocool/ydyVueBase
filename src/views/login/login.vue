<template>
  <div id="login">
    <h3>
      登录页面
    </h3>
    <div class="box"></div>
    <h1>{{userInfo}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    computed: {
      userInfo () {
        return this.$store.state.app.customerId
      }
    },
    created () {
      this.$http.get(this.$api.isLogin).then()
    }
  }
</script>
<style lang="stylus" scoped>
  @import "login.styl"
</style>
