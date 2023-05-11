import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MyList from '@/views/MyList.vue';
import MyBooking from '@/views/booking/MyBooking.vue';
import MyQuotation from '@/views/quote/MyQuotation.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'MyList',
    component: MyList
  },
  {
    path: '/booking',
    name: 'MyBooking',
    component: MyBooking
  },
  {
    path: '/quote',
    name: 'MyQuotation',
    component: MyQuotation
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
