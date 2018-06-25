import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/home/index/index.vue'
import show from '@/views/home/index/index.vue'
import register from '@/views/user/register/index.vue'
import register1 from '@/views/user/register1/index.vue'
import login from '@/views/user/login/index.vue'
import vlogin from '@/views/user/vlogin/index.vue'
import vlogin1 from '@/views/user/vlogin1/index.vue'
import uindex from '@/views/user/index/index.vue'
import shopcar from '@/views/user/shopcar/index.vue'
import address from '@/views/user/address/index/index.vue'
import addressCreate from '@/views/user/address/create/index.vue'
import order from '@/views/user/order/index.vue'

Vue.use(Router)

export default new Router({
	base: __dirname,
	mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
			path: '/show',
			name: 'show',
			component: show
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/register1',
			name: 'register1',
			component: register1
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/vlogin',
			name: 'vlogin',
			component: vlogin
		},
		{
			path: '/vlogin1',
			name: 'vlogin1',
			component: vlogin1
		},
		{
			path: '/user',
			name: 'user',
			component: uindex
		},
		{
			path: '/user/shopcar',
			name: 'shopcar',
			component: shopcar
		},
		{
			path: '/user/address',
			name: 'address',
			component: address
		},
		{
			path: '/user/address/create',
			name: 'addressCreate',
			component: addressCreate
		},
		{
			path: '/user/order',
			name: 'order',
			component: order
		}
  ]
})
