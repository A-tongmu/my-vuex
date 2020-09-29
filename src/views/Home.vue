<template>
  <div class="home">
    <HelloWorld :msg="`Welcome to Your Vue.js ： ${message}`"/>
    <p>这是store中的all：{{products}}</p>
    <button @click.prevent="setAll">修改home store中的数据</button>
    <br />
    <br />
    <button @click.prevent="goToAbout">去about</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'v-components/HelloWorld.vue'
import { mapState, mapActions,mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: '这个是。。。。'
    }
  },
  computed:{
    ...mapState({
      products: state => state.home.all
    }),
  },
  methods: {
    goToAbout(){
      //query 传参刷新页面参数页面存在，params 会丢失传参
      this.$router.push({ name: 'About', query: { id: '123' } })
    },
    setAll(){
      this.setProducts(2)
    },
    ...mapMutations('home',[
      'setProducts'
    ])
  }
}
</script>
