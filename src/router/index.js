import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import CartView from '../views/CartView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', component: HomeView
  },
  {
    path: '/menu', component: MenuView
  },
  {
    path: '/cart', component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
