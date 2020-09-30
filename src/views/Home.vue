<template>
  <div class="home">
    <HelloWorld :msg="`Welcome to Your Vue.js ： ${message}`" />
    <p>这是store中的all：{{ products }}</p>
    <button @click.prevent="setAll">修改home store中的数据</button>
    <br />
    <br />
    <button @click.prevent="goToAbout">去about</button>
    <hr />
    <p>格式很乱，代码瞎写，嘿嘿</p>
    <button @click="getServices">获取用户列表</button>
    <table class="user" v-if="list.length > 0">
      <thead>
        <tr>
          <th>姓名</th>
          <th>登记时间</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.username }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.content }}</td>
          <td><a class="operate" @click="handleDelete(index)">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'v-components/HelloWorld.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import { queryTestService } from '../service/api'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: '这个是。。。。',
      list: [],
    }
  },
  computed: {
    ...mapState({
      products: state => state.home.all,
    }),
  },
  methods: {
    goToAbout() {
      this.$router.push({ name: 'About', params: { id: '123' } })
    },
    setAll() {
      this.setProducts(2)
    },
    async getServices() {
      const res = await queryTestService({})
      const { list, code } = res
      // console.log(list) //vue 设置监听后的数据
      // console.log(JSON.parse(JSON.stringify(list))) //获取到原始数据
      if (code == 200) {
        this.list = list
      }
    },
    ...mapMutations('home', ['setProducts']),
    handleDelete(index) {
      this.list.splice(index, 1)
    },
  },
}
</script>
<style lang="less" scoped>
.user {
  width: 80%;
  border-collapse: collapse;
  margin: 20px auto;
  tr,
  td,
  th {
    border: 1px solid #ddd;
  }
  a {
    color: royalblue;
    cursor: pointer;
  }
}
</style>
