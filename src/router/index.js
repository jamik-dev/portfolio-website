import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: import('../layouts/DefaultLayout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
