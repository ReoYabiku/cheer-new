import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfirmView from '../views/ConfirmView.vue'
import CheerView from '../views/CheerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/confirm/:name',
    name: 'confirm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ConfirmView
  },
  {
    path: '/cheer/:name',
    name: 'cheer',
    component: CheerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
