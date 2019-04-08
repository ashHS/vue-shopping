import Vue from 'vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
=======
import Router from 'vue-router'
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d

import App from '../App.vue'
import Index from '../components/page/Index.vue'
import Center from '../components/page/Center.vue'
import Cart from '../components/page/Cart'
import Cate from '../components/page/Cate'
import Detail from '../components/page/Detail'

<<<<<<< HEAD
Vue.use(VueRouter)

export default new VueRouter({
=======
Vue.use(Router)

export default new Router({
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
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
<<<<<<< HEAD
			// 定义动态路由
=======
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
			path:'/detail/:id',
			component:Detail
		}
  ]
})
