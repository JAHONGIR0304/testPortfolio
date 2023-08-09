import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
import Bio from '@/pages/Bio.vue';
import Projects from '@/pages/Projects.vue';
import Contacts from '@/pages/Contacts.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'HomePage', component: HomePage
    },
    {
      path: '/bio', name: 'Bio', component: () => import('@/pages/Bio.vue')
    },
    {
      path: '/projects', name: 'Projects', component: () => import('@/pages/Projects.vue')
    },
    {
      path: '/cont', name: 'Contacts', component: () => import('@/pages/Contacts.vue')
    },
  ]
  })

export default router

