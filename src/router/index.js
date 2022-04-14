import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import BooksIndex from "../views/BooksIndex.vue";
import BookCreate from "../views/BookCreate.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/allbooks",
    name: "allbooks",
    component: BooksIndex
  },
  {
    path: "/addbook",
    name: "addbook",
    component: BookCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
