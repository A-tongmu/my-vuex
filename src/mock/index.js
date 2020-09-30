// 引入mockjs
import Mock from 'mockjs'
import './modules/home'

// Mock函数
const { mock, Random} = Mock

// 设置延时
Mock.setup({
  timeout: 400
})