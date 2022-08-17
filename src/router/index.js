import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
]

const router = new VueRouter({
  routes
})

export default router
