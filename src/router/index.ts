import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { LayoutAuth, LayoutDefault, LayoutChat, LayoutMedia, RouteWrapper } from '@/components/layouts/index'

import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login2.vue'
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '*',
  //   component: () => import('@/views/error/NotFound.vue'),
  // },
  {
    path: '/auth',
    // component: LayoutAuth,
    meta: {
      title: 'Login',
    },
    component: () => import('@/views/auth/Login.vue'),
    // redirect: '/auth/login',
    // children: [
    //   {
    //     path: 'login',
    //     name: 'login',
    //     meta: {
    //       title: 'Login',
    //     },
    //     component: () => import('@/views/auth/Login2.vue'),
    //   },
    // ],
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
