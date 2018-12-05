import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AdminPage from '@/components/AdminPage'
import Payment from '@/components/Payment'
import InputMemNum from '@/components/InputMemNum'
import Refund from '@/components/Refund'
import InputReceipt from '@/components/InputReceipt'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Main   //Main
  },
  {
    path: '/AdminPage',
    name: 'home',
    component: AdminPage
  },
  {
    path: '/InputMemNum',
    name: 'home',
    component: InputMemNum
  },
  {
    path: '/Payment',
    name: 'home',
    component: Payment
  },
  {
    path: '/Refund',
    name: 'home',
    component: Refund
  },
  {
    path: '/InputReceipt',
    name: 'home',
    component: InputReceipt
  }]
})
