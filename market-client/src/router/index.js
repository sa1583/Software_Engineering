import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
<<<<<<< HEAD
import SellectBuynRefund from '@/components/SellectBuynRefund'
import CheckMileage from '@/components/CheckMileage'
import Signup from '@/components/Signup'
=======
import AdminPage from '@/components/AdminPage'
import Payment from '@/components/Payment'
import InputMemNum from '@/components/InputMemNum'
import Refund from '@/components/Refund'
import InputReceipt from '@/components/InputReceipt'

>>>>>>> d2e42f56c9b7c5a52ded9c779eaeee4f5023aef0

Vue.use(Router)

export default new Router({
  routes: [{
<<<<<<< HEAD
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/SellectBuynRefund',
      name: 'SellectBuynRefund',
      component: SellectBuynRefund
    },
    {
      path: '/CheckMileage',
      name: 'CheckMileage',
      component: CheckMileage
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
=======
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
>>>>>>> d2e42f56c9b7c5a52ded9c779eaeee4f5023aef0
