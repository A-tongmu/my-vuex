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
		<ul v-if="list.length > 0" class="user">
			<li v-for="(item, index) in list" :key="index">
				<h3>姓名：{{ item.username }}</h3>
				<p>描述：{{ item.content }}</p>
				<a @click="handleDelete(index)">删除</a>
			</li>
		</ul>
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
			//query 传参刷新页面参数页面存在，params 会丢失传参
			this.$router.push({ name: 'About', query: { id: '123' } })
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
	li {
		border-bottom: 1px solid #aaa;
	}
	a {
		color: royalblue;
		cursor: pointer;
	}
}
</style>
