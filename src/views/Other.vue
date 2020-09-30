<template>
  <div>
    <h2>跳转到其他页面啦，奥利给~</h2>
    <button @click="goBack">回首页</button>
  </div>
</template>

<script>
export default {
  name: 'Other',
  methods: {
    goBack() {
      this.$router.push('/home')
    },
  },
}
</script>

<style></style>
