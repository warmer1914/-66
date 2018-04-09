import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = () => import('moudle/index/index')
const ShopList = () => import('moudle/shopList/list')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'ShopList',
      component: ShopList
    },
  ]
})
