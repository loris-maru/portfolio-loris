import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infos from '../views/Information.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/informations',
    name: 'informations',
    component: Infos
  },
  {
    path: '/project/:slug',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    props: true
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
