<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app',
  created(){
    if (this.$route.path !== '/home') { // /首页
      this.$router.replace('/home') // 切换到首页
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
