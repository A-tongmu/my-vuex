<template>
  <div class="about">
    <h1>This is an about id : {{ id }}</h1>
    <button @click.prevent="goToOther">去其他页面</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      id: '',
    }
  },
  methods: {
    goToOther() {
      this.$router.push('/other')
    },
  },
  created() {
    this.id = this.$route.params.id
  },
}
</script>

<style></style>
