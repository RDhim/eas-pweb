import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/register.vue'

const routes = [
  { path: '/', component: Register },
  { path: '/check', component: Check },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
