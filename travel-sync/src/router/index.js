import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hotels',
      name: 'hotels',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Hotels.vue')
    },
    {
      path: '/book-hotel',
      name: 'BookHotel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BookHotel.vue'),
      props: true
    },
    // Add this to your routes array
    {
      path: '/payment-gateway',
      name: 'PaymentGateway',
      component: () => import('../views/PaymentGateway.vue')
      // props: true
    },
    {
      path: '/QRcode',
      name: 'QRCode',
      component: () => import('../views/QRCode.vue')
      // props: true
    },
    {
      path: '/create-travel',
      name: 'create-travel',
      component: () => import('../views/CreateTravel.vue')
      // props: true
    },
    {
      path: '/travel',
      name: 'TravelSpaceForm',
      component: () => import('../views/TravelSpaceForm.vue')
      // props: true
    }
  ]
})

export default router
