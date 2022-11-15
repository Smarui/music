import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MusicLogin from '../views/MusicLogin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'music-login',
    component: MusicLogin
  },


  {
    path: '/music-main-common',
    name: 'music-main-common',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MusicMainCommon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
