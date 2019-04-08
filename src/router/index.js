import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import Index from '../components/page/Index.vue'
import Center from '../components/page/Center.vue'
import Cart from '../components/page/Cart'
import Cate from '../components/page/Cate'
import Detail from '../components/page/Detail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
		{
		  path: '/index',
		  component: Index
		},
		{
		  path: '/center',
		  component: Center
		},
		{
		  path: '/cart',
		  component: Cart
		},
		{
		  path: '/cate',
		  component: Cate
		},
		{
			// 定义动态路由
			path:'/detail/:id',
			component:Detail
		}
  ]
})
