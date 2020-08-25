import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../components/common/home.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
        meta: { title: '系统首页' }
      },
      {
        path: '/changePassword',
        component: () => import(/* webpackChunkName: "changePassword" */ '../views/ChangePassword.vue'),
        meta: { title: '修改密码' }
      },
      {
        path: '/books',
        component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
        meta: { title: '书籍管理' }
      },
      {
        path: '/popular',
        component: () => import(/* webpackChunkName: "popular" */ '../views/Popular.vue'),
        meta: { title: '期刊管理' }
      },
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/role',
        component: () => import(/* webpackChunkName: "role" */ '../views/Role.vue'),
        meta: { title: '角色管理' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
