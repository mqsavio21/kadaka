import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MenuPage from '../views/MenuPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 