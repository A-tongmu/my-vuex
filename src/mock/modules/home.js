// 引入mockjs
import Mock from 'mockjs'

// Mock函数
const { mock, Random} = Mock

// 设置延时
Mock.setup({
  timeout: 400
})

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
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