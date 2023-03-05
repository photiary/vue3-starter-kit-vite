// 참조링크: https://router.vuejs.org/guide/advanced/lazy-loading.html
const Home = () => import('@/views/Home.vue')

export default [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
