import { createRouter, createWebHistory } from 'vue-router'
import inloggningSida from '../views/inloggningSida.vue'
import HomeView from '../views/HomeView.vue'
import gillaSida from '../views/gillaSida.vue'
import profilSida from '../views/profilSida.vue'
import betalningSida from '../views/betalningSida.vue'
import addAnnons from '../views/addAnnons.vue'
import editProf from '../views/editProf.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: inloggningSida
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: gillaSida
    },
    {
      path: '/profile',
      name: 'profile',
      component: profilSida

    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: editProf

    },
    {
      path: '/checkout',
      name: 'checkout',
      component: betalningSida
    },
    {
      path: '/add',
      name: 'add',
      component: addAnnons
    }

  ]
})

export default router
