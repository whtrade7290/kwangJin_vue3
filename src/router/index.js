import { createRouter, createWebHistory } from 'vue-router'
import GreetingView from '@/views/info/GreetingView.vue'
import CompanyIntroView from '@/views/info/CompanyIntroView.vue'
import LocationView from '@/views/info/LocationView.vue'
import TechnologyView from '@/views/technology/TechnologyView.vue'
import FactoryIntroView from '@/views/factory/FactoryIntroView.vue'
import MachineView from '@/views/factory/MachineView.vue'
import HistoryView from '@/views/history/HistoryView.vue'
import HistoryPhotoView from '@/views/history/HistoryPhotoView.vue'
import ContactView from '@/views/contact/ContactView.vue'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/greeting',
      name: 'greeting',
      component: GreetingView
    },
    {
      path: '/intro',
      name: 'intro',
      component: CompanyIntroView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView
    },
    {
      path: '/factory',
      name: 'factory',
      component: FactoryIntroView
    },
    {
      path: '/machine',
      name: 'machine',
      component: MachineView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/history_photo',
      name: 'history_photo',
      component: HistoryPhotoView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
