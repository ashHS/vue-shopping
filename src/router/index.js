import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'
import Index from '../components/page/Index.vue'
import Center from '../components/page/Center.vue'
import Cart from '../components/page/Cart'
import Cate from '../components/page/Cate'
import Detail from '../components/page/Detail'

Vue.use(Router)

export default new Router({
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
			path:'/detail/:id',
			component:Detail
		}
  ]
})
