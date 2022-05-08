import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../views/log.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'log',
    component: Log
  },
]

const router = new VueRouter({
  routes
})

export default router
