import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/rescue',
    name: 'Rescue',
    component: () => import('@/views/Rescue.vue')
  },
  {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/register',
  name: 'Register',
  component: () => import('@/views/Register.vue')
},
{
  path: '/coupon',
  name: 'Coupon',
  component: () => import('@/views/Coupon.vue')
},
{
  path: '/test',
  name: 'test',
  component: () => import('@/views/Test.vue')
},
{
  path: '/testlogin',
  name: 'testlogin',
  component: () => import('../views/Testlogin.vue')
},





]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
