import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: import('../layouts/DefaultLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: import('../components/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: import('../components/About.vue'),
      },
      {
        path: 'services',
        name: 'Services',
        component: import('../components/Services.vue'),
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: import('../components/Portfolio.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
