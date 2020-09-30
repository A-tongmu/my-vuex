# my-vuex
## 项目启动步骤
* 1 安装依赖
```
npm install
```

* 2 运行指令
```
npm run dev
```

* 3 打包
```
npm run build
```
## 项目环境
脚手架： vue/cli 4.5.6
node版本：10.13.0
项目依赖详见package.json

## 项目实现功能
* 1 vuex 的简单使用
```javascript
/*
具体实现在store文件下，模拟大项目对store进行模块化分割
mapState, mapActions, mapMutations 的使用
*/
...
import home from './modules/home'
...
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})
```
* 2 使用mock模拟假数据，拦截axios请求
```javascript
/*
使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
在main.js中引入mock文件
*/
mock('/QueryTest', 'post', {
  code: 200,
  'list|10': [
    {
      username: () => Random.cname(),
      time: () => Random.date('yyyy.M.d'),
      content: () => Random.csentence(5, 10)
    }
  ],
  message: '请求成功'
})
```
* 3 使用husky、lint-staged、eslint实现提交代码自动格式化
```javascript
{
  // 代码换行长度
  "printWidth": 200,
  // 代码缩进空格数
  "tabWidth": 2,
  // 使用制表符缩进而不是空格缩进
  "useTabs": true,
  // 代码结尾是否加分号
  "semi": false,
  // 是否使用单引号
  "singleQuote": true,
  // 对象大括号内两边是否加空格 { a:0 }
  "bracketSpacing": true,
  // 单个参数的箭头函数不加括号 x => x
  "arrowParens": "avoid"
}
```

> 页面内容可忽略不计QAQ~