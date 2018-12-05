import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SellectBuynRefund from '@/components/SellectBuynRefund'
import CheckMileage from '@/components/CheckMileage'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [{
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