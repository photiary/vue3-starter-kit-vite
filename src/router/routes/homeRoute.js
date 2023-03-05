const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')

export default [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
