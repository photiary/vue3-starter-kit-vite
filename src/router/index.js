import { createRouter, createWebHashHistory } from 'vue-router'
import homeRoute from '@/router/routes/homeRoute.js'

const routes = [{ path: '/', redirect: { name: 'home' } }, ...homeRoute]

// 참조링크: https://router.vuejs.org/guide/#javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
